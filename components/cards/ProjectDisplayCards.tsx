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
			<div
				className="overflow-hidden min-w-xs shadow-lg transition-all focus:shadow-xl focus:-translate-y-1 hover:shadow-xl hover:-translate-y-2 hover:cursor-pointer sm:h-40"
				onClick={() => window.open(projectURL, '_blank')}
			>
				<div className="py-4 px-6">
					<div className="flex justify-between">
						<div className="text-xl font-bold">{projectName}</div>
						{language && (
							<span className="py-1 px-3 mr-2 text-sm font-semibold text-gray-700 bg-blue-200 rounded-full">
								{language}
							</span>
						)}
					</div>
					<div className="py-2">
						{tags?.map((v, i) => (
							<span
								key={i}
								className="py-1 px-3 mr-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full"
							>
								{v}
							</span>
						))}
					</div>
					<p className="dark:text-gray-500 text-gray-600">{description}</p>
				</div>
			</div>
		</div>
	)
}
