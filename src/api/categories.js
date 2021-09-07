export default function (instance) {
	return {
		load(payload) {
			return instance.post('categories', payload)
		}
	}
}
