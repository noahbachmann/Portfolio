'use client'
import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { generateColumns } from './logic'

import MatrixCol from './matrix-col'

export default function Matrix() {
	const { viewport } = useThree()
	const MATRIX_REF = useRef(null)

	const COLUMNS = useMemo(() => {
		if (!viewport) return []
		return generateColumns(viewport.width)
	}, [viewport])

	return(
		<group ref={ MATRIX_REF }>
			{COLUMNS.map(({ xPos, size }) => {
				return <MatrixCol key={ xPos } xPos={ xPos } size={ size } />
			})}
		</group>
	)
}