'use client'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Arrows, Download } from '@svg'

export default function CustomLink({ url, name, index = 1, download = false }) {
	const VARIANTS = {
		rest: { scale: 1, x: -20 },
		hover: { scale: 1, x: 0 },
		active: { scale: 0.98 },
	}

	const ARROW_VARIANTS = {
		rest: { scale: 1, opacity: 0 },
		hover: { scale: 1, opacity: 1 },
		active: { scale: 0.98 }
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
						key={ index }
						variants={ VARIANTS }
						initial="rest"
						animate="rest"
						whileHover="hover"
						whileTap="active"
						transition={{ ease: 'easeIn', duration: 0.2 }}
						className="flex font-semibold text-secondary hover:text-accent active:text-white">

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
						variants={ VARIANTS }
						initial="rest"
						animate="rest"
						whileHover="hover"
						whileTap="active"
						transition={{ ease: 'easeIn', duration: 0.2 }}
						className="flex font-semibold text-secondary hover:text-accent active:text-white">

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