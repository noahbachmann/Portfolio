import nodemailer from 'nodemailer'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { NextResponse } from 'next/server'
import { GetUserIP } from '../getIp'

const TRANSPORT = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.SENDER,
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
	},
})

const RATE = new RateLimiterMemory({
	points:2,
	duration: 60
})

export async function POST(request){
	const USER_IP = await GetUserIP()

	try {
		await RATE.consume(USER_IP, 1)
	} catch {
		return NextResponse.json({ message: 'Too many requests' }, { status: 429 })
	}

	const {
		name,
		subject,
		message
	} = await request.json()

	const MAIL_OPTIONS = {
		from: process.env.SENDER,
		to: process.env.RECEIVER,
		subject: `from: ${ name }, about: ${ subject }`,
		text: message,
	}

	try {
		await TRANSPORT.sendMail(MAIL_OPTIONS,
			function (err) {
				if (!err) {
					resolve('Email sent')
				} else {
					console.log(err.message)
				}
			})
		return NextResponse.json({ message: 'Email sent' })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ error: err }, { status: 500 })
	}
}