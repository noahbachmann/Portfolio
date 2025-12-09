import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const TRANSPORT = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.SENDER,
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
	},
	secure: true,
})

export async function POST(request) {
	const {
		name,
		subject,
		message
	} = await request.json()

	const MAIL_OPTIONS = {
		from: process.env.SENDER,
		to: process.env.RECEIVER,
		subject: `from: ${name}, about: ${subject}`,
		text: message,
	}

	await new Promise((resolve, reject) => {
		TRANSPORT.sendMail(MAIL_OPTIONS,
			(err, info) => {
				if (err) {
					reject(err)
				} else {
					resolve(info)
				}
			})
	})

	return NextResponse.json({ message: 'Email sent' })
}