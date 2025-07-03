'use client'

import { MatrixCanvas } from '../components'

export default function Header({ className = '' }) {

	return(
		<div className="w-full h-700 relative">
			<div className="absolute inset-0 opacity-60">
				<MatrixCanvas />
			</div>

			<div className={ `h-full flex flex-col justify-center z-10 relative ${className}` }>
				<h1>My Portfolio</h1>
				<hr className="w-128 mb-16" />
				<p className="max-w-500 text-lead">I have a huge passion for computers, programming, logical thinking and everything around it!</p>
			</div>
		</div>
	)
}