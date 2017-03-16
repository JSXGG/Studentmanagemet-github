/**
 * Created by baird on 2017/3/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Home = resolve => require(['../pages/mainview/Home'], resolve)
const Manage = resolve => require(['../pages/mainview/Manage'], resolve)
const Setupthe = resolve => require(['../pages/mainview/Setupthe'], resolve)

const Studentspage = resolve => require(['../pages/studentspage/Studentspage'], resolve)



const proRootDic = '/studentmanagemet';
/*配置路由目录*/
const routes = [
    {
        path: proRootDic, component: App, meta: {requiresAuth: true}, redirect: proRootDic + '/home',
        //配置子路由
        children: [
            {path: 'home', component: Home, meta: {requiresAuth: true},name:'Home'},
            {path: 'manage', component: Manage, meta: {requiresAuth: true},name:'Manage'},
            {path: 'setupthe', component: Setupthe, meta: {requiresAuth: true},name:'Setupthe'},
            {path: 'studentspage/:id', component: Studentspage,name:'Studentspage'}
        ]
    },
    {path: '*', redirect: proRootDic + '/home'}/*默认路由*/
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

