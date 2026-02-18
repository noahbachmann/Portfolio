'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { API_Post } from '@/app/api/apiRequest'
import SubmitButton from './buttons/submit'

export default function ContactForm(){
	const [isDisabled, setIsDisabled] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [isSent, setIsSent] = useState(false)

	useEffect(() => {
		const firstLoad = setTimeout(() => setIsDisabled(false), 5000)
		return () => clearTimeout(firstLoad)
	}, [])

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors } } = useForm()

	async function OnSubmit(data){
		if(isDisabled) return
		setIsLoading(true)
		setIsDisabled(true)
		setIsSent(true)
		const CHECK = await API_Post(data, '/api/email')
		if(CHECK) reset()

		setIsLoading(false)
		setTimeout(() => {
			setIsDisabled(false)
			setIsSent(false)
		}, 20000)
	}

	return(
		<form className="flex-1 flex flex-col justify-evenly" onSubmit={ handleSubmit(OnSubmit) }>
			<input
				className={ `h-[12%] ${ errors.name ? 'error' : '' }` }
				type="text" placeholder="Your Name"
				{ ...register('name', { required: true, maxLength:50 }) } />
			<input
				className="h-[12%]"
				type="text"
				placeholder="Subject"
				{...register('subject', { maxLength:50 })} />

			<div className="relative h-[55%]">
				<textarea
					className={ `h-full w-full resize-none ${ errors.message ? 'error' : '' }` }
					type="text"
					placeholder="Your message..."
					{ ...register('message', { required: true, maxLength: 250 }) }
				/>
				{ errors.message?.type === 'maxLength' && (
					<span className="absolute bottom-2 right-10 text-xs text-red-600 pointer-events-none bg-white/80 px-1 rounded">
						max. 250 characters
					</span>
				)}
			</div>

			<SubmitButton text="Send" loading={ isLoading } disabled={ isDisabled } sent={ isSent } />
		</form>
	)
}