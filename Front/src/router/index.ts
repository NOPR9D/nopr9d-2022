import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Template from '../views/Template.vue';
import Canvas from '../views/Canvas.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Template',
		component: Template,
	},
	{
		path: '/canvas',
		name: 'Canvas',
		component: Canvas,
	},
	{ path: '/:pathMatch(.*)*', redirect: { name: 'Template' } },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
