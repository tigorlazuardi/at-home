export default function Experience(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section {...props}>
			<p className="my-2">I work as Backend Engineer at PT Bareksa Portal Investasi.</p>
			<p className="my-2">
				My job is to create HTTP Services and message Consumer and Producer services for event based workflow.
				Also make queries in the background (cron) jobs to satisfy business requirements.
			</p>
			<p className="my-2">
				When not working on those service, usually my task shifted to system improvements like making a shared
				library to reduce workload and make a standard for other developers to follow. Other times also make an
				integration system not just between apps, but also for integration testing using Postman, like HTTP
				interface for Redis so it can be called from Postman.
			</p>
			<p className="my-2">
				I also make toolings for centralized ci-cd, like creating ci-cd workflow to auto validate and generate
				GRPC server/client on git push.
			</p>
			<p className="my-2">
				Other than coding, I also explore the stacks that are currently in use and make presentation how to
				effectively use said stack. I also try to improve the toolkits that are already available, like creating
				ingests to consume and logs from Kubernetes pods for queries (especially if something unwanted happened
				in production) and metrics.
			</p>
		</section>
	)
}
