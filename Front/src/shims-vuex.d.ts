import {
	ActionTree,
	GetterTree,
	MutationTree,
	Store,
	StoreOptions,
} from 'vuex';
import { Api, Markdown } from './services';

export interface _Store {
	scene: string;
	isCanvasActive: boolean;
	isArticleActive: boolean;
	isSocketActive: boolean;
	isReady: boolean;
	modals: {
		fullScreen: {
			isOpen: boolean;
			content: null;
			props: {
				title: string;
				component: any;
				content: string;
			};
		};
	};
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<_Store>;
		$api: Api;
		markdown: Markdown;
	}
}
