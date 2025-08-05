'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Arrows, Download } from '@svg'

export default function CustomLink({ url, name, index = 1, download = false }) {
	const VARIANTS = {
		rest: { color: '#254d32', x: -20 },
		hover: { color: '#76104F', x: 0 },
	}

	const ARROW_VARIANTS = {
		rest: { opacity: 0 },
		hover: { opacity: 1 },
	}

	return(
		<>
		{
			!download ?
				<Link
					href={ url }
					target="_blank"
					rel="noopener"
					className="-mt-4 block">
					<motion.div
						key={index}
						variants={VARIANTS}
						initial="rest"
						animate="rest"
						whileHover="hover"
						transition={{ ease: 'easeIn', duration: 0.2 }}
						className="flex font-semibold">

						<motion.div className="w-20 h-auto flex items-center" variants={ ARROW_VARIANTS }>
								<Arrows />
						</motion.div>
						{ name }
					</motion.div>
				</Link>
				:
				<a
					href={ url }
					className="-mt-4 block">
					<motion.div
						key={index}
						variants={VARIANTS}
						initial="rest"
						animate="rest"
						whileHover="hover"
						transition={{ ease: 'easeIn', duration: 0.2 }}
						className="flex font-semibold">

						<motion.div className="w-20 h-auto flex items-center" variants={ ARROW_VARIANTS }>
								<Download />
						</motion.div>
						{ name }
					</motion.div>
				</a>
		}
		</>
	)
}