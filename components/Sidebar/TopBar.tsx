import entries from './Entries'
import { SideBarProp } from './Sidebar'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import clsx from 'clsx'

export interface TopBarProp extends SideBarProp, React.HTMLAttributes<HTMLDivElement> {}

interface VerticalOffset {
	previous: number
	isScrollingDown: boolean
}

interface DarkIconProps {
	dark?: boolean
	icon_size: string | number
	on_click?: () => void
	className?: string
}

const DarkModeIcon = ({ dark = false, icon_size, on_click, className }: DarkIconProps) =>
	dark ? (
		<FaMoon className={className} size={icon_size} onClick={on_click} />
	) : (
		<FaSun className={className} onClick={on_click} size={icon_size} />
	)

export default function TopBar({ dark, on_click, icon_size = '1.35rem', ...props }: TopBarProp) {
	const router = useRouter()
	const active = entries.find((v) => v.is_active(router.route))
	const [scrollState, setScrollState] = useState<VerticalOffset>({
		previous: 0,
		isScrollingDown: false,
	})
	useEffect(() => {
		const cb = (_e: Event) => {
			const current = window.scrollY,
				previous = current,
				isScrollingDown = current > 20 ? current > scrollState.previous : false
			setScrollState({ previous, isScrollingDown })
		}
		window.addEventListener('scroll', cb)
		return () => window.removeEventListener('scroll', cb)
		// No need for exhaustive dependency. We only want the useEffect and clean up run only once
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const { isScrollingDown } = scrollState

	return (
		<div {...props}>
			<div className="h-16"></div>
			<div
				className={clsx({
					['flex bg-white shadow-2xl border-b dark:border-discord-900 fixed top-0 left-0 z-50 gap-3 items-center px-4 py-2 m-0 w-full dark:text-white sm:hidden dark:bg-discord-700 transition-all duration-300']:
						true,
					'-translate-y-16': isScrollingDown,
				})}
			>
				<div className="p-2.5 rounded-full transition-all duration-150 ease-liner dark:hover:bg-discord-800 hover:bg-discord-300">
					<FaBars className="dark:text-white" size={icon_size} />
				</div>
				<div className="text-2xl font-bold dark:text-white grow">{active?.tooltip_text || '@Home'}</div>
				<div className="text-green-800 rounded-2xl transition-all duration-100 ease-linear dark:text-green-500 hover:text-white hover:bg-green-600 hover:rounded-lg dark:bg-discord-700 dark:hover:bg-green-600 dark:hover:text-white">
					<DarkModeIcon className="m-2.5" dark={dark} icon_size={icon_size} on_click={on_click} />
				</div>
			</div>
		</div>
	)
}
