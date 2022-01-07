import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Template from '../views/Template.vue';
import Canvas from '../views/Canvas.vue';
import Article from '../views/Article.vue';
import Articles from '../views/Articles.vue';
import CodePen from '../views/CodePen.vue';

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
	{
		path: '/articles',
		name: 'Articles',
		component: Articles,
	},
	{
		path: '/article',
		name: 'Article',
		component: Article,
	},
	{
		path: '/codepen',
		name: 'Codepen',
		component: CodePen,
	},
	{ path: '/:pathMatch(.*)*', redirect: { name: 'Template' } },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
