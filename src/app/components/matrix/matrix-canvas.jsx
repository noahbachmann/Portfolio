'use client'
import { Canvas } from '@react-three/fiber'

import MatrixLine from './matrix-line'

export default function MatrixCanvas() {
	return(
		<Canvas orthographic camera={{ zoom: 20, position: [0, 0, 10] }}>
			<MatrixLine amount={3} size={1} />
		</Canvas>
	)
}