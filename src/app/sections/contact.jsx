'use client'
import { useState } from 'react'
import { ContactForm } from '@components'
import AtIcon from '@svg/at-icon'
import MailIcon from '@svg/mail-icon'
import UserIcon from '@svg/user-icon'

function renderContent(tabNum) {
	switch (tabNum) {
		case 0:
			return(
				<>
					<h3 className="text-secondary">Contact</h3>
				</>
			)
		case 1:
			return (
				<>
					<h3 className="text-secondary">My Socials</h3>
				</>
			)
		case 2:
			return (
				<>
					<h3 className="text-secondary">Send me something</h3>
					<ContactForm />
				</>
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
			<div className="min-h-500 flex flex-col bg-primary p-24 rounded-lg">
				{ renderContent(info) }
			</div>
		</div>
	)
}