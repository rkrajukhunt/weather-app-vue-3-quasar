import Axios from 'axios'

export function isValidResponse(resp) {
	return resp && resp.status === 200 && resp.data.status === 1
}

export const WEATER = Axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5',
  withCredentials: false,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  }
})

export const methods = {
	GET: 'GET',
	POST: 'POST',
	POST_CONFIG: 'POST_CONFIG',
	PUT: 'PUT',
	PUT_CONFIG: 'PUT_CONFIG',
	DELETE: 'DELETE',
	PATCH_CONFIG: 'PATCH_CONFIG',
	PATCH: 'PATCH'
}

export class APIError {
	error

	constructor(msg) {
		this.error = msg
	}

	get getMessage() {
		return this.error
	}
}

export const serviceMaker = async (url, method, data = {}, config = {}) => {
	try {
		let result

		switch (method) {
			case 'GET': {
				result = await WEATER.get(url)
				break
			}
			case 'POST': {
				result = await WEATER.post(url, data)
				break
			}
			case 'POST_CONFIG': {
				result = await WEATER.post(url, data, config)
				break
			}
			case 'PUT': {
				result = await WEATER.put(url, data)
				break
			}
			case 'PUT_CONFIG': {
				result = await WEATER.put(url, data, config)
				break
			}
			case 'DELETE': {
				result = await WEATER.delete(url)
				break
			}
			case 'PATCH_CONFIG': {
				result = await WEATER.patch(url, data, config)
				break
			}
			case 'PATCH': {
				result = await WEATER.patch(url, data)
				break
			}
			default: {
				throw 'InvalidMethod'
			}
		}
		if (!isValidResponse) {
			throw 'InvalidResponse'
		}
		return result.data
	} catch (err) {
		const { response } = err
		const { data } = response
		throw new APIError(data)
	}
}
