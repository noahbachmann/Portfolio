import Image from 'next/image'

export default function QrCode(){
	return(
		<div className="max-size-200 p-20 flex flex-col items-center justify-around gap-5 text-center bg-primary text-secondary rounded-lg">

			<h3>Scan to get my contact!</h3>

			<Image
				src="/contact/contact-qrcode.webp"
				alt="QR-Code!?"
				className="rounded-md"
				width={200}
				height={200}/>
		</div>
	)
}