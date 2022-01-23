import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface TooltipProp {
	text: string
}

const Tooltip = ({ text }: TooltipProp) => (
	<span
		className={
			'min-w-max bg-discord-900 2xl:text-lg dark:bg-discord-700 absolute z-50 w-auto p-2 m-2 text-xs font-bold text-white transition-all duration-100 origin-bottom scale-0 rounded-md shadow-md group-hover:scale-100 -translate-x-6'
		}
	>
		{text}
	</span>
)

interface ProfileProp extends HTMLAttributes<HTMLDivElement> {
	iconSize?: number | string
}

export default function Profile({ iconSize = '2rem', ...props }: ProfileProp) {
	return (
		<div {...props}>
			<div className="flex flex-col p-2 rounded-xl border-2 border-solid sm:shadow-xl sm-max:border-none sm-max:p-4 sm-max:basis-full dark:border-discord-200 dark:sm:bg-discord-700">
				<Image
					className="rounded-xl"
					src="https://tigor.web.id/bucket/profile-picture-web-home.jpg"
					alt="profile picture"
					width={400}
					height={600}
				/>
				<div className="mt-3 divide-y-8 divide-double">
					<div></div>
					<div></div>
				</div>
				<div className="flex gap-x-3 justify-center items-center mt-3">
					<div className="group">
						<a target="_blank" rel="noreferrer" href="https://github.com/tigorlazuardi">
							<FaGithub className="transition-all hover:text-yellow-500" size={iconSize} />
							<Tooltip text="Github" />
						</a>
					</div>
					<div className="group">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/tigor-hutasuhut-00346463/"
						>
							<FaLinkedin className="transition-all hover:text-yellow-500" size={iconSize} />
							<Tooltip text="LinkedIn" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
