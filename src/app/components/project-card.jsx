'use client'
import Image from 'next/image'

import Link from './link'

export default function ProjectCard({ project }) {
	const {
		title,
		description,
		images,
		links } = project

	return(
		<div className="min-w-300 md:min-w-500 flex flex-col bg-primary rounded-lg shadow">
			<div className="max-md:h-250 h-300 flex overflow-hidden">
				{ images.map((image, index) => (
					<Image
						key={ index }
						src={ image }
						alt={ title }
						width={ 600 }
						height={ 600 }
						loading="eager"
						className="min-w-full object-cover rounded-t-lg" />
				)) }
			</div>

			<div className="flex flex-1 flex-col gap-20 px-24 py-20">
				<div>
					<h3>{ title }</h3>
					<hr className="w-80 h-2 mb-6 rounded-[1px]"/>
					<p>{ description }</p>
				</div>

				<div className="flex flex-col mt-auto">
					{ Object.entries(links).map(([name, url], index) => (
						<Link
							key={ index }
							url={ url }
							name={ name } />
					)) }
				</div>
			</div>
		</div>
	)
}
