'use client'
import Image from 'next/image'

import Link from '@components/buttons/link'

export default function ProjectCard({ project }) {
	const {
		title,
		description,
		images,
		links } = project

	return(
		<div className="flex flex-col bg-primary rounded-lg relative">
			<div className="w-[95vw] max-w-400 md:min-w-450 md:max-w-450 xl:min-w-500 xl:max-w-500 h-180 md:h-230 xl:h-300 flex overflow-hidden">
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

			<div className="flex flex-1 flex-col gap-14 md:gap-16 xl:gap-20 px-16 lg:px-24 py-12 md:py-16 xl:py-20">
				<div>
					<h3>{ title }</h3>
					<hr className="w-70 h-2 mb-6 rounded-[1px]"/>
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
