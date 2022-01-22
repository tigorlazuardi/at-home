import entries from './Entries'
import { SideBarProp } from './Sidebar'
import { FaBars } from 'react-icons/fa'

export interface TopBarProp extends SideBarProp, React.HTMLAttributes<HTMLDivElement> {}

export default function TopBar({ dark, on_click, icon_size, ...props }: TopBarProp) {
	const ico = icon_size ?? 28
	return (
		<div {...props}>
			<div className="flex fixed top-0 left-0 flex-col pl-2 m-0 w-screen h-16 text-white shadow-lg sm:hidden bg-white-800 dark:text-dark dark:bg-discord-800">
				<FaBars className="text-white" size={ico} />
			</div>
		</div>
	)
}
