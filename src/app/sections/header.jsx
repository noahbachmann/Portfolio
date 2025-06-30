'use client'

import { MatrixCanvas } from '../components'

export default function Header({ className = '' }) {

	return(
		<div className={ `flex flex-col justify-center relative ${className}` }>
			<MatrixCanvas />

			<h1>Header</h1>
			<p className="text-lead">About me...</p>
		</div>
	)
}