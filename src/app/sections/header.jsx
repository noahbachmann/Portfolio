'use client'

import MatrixCanvas from '@components/matrix/matrix-canvas'

export default function Header({ className = '' }) {

	return(
		<div className={ `w-full relative ${ className }` }>
			<div className="absolute inset-0 opacity-60">
				<MatrixCanvas />
			</div>

			<div className="container container-md min-h-[80vh] max-h-[95vh] md:min-h-[70vh] md:max-h-[80vh] h-full flex items-center">
				<div className="pl-8 py-16 flex flex-col justify-center relative z-10">
					<div className="size-full rounded-lg absolute inset-0 bg-primary opacity-65 backdrop-blur -z-10"/>
					<h1>My Portfolio</h1>
					<hr className="w-128 h-3 mb-12 rounded-[2px]"/>
					<p className="max-w-500 text-lead">I have a huge passion for computers, programming and everything around it. I hope you enjoy my website!</p>
				</div>
			</div>
		</div>
	)
}