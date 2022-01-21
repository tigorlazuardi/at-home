export default function Experience(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<p className="my-2">I work as Backend Engineer at PT Bareksa Portal Investasi.</p>
			<p className="my-2">
				My job is to create HTTP Services and sometimes a message Consumer and Producer services for event based
				workflow.
			</p>
			<p className="my-2">
				When not working on those service, usually my task shifted to system improvements like making a shared
				library to reduce workload and make a standard for other developers to follow. Other times also make an
				integration system not just between apps, but also for integration testing using Postman, like HTTP
				interface for Redis so it can be called from Postman.
			</p>
		</div>
	)
}
