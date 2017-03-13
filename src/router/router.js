/**
 * Created by baird on 2017/3/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Setupthe = resolve => require(['../pages/Setupthe'], resolve)
const proRootDic = '/studentmanagemet';
const Home= resolve => require(['../pages/Home'],resolve)


/*配置路由目录*/
const routes = [
    {path: proRootDic, component: App, meta: {requiresAuth: true}},
    {path: proRootDic + '/setupthe', component: Setupthe, meta: {requiresAuth: true}},
    {path: proRootDic + '/home',component:Home,meta :{requiresAuth:true}},
    {path: '*', redirect: proRootDic}/*默认路由*/
];


const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
export  default router

