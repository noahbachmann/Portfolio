'use client'
import { Canvas } from '@react-three/fiber'

import Matrix from './matrix'

export default function MatrixCanvas() {

	return(
		<Canvas orthographic camera={{ zoom: 20, position: [0, 0, 10] }} resize={{ scroll: false }}>
			<Matrix />
		</Canvas>
	)
}