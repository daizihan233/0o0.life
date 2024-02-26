import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import("../views/Home.vue")
            },
            {
                path: '/about',
                name: 'About',
                component: () => import("../views/About.vue")
            },
            {
                path: '/HelloWorld',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import("../views/NotFound.vue")
            }
        ]
    }
)

export default router
