import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.scss'

import Navigation from '@components/partials/navigation'
import Footer from '@components/partials/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Noah Bachmann - Online Portfolio',
	description: 'Check out my online portfolio! I am a web developer from Switzerland.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={ inter.className }>
			<body className="min-h-screen flex flex-col bg-primary">
				<Navigation/>

				<main className="flex-1">
					{ children }
				</main>

				<Footer className="size-full bg-secondary text-primary"/>

				<Analytics/>
				<SpeedInsights/>
			</body>
		</html>
	)
}
