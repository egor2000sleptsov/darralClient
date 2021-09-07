import Vue from 'vue'
import Vuex from 'vuex'
import categories from "./categories";
import positions from "./positions";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {categories, positions}
})
