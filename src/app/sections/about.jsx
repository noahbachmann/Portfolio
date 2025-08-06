import StackChart from '@components/stack-chart'

export default function About() {
	return (
		<div id="about" className="container container-sm py-48">
			<div className="flex flex-col justify-center gap-16">
				<h2 className="font-semibold uppercase">Who even is this guy ??</h2>

				<p>
					I'm Noah Bachmann, a Software Developer in training. Computer science is my passion and i'm determined to improve my skills every day.
					Versatility is a strength of mine and i grasp things pretty fast, so i can become a decently capable person in a new topic surprisingly quickly.
					The most fun i've had in Computer Science must've been when i created 'Astronautical', the mobile game. It was one of my earliest projects and being able to combine
					my own imagination and creativity with a designing aspect (which is definitely my weakpoint) and a logical thinking aspect is just addictingly fun.
				</p>

				<p>
					My current capabilites mostly lie in website development, both in the frontend and the backend. I can also work well with databases, creating them and modifying them. Combining those skills,
					i am very capable of using those different skillsets to create user interfaces for people to interact with databases.
				</p>

				<StackChart />
			</div>

		</div>
	)
}