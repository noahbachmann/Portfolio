'use client'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import random from 'lodash/random'

import MatrixLine from './matrix-line'

export default function MatrixCol({ xPos = 0, size = 1 }) {
	const COL_REF = useRef(null)
	const [lines, setLines] = useState([])

	const ID_COUNTER = useRef(0)

	const TIMER = useRef(0)
	const TIMER_END = useRef(random(1,2))

	function spawnLine(amount, time){
		let numText = ''
  		for (let i = 0; i < amount; i++) {
   		numText += random()
  		}
		setLines((prev) => {
			const FILTERED = prev.filter((prev) => time - prev.spawnTime < 55000)
			return [
				...FILTERED,
				{
					id: ID_COUNTER.current++,
					text: numText,
					spawnTime: performance.now(),
				}
			]
		})
	}

  	useFrame((_, delta) => {
		TIMER.current += delta
		if(TIMER.current > TIMER_END.current){
			const NOW = performance.now()
			const AMOUNT = random(5,9)
			spawnLine(AMOUNT, NOW)
			TIMER.current = 0
			TIMER_END.current = random(5,8, true) * (1 / size) + (AMOUNT - 2)
			console.log('spawned')
		}
	})

	return (
		<group ref={COL_REF}>
			{lines.map(({ id, text }) => (
				<MatrixLine key={ id } xPos={ xPos } size={ size } text={ text } />
			))}
		</group>
	)
}