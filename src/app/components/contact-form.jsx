export default function ContactForm(){
	async function CreateEmail(formData){
		const rawData = {
			email: formData.get('email'),
			about: formData.get('about'),
			message: formData.get('message'),
		}
	}
	return(
		<form className="h-500 flex flex-col justify-evenly" action={ CreateEmail() }>
			<input className="bg-white p-8 rounded h-[10%]" type="email" name="email" placeholder="Your E-Mail" required/>
			<input className="bg-white p-8 rounded h-[10%]" type="text" name="about" placeholder="Subject" />
			<textarea className="bg-white p-8 rounded h-[60%]" type="text" name="message" placeholder="Your message..." required/>
			<button className="text-secondary bg-primary hover:text-black active:text-accent" type="submit">Send</button>
		</form>
	)
}