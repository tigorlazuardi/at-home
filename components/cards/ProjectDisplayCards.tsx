import React, { HTMLAttributes } from 'react'

export interface ProjectDisplayCardProps extends HTMLAttributes<HTMLDivElement> {
	projectURL: string
	tags?: string[]
	projectName: string
	description: string
}

export default function ProjectDisplayCard({
	projectURL,
	projectName,
	description,
	className,
	tags,
}: ProjectDisplayCardProps) {
	return (
		<div className={className}>
			<div
				className="overflow-hidden max-w-md rounded shadow-lg transition-all focus:shadow-xl focus:-translate-y-1 hover:shadow-xl hover:-translate-y-2 hover:cursor-pointer"
				onClick={() => window.open(projectURL, '_blank')}
			>
				<div className="py-4 px-6">
					<div className="mb-2 text-xl font-bold">{projectName}</div>
					<p className="dark:text-gray-500 text-gray-600">{description}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{tags?.map((v, i) => (
						<span
							key={i}
							className="inline-block py-1 px-3 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
						>
							{v}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
