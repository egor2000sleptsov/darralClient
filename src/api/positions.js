export default function (instance) {
	return {
		load(payload) {
			return instance.post('positions', payload)
		}
	}
}
