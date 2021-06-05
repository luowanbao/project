import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/reg',
            component: () => import('../pages/reg')
        },
        {
            path: '/login',
            component: () => import('../pages/login')
        },
        {
            path: '/home',
            component: () => import('../pages/home')
        },
        {
            path: '/fenlei',
            component: () => import('../pages/fenlei')
        },
        {
            path: '/miquan',
            component: () => import('../pages/miquan')
        },
        {
            path: '/cart',
            component: () => import('../pages/cart')
        },
        {
            path: '/mine',
            component: () => import('../pages/mine')
        }
    ]
})

export default router