import Link from 'next/link'

export default function Navigation() {
	return(
		<div>
			<nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
				<ul className="flex space-x-4">
					<li><Link href="#projects" className="hover:underline">Projects</Link></li>
					<li><Link href="#about" className="hover:underline">About</Link></li>
					<li><Link href="#contact" className="hover:underline">Contact</Link></li>
				</ul>
			</nav>
		</div>
	)
}