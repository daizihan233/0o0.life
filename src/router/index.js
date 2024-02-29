import {createRouter, createWebHistory} from "vue-router";

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
                component: () => import("../views/HelloWorld.vue")
            },
            {
                path: '/idea',
                name: 'Idea',
                component: () => import("../views/Idea.vue")
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
