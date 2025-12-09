'use client'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import random from 'lodash/random'

import MatrixLine from './matrix-line'

export default function MatrixCol({ xPos = 0, size = 1 }) {
	const COL_REF = useRef(null)
	const LINES_REF = useRef([])

	const [, forceUpdate] = useState(0)
	const ID_COUNTER = useRef(0)
	const FIRST_RUN = useRef(false)
	const TIMER = useRef(0)
	const TIMER_END = useRef(0)

	function spawnLine(amount, yPos = 25){
		let numText = ''
		for (let i = 0; i < amount; i++) {
			numText += random()
		}
		const NOW = performance.now()

		LINES_REF.current = [
			...LINES_REF.current.filter(line => NOW - line.spawnTime < 55000)
		]
		LINES_REF.current.push({
			id: ID_COUNTER.current++,
			text: numText,
			spawnTime: NOW,
			yPos
		})
		forceUpdate(n => n + 1)
	}

	function TimerLoop(delta, yPos = 25){
		TIMER.current += delta
		if(TIMER.current > TIMER_END.current){
			spawnLine(random(5,9), yPos)
			TIMER.current = 0
			TIMER_END.current = random(5,8, true) * (1 / size) + (size * 3)
		}
	}

	useEffect(() => {
		if(FIRST_RUN.current) return
		FIRST_RUN.current = true

		for(let i = 16; i > 0; i-=1) {
			TimerLoop(1, 25-(i * size * 1.3))
		}
	}, [])

	useFrame((_, delta) => {
		if(!FIRST_RUN.current) return
		TimerLoop(delta)
	})

	return (
		<group ref={COL_REF}>
			{LINES_REF.current.map(({ id, text, yPos }) => (
				<MatrixLine key={ id } xPos={ xPos } yPos={ yPos } size={ size } text={ text } />
			))}
		</group>
	)
}