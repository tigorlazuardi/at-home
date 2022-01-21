import Image from 'next/image'
import * as React from 'react'
import Bio from './Bio'
import Experience from './Experience'

export interface CVItems {
	age: number
}

export interface CVProps extends CVItems, React.HTMLAttributes<HTMLDivElement> {}

export default function CV(prop: CVProps) {
	return (
		<div className={prop.className}>
			<header className="mb-4 divide-y-4">
				<h1 className="py-4 text-4xl font-bold sm-max:text-2xl">About Me</h1>
				<div></div>
			</header>
			<div className="flex rounded-xl shadow-lg md:py-6 md:px-3 md:border-2 md:border-solid dark:shadow-none sm-max:flex-wrap md:border-discord-200 dark:bg-discord-800">
				<div className="p-2 rounded-xl border-2 border-solid shadow-xl backdrop-blur-sm sm-max:border-none sm-max:p-4 sm-max:basis-full dark:border-discord-200 dark:sm:bg-discord-700">
					<Image
						className="rounded-xl"
						src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
						alt="profile picture"
						width={400}
						height={600}
					/>
				</div>
				<Bio age={prop.age} className="py-2 px-4 w-full grow sm-max:mb-4 sm-max:basis-full" />
			</div>
			<Experience className="pt-4" />
		</div>
	)
}
