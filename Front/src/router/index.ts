import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "Home" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
