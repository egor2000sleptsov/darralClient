import api from '../api/index'

export default {
	namespaced: true,
	state: {
		categories: []
	},
	getters: {
		getCategories(state) {
			return state.categories.map(el => el.name);
		},
		getCategoriesNative(state) {
			return state.categories
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
		},
		async addCategory(context, payload){
			try {
				let res = (await api.categories.add(payload)).data
				if (res.status === 'success') {
					console.log('Категория успешно добавлена')
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
}
