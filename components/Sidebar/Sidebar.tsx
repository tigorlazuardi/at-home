import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import entries from './Entries'

export interface SideBarProp {
	dark?: boolean
	icon_size?: number | string
	on_click?: () => void
}

const SideBar = ({ dark, icon_size = '1.35rem', on_click }: SideBarProp) => {
	return (
		<nav className="flex fixed top-0 left-0 flex-col m-0 w-16 h-screen text-white shadow-lg bg-white-800 sm-max:hidden dark:text-dark dark:bg-discord-800">
			{entries.map((v, i) => (
				<SideBarIcon
					key={i}
					text={v.tooltip_text}
					icon={v.icon(icon_size)}
					link_target={v.link_target}
					is_active={v.is_active}
				/>
			))}
			<div className={'flex flex-grow justify-center items-end pb-4'}>
				<SideBarIcon
					icon={dark ? <FaMoon size={icon_size} /> : <FaSun size={icon_size} />}
					text={`${dark ? 'Dark' : 'Light'} Theme`}
					on_click={on_click}
				/>
			</div>
		</nav>
	)
}

export interface SideBarIconProp {
	icon: React.ReactElement
	text: string
	link_target?: string
	is_active?: (route: string) => boolean
	on_click?: () => void
}

const SideBarIcon = ({ icon, text, link_target, is_active, on_click }: SideBarIconProp) => {
	const router = useRouter()
	const active = is_active?.(router.route) || false
	return (
		<div className="my-1">
			<div
				className={clsx({
					'sidebar-icons group': true,
					'bg-green-500 dark:bg-green-500': active,
					'text-white dark:text-white': active,
				})}
				onClick={() => {
					on_click?.()
					link_target && router.push(link_target)
				}}
			>
				{icon}
				<Tooltip text={text} />
			</div>
		</div>
	)
}

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span className={'sidebar-tooltip-scale-0 group-hover:scale-100'}>{text}</span>
)

export default SideBar
