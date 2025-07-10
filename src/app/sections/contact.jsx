import { ContactForm } from '../components'

export default function Contact({ className = '' }) {
	return(
		<div id="contact" className={ `container container-md size-full mb-24 grid grid-cols-1 md:grid-cols-2 ${className}` }>
			<div>
				<h3>Noah Bachmann</h3>
			</div>
			<div className="px-24 py-16 bg-secondary rounded-lg shadow">
				<h2 className="text-primary">Contact me</h2>
				<ContactForm />
			</div>
		</div>
	)
}