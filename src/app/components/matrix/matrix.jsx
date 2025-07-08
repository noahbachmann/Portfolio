'use client'
import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import round from 'lodash/round'
import random from 'lodash/random'

import MatrixCol from './matrix-col'

export default function Matrix() {
	const { viewport } = useThree()
	const MATRIX_REF = useRef(null)

	const COLUMNS = []
	const HALF_VP = viewport.width * 0.5
	for(let xPos = -HALF_VP+0.5; xPos < HALF_VP; xPos+=0){
		if(random(5) > 2){
			const SIZE = round(random(0.7, 1.4, true), 1)
			COLUMNS.push({ xPos, size:SIZE })
			xPos += SIZE + 0.1
		} else {
			xPos += 1
		}
	}

	return(
		<group ref={MATRIX_REF}>
			{COLUMNS.map(({ xPos, size }) => {
				return <MatrixCol key={ xPos } xPos={ xPos } size={ size } />
			})}
		</group>
	)
}