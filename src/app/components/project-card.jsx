import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
	const {
		title,
		description,
		images,
		links } = project

	return(
		<div className="flex">
			<div className="w-200">
				{ images.map((image, index) => (
					<Image
						key={ index }
						src={ image }
						alt={ title }
						width={ 200 }
						height={ 200 } />
				)) }
			</div>
			<div>
				<h3>{ title }</h3>

				<p>{ description }</p>
			</div>
			<div>
				{ links.map((link, index) => (
					<Link
						key={ index }
						href={ link }
						className="text-blue-500 hover:underline"/>
				)) }
			</div>
		</div>
	)
}
