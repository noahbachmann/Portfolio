'use client'
import { useState } from 'react'
import { ContactForm } from '@components'

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
					<button className="md:-mr-1 px-12 py-8 cursor-pointer bg-primary rounded-l-l hover:scale-104 active:text-white active:scale-100 duration-200 ease-out" type="button" onClick={ () => setInfo(0) }>Contact</button>
					<button className="md:-mr-1 px-12 py-8 cursor-pointer bg-primary rounded-l-l hover:scale-104 active:text-white active:scale-100 duration-200 ease-out" type="button" onClick={ () => setInfo(1) }>Socials</button>
					<button className="md:-mr-1 px-12 py-8 cursor-pointer bg-primary rounded-l-l hover:scale-104 active:text-white active:scale-100 duration-200 ease-out" type="button" onClick={ () => setInfo(2) }>Mail</button>
				</div>
			</div>
			<div className="min-h-500 bg-primary p-24 rounded-lg">
				{ renderContent(info) }
			</div>
		</div>
	)
}