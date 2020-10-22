import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
        path: "",
        redirect: "/home"
    }, {
        path: "/home",
        name: "index",
        component: () => import('@/views/home/Home')
    },
    {
        path: "/category",
        name: "分类",
        component: () => import('@/views/category/Category')
    },
    {
        path: "/cart",
        name: "购物车",
        component: () =>
            import('@/views/cart/Cart')
    },
    {
        path: "/profile",
        name: "我的",
        component: () =>
            import('@/views/profile/Profile')
    }
]
const router = new VueRouter({
    mode: "history",
    routes
})

export default router