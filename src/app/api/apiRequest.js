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
		return RESPONSE.message
	} catch (err) {
		return err.message
	}
}