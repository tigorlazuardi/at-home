import CV from '../components/MainPage/CV'
import Introductory from '../components/MainPage/Introductory'
import ProjectList from '../components/MainPage/ProjectList'
import projectList from '../dummy/project_list'

export default function Index(): JSX.Element {
	return (
		<div className="container py-2 md:px-36 dark:text-white">
			<Introductory />
			<CV />
			<ProjectList projectItems={projectList} />
		</div>
	)
}
