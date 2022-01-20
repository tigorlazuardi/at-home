import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ProjectDisplayCardItem } from '../components/cards/ProjectDisplayCards'
import CV from '../components/MainPage/CV'
import Introductory from '../components/MainPage/Introductory'
import ProjectList from '../components/MainPage/ProjectList'
import projectList from '../dummy/project_list'

interface PageProp {
	projectList: ProjectDisplayCardItem[]
}

export const getStaticProps: GetStaticProps<PageProp> = async (_ctx) => {
	const data: PageProp = { projectList }
	return {
		props: data,
		revalidate: 30, // seconds
	}
}

export default function Index({ projectList }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return (
		<div className="container py-2 md:px-36 dark:text-white">
			<Introductory />
			<CV />
			<ProjectList projectItems={projectList} />
		</div>
	)
}
