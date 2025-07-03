'use client'

import { MatrixCanvas } from '../components'

export default function Header({ className = '' }) {

	return(
		<div className="w-full h-700 relative">
			<div className="absolute inset-0 opacity-60">
				<MatrixCanvas />
			</div>

			<div className={ `h-full flex items-center ${className}` }>
				<div className="pl-8 py-16 flex flex-col justify-center relative z-10">
					<div className="size-full rounded-lg absolute inset-0 bg-primary opacity-60 backdrop-blur -z-10"/>
					<h1>My Portfolio</h1>
					<hr className="w-128 mb-12"/>
					<p className="max-w-500 text-lead">I have a huge passion for computers, programming and everything around it. I hope you enjoy this website!</p>
				</div>
			</div>
		</div>
	)
}