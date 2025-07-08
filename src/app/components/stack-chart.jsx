'use client'
import Chart from 'chart.js/auto'
import min from 'lodash/min'
import { useRef, useEffect } from 'react'

const COLORS = [
  'rgba(167, 0, 222, 0.6)',
  'rgba(255, 214, 0, 0.6)',
  'rgba(255, 101, 30, 0.6)',
  'rgba(152, 204, 253, 0.6)',
  'rgba(55, 114, 164, 0.6)',
]
const HOVER_COLORS = [
	'#a700de',
	'#ffd600',
	'#ff651e',
	'#98ccfd',
	'#3772a4',
]
const HOVER_LABEL = '#d11302'

function GenerateLighterShades(rgba, x, diff = 45) {
	const MATCH = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]*)\)/i)
	if (!MATCH) return []
	let [, r, g, b, a] = MATCH
	r = parseInt(r) - diff
	g = parseInt(g) - diff
	b = parseInt(b) - diff
	a = a === '' ? 1 : parseFloat(a)
	const SHADES = []
	for (let i = 0; i < x; i++) {
		SHADES.push(`rgba(${min([r + (i*diff), 255])}, ${min([g + (i*diff), 255])}, ${min([b + (i*diff), 255])}, ${a})`)
	}
	return SHADES
}

function HandleLabelHover(legend, index, colorRef, chartRef){
	if(colorRef.current != null){
		legend.chart.data.datasets[0].backgroundColor[index] = colorRef.current
		colorRef.current = null
		chartRef.current.update()
	}
}

export default function StackChart(){
	const CANVAS_REF = useRef(null)
	const CHART_REF = useRef(null)
	const PREV_COLOR = useRef(null)

	const BASE_DATA = {
		labels: ['C#', 'JavaScript', 'HTML/CSS', 'SQL', 'Python'],
		datasets: [{
			label: 'Skillset',
			data: [19, 24, 24, 25, 8],
			backgroundColor: COLORS,
			hoverBackgroundColor: HOVER_COLORS,
		}]
	}

	const CS_DATA = {
		labels: ['.NET', 'Blazor   ', 'Unity'],
		datasets: [{
			label: 'C#',
			data: [50, 35, 15],
			backgroundColor: GenerateLighterShades(COLORS[0],3,50),
			hoverBackgroundColor: HOVER_COLORS[0],
		}]
	}

	const JS_DATA = {
		labels: ['React', 'Motion   ', 'Vue'],
		datasets: [{
			label: 'JavaScript',
			data: [50, 30, 20],
			backgroundColor: GenerateLighterShades(COLORS[1],3),
			hoverBackgroundColor: HOVER_COLORS[1],
		}]
	}

	const HTML_DATA = {
		labels: ['Tailwind', 'Bootstrap'],
		datasets: [{
			label: 'HTML / CSS',
			data: [70, 30],
			backgroundColor: GenerateLighterShades(COLORS[2],2),
			hoverBackgroundColor: HOVER_COLORS[2],
		}]
	}

	const SQL_DATA = {
		labels: ['MySQL', 'MSSQL'],
		datasets: [{
			label: 'SQL',
			data: [80, 20],
			backgroundColor: GenerateLighterShades(COLORS[3],2),
			hoverBackgroundColor: HOVER_COLORS[3],
		}]
	}

	const PYTHON_DATA = {
		labels: ['Pygame', 'LeetCode'],
		datasets: [{
			label: 'Python',
			data: [75, 25],
			backgroundColor: GenerateLighterShades(COLORS[4],2),
			hoverBackgroundColor: HOVER_COLORS[4],
		}]
	}

	let delayed

	const CHART_CONFIG = {
		type: 'doughnut',
		data: BASE_DATA,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			resizeDelay: 700,
			layout:{
				padding:{
					top:20,
					bottom: 20,
				}
			},
			elements:{
				arc:{
					borderWidth:0,
					hoverBorderWidth:2,
					hoverOffset: 30,
				}
			},
			animation:{
				duration:600,
				easing: 'easeInOutElastic',
			},
			plugins:{
				legend:{
					position:'left',
					align:'start',
					labels:{
						color:'#000',
						padding:15,
						textAlign:'start',
						font:{
							size: 16,
						}
					},
					title:{
						display:true,
						text:'SKILLSET',
						color:'#000',
						font:{
							size: 24,
							weight:'bold',
						}
					},
					events: ['mousemove', 'mouseout', 'click'],
					onHover: (_, legendItem, legend) => {
						PREV_COLOR.current = legend.chart.data.datasets[0].backgroundColor[legendItem.index]
						legend.chart.data.datasets[0].backgroundColor[legendItem.index] = HOVER_LABEL
						CHART_REF.current.update()
					},
					onLeave: (_, legendItem, legend) => {
						HandleLabelHover(legend, legendItem.index, PREV_COLOR, CHART_REF)
					},
					onClick: (_, legendItem, legend) => {
						if(legendItem.length != 0) {
							HandleLabelHover(legend, legendItem.index, PREV_COLOR, CHART_REF)
						}
						if(legend.legendItems.length === 5){
							switch(legendItem.index){
								case 0:
									CHART_REF.current.data = CS_DATA
									break
								case 1:
									CHART_REF.current.data = JS_DATA
									break
								case 2:
									CHART_REF.current.data = HTML_DATA
									break
								case 3:
									CHART_REF.current.data = SQL_DATA
									break
								case 4:
									CHART_REF.current.data = PYTHON_DATA
									break
							}
						} else {
							CHART_REF.current.data = BASE_DATA
						}
						CHART_REF.current.update()
					}
				},
				tooltip:{
					titleMarginBottom: 0,
					callbacks:{
						label: () => {
							return ''
						}
					}
				}
			},
			animation: {
				onComplete: () => {
					delayed: true
				},
				delay: (context) => {
					let delay = 0
					if(context.type === 'data' && context.mode === 'default' && !delayed){
						const total = context.chart.data.datasets[0].data.length
    					delay = (total - 1 - context.dataIndex) * 200
					}
					return delay
				},
			},
			onClick: (_, legendItem, legend) => {
				if(legendItem.length == 0) {
					CHART_REF.current.data = BASE_DATA
					CHART_REF.current.update()
					return
				}
				if(legend.boxes[0].legendItems.length === 5){
					switch(legendItem[0].index){
						case 0:
							CHART_REF.current.data = CS_DATA
							break
						case 1:
							CHART_REF.current.data = JS_DATA
							break
						case 2:
							CHART_REF.current.data = HTML_DATA
							break
						case 3:
							CHART_REF.current.data = SQL_DATA
							break
						case 4:
							CHART_REF.current.data = PYTHON_DATA
							break
					}
				} else {
					CHART_REF.current.data = BASE_DATA
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
		<div className="relative w-full min-h-[50vh]">
			<canvas ref={ CANVAS_REF }/>
		</div>
	)
}