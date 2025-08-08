'use client'
import { motion, useTransform, useMotionValue } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import ProjectCard from '@components/project-card'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	const SCROLL_REF = useRef(null)

	const WINDOW_WIDTH = useWindowWidth()
	const [dragLimit, setDragLimit] = useState(0)

	const x = useMotionValue(0)

	useEffect(() => {
		setDragLimit(SCROLL_REF.current.offsetWidth - SCROLL_REF.current.scrollWidth - 16)
	}, [WINDOW_WIDTH])

	const BAR_SIZE = useTransform(x, [-50, dragLimit+50], [0.05, 1])

	return(
		<div id="projects" className={ `w-full min-h-full ${className}` }>
			<div
				ref={ SCROLL_REF }
				className="px-8 md:px-32 py-48 md:py-96 sticky top-0 flex flex-col gap-24 justify-center overflow-hidden">

				<motion.div
					drag="x"
					dragConstraints={ { top: 0, bottom: 0, left: dragLimit, right: 0 } }
					dragElastic={ 0.1 }
					dragTransition={ { bounceStiffness: 300, bounceDamping: 15 } }
					style={{ x }}
					className=" flex gap-24">

					{ data.map((project, index) => (
						<ProjectCard
							key={ index }
							project={ project } />
					))}
				</motion.div>

				<div className="container-sm w-full h-12 self-center rounded-xl overflow-hidden">
					<motion.div
						style={{ scaleX: BAR_SIZE, originX: 0, left:0 }}
						initial="hidden"
						whileInView="visible"
						margin="200px 0px 24px 0px"
						className="h-full bg-primary" />
				</div>
			</div>
		</div>
	)
}