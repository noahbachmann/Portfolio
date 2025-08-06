import SocialLink from '@components/social-link'

export default function Socials({ className= '' }){
	return(
		<div className={ `flex z-20 ${ className }` }>
			<SocialLink
				url="https://github.com/noahbachmann"
				social="github"/>

			<SocialLink
				url="https://www.linkedin.com/in/noah-bachmann-27tp/"
				social="linkedin"/>

			<SocialLink
				url="https://x.com/trainpaths"
				social="twitter"/>

			<SocialLink
				url="https://instagram.com/"
				social="instagram"/>

		</div>
	)
}