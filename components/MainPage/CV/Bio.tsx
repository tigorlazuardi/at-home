import React from 'react'

export interface BioProps extends React.HTMLAttributes<HTMLDivElement> {
	age: number
}

interface Data {
	key: string
	value: string | number | string[]
}

export default function Bio(prop: BioProps) {
	const data: Data[] = [
		{ key: 'Name', value: 'Tigor Hutasuhut' },
		{ key: 'Email', value: 'tigor.hutasuhut@gmail.com' },
		{ key: 'Age', value: prop.age },
		{
			key: 'Education',
			value: ['University of Indonesia', '2012 - 2018', 'Hacktiv8', '2019 July - December'],
		},
		{ key: 'Residence', value: 'Indonesia' },
		{ key: 'Language', value: ['Go', 'Rust', 'Typescript', 'Lua', 'Dart'] },
		{
			key: 'Stack',
			value: ['Kafka', 'Elastic', 'MongoDB', 'Postgres', 'Vault', 'REST Api', 'GRPC', 'NextJS', 'React'],
		},
		{ key: 'Job', value: 'Backend Engineer' },
		{ key: 'Current Working Location', value: 'PT Bareksa Portal Investasi' },
		{ key: 'Work Experience', value: ['Bareksa', '2019'] },
	]

	const renderValue = (value: string | number | string[]) => {
		if (Array.isArray(value)) {
			return (
				<div className="flex flex-wrap pt-2 sm-max:pt-1">
					{value.map((v) => (
						<div key={v} className="pl-1 basis-1/2 sm-max:text-sm">
							{v}
						</div>
					))}
				</div>
			)
		} else {
			return <div className="pt-2 pl-1 sm-max:pt-1 sm-max:text-sm">{value}</div>
		}
	}

	return (
		<div className={prop.className}>
			<div className="flex flex-wrap gap-x-4 gap-y-8 justify-around">
				{data.map((k) => (
					<div
						key={k.key}
						className="divide-y-4 divide-black divide-double dark:divide-white basis-1/4 grow sm-max:basis-1/2"
					>
						<div className="pb-2 pl-1 font-bold sm-max:pb-1">{k.key}</div>
						{renderValue(k.value)}
					</div>
				))}
			</div>
		</div>
	)
}
