import Image from 'next/image'
import Link from 'next/link'

export default function Icon({ className= '' }){
	return(
		<Link
			href="#header"
			className={ `${ className }` }>

			<Image
				src="/icon.webp"
				width={72}
				height={72}
				alt="icon"
				className="size-full"/>

		</Link>
	)
}