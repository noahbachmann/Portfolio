import { ProjectCard } from '../components'
import data from '@/data/projects.json'

export default function Projects() {
	return(
		<div id="projects" className="w-full min-h-full ps-20">
			<h2>Projects</h2>
			<div className="relative flex gap-16 overflow-x-auto overscroll-contain">
				{ data.map((project, index) => (
					<ProjectCard
						key={ index }
						project={ project } />
				))}
			</div>
		</div>
	)
}