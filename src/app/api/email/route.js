import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'


const TRANSPORT = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_SENDER,
		pass: process.env.MAIL_TOKEN,
	},
	secure: false,
	tls: {
		rejectUnauthorized: false
	}
})

export async function POST(request) {

	const {
		name,
		subject,
		message
	} = await request.json()

	const MAIL_OPTIONS = {
		from: process.env.MAIL_SENDER,
		to: process.env.MAIL_RECEIVER,
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