'use client'
import { Canvas } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import Matrix from './matrix'

export default function MatrixCanvas() {
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	return mounted ?
		(
			<Canvas orthographic camera={{ zoom: 20, position: [0, 0, 10] }} resize={{ scroll: false }}>
				<Matrix />
			</Canvas>
		)
		: null
}