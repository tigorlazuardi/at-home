import { ProjectDisplayCardItem } from '../components/cards/ProjectDisplayCards'

// TODO: Move this ProjectList item to some persistent database
const projectList: ProjectDisplayCardItem[] = [
	{
		projectName: 'ridit-rs',
		projectURL: 'https://github.com/tigorlazuardi/ridit-rs',
		description: 'Reddit image downloader written in Rust',
		tags: ['web', 'async', 'tokio', 'http'],
		language: 'rust',
	},
	{
		projectName: 'howezt-memoria',
		projectURL: 'https://github.com/tigorlazuardi/howezt-memoria',
		description: 'Discord bot to store or list images from Minio',
		tags: ['discord', 'minio', 'bot'],
		language: 'typescript',
	},
	{
		projectName: 'nvim',
		projectURL: 'https://github.com/tigorlazuardi/nvim',
		description: 'Neovim configuration written in Lua. Configured heavily to work as IDE',
		tags: ['neovim', 'ide'],
		language: 'lua',
	},
	{
		projectName: '@Home',
		projectURL: 'https://github.com/tigorlazuardi/at-home',
		description: 'This website :)',
		tags: ['next', 'react', 'web', 'redis'],
		language: 'typescript',
	},
	{
		projectName: 'datefmt',
		projectURL: 'https://github.com/tigorlazuardi/datefmt',
		description: 'A Golang library to format dates in human manner',
		tags: ['library', 'date'],
		language: 'go',
	},
	{
		projectName: 'floodgate',
		projectURL: 'https://github.com/tigorlazuardi/floodgate',
		description:
			'A Golang library to short circuit an http route when not all required dependencies for that particular route are up',
		tags: ['library', 'short-circuit', 'http'],
		language: 'go',
	},
]

export default projectList
