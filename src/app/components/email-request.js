export async function SendEmail(data){
	const API_POINT = '/api/email'
	try {
		const RES = await fetch(API_POINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const RESPONSE = await RES.json()

		if (RES.ok) {
			alert(RESPONSE.message)
			return true
		} else {
			alert(RESPONSE.error || 'Something went wrong.')
			return false
		}
	} catch (err) {
		alert(err.message || err)
		return false
	}
}