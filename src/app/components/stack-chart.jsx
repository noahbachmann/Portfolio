'use client'
import Chart from 'chart.js/auto'
import { useRef, useEffect } from 'react'

export default function StackChart(){
	const CANVAS_REF = useRef(null)
	const CHART_REF = useRef(null)

	const BASE_DATA = {
		label: 'My Stack',
		data: {
			'C#': 83,
			'JavaScript': 85,
			'HTML/CSS': 95,
			'SQL': 90,
			'Python': 20
		},
		borderWidth: 1
	}

	const CS_DATA = {
		label:'C#',
		data: {
			'.NET': 40,
			'Blazor': 40,
			'Unity': 20
		},
	}

	const JS_DATA = {
		label:'JavaScript',
		data:{
			'Basic': 20,
			'React': 50,
			'Vue': 30
		}
	}

	const HTML_DATA = {
		label:'HTML / CSS',
		data:{
			'Tailwind': 50,
			'Bootstrap': 20,
			'Canvas': 30
		}
	}

	const SQL_DATA = {
		label:'SQL',
		data:{
			'SQL': 80,
			'MSSQL': 20,
		}
	}

	const PYTHON_DATA = {
		label:'Python',
		data:{
			'Pygame': 75,
			'LeetCode': 25,
		}
	}

	const CHART_CONFIG = {
		type: 'bar',
		data: {
			datasets: [BASE_DATA],
		},
		options: {
			responsive: true,
			indexAxis: 'y',
			scales: {
				x: {
					beginAtZero: true
				}
			},
			onClick: (_, legendItem, legend) => {
				if(legendItem.length == 0) {
					CHART_REF.current.data.datasets[0] = BASE_DATA
					CHART_REF.current.update()
					return
				}

				switch(legend.boxes[0].legendItems[0].text){
					case 'My Stack':
						switch(legendItem[0].index){
							case 0:
								CHART_REF.current.data.datasets[0] = CS_DATA
								break
							case 1:
								CHART_REF.current.data.datasets[0] = JS_DATA
								break
							case 2:
								CHART_REF.current.data.datasets[0] = HTML_DATA
								break
							case 3:
								CHART_REF.current.data.datasets[0] = SQL_DATA
								break
							case 4:
								CHART_REF.current.data.datasets[0] = PYTHON_DATA
								break
						}
						break
					default:
						CHART_REF.current.data.datasets[0] = BASE_DATA
				}
				CHART_REF.current.update()
			}
		}
	}

	useEffect(() => {
		if (!CANVAS_REF.current) return
		CHART_REF.current = new Chart(CANVAS_REF.current, CHART_CONFIG)
	}, [])

	return(
		<div>
			<canvas ref={ CANVAS_REF }/>
		</div>
	)
}