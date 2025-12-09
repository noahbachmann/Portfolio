'use client'
import { useState } from 'react'
import Image from 'next/image'

import ContactInfo from '@components/contact-info'
import Socials from '@components/socials'
import QrCode from '@components/modal/qrcode'
import Modal from '@components/modal/modal'
import { Mail, User } from '@svg'

export default function Contact({ className = '' }) {

	const [info, setInfo] = useState(0)
	const [showModal, setShowModal] = useState(false)
	const toggleModalMenu = () => {
		setShowModal(prev => !prev)
		document.body.classList.toggle('overflow-y-hidden')
	}

	return(
		<div id="contact" className={ `container container-sm size-full max-md:px-0! md:p-20 md:mb-36 grid grid-cols-1 md:grid-cols-2 bg-secondary md:rounded-lg shadow ${className}` }>

			{ showModal && <Modal content={ <QrCode/> } onClose={ () => toggleModalMenu() }/> }

			<div className="max-md:min-h-350 py-24 max-md:pb-45 flex flex-col justify-between items-center relative text-primary">
				<h3>Noah Bachmann</h3>

				<Image
					src="/contact/noah.webp"
					alt="me"
					width={180}
					height={180}
					className="rounded-full"/>

				<Socials className="*:size-40 gap-15"/>

				<div className="w-full md:h-full max-md:mr-20 flex md:flex-col gap-10 justify-end items-end absolute max-md:bottom-0 md:right-0 md:top-0 text-secondary">
					<button
						className={`button-side ${info === 0 ? 'shadow-none! text-white!': ''}`}
						onClick={ () => setInfo(0) }
						aria-label="contact">
						<User />
					</button>

					<button
						className={`button-side ${info === 1 ? 'shadow-none! text-white!': ''}`}
						onClick={ () => setInfo(1) }
						aria-label="message me">
						<Mail />
					</button>
				</div>
			</div>

			<div className="min-h-400 md:min-h-460 p-24 bg-primary md:rounded-md rounded-bl-none! z-10">
				<ContactInfo tabNum={ info } onQrClick={ () => toggleModalMenu(false) } />
			</div>
		</div>
	)
}