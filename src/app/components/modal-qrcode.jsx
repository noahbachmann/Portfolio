import Image from 'next/image'

import { Burger } from '@svg'

export default function ModalQrCode({ onClose }){
	return(
		<div
			onClick={ onClose }
			className="fixed inset-0 flex items-center justify-center bg-secondary/90 backdrop-blur z-50">
			<div className="size-32 fixed top-20 right-20 text-primary cursor-pointer">
				<Burger isOpen />
			</div>
			<div
				onClick={(e) => e.stopPropagation()}
				className="max-size-200 p-20 flex flex-col items-center justify-around gap-15 bg-primary text-secondary rounded-lg">

				<h3 className="font-bold">Scan to get my contact!</h3>

				<Image
					src="/contact/contact-qrcode.webp"
					alt="QR-Code!?"
					className="rounded-md"
					width={200}
					height={200}/>
			</div>
		</div>
	)
}