import { ServerStatusChecker, ServerStatusResult } from './domain'

class Service implements ServerStatusChecker {
	async checkServerStatus(): Promise<ServerStatusResult> {
		return {
			mongodb: {
				healthy: true,
				meta: {
					test: 'this data is dummy',
				},
			},
		}
	}
}

export default Service
