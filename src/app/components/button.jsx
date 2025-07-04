'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function Button({ url, name, index }) {
	const VARIANTS = {
		rest: { color: '#254d32', x: -20 },
		hover: { color: '#76104F', x: 0 },
	}

	const ARROW_VARIANTS = {
		rest: { opacity: 0 },
		hover: { opacity: 1 },
	}

	return(
		<motion.div
			key={index}
			variants={VARIANTS}
			initial="rest"
			animate="rest"
			whileHover="hover"
			transition={{ ease: 'easeIn', duration: 0.2 }}
			className="flex">

			<motion.div className="w-20 h-auto flex items-center" variants={ ARROW_VARIANTS }>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
				</svg>
			</motion.div>

			<Link
				href={ url }
				target="_blank">
				{ name }
			</Link>
		</motion.div>
	)
}