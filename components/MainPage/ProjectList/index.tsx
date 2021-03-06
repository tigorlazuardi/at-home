import ProjectDisplayCard, { ProjectDisplayCardItem } from '../../cards/ProjectDisplayCards'

export interface ProjectListProp {
	projectItems: ProjectDisplayCardItem[]
}

export default function ProjectList({ projectItems }: ProjectListProp) {
	return (
		<section>
			<header className="divide-y-4">
				<h1 className="py-4 text-4xl font-bold sm-max:text-2xl">Projects</h1>
				<p className="py-4 text-justify sm-max:px-1">
					Following projects are the things I am working on or have done and left it as open source.
				</p>
			</header>
			<div className="flex flex-wrap gap-x-5 justify-between content-end items-stretch">
				{projectItems.map((v, i) => (
					<ProjectDisplayCard
						language={v.language}
						projectURL={v.projectURL}
						projectName={v.projectName}
						tags={v.tags}
						description={v.description}
						key={i}
						className="gap-x-4 sm:py-2 grow sm-max:py-2 sm-max:basis-full sm:basis-1/3"
					/>
				))}
			</div>
		</section>
	)
}
