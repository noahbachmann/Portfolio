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
		<div id="contact" className={ `container container-md size-full max-md:px-0! md:p-20 md:mb-36 grid grid-cols-1 md:grid-cols-2 bg-secondary lg:rounded-lg shadow ${className}` }>
			<div className="min-h-350 md:min-h-400 flex flex-col justify-center items-center relative text-primary">
				<h3 className="absolute top-16 md:top-24">Noah Bachmann</h3>
				<Image
					src="/noah.webp"
					alt="me"
					width={180}
					height={180}
					className="rounded-full"/>
				<div className="w-full md:h-full flex md:flex-col justify-evenly items-end absolute max-md:bottom-0 md:right-0 md:top-0 text-secondary">
					<button
						className={`button-side ${info === 0 ? 'shadow-none! text-accent': ''}`}
						onClick={ () => setInfo(0) }
						aria-label="contact">
						<UserIcon />
					</button>

					<button
						className={`button-side ${info === 1 ? 'shadow-none! text-accent': ''}`}
						onClick={ () => setInfo(1) }
						aria-label="socials">
						<AtIcon />
					</button>

					<button
						className={`button-side ${info === 2 ? 'shadow-none! text-accent': ''}`}
						onClick={ () => setInfo(2) }
						aria-label="message me">
						<MailIcon />
					</button>
				</div>
			</div>
			<div className="min-h-400 md:min-h-500 p-24 bg-primary md:rounded-lg z-10">
				{ renderContent(info) }
			</div>
		</div>
	)
}