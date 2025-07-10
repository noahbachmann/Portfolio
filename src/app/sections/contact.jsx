export default function Contact({ className = '' }) {
	return(
		<div id="contact" className={ `size-full container container-md grid grid-cols-1 md:grid-cols-2 ${className}` }>
			<div>
				<h3>Noah Bachmann</h3>
			</div>
			<div>
				<form>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	)
}