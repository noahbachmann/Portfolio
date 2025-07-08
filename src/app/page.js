import { About, Contact, Header, Projects } from './sections'

export default function Home() {
  return (
	<div>
		<Header className="min-h-[60vh] container container-md"/>
		<div className="w-full h-4 mb-4 bg-secondary"/>
		<div className="w-full h-6 mb-4 bg-secondary"/>
		<Projects className="bg-secondary" />
		<div className="w-full h-6 mt-4 bg-secondary"/>
		<div className="w-full h-4 mt-4 bg-secondary"/>
		<About />
		<Contact />
	</div>
  )
}
