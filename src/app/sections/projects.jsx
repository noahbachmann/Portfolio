import { ProjectCard } from '../components'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	return(
		<div id="projects" className={ `w-full min-h-full ${className}` }>
			<div className="container container-lg p-40 flex flex-col">
				<h2>My Projects</h2>
				<p className="max-w-500 text-lead">In my short career, i've already been part of a lot of different projects. Some of them completely on my own,
					some of them just part of a bigger team and one of them even as project-lead.<br/>
					Keep scrolling to check out the most interesting of those projects...</p>
			</div>
			<div className="relative flex gap-16 overflow-x-auto snap-x snap-mandatory *:snap-center no-scrollbar px-40">
				{ data.map((project, index) => (
					<ProjectCard
						key={ index }
						project={ project } />
				))}
			</div>
		</div>
	)
}