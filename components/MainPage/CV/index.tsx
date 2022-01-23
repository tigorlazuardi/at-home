import * as React from 'react'
import Bio from './Bio'
import Experience from './Experience'
import Profile from './Profile'

export interface CVItems {
	age: number
	iconSize?: string | number
}

export interface CVProps extends CVItems, React.HTMLAttributes<HTMLDivElement> {}

export default function CV(prop: CVProps) {
	return (
		<div className={prop.className}>
			<header className="mb-4 divide-y-4">
				<h1 className="py-4 text-4xl font-bold sm-max:text-2xl">About Me</h1>
				<div></div>
			</header>
			<div className="flex items-center rounded-xl shadow-lg md:py-6 md:px-3 md:border-2 md:border-solid dark:shadow-none sm-max:flex-wrap md:border-discord-200 dark:bg-discord-800">
				<Profile iconSize={prop.iconSize} />
				<Bio age={prop.age} className="py-2 px-4 w-full grow md-max:mb-4 md-max:basis-full" />
			</div>
			<Experience className="pt-4" />
		</div>
	)
}
