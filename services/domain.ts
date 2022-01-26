/**
 * @module domain handles exposed server logic
 */

import { Json } from '../interface/common'

export interface ServerStatusChecker {
	checkServerStatus: () => Promise<ServerStatusResult>
}

export interface ServerStatusResult {
	[name: string]: ServerStatus
}

export interface ServerStatus {
	healthy: boolean
	error?: string
	meta?: { [key: string]: Json }
}

export interface CodeGetter {
	// getCode handles HTTP Response to send to client
	getCode: () => number
}
