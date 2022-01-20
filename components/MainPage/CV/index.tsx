import Image from 'next/image'
import * as React from 'react'

export default function CV(prop: React.HTMLAttributes<HTMLDivElement>) {
	const className = prop.className ? prop.className + ' ' : ''
	return (
		<div className={className}>
			<Image
				src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
				alt="profile picture"
				width={400}
				height={600}
			/>
		</div>
	)
}
