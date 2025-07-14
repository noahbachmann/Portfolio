'use client'
import { useState } from 'react'

import { ContactForm, Link } from '@components'
import AtIcon from '@svg/at-icon'
import MailIcon from '@svg/mail-icon'
import UserIcon from '@svg/user-icon'

function renderContent(tabNum) {
	switch (tabNum) {
		case 0:
			return(
				<div>
					<h3 className="text-secondary">Contact</h3>
					<h6>Name</h6>
					<p>Noah Bachmann</p>
					<h6>From</h6>
					<p>Switzerland</p>
					<h6>E-Mail</h6>
					<p>noah.bachmann@kauz.ch</p>
					<h6>Company</h6>
					<p>Kauz Informatik Medien AG</p>
					<h6>Download Contact</h6>
					<Link
						url="/contact-card.vcf"
						name="Download"
						download/>
				</div>
			)
		case 1:
			return (
				<div>
					<h3 className="text-secondary">My Socials</h3>
				</div>
			)
		case 2:
			return (
				<div className="size-full flex flex-col">
					<h3 className="text-secondary">Send me something</h3>
					<ContactForm />
				</div>
			)
		default:
			return null
	}
}

export default function Contact({ className = '' }) {
	const [info, setInfo] = useState(0)
	return(
		<div id="contact" className={ `container container-md size-full p-20 mb-24 grid grid-cols-1 md:grid-cols-2 bg-secondary rounded-lg shadow ${className}` }>
			<div className="relative">
				<h3>Noah Bachmann</h3>
				<div className="h-full flex flex-col justify-evenly items-end absolute right-0 text-secondary">
					<button className="button-side" type="button" onClick={ () => setInfo(0) }>
						<UserIcon />
					</button>

					<button className="button-side flex" type="button" onClick={ () => setInfo(1) }>
						<AtIcon />
					</button>

					<button className="button-side" type="button" onClick={ () => setInfo(2) }>
						<MailIcon />
					</button>
				</div>
			</div>
			<div className="min-h-500 bg-primary p-24 rounded-lg">
				{ renderContent(info) }
			</div>
		</div>
	)
}