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
				console.log(payload)
				let positions = (await api.positions.load(payload)).data
				if (positions.status === 'success'){
					context.commit('SET_POSITIONS', positions.data)
				}
			} catch (e) {
				console.log(e)
			}
		},
		async addPosition(context, payload) {
			try {
				const res = (await api.positions.add(payload)).data
				if (res.status === 'success') {
					console.log('Позиция успешно добавлена')
				}
			} catch (e) {
				console.log(e)
			}
		}
	}
}
