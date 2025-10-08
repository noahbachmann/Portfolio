import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { GetUserIP } from '../getIp'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

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

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const { ratelimit } = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(2, '60s'),
})

export async function POST(request) {
	const USER_IP = await GetUserIP()

	const { success } = await ratelimit.limit(USER_IP);

	if (!success) {
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