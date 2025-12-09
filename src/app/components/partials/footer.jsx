'use client'
import { useState } from 'react'
import Link from 'next/link'

import Icon from '@components/buttons/logo'
import Modal from '@components/modal/modal'
import PrivacyPolicy from '@components/modal/privacypolicy'
import Socials from '@components/socials'

export default function Footer({ className = '' }) {
	const [showPolicy, setShowPolicy] = useState(false)
	const togglePolicyMenu = () => {
		setShowPolicy(prev => !prev)
		document.body.classList.toggle('overflow-y-hidden')
	}
	return (
		<footer className={`py-32 md:py-48 z-20 shadow-top ${className}`}>
			<div className="container container-lg w-full pb-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
				<div className="flex flex-col">
					<div className="flex gap-12">
						<h3>Noah Bachmann</h3>
						<Icon className="max-md:max-h-32 max-h-36 hover:scale-110 active:scale-98 ease-in duration-200"/>
					</div>
					<hr className="w-55 h-2 mb-10 rounded-[1px] bg-primary!"/>

					<p className="max-lg:max-w-[90%] mb-12 lg:mb-28">Passionate developer with a lot of energy and love for the job.</p>
					<Socials className="*:size-32 gap-10"/>
				</div>
				<div className="flex flex-col lg:col-start-3">
					<h3>Navigate</h3>
					<hr className="w-55 h-2 mb-10 rounded-[1px] bg-primary!"/>

					<Link href="#projects"><p className="link-footer">Projects</p></Link>
					<Link href="#about"><p className="link-footer">About</p></Link>
					<Link href="#contact"><p className="link-footer max-w-content">Contact</p></Link>
				</div>
				<div className="flex flex-col">
					<h3>Legal</h3>
					<hr className="w-55 h-2 mb-10 rounded-[1px] bg-primary!"/>

					<p
						onClick={ togglePolicyMenu }
						className="link-footer">

						Privacy Policy
					</p>
				</div>
			</div>
			{ showPolicy && <Modal content={ <PrivacyPolicy/> } onClose={ () => togglePolicyMenu() } /> }
		</footer>
	)
}