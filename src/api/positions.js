export default function (instance) {
	return {
		load(payload) {
			console.log({method: 'receive', ...payload})
			return instance.post('positions', {method: 'receive', ...payload})
		},
		add(payload) {
			return instance.post('positions', {method: 'create', ...payload})
		}
	}
}
