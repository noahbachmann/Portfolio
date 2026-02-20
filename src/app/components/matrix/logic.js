import round from 'lodash/round'
import random from 'lodash/random'

export function generateColumns(viewportWidth) {
	const COLUMNS = []
	const HALF_VP = viewportWidth * 0.5
	for(let xPos = -HALF_VP+0.5; xPos < HALF_VP; xPos+=0){
		if(random(5) > 2){
			const SIZE = round(random(0.7, 1.4, true), 1)
			COLUMNS.push({ xPos, size:SIZE })
			xPos += SIZE + 0.1
		} else {
			xPos += 1
		}
	}
	return COLUMNS
}