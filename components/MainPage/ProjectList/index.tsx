import ProjectDisplayCard from '../../cards/ProjectDisplayCards'

export default function ProjectList() {
	return (
		<section>
			<header className="divide-y-4">
				<h1 className="py-4">Projects</h1>
				<p className="py-4">Following projects are the things I am working on or have done.</p>
			</header>
			<div className="flex flex-wrap">
				{[0, 1, 2, 3, 4, 5].map((v) => (
					<ProjectDisplayCard key={v} className="basis-2/4" />
				))}
			</div>
		</section>
	)
}
