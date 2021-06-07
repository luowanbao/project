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
            component: () => import('../pages/reg'),
            meta: {
                footerShow: false,
                headerShow: false,
            }
        },
        {
            path: '/login',
            component: () => import('../pages/login'),
            meta: {
                footerShow: false,
                headerShow: false,
            }
        },
        {
            path: '/home',
            component: () => import('../pages/home'),
            meta: {
                footerShow: true,
                headerShow: false,
            }
        },
        {
            path: '/fenlei',
            component: () => import('../pages/fenlei'),
            meta: {
                footerShow: true,
                headerShow: true,
            }
        },
        {
            path: '/miquan',
            component: () => import('../pages/miquan'),
            meta: {
                footerShow: true,
                headerShow: false,
            }
        },
        {
            path: '/cart',
            component: () => import('../pages/cart'),
            meta: {
                footerShow: false,
                headerShow: false,
            }
        },
        {
            path: '/mine',
            component: () => import('../pages/mine'),
            meta: {
                footerShow: true,
                headerShow: false,
            }
        },
        {
            path: '/detail',
            component: () => import('../pages/detail'),
            meta: {
                footerShow: false,
                headerShow: true,
            }
        }
    ]
})

export default router
