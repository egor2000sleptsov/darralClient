import api from "../api";

export default {
	namespaced: true,
	state: {
		positions: []
	},
	getters: {
		getPositions(state) {
			return state.positions
		}
	},
	mutations: {
		SET_POSITIONS(state, payload) {
			state.positions = payload
		}
	},
	actions: {
		async loadPositions(context, payload) {
			try {
				let positions = (await api.positions.load(payload)).data
				console.log(context)
				console.log(payload)
				console.log(positions)
				if (positions.status === 'success'){
					context.commit('SET_POSITIONS', positions.data)
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
}
