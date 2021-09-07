import api from '../api/index'

export default {
	namespaced: true,
	state: {
		categories: []
	},
	getters: {
		getCategories(state) {
			return state.categories;
		}
	},
	mutations: {
		SET_CATEGORIES(state, payload) {
			state.categories = payload
		}
	},
	actions: {
		async loadCategories(context, payload) {
			try {
				let categories = (await api.categories.load(payload)).data
				if (categories.status === 'success') {
					context.commit("SET_CATEGORIES", categories.data)
				}
			} catch (e) {
				console.log(e);
			}
		}
	}
}
