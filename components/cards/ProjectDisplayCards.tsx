import React, { HTMLAttributes } from 'react'

export interface ProjectDisplayCardItem {
	projectURL: string
	tags?: string[]
	projectName: string
	description: string
	language?: string
}

export interface ProjectDisplayCardProps extends ProjectDisplayCardItem, HTMLAttributes<HTMLDivElement> {}

export default function ProjectDisplayCard({
	projectURL,
	projectName,
	description,
	className,
	tags,
	language,
}: ProjectDisplayCardProps) {
	return (
		<div className={className}>
			<div className="overflow-hidden h-full rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 hover:cursor-pointer focus:shadow-xl focus:-translate-y-1 active:-translate-y-1 selection:shadow-xl min-h-8 sm:min-w-xs dark:shadow-discord-900 dark:bg-discord-700">
				<a href={projectURL} target="_blank" rel="noreferrer">
					<div className="py-4 px-6">
						<div className="flex justify-between items-center">
							<div className="text-xl font-bold sm-max:text-sm">{projectName}</div>
							{language && (
								<span className="py-1 px-3 mr-2 text-sm font-semibold text-gray-700 bg-blue-200 rounded-full dark:text-white dark:bg-yellow-600 sm-max:text-xs">
									{language}
								</span>
							)}
						</div>
						<div className="py-2">
							{tags?.map((v, i) => (
								<span
									key={i}
									className="py-1 px-3 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full transition-all dark:text-gray-300 dark:bg-gray-700 sm-max:text-xs"
								>
									{v}
								</span>
							))}
						</div>
						<p className="text-gray-600 transition-all dark:text-gray-400 sm-max:text-sm">{description}</p>
					</div>
				</a>
			</div>
		</div>
	)
}
