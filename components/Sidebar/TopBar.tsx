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
			const current = window.scrollY
			if (current > 20) {
				setScrollState({
					previous: current,
					isScrollingDown: current > scrollState.previous,
				})
			} else {
				setScrollState({
					previous: current,
					isScrollingDown: false,
				})
			}
		}
		window.addEventListener('scroll', cb)
		return () => window.removeEventListener('scroll', cb)
	}, [scrollState])
	const { isScrollingDown } = scrollState

	return (
		<div {...props}>
			<div className="h-16"></div>
			<div
				className={clsx({
					['flex bg-white shadow-2xl border-b dark:border-discord-900 fixed top-0 left-0 z-50 gap-6 items-center px-4 py-3 m-0 w-full dark:text-white sm:hidden dark:bg-discord-700 transition-all duration-300']:
						true,
					'-translate-y-16': isScrollingDown,
				})}
			>
				<FaBars className="dark:text-white" size={icon_size} />
				<div className="text-2xl font-bold dark:text-white grow">{active?.tooltip_text || '@Home'}</div>
				<DarkModeIcon
					className="mr-3 text-green-800 transition-all dark:text-green-500 hover:p-1 hover:text-white hover:bg-green-600 hover:rounded-lg hover:scale-150 dark:hover:text-white dark:bg-discord-700 dark:hover:bg-green-600"
					dark={dark}
					icon_size={icon_size}
					on_click={on_click}
				/>
			</div>
		</div>
	)
}
