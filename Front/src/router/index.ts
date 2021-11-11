import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Canvas from "../views/Canvas.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/canvas",
        name: "Canvas",
        component: Canvas,
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "Home" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
