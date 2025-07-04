'use client'
import { motion, useTransform, useScroll } from 'motion/react'
import { useState, useRef, useEffect } from 'react'

import { ProjectCard } from '../components'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	const SECTION_REF = useRef(null)
	const SCROLL_REF = useRef(null)
	const [scrollInfo, setScrollInfo] = useState(0)

	useEffect(() => {
		setScrollInfo(SECTION_REF.current.offsetWidth - SCROLL_REF.current.scrollWidth - 32)
	}, [])

	const { scrollYProgress } = useScroll({
		target: SECTION_REF,
	})

	const x = useTransform(scrollYProgress, [0, 1], [0, scrollInfo])

	return(
		<div id="projects" className={ `w-full min-h-full ${className}` }>
			<div ref={ SECTION_REF } className="h-[300vh] relative">
				<div ref={ SCROLL_REF } className="h-screen px-32 sticky top-0 flex flex-col gap-24 justify-center overflow-hidden">
					<motion.div style={{ x }} className=" flex gap-24">
						{ data.map((project, index) => (
							<ProjectCard
								key={ index }
								project={ project } />
						))}
					</motion.div>
					<div className="container-sm w-full h-12 self-center rounded-xl overflow-hidden">
						<motion.div style={{ scaleX:scrollYProgress, originX: 0, left:0 }} className="h-full bg-accent" />
					</div>
				</div>
			</div>
		</div>
	)
}