import { ProjectCard } from '../components'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	return(
		<div id="projects" className={ `w-full min-h-full ${className}` }>
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