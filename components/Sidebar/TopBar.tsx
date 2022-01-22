import entries from './Entries'
import { SideBarProp } from './Sidebar'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export interface TopBarProp extends SideBarProp, React.HTMLAttributes<HTMLDivElement> {}

interface VerticalOffset {
	previous: number
	isScrollingDown: boolean
}

export default function TopBar({ dark, on_click, icon_size, ...props }: TopBarProp) {
	const router = useRouter()
	const active = entries.find((v) => v.is_active(router.route))
	const ico = icon_size ?? 24
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
	const topBarClassName =
		'flex fixed top-0 left-0 z-50 gap-6 items-center px-4 py-3 m-0 w-screen \
	dark:text-white sm:hidden bg-white-800 dark:bg-discord-700 transition-all \
	duration-300'

	return (
		<div {...props}>
			<div className="h-16"></div>
			<div
				className={clsx({
					[topBarClassName]: true,
					'-translate-y-16': isScrollingDown,
					'shadow-2xl': true,
				})}
			>
				<FaBars className="dark:text-white" size={ico} />
				<div className="text-2xl font-bold dark:text-white">{active?.tooltip_text || '@Home'}</div>
			</div>
		</div>
	)
}
