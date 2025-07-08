export default function Footer({ className = '' }) {
	return (
		<footer className={`py-32 md:py-48 ${className}`}>
			<div className="container container-lg w-full min-h-100 grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col">
					<p>Noah Bachmann</p>
				</div>
				<div className="flex flex-col">
					<p>more info</p>
				</div>
			</div>
		</footer>
	)
}