'use client'
import { useForm } from 'react-hook-form'
import { SendEmail } from '@/app/components/email-request'

export default function ContactForm(){
	const { register, handleSubmit, reset } = useForm()

	async function OnSubmit(data){
		const CHECK = await SendEmail(data)
		if(CHECK) reset()
	}

	return(
		<form className="flex-1 flex flex-col justify-evenly" onSubmit={ handleSubmit(OnSubmit) }>
			<input
				className="h-[12%]"
				type="email" placeholder="Your Name"
				{ ...register('email', { required: true })} />

			<input
				className="h-[12%]"
				type="text"
				placeholder="Subject"
				{...register('subject')} />

			<textarea
				className="h-[55%]"
				type="text"
				placeholder="Your message..."
				{ ...register('message', { required: true })}/>

			<button className="button text-primary bg-secondary border-2 hover:text-white">Send</button>
		</form>
	)
}