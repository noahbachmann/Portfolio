import { About, Contact, Header, Projects } from './sections'

export default function Home() {
  return (
	<div>
		<Header className="min-h-[60vh] container container-lg"/>
		<Projects className="py-24 bg-secondary" />
		<About />
		<Contact />
	</div>
  )
}
