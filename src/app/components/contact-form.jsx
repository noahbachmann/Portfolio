'use client'
import { useForm } from 'react-hook-form'
import { API_Post } from '@/app/api/apiRequest'

export default function ContactForm(){
	const { 
		register, 
		handleSubmit, 
		reset, 
		formState: { errors} } = useForm()

	async function OnSubmit(data){
		const CHECK = await API_Post(data, '/api/email')
		if(CHECK) reset()
	}

	return(
		<form className="flex-1 flex flex-col justify-evenly" onSubmit={ handleSubmit(OnSubmit) }>
			<input
				className={ `h-[12%] ${ errors.name ? 'error' : '' }` }
				type="text" placeholder="Your Name"
				{ ...register('name', { required: true, maxLength:50 })} />	
			<input
				className="h-[12%]"
				type="text"
				placeholder="Subject"
				{...register('subject', { maxLength:50 })} />

			<textarea
				className={ `h-[55%] resize-none ${ errors.message ? 'error' : '' }` }
				type="text"
				placeholder="Your message..."
				{ ...register('message', { required: true, maxLength:200 })}/>

			<button className="button text-primary bg-secondary border-2 hover:border-accent active:border-white hover:text-white">Send</button>
		</form>
	)
}