'use client'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import random from 'lodash/random'

import MatrixLine from './matrix-line'

export default function MatrixCol({ xPos = 0, size = 1 }) {
	const COL_REF = useRef(null)
	const [lines, setLines] = useState([])

	const ID_COUNTER = useRef(0)
	const FIRST_RUN = useRef(false)
	const TIMER = useRef(0)
	const TIMER_END = useRef(0)

	function spawnLine(amount, yPos = 25){
		let numText = ''
		for (let i = 0; i < amount; i++) {
			numText += random()
		}
		setLines((prev) => {
			const NOW = performance.now()
			const FILTERED = prev.filter((prev) => NOW - prev.spawnTime < 55000)
			return [
				...FILTERED,
				{
					id: ID_COUNTER.current++,
					text: numText,
					spawnTime: NOW,
					yPos: yPos
				}
			]
		})
	}

	function TimerLoop(delta){
		TIMER.current += delta
		if(TIMER.current > TIMER_END.current){
			spawnLine(random(5,9))
			TIMER.current = 0
			TIMER_END.current = random(5,8, true) * (1 / size) + (size * 3)
		}
	}

  	useFrame((_, delta) => {
		if(!FIRST_RUN.current) return
		TimerLoop(delta)
	})

	useEffect(() => {
		if(FIRST_RUN.current) return
		FIRST_RUN.current = true

		let timer = 0
		let timer_end = random(1,2)
		for(let i = 16; i > 0; i-=1) {
			timer += 1
			if(timer > timer_end){
				spawnLine(random(5,9), 25-(i * size * 1.3))
				timer = 0
				timer_end = random(5,8, true) * (1 / size) + (size * 3)
			}
		}
		TIMER.current = timer
		TIMER_END.current = timer_end
	}, [])

	return (
		<group ref={COL_REF}>
			{lines.map(({ id, text, yPos }) => (
				<MatrixLine key={ id } xPos={ xPos } yPos={ yPos } size={ size } text={ text } />
			))}
		</group>
	)
}