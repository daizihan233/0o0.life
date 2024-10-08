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
                path: '/self',
                name: 'self',
                component: () => import("../views/Self.vue")
            },
            {
                path: '/404',
                name: '404',
                component: () => import("../views/NotFound.vue")
            },
            {
                path: '/:pathMatch(.*)',
                name: 'NotFound',
                redirect: '/404'
            }
        ]
    }
)

export default router
