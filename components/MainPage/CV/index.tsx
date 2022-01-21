import Image from 'next/image'
import * as React from 'react'
import Bio from './Bio'

export interface CVItems {
	age: number
}

export interface CVProps extends CVItems, React.HTMLAttributes<HTMLDivElement> {}

export default function CV(prop: CVProps) {
	return (
		<div className={prop.className}>
			<div className="flex shadow-lg md:py-6 md:px-3 md:rounded-xl md:border-2 md:border-solid dark:shadow-none sm-max:flex-wrap md:border-discord-200 dark:bg-discord-800">
				<div className="p-2 rounded-xl border-2 border-solid shadow-xl backdrop-blur-sm sm-max:py-4 sm-max:basis-full dark:border-discord-200 dark:bg-discord-700">
					<Image
						className="rounded-xl"
						src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
						alt="profile picture"
						width={400}
						height={600}
					/>
				</div>
				<Bio age={prop.age} className="py-2 px-4 w-full grow sm-max:basis-full" />
			</div>
		</div>
	)
}
