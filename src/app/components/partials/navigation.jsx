'use client'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import Link from 'next/link'

import { Burger } from '@svg'
import Icon from '@components/buttons/logo'

export default function Navigation({ className='' }) {

	const WINDOW_WIDTH = useWindowWidth()
	const [isVisible, setIsVisible] = useState(false)
	const toggleNavMenu = () => {
		setIsVisible(prev => !prev)
		document.body.classList.toggle('overflow-y-hidden')
	}
	const closeNavMenu = () => {
		setIsVisible(false)
		document.body.classList.remove('overflow-y-hidden')
	}

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
				className={ `w-full md:py-6 sticky top-0 z-40 bg-secondary text-primary shadow-bottom ${ className }` }
				variants={ VARIANTS }
				animate={ WINDOW_WIDTH < 768 ? '' : barState }
				transition={{ ease: 'easeIn', duration: 0.35 }}
				whileHover="visible">

				<button
					onClick={ toggleNavMenu }
					className={ `w-32 hidden max-md:block absolute right-8 top-8 z-40 ${ isVisible ? '' : 'text-black' }` }
					aria-label="toggle nav-menu"
					aria-controls="navlist"
					aria-expanded={ isVisible }>

					<Burger isOpen={ isVisible }/>
				</button>

				<div className={ `container container-lg h-40 md:my-5 flex max-md:flex-col md:items-center md:justify-between
					max-md:justify-center max-md:size-full max-md:fixed max-md:inset-y-0 transition-transform ease-out duration-300 ${ isVisible ? 'max-md:translate-x-0' : 'max-md:translate-x-full' } max-md:bg-secondary/85 max-md:backdrop-blur` }>

					<Icon className="max-md:hidden h-full w-auto" />

					<nav
						id="navlist"
						data-visible={ isVisible }>

						<ul className="flex max-md:flex-col gap-4 md:gap-40">
							<li className="hover-up">
								<Link
									href="#projects"
									onClick={ closeNavMenu }>
									Projects
								</Link>
							</li>

							<li className="hover-up">
								<Link
									href="#about"
									onClick={ closeNavMenu }>
									About
								</Link>
							</li>

							<li className="hover-up">
								<Link
									href="#contact"
									onClick={ closeNavMenu }>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</motion.div>
		</>
	)
}