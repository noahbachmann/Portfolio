import SocialLink from '@components/buttons/social-link'

export default function Socials({ className= '' }){
	return(
		<div className={ `flex z-20 ${ className }` }>
			<SocialLink
				url="https://github.com/noahbachmann"
				social="github"
				aria="GitHub"/>

			<SocialLink
				url="https://www.linkedin.com/in/noah-bachmann-27tp/"
				social="linkedin"
				aria="LinkedIn"/>

			<SocialLink
				url="https://x.com/trainpaths"
				social="twitter"
				aria="Twitter"/>

			<SocialLink
				url="https://instagram.com/n_oa_h_27"
				social="instagram"
				aria="Instagram"/>

		</div>
	)
}