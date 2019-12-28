import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		recentTopics: [],
		recentReplies: []
	},
	mutations: {
		setTopics(state, payload) {
			state.recentTopics = payload.data
		},
		setReplies(state, payload) {
			state.recentReplies = payload.data
		}
	}
})

Vue.prototype.$store = store
