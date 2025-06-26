import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
	return(
		<div className="py-12 bg-secondary text-white">
			<div className="container-md max-h-52 px-20 flex items-center justify-between">
				<Image
					src="/controller.webp"
					alt="logo"
					className='h-full w-auto'
					width={50}
					height={50}
					blurDataURL="data:..."
					placeholder="blur" />

				<nav className="flex">
					<ul className="flex gap-24">
						<li className="hover-up">
							<Link href="#projects">Projects</Link>
						</li>

						<li className="hover-up">
							<Link href="#about">About</Link>
						</li>

						<li className="hover-up">
							<Link href="#contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}