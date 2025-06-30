'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

import random from 'lodash/random'

export default function MatrixLine({ amount = 0, size = 0.5 }) {
	const textRef = useRef()
	useFrame((state, delta) => {
	})

	const texts = []
	for(let i = amount; i > 0; i--){
		texts.push(<Text key={i} position={[0,i,0]} fontSize={size}>{ random() }</Text>)
	}
	return(
		<group position={[0,0,0]} ref={ textRef }>
			{ texts }
		</group>
	)
}