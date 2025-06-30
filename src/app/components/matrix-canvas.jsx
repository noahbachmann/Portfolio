'use client'
import { Canvas } from '@react-three/fiber'

export default function MatrixCanvas({ className = '' }) {
	return(
		<Canvas className={ `${ className }` }>
			<mesh>
				<boxGeometry />
			</mesh>
		</Canvas>
	)
}