import { About, Contact, Header, Projects } from './sections'

export default function Home() {
  return (
	<div>
		<Header className="container container-lg min-h-[60vh]"/>
		<Projects className="py-24 bg-primary" />
		<About />
		<Contact />
	</div>
  )
}
