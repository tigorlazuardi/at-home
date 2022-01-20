import React, { HTMLAttributes } from 'react'

export interface ProjectDisplayCardProps extends HTMLAttributes<HTMLDivElement> {
	projectURL?: string
	tags?: string[]
	projectName?: string
	description?: string
}

export default function ProjectDisplayCard(props: ProjectDisplayCardProps) {
	return (
		<div className={props.className}>
			<div className="overflow-hidden max-w-md rounded shadow-lg transition-all focus:shadow-xl focus:-translate-y-1 hover:shadow-xl hover:-translate-y-2">
				<div className="py-4 px-6">
					<div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
					<p className="dark:text-gray-500 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
						perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						#photography
					</span>
					<span className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						#travel
					</span>
					<span className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						#winter
					</span>
				</div>
			</div>
		</div>
	)
}
