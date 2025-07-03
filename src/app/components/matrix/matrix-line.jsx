'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const SPEED = 1.25

export default function MatrixLine({  xPos = 0, size = 0.5, text = '10110' }) {
	const TEXT_REF = useRef(null)

	useFrame((_, delta) => {
		TEXT_REF.current.position.y -= delta * size * SPEED
	})

	const texts = []
	for(let i = text.length; i >= 0; i--){
		texts.push(<Text key={i} position={[0,i*size,0]} fontSize={size}>{ text[i] }</Text>)
	}
	return(
		<group position={[xPos, 20, 0]} ref={ TEXT_REF }>
			{ texts }
		</group>
	)
}