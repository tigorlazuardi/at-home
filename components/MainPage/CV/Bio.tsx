import clsx from 'clsx'
import React from 'react'

export interface BioProps extends React.HTMLAttributes<HTMLDivElement> {
	age: number
}

type Value = string | number | string[]

interface Data {
	key: string
	value: Value
	pair?: boolean
}

export default function Bio(prop: BioProps) {
	const data: Data[] = [
		{ key: 'Name', value: 'Tigor Hutasuhut' },
		{ key: 'Email', value: 'tigor.hutasuhut@gmail.com' },
		{ key: 'Age', value: prop.age },
		{
			key: 'Education',
			value: ['University of Indonesia', '2012 - 2018', 'Hacktiv8', '2019 July - December'],
			pair: true,
		},
		{ key: 'Residence', value: 'Indonesia' },
		{ key: 'Language', value: ['Go', 'Rust', 'Typescript', 'Lua', 'Dart'] },
		{
			key: 'Stack',
			value: [
				'Kafka',
				'Elastic',
				'MongoDB',
				'Postgres',
				'Vault',
				'REST Api',
				'GRPC',
				'NextJS',
				'React',
				'Linux',
				'Docker',
			],
		},
		{ key: 'Job', value: 'Backend Engineer' },
		{ key: 'Working Location', value: 'PT Bareksa Portal Investasi' },
		{ key: 'Work Experience', value: ['Bareksa', '2019 December to Now'], pair: true },
	]

	const renderValue = (value: Value, pair = false) => {
		if (Array.isArray(value)) {
			return (
				<div className="flex flex-wrap pt-2 sm-max:pt-1">
					{value.map((v) => (
						<div
							key={v}
							className={clsx({
								['pl-1 basis-1/2 sm-max:text-sm']: true,
								['dark:even:text-yellow-500 even:font-bold']: pair,
							})}
						>
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
						className="divide-y-4 divide-black divide-double dark:divide-white grow basis-1/3 lg-max:basis-full xl:basis-1/4"
					>
						<div className="pb-2 pl-1 font-bold md-max:pb-1">{k.key}</div>
						{renderValue(k.value, k.pair)}
					</div>
				))}
			</div>
		</div>
	)
}
