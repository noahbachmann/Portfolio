'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const SPEED = 1.4

export default function MatrixLine({  xPos = 0, yPos = 25, size = 0.5, text = '10110' }) {
	const TEXT_REF = useRef(null)

	useFrame((_, delta) => {
		TEXT_REF.current.position.y -= delta * size * SPEED
	})

	return(
		<Text
			ref={ TEXT_REF }
			position={[xPos, yPos, 0]}
			color="#254d32"
			maxWidth={ size }
			fontSize={ size }
			lineHeight={ 1.05 }
			overflowWrap="break-word">
			{ text }
		</Text>
	)
}