/**
 * Created by baird on 2017/3/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import sdSessionStorge from 'service/sdSessionStorge'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Home = resolve => require(['../pages/mainview/Home'], resolve)
const Manage = resolve => require(['../pages/mainview/Manage'], resolve)
const Setupthe = resolve => require(['../pages/mainview/Setupthe'], resolve)
const Mobilephonebinding = resolve => require(['../pages/settingpage/Mobilephonebinding'], resolve)
const Bindingschool = resolve => require(['../pages/settingpage/Bindingschool'], resolve)
const msg = resolve => require(['../pages/settingpage/msg'], resolve)

const Phoneverification = resolve => require(['../pages/settingpage/Phoneverification'], resolve)

const Studentspage = resolve => require(['../pages/studentspage/Studentspage'], resolve)
const Studentinfo = resolve => require(['../pages/studentspage/Studentinfo'], resolve)
const Commentontheinput = resolve => require(['../pages/studentspage/Commentontheinput'], resolve)
const Login = resolve => require(['../pages/login/Login'], resolve)
const proRootDic = '/website/studentmanagemet/';
/*配置路由目录*/
const routes = [
    {
        path: proRootDic, component: App, meta: {requiresAuth: true}, redirect: proRootDic + 'login',
        //配置子路由
        children: [
            {path: 'home', component: Home, meta: {requiresAuth: true}, name: 'Home'},
            {path: 'manage', component: Manage, meta: {requiresAuth: true}, name: 'Manage'},
            {
                path: 'mobilephonebinding',
                component: Mobilephonebinding,
                meta: {requiresAuth: true},
                name: 'Mobilephonebinding'
            },
            {path: 'Bindingschool', component: Bindingschool, meta: {requiresAuth: true}, name: 'Bindingschool'},
            {path: 'msg', component: msg, meta: {requiresAuth: true}, name: 'msg'},

            {path: 'setupthe', component: Setupthe, meta: {requiresAuth: true}, name: 'Setupthe'},
            {path: 'studentspage/:id', component: Studentspage, meta: {requiresAuth: true}, name: 'Studentspage'},
            {path: 'studentinfo/:id', component: Studentinfo, meta: {requiresAuth: true}, name: 'Studentinfo'},
            {
                path: 'commentontheinput/:id/:name',
                component: Commentontheinput,
                meta: {requiresAuth: true},
                name: 'Commentontheinput'
            },
            {
                path: 'phoneverification/:id/:name',
                component: Phoneverification,
                meta: {requiresAuth: true},
                name: 'Phoneverification'
            },
            {
                path: 'login',
                component: Login,
                name: 'login'
            }
        ]
    },
    {path: '*', redirect: proRootDic + 'login'}/*默认路由*/
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
//路由全局钩子， 验证用户登录
router.beforeEach((to, from, next) => {
    if (sdSessionStorge.getUserToken()) {
        if (to.name == 'login') {
            router.push({name: 'Home'});
        }
        else {
            next();
        }
    }
    else{
        if(to.name !='login'){
            router.push({name: 'login'});
        }
        else {
            next();
        }
    }
});
export  default router

