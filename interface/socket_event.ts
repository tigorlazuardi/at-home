export enum SocketEvent {
	GetBackendHealth = 'GET_BACKEND_HEALTH',
}

/**
 * Parse passed prototype object to SocketEvent
 * It tries to get String representation by trying to call `toString` if the given object is not a string.
 *
 * @throws when object does not have `toString` method or the given string is not a registered socket event
 */
export const asSocketEvent = (val: any): SocketEvent => {
	const event: string = val?.toString()
	if (typeof event === 'string') {
		return parseSocketEvent(event)
	}
	throw new Error(`failed to compare ${val} to SocketEvent (string)`)
}

function parseSocketEvent(s: string): SocketEvent {
	for (const v in SocketEvent) {
		if (s === v) return s as SocketEvent
	}
	throw new Error(`unknown socket event: ${s}`)
}

export default SocketEvent
