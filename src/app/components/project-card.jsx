import Image from 'next/image'

import Button from './button'

export default function ProjectCard({ project }) {
	const {
		title,
		description,
		images,
		links } = project

	return(
		<div className="min-w-500 flex flex-col bg-primary rounded-lg">
			<div className="h-300 flex overflow-hidden">
				{ images.map((image, index) => (
					<Image
						key={ index }
						src={ image }
						alt={ title }
						width={ 200 }
						height={ 200 }
						className="min-w-full object-cover rounded-t-lg" />
				)) }
			</div>

			<div className="flex flex-1 flex-col gap-20 px-24 py-20">
				<div>
					<h3>{ title }</h3>

					<p>{ description }</p>
				</div>

				<div className="flex flex-col mt-auto">
					{ Object.entries(links).map(([name, url], index) => (
						<Button
							key={ index }
							url={ url }
							name={ name } />
					)) }
				</div>
			</div>
		</div>
	)
}
