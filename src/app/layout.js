import './globals.css'
import { Navigation, Footer } from './components'

export const metadata = {
	title: 'Portfolio',
	description: 'Portfolio of Noah Bachmann, a web developer from Switzerland',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen">
				<Navigation />

				<main className="flex-1">
					{ children }
				</main>

				<Footer />
			</body>
		</html>
	)
}
