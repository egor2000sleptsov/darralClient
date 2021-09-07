export default function (instance) {
	return {
		load(payload) {
			return instance.post('positions', {method: 'receive', ...payload})
		},
		add(payload) {
			return instance.post('positions', {method: 'create', ...payload})
		},
		delete(payload) {
			console.log({method: 'delete', ...payload})
			return instance.post('positions', {method: 'delete', ...payload})
		}
	}
}
