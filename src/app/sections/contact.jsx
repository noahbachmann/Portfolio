'use client'
import { useState } from 'react'
import { ContactForm } from '@components'

function renderContent(tabNum) {
	switch (tabNum) {
		case 0:
			return(
				<>
					<h3 className="text-primary">Contact</h3>
				</>
			)
		case 1:
			return (
				<>
					<h3 className="text-primary">My Socials</h3>
				</>
			)
		case 2:
			return (
				<>
					<h3 className="text-primary">Send me something</h3>
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
		<div id="contact" className={ `container container-md size-full p-20 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary rounded-lg shadow ${className}` }>
			<div className="relative bg-primary">
				<h3>Noah Bachmann</h3>
				<div className="h-full flex flex-col justify-evenly items-end absolute right-0">
					<button className="bg-secondary" type="button" onClick={ () => setInfo(0) }>Contact</button>
					<button className="bg-secondary" type="button" onClick={ () => setInfo(1) }>Socials</button>
					<button className="bg-secondary" type="button" onClick={ () => setInfo(2) }>Mail</button>
				</div>
			</div>
			<div className="min-h-500">
				{ renderContent(info) }
			</div>
		</div>
	)
}