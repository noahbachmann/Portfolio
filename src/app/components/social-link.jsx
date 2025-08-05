import Link from 'next/link'

import { GitHub, Instagram, Twitter, LinkedIn } from '@svg'



const ICONS = {
  github: GitHub,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
}

export default function SocialLink({ social, url }){
	const Icon = ICONS[social]

	return(
		<Link
			href={ url }
			target="_blank"
			rel="noopener">

			<div className="size-40 flex text-primary hover:text-accent active:text-white hover:scale-110 active:scale-96 duration-250 ease-in">
				<Icon />
			</div>
		</Link>
	)
}