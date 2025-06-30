'use client'

import { MatrixCanvas } from '../components'

export default function Header({ className = '' }) {

	return(
		<div className="w-full h-700 relative">
			<div className="absolute inset-0">
				<MatrixCanvas />
			</div>

			<div className={ `flex flex-col justify-center ${className}` }>

				<h1>Header</h1>
				<p className="text-lead">About me...</p>
			</div>
		</div>
	)
}