import { router } from '@/router';
import { createStore } from 'vuex';

export default createStore({
	state: {
		scene: '',
		isCanvasActive: false,
		isArticleActive: false,
		isSocketActive: false,
		isReady: false,
	},
	mutations: {
		setScene: (state, payload) => (state.scene = payload.scene),
		setCanvasState: (state, payload) => (state.isCanvasActive = payload.state),
		setArticleState: (state, payload) =>
			(state.isArticleActive = payload.state),
		setSocketState: (state, payload) => (state.isSocketActive = payload.state),
		setReadyState: (state, payload) => (state.isReady = payload.state),
	},
	actions: {
		goHome: async ({ commit, state }, args) => {
			return new Promise((res, err) => {
				commit('setScene', { scene: '' });
				commit('setCanvasState', { state: false });
				commit('setArticleState', { state: false });

				setTimeout(() => {
					router.push('/').then(() => {
						res(true);
					});
				}, 250);
			});
		},
		selectScene: async ({ commit, state }, args) => {
			return new Promise((res, err) => {
				commit('setScene', args);
				commit('setCanvasState', { state: true });
				commit('setArticleState', { state: false });

				setTimeout(() => {
					router.push('/Canvas').then(() => {
						res(true);
					});
				}, 250);
			});
		},
	},
	modules: {},
	getters: {
		actualScene: (state) => state.scene,
		isCanvasActive: (state) => state.isCanvasActive,
		isArticleActive: (state) => state.isArticleActive,
		isSocketActive: (state) => state.isSocketActive,
		isReady: (state) => state.isReady,
	},
});
