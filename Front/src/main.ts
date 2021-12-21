import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { Api } from '@/services';
import { router } from './router';
import i18n from './i18n';

const app = createApp(App);

app.config.globalProperties.$api = new Api();

app.use(i18n);
app.use(store);
app.use(router);

app.mount('#app');
