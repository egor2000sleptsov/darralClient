export default function (instance) {
	return {
		load(payload) {
			return instance.post('categories', {method: 'receive', ...payload})
		},
		add(payload) {
			return instance.post('categories', {method: 'create', ...payload})
		},
		del(payload) {
			return instance.post('categories', {method: 'delete', ...payload})
		}
	}
}
