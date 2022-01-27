import { WebSocketServer, ServerOptions, WebSocket, RawData } from 'ws'
import { Json, JsonObject, JSONSerializer, JsonTopStructure } from '../interface/common'
import SocketEvent, { asSocketEvent } from '../interface/socket_event'

export interface SocketMessage<T extends Json = Json> {
	event: SocketEvent
	message: T
}

type Handler = (ws: WebSocket, message: JsonObject) => void

type EventHandler = Partial<Record<SocketEvent, Set<Handler>>>

export class Socket {
	private wss: WebSocketServer
	private wsRegistrar: Set<WebSocket> = new Set()
	private static defaultErrorHandling(err?: Error) {
		err && console.error(err)
	}
	private handlers: EventHandler = {}
	constructor(opts?: ServerOptions) {
		this.wss = new WebSocketServer(opts)
		this.initialize()
	}

	private initialize() {
		this.wss.on('connection', (ws) => {
			console.log(`new connection from ${ws.url}`) // eslint-disable-line no-console
			ws.on('close', () => {
				console.log(`connection from ${ws.url} has been closed`) // eslint-disable-line no-console
				this.wsRegistrar.delete(ws)
			})
			ws.on('message', this.createMessageHandler(ws))
			ws.on('ping', () => ws.send('pong'))
			this.wsRegistrar.add(ws)
		})
	}

	/**
	 * Register message handler to an event, grouped by the SocketEvent.
	 * All the handler in the group will be run against the client when the client socket asks for the group.
	 *
	 * Filtering must be manually and run in the given callback handler, but remember to clean up any dangling references
	 * when client is disconnected so the memory will not leak
	 *
	 * callback that has same pointer will not be duplicated in the same SocketEvent
	 */
	addMessageHandler(event: SocketEvent, cb: Handler) {
		if (this.handlers[event]) {
			this.handlers[event]!.add(cb)
			return
		}
		this.handlers[event] = new Set([cb])
	}

	/**
	 * removes callback from the handler if it exist in the SocketEvent. Does nothing if it does not exist.
	 *
	 * Note: comparison is done by comparing the callback pointer address!
	 */
	removeMessageHandler(event: SocketEvent, cb: Handler) {
		if (this.handlers[event]) {
			this.handlers[event]!.delete(cb)
		}
	}

	/**
	 * send message to connected clients.
	 */
	sendMessage<T extends Json = Json>(event: SocketEvent, payload: T, cb?: (err?: Error) => void) {
		const message: SocketMessage = {
			event,
			message: payload,
		}
		this.wsRegistrar.forEach((ws) =>
			this.withRecovery(ws, () => ws.send(message, cb ?? Socket.defaultErrorHandling)),
		)
	}

	private createMessageHandler(ws: WebSocket) {
		return (data: RawData, isBinary: boolean) => {
			this.withRecovery(ws, () => {
				if (isBinary) {
					ws.send('server does not support binary data')
					return
				}
				const payload: JsonTopStructure = JSON.parse(data.toString())
				const { event, message } = this.validate(payload)
				const handlerGroup = this.handlers[event]
				if (!handlerGroup || !handlerGroup.size) {
					throw new Error(`server does not support ${event} event`)
				}
				handlerGroup.forEach((handler) => this.withRecovery(ws, () => handler(ws, message)))
			})
		}
	}

	private withRecovery(ws: WebSocket, cb: () => void) {
		try {
			cb()
		} catch (e) {
			if (ws.readyState === ws.CLOSING || ws.readyState === ws.CLOSED) {
				if (!!e) {
					console.error((e as any).message || e)
				}
				return
			}
			if (e instanceof Error) {
				ws.send(JSON.stringify({ status: 'error', error: e.message }))
			} else {
				ws.send(JSON.stringify({ status: 'error', error: e }))
			}
		}
	}

	private validate(payload: JsonTopStructure): SocketMessage<JsonObject> {
		if (Array.isArray(payload)) throw new Error('expected socket message to be an object but get an array instead')
		const message = payload.message
		if (Array.isArray(message) || message === null || typeof message !== 'object')
			throw new Error(`exected message.message to be an object but got ${typeof message}`)
		const event = asSocketEvent(payload.request)
		return { event, message: message as JsonObject }
	}
}

/** socket instance */
const socket = new Socket()

export default socket
