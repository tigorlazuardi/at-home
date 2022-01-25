import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ProjectDisplayCardItem } from '../components/cards/ProjectDisplayCards'
import CV from '../components/MainPage/CV'
import Introductory from '../components/MainPage/Introductory'
import ProjectList from '../components/MainPage/ProjectList'
import projectList from '../dummy/project_list'

interface PageProp {
	projectList: ProjectDisplayCardItem[]
	age: number
}

const birthDate = new Date('1994-06-08')

export const getStaticProps: GetStaticProps<PageProp> = async (_ctx) => {
	const now = new Date().valueOf()
	const diff = now - birthDate.valueOf()
	const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

	const data: PageProp = { projectList, age: age }
	return {
		props: data,
		revalidate: 30, // seconds
	}
}

export default function Index({ projectList, age }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return (
		<div className="container py-2 md:px-36 dark:text-white">
			<Introductory />
			<CV age={age} iconSize={24} />
			<ProjectList projectItems={projectList} />
		</div>
	)
}
