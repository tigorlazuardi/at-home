import ProjectDisplayCard, { ProjectDisplayCardItem } from '../../cards/ProjectDisplayCards'

export interface ProjectListProp {
	projectItems: ProjectDisplayCardItem[]
}

export default function ProjectList({ projectItems }: ProjectListProp) {
	return (
		<section>
			<header className="divide-y-4">
				<h1 className="py-4">Projects</h1>
				<p className="py-4">
					Following projects are the things I am working on or have done and I left it as open source.
				</p>
			</header>
			<div className="flex flex-wrap justify-between content-end">
				{projectItems.map((v, i) => (
					<ProjectDisplayCard
						language={v.language}
						projectURL={v.projectURL}
						projectName={v.projectName}
						tags={v.tags}
						description={v.description}
						key={i}
						className="flex-grow self-center sm-max:basis-full sm:basis-1/2 sm:px-4 sm:py-2"
					/>
				))}
			</div>
		</section>
	)
}
