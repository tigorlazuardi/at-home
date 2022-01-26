import { WebSocketServer, ServerOptions, WebSocket, RawData } from 'ws'
import { Json } from '../interface/common'
import SocketEvent from '../interface/socket_event'

export interface SocketResponse<T extends Json = Json> {
	event: SocketEvent
	message: T
}

export interface SocketRequest<T extends Json = Json> {
	request: SocketEvent
	message: T
}

type Handler<T extends Json = Json> = (ws: WebSocket, message: T) => void

type EventHandler = Partial<Record<SocketEvent, Handler[]>>

export class Socket {
	private wss: WebSocketServer
	private wsRegistrar: Set<WebSocket> = new Set()
	private static defaultErrorHandling(err?: Error) {
		err && console.error(err)
	}
	private handlers: EventHandler = {}
	constructor(opts?: ServerOptions) {
		this.wss = new WebSocketServer(opts)
		this.intialize()
	}

	private intialize() {
		this.wss.on('connection', (ws) => {
			ws.on('close', () => this.wsRegistrar.delete(ws))
			ws.on('message', this.createMessageHandler(ws))
			ws.on('ping', () => ws.send('pong'))
			this.wsRegistrar.add(ws)
		})
	}

	/**
	 * send message to connected clients.
	 */
	sendMessage<T extends Json = Json>(event: SocketEvent, payload: T, cb?: (err?: Error) => void) {
		const message: SocketResponse = {
			event,
			message: payload,
		}
		this.wsRegistrar.forEach((ws) => ws.send(message, cb ?? Socket.defaultErrorHandling))
	}

	private createMessageHandler(ws: WebSocket) {
		return (data: RawData, isBinary: boolean) => {
			this.withRecovery(ws, () => {
				if (isBinary) {
					ws.send('server does not support binary data')
					return
				}
				const payload: { [key: string]: Json } = JSON.parse(data.toString())
			})
		}
	}

	private withRecovery(ws: WebSocket, cb: () => void) {
		try {
			cb()
		} catch (e) {
			if (e instanceof Error) {
				ws.send(JSON.stringify({ status: 'error', error: e.message }))
			} else {
				ws.send(JSON.stringify({ status: 'error', error: e }))
			}
		}
	}
}
