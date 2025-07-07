'use client'
import Chart from 'chart.js/auto'
import { useRef, useEffect } from 'react'

const COLORS = [
  'rgba(167, 0, 222, 0.55)',
  'rgba(255, 214, 0, 0.55)',
  'rgba(255, 101, 30, 0.55)',
  'rgba(152, 204, 253, 0.55)',
  'rgba(55, 114, 164, 0.55)'
]
const BORDER_COLORS = ['#a700de', '#ffd600', '#ff651e', '#98ccfd', '#3772a4']

export default function StackChart(){
	const CANVAS_REF = useRef(null)
	const CHART_REF = useRef(null)

	const BASE_DATA = {
		label: 'My Stack',
		data: {
			'C#': 80,
			'JavaScript': 82,
			'HTML/CSS': 95,
			'SQL': 97,
			'Python': 20
		},
		backgroundColor:COLORS,
		hoverBackgroundColor:BORDER_COLORS,
		borderColor:BORDER_COLORS,
		hoverBorderColor: '#fff'
	}

	const CS_DATA = {
		label:'C#',
		data: {
			'.NET': 50,
			'Blazor': 35,
			'Unity': 15
		},
		backgroundColor:COLORS[0],
		hoverBackgroundColor:BORDER_COLORS[0],
		borderColor:BORDER_COLORS[0]
	}

	const JS_DATA = {
		label:'JavaScript',
		data:{
			'React': 50,
			'Motion': 30,
			'Vue': 20
		},
		backgroundColor:COLORS[1],
		hoverBackgroundColor:BORDER_COLORS[1],
		borderColor:BORDER_COLORS[1]
	}

	const HTML_DATA = {
		label:'HTML / CSS',
		data:{
			'Tailwind': 70,
			'Bootstrap': 30,
		},
		backgroundColor:COLORS[2],
		hoverBackgroundColor:BORDER_COLORS[2],
		borderColor:BORDER_COLORS[2]
	}

	const SQL_DATA = {
		label:'SQL',
		data:{
			'MySQL': 80,
			'MSSQL': 20,
		},
		backgroundColor:COLORS[3],
		hoverBackgroundColor:BORDER_COLORS[3],
		borderColor:BORDER_COLORS[3]
	}

	const PYTHON_DATA = {
		label:'Python',
		data:{
			'Pygame': 75,
			'LeetCode': 25,
		},
		backgroundColor:COLORS[4],
		hoverBackgroundColor:BORDER_COLORS[4],
		borderColor:BORDER_COLORS[4]
	}

	let delayed
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
					beginAtZero: true,
					max: 100
				}
			},
			animation: {
				onComplete: () => {
					delayed: true
				},
				delay: (context) => {
					let delay = 0
					if(context.type === 'data' && context.mode === 'default' && !delayed){
						delay = context.dataIndex * 200
					}
					return delay
				},
			},
			elements:{
				bar:{
					borderRadius: 100,
					borderWidth: 2
				}
			},
			plugins:{
				legend:{
					labels:{
						boxWidth: 0,
						color:'#000',
						font:{
							size: 24,
						}
					},
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