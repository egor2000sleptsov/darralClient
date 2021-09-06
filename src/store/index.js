import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		categories: []
	},
	getters: {
		getCategories(state) {
			return state.categories
		}
	},
	mutations: {},
	actions: {
		async LoadCategories(context, payload) {
			console.log(context)
			console.log(payload)
		}
	},
	modules: {}
})
