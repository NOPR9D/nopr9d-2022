import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { Api, Markdown } from '@/services';
import { router } from './router';
import i18n from './i18n';

import 'ant-design-vue/dist/antd.css';
import { Avatar, List, Modal } from 'ant-design-vue';

const app = createApp(App);

app.config.globalProperties.$api = new Api();
app.config.globalProperties.markdown = new Markdown();

app.use(i18n);
app.use(store);
app.use(router);
app.use(List);
app.use(Avatar);
app.use(Modal);

app.mount('#app');
