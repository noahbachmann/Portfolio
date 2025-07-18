'use client'
import { useState } from 'react'
import Image from 'next/image'
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
					<div>
						<span className="h6">Name</span>
						<p>Noah Bachmann</p>

						<span className="h6">From</span>
						<p>Switzerland</p>

						<span className="h6">Company</span>
						<p>Kauz Informatik Medien AG</p>

						<span className="h6">E-Mail</span>
						<Link
							url="mailto:noah.bachmann@kauz.ch"
							name="noah.bachmann@kauz.ch"/>


						<span className="h6">Download Contact</span>
						<Link
							url="/contact-card.vcf"
							name="Download"
							download/>
					</div>
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
			<div className="flex flex-col justify-center items-center relative text-primary">
				<h3 className="absolute top-12">Noah Bachmann</h3>
				<Image
					src="/noah.webp"
					alt="me"
					width={200}
					height={200}
					className="rounded-full"/>
				<div className="h-full flex flex-col justify-evenly items-end absolute right-0 top-0 text-secondary">
					<button
						className="button-side"
						onClick={ () => setInfo(0) }
						aria-label="contact">
						<UserIcon />
					</button>

					<button
						className="button-side"
						onClick={ () => setInfo(1) }
						aria-label="socials">
						<AtIcon />
					</button>

					<button
						className="button-side"
						onClick={ () => setInfo(2) }
						aria-label="message me">
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