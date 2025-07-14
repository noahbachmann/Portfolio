import nodemailer from 'nodemailer'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { NextResponse } from 'next/server'
import { GetUserIP } from '../getIp'

const EMAIL = 'nedvergesse@gmail.com'
const GOOGLE_CLIENT_ID = '222749198171-k93uii1b36qs4i8j3ri75g64851lvr6q.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'
const GOOGLE_REFRESH_TOKEN = '1//04c0lBd2Mu54RCgYIARAAGAQSNwF-L9IrHR4DrB4PxXtyqW9SF7XbG7UrOlCQq3vtN3GHl323_tL70ozZHauDQXYvjm8YA8X5Qp8'

const TRANSPORT = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: 'noah.bachmann@kauz.ch',
		clientId: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		refreshToken: GOOGLE_REFRESH_TOKEN,
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
		from: EMAIL,
		to: EMAIL,
		subject: `from: ${ name }, about: ${ subject }`,
		text: message,
	}

	try {
		await TRANSPORT.sendMail(MAIL_OPTIONS,
			function (err) {
				if (!err) {
					resolve('Email sent')
				} else {
					reject(err.message)
				}
			})
		return NextResponse.json({ message: 'Email sent' })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ error: err }, { status: 500 })
	}
}