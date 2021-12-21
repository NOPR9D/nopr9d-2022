import { Store } from 'vuex';
import { Api } from './services';

declare module '@vue/runtime-core' {
	interface State {}
	interface ComponentCustomProperties {
		$store: Store<State>;
		$api: Api;
	}
}
