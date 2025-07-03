import { About, Contact, Header, Projects } from './sections'

export default function Home() {
  return (
	<div>
		<Header className="container container-lg min-h-[60vh]"/>
		<Projects className="bg-secondary" />
		<About />
		<Contact />
	</div>
  )
}
