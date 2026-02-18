import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function SubmitButton({ text, loading, disabled, sent }) {
	return(
		<button
			className="button text-primary bg-secondary border-2 hover:border-accent hover:text-white active:border-white active:text-white disabled:text-primary/70 disabled:border-primary/70 disabled:bg-secondary/70 disabled:scale-100! flex justify-center"
			type="submit"
			disabled={ disabled }>
			<p className={ loading ? 'hidden' : 'block' }>{ sent ? 'Message sent!' : text }</p>
			<AiOutlineLoading3Quarters className={ `ml-2 animate-spin ${ loading ? 'block' : 'hidden' }` } />
		</button>
	)
}