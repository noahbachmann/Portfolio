import { motion } from 'motion/react'

export default function Burger({ isOpen = false }){
	return(
		<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
			<motion.path
				animate={ isOpen ? { rotate: 45, y: -4 } : { rotate: 0 }} d="M3 16h15"/>
			<motion.path
				animate={ isOpen ? { rotate: -45, y: 4 } : { rotate: 0 }} d="M3 8h15"/>
		</svg>
	)
}
