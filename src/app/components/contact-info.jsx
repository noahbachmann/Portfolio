import ContactForm from '@components/contact-form'
import Link from '@components/buttons/link'
import QR from './svg/qr'
export default function ContactInfo({ tabNum, onQrClick }) {
	switch (tabNum) {
		case 0:
			return(
				<div className="h-full relative">
					<h2 className="text-secondary">Contact</h2>

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
							url="/contact/contact-card.vcf"
							name="Download"
							download/>
					</div>

					<div
						onClick={ onQrClick }
						className="size-36 absolute right-4 bottom-4 border-2 border-secondary text-secondary rounded hover:scale-108 hover:border-accent hover:text-accent cursor-pointer active:scale-100 active:border-white active:text-white duration-150 ease-in">
						<QR />
					</div>
				</div>
			)
		case 1:
			return (
				<div className="size-full flex flex-col">
					<h2 className="text-secondary">Send me a message!</h2>

					<ContactForm />
				</div>
			)
	}
}