import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../seo.config'
import clsx from 'clsx'
import * as React from 'react'

import SideBar from '../components/Sidebar/Sidebar'
import TopBar from '../components/Sidebar/TopBar'

function MyApp({ Component, pageProps }: AppProps) {
	const [dark, setDark] = React.useState(true)
	React.useEffect(() => {
		const falsey = window.localStorage.getItem('dark_mode') === 'false'
		setDark(!falsey)
		!falsey && window.localStorage.setItem('dark_mode', 'true')
	}, [dark])
	return (
		<>
			<DefaultSeo {...SEO} />
			<div
				className={clsx({
					['min-h-screen']: true,
					dark: dark,
					['bg-discord-900']: dark,
					['dark:text-white']: true,
					['transition-all']: true,
				})}
			>
				<SideBar
					dark={dark}
					on_click={() => {
						const next = !dark
						setDark(next)
						next
							? window.localStorage.setItem('dark_mode', 'true')
							: window.localStorage.setItem('dark_mode', 'false')
					}}
				/>
				<TopBar />
				<div className="sm:pl-16">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}

export default MyApp
