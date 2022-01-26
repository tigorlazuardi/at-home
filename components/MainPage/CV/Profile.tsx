import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span className="absolute top-full z-50 p-2 m-2 w-auto min-w-max text-xs font-bold text-white rounded-md shadow-md transition-all duration-100 origin-bottom scale-0 2xl:text-lg group-hover:scale-100 min-h-max bg-discord-900 dark:bg-discord-700">
		{text}
	</span>
)

interface SiteListProp extends HTMLAttributes<HTMLDivElement> {
	iconSize?: number | string
}

const SiteList = ({ iconSize = '1.8rem', ...props }: SiteListProp) => {
	return (
		<div {...props}>
			<div className="flex gap-x-3 justify-center items-center mt-3">
				<div className="relative group">
					<a
						target="_blank"
						rel="noreferrer"
						className="flex flex-col items-center"
						href="https://github.com/tigorlazuardi"
					>
						<FaGithub className="transition-all hover:text-yellow-500" size={iconSize} />
						<Tooltip text="Github" />
					</a>
				</div>
				<div className="relative group">
					<a
						target="_blank"
						rel="noreferrer"
						className="flex flex-col items-center"
						href="https://www.linkedin.com/in/tigor-hutasuhut-00346463/"
					>
						<FaLinkedin className="transition-all hover:text-yellow-500" size={iconSize} />
						<Tooltip text="LinkedIn" />
					</a>
				</div>
			</div>
		</div>
	)
}

interface ProfileProp extends HTMLAttributes<HTMLDivElement> {
	iconSize?: number | string
}

export default function Profile({ iconSize, ...props }: ProfileProp) {
	return (
		<div {...props}>
			<div className="flex flex-col justify-center p-2 rounded-xl border-2 border-solid sm:shadow-xl sm-max:border-none sm-max:p-4 dark:border-discord-200 dark:sm:bg-discord-700">
				<Image
					className="w-auto max-w-full max-h-full rounded-xl basis-full sm-max:object-cover"
					src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
					alt="profile picture"
					width={400}
					height={600}
				/>
				<div className="mt-3 w-full h-1 divide-y-8 divide-double basis-full">
					<div />
					<div />
				</div>
				<SiteList className="basis-full" iconSize={iconSize} />
				<span className="mt-3 italic text-center basis-full">When life gives you lemon, make lemonade!</span>
			</div>
		</div>
	)
}
