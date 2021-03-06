import { ReactElement } from 'react'
import { FaHome, FaServer } from 'react-icons/fa'

export interface EntryItem {
	icon: (size?: number | string) => ReactElement
	tooltip_text: string
	link_target?: string
	is_active: (route: string) => boolean
}

const entries: EntryItem[] = [
	{
		icon: (size) => <FaHome size={size} />,
		tooltip_text: 'Home',
		link_target: '/',
		is_active: (route: string) => route === '/',
	},
	{
		icon: (size) => <FaServer size={size} />,
		tooltip_text: 'Server Status',
		link_target: '/status',
		is_active: (route: string) => route === '/status',
	},
]

export default entries
