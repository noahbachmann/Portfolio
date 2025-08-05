'use client'
import { motion, useTransform, useScroll, useSpring } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import ProjectCard from '@components/project-card'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	const SECTION_REF = useRef(null)
	const SCROLL_REF = useRef(null)
	const WINDOW_WIDTH = useWindowWidth()
	const [scrollInfo, setScrollInfo] = useState(0)

	const { scrollYProgress } = useScroll({
		target: SECTION_REF,
	})

	useEffect(() => {
		setScrollInfo(WINDOW_WIDTH - SCROLL_REF.current.scrollWidth)
	}, [WINDOW_WIDTH])

	const springedProgress = useSpring(scrollYProgress, {
		stiffness: 150,
		damping: 17,
		restDelta: 0.001,
	})
	const x = useTransform(springedProgress, [0,1], [16, scrollInfo+(WINDOW_WIDTH > 767 ? -32 : 8)])

	return(
		<div id="projects" className={ `w-full min-h-full scroll-smooth ${className}` }>
			<div ref={ SECTION_REF } className="h-[300vh] relative">
				<div ref={ SCROLL_REF } className="h-screen px-8 md:px-64 sticky top-0 flex flex-col gap-24 justify-center overflow-hidden">
					<motion.div style={{ x }} className=" flex gap-24">
						{ data.map((project, index) => (
							<ProjectCard
								key={ index }
								project={ project } />
						))}
					</motion.div>
					<div className="container-sm w-full h-12 self-center rounded-xl overflow-hidden">
						<motion.div
							style={{ scaleX:springedProgress, originX: 0, left:0 }}
							initial="hidden"
							whileInView="visible"
							margin="200px 0px 24px 0px"
							className="h-full bg-primary" />
					</div>
				</div>
			</div>
		</div>
	)
}