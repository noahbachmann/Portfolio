'use client'
import { useState } from 'react'
import Link from 'next/link'

import Modal from '@components/modal'
import PrivacyPolicy from '@components/privacypolicy'
import Socials from '@components/socials'

export default function Footer({ className = '' }) {
	const [showPolicy, setShowPolicy] = useState(false)
	const togglePolicyMenu = () => {
		setShowPolicy(prev => !prev)
		document.body.classList.toggle('overflow-y-hidden')
	}
	return (
		<footer className={`py-32 md:py-48 ${className}`}>
			<div className="container container-lg w-full pb-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col">
					<h3 className="mb-12 font-semibold">Noah Bachmann</h3>
					<p className="max-w-full mb-30">Passionate developer with a lot of energy and love for the job.</p>
					<Socials className="*:size-30 gap-10"/>
				</div>
				<div className="col-start-3 flex flex-col">
					<h3 className="mb-12 font-semibold">Navigate</h3>

					<Link href="#projects"><p className="link-footer">Projects</p></Link>
					<Link href="#about"><p className="link-footer">About</p></Link>
					<Link href="#contact"><p className="link-footer">Contact</p></Link>
				</div>
				<div className="flex flex-col">
					<h3 className="mb-12 font-semibold">Legal</h3>

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