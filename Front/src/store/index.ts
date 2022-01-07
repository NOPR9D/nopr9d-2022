import { router } from '@/router';
import { createStore } from 'vuex';

export default createStore({
	state: {
		scene: '',
		isCanvasActive: false,
		isArticleActive: false,
		isSocketActive: false,
		isReady: false,
		modals: {
			fullScreen: {
				isOpen: false,
				props: {
					title: '',
					component: null,
					wrapClass: 'full-modal',
					item: '',
					content: '',
				},
			},
		},
	},
	mutations: {
		setScene: (state, payload) => (state.scene = payload.scene),
		setCanvasState: (state, payload) => (state.isCanvasActive = payload.state),
		setArticleState: (state, payload) =>
			(state.isArticleActive = payload.state),
		setSocketState: (state, payload) => (state.isSocketActive = payload.state),
		setReadyState: (state, payload) => (state.isReady = payload.state),
		setModalsState: (state, payload) => (state.modals = payload.state),
		setModalFullScreenState: (state, payload) =>
			(state.modals.fullScreen = payload.state),
	},
	actions: {
		closeModal: async ({ commit, state }, args) => {
			return new Promise((res, err) => {
				commit('setModalFullScreenState', {
					state: {
						isOpen: false,
						content: null,
						props: { title: '', component: null },
					},
				});
			});
		},
		openModal: async ({ commit, state }, args) => {
			return new Promise((res, err) => {
				commit('setModalFullScreenState', {
					state: {
						isOpen: true,
						props: {
							title: args.state.props.title,
							component: args.state.props.component,
							content: args.state.props.content,
							item: args.state.props.item,
						},
					},
				});
			});
		},
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
		isModalFullScreenOpen: (state) => state.modals.fullScreen.isOpen,
		modalFullScreenComponent: (state) =>
			state.modals.fullScreen.props.component,
		modalFullScreenTitle: (state) => state.modals.fullScreen.props.title,
		lastItem: (state) => state.modals.fullScreen.props.item,
		modalFullScreenContent: (state) => state.modals.fullScreen.props.content,
		modalFullScreenWrapClass: (state) =>
			state.modals.fullScreen.props.wrapClass,
		modals: (state) => state.modals,
	},
});
