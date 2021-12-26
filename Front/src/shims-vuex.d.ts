import {
	ActionTree,
	GetterTree,
	MutationTree,
	Store,
	StoreOptions,
} from 'vuex';
import { Api } from './services';

export interface _Store {
	scene: string;
	isCanvasActive: boolean;
	isArticleActive: boolean;
	isSocketActive: boolean;
	isReady: boolean;
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: {
			options: _Store | (() => _Store) | undefined;
			mutations: MutationTree<_Store> | undefined;
			actions: ActionTree<_Store, _Store> | undefined;
			getters: GetterTree<_Store, _Store> | undefined;
		};
		$api: Api;
	}
}
