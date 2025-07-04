'use client'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
	const { scrollY } = useScroll()
	const [barState, setBarState] = useState('visible')
	const VARIANTS = {
		visible: { top: 0, opacity: 1 },
		hidden: { top: '-12px', opacity: 0.7 },
	}

	useMotionValueEvent(scrollY, 'change', (current) => {
		if (current > 80) {
			setBarState('hidden')
		} else {
			setBarState('visible')
		}
	})

	return(
		<>
			<motion.div
				className="w-full py-6 sticky top-0 z-50 bg-secondary text-primary"
				variants={ VARIANTS }
				animate={ barState }
				transition={{ ease: 'easeIn', duration: 0.35 }}
				whileHover="visible">
					<div className="container container-lg h-52 px-20 flex items-center justify-between">
					<Image
						src="/controller.webp"
						alt="logo"
						className="h-full w-auto"
						width={100}
						height={100}
						blurDataURL="data:..."
						placeholder="blur" />

					<nav className="flex">
						<ul className="flex gap-40">
							<li className="hover-up">
								<Link href="#projects">Projects</Link>
							</li>

							<li className="hover-up">
								<Link href="#about">About</Link>
							</li>

							<li className="hover-up">
								<Link href="#contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</motion.div>
		</>
	)
}