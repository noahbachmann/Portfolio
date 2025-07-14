import { headers } from 'next/headers'

export async function GetUserIP(){
	const HEADERS = await headers()

	const IP =
		HEADERS.get('x-forwarded-for')?.split(',')[0] ||
		HEADERS.get('x-real-ip') ||
		'127.0.0.1'

	return IP
}