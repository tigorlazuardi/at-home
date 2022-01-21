import React from 'react'

export interface BioProps extends React.HTMLAttributes<HTMLDivElement> {
	age: number
}

interface Data {
	key: string
	value: string | number
}

export default function Bio(prop: BioProps) {
	const data: Data[] = [
		{ key: 'Name', value: 'Tigor Hutasuhut' },
		{ key: 'Email', value: 'tigor.hutasuhut@gmail.com' },
		{ key: 'Age', value: prop.age },
		{ key: 'Working Location', value: 'PT Bareksa Portal Investasi' },
		{ key: 'Job', value: 'Backend Engineer' },
		{ key: 'Residence', value: 'Indonesia' },
		{ key: 'Language', value: 'Go, Rust, Typescript, Lua, Dart' },
		{ key: 'Stack', value: 'Kafka, Elastic, MongoDB, Postgres, Vault, REST, GRPC, Next, React' },
	]

	return (
		<div className={prop.className}>
			<div className="flex flex-wrap gap-x-4 gap-y-8 justify-around">
				{data.map((k) => (
					<div
						key={k.key}
						className="divide-y-4 divide-black divide-double dark:divide-white basis-1/4 grow sm-max:basis-1/2"
					>
						<div className="pb-2 pl-1 font-bold">{k.key}</div>
						<div className="pt-2 pl-1">{k.value}</div>
					</div>
				))}
			</div>
		</div>
	)
}
