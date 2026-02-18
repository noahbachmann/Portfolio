'use client'
import { motion, useTransform, useMotionValue, animate } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import ProjectCard from '@components/project-card'
import data from '@/data/projects.json'

export default function Projects({ className = '' }) {
	const SCROLL_REF = useRef(null)

	const WINDOW_WIDTH = useWindowWidth()
	const [dragLimit, setDragLimit] = useState(0)

	const x = useMotionValue(0)
	const SLIDE_DISTANCE = 328

	useEffect(() => {
		// Wait for layout to settle after resize
		requestAnimationFrame(() => {
			setDragLimit(SCROLL_REF.current.offsetWidth - SCROLL_REF.current.scrollWidth - 16)
			x.set(0)
		})
	}, [WINDOW_WIDTH])

	const BAR_SIZE = useTransform(x, [-50, dragLimit+50], [0.05, 1])

	const handleSlideLeft = () => {
		const targetX = Math.min(x.get() + SLIDE_DISTANCE, 0)
		animate(x, targetX, { type: 'spring', stiffness: 180, damping: 16 })
	}

	const handleSlideRight = () => {
		const targetX = Math.max(x.get() - SLIDE_DISTANCE, dragLimit)
		animate(x, targetX, { type: 'spring', stiffness: 180, damping: 16 })
	}

	return(
		<div id="projects" className={ `w-full min-h-full ${className}` }>
			<div
				ref={ SCROLL_REF }
				className="px-8 md:px-32 py-48 md:py-96 sticky top-0 flex flex-col gap-24 justify-center overflow-hidden active:cursor-grabbing">

				<motion.div
					drag="x"
					dragConstraints={ { top: 0, bottom: 0, left: dragLimit, right: 0 } }
					dragElastic={ 0.1 }
					dragTransition={ { bounceStiffness: 300, bounceDamping: 15 } }
					style={{ x }}
					className="flex gap-24 hover:cursor-grab">

					{ data.map((project, index) => (
						<ProjectCard
							key={ index }
							project={ project } />
					))}
				</motion.div>

				<div className="container-sm w-full h-12 self-center rounded-xl flex items-center gap-6">
					<button
						onClick={ handleSlideLeft }
						className="text-primary hover:opacity-70 transition-opacity hover:cursor-pointer"
						aria-label="Slide left">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-14">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</button>

					<div className="flex-grow h-full overflow-hidden rounded-xl">
						<motion.div
							style={{ scaleX: BAR_SIZE, originX: 0, left:0 }}
							initial="hidden"
							whileInView="visible"
							margin="200px 0px 24px 0px"
							className="h-full bg-primary" />
					</div>

					<button
						onClick={ handleSlideRight }
						className="flex-shrink-0 text-primary hover:opacity-70 transition-opacity hover:cursor-pointer"
						aria-label="Slide right">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-14">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}