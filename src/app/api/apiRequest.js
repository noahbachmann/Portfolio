export async function API_Post(data, api_point){
	try {
		const RES = await fetch(api_point, {
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
			alert(RESPONSE.error || RESPONSE.message || 'Something went wrong.')
			return false
		}
	} catch (err) {
		alert(err.message || err)
		return false
	}
}