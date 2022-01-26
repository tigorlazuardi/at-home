export enum SocketEvent {
	GetBackendHealth = 'GET_BACKEND_HEALTH',
}

export const parseSocketEvent = (val: any) => {
	const event: string = val?.toString()
}

export default SocketEvent
