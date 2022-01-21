import Image from 'next/image'
import * as React from 'react'

export default function CV(prop: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={prop.className}>
			<div className="flex shadow-lg md:py-6 md:px-3 md:rounded-xl md:border-2 md:border-solid dark:shadow-none sm-max:basis-full md:border-discord-200 dark:bg-discord-800">
				<div className="p-2 rounded-xl border-2 border-solid shadow-xl backdrop-blur-sm dark:border-discord-200 dark:bg-discord-700">
					<Image
						className="rounded-xl"
						src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
						alt="profile picture"
						width={400}
						height={600}
					/>
				</div>
			</div>
		</div>
	)
}
