/**
 * Created by baird on 2017/3/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import sdSessionStorge from 'service/sdSessionStorge'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Home = resolve => require(['../pages/mainview/Home'], resolve)

const Attendancerecords = resolve => require(['../pages/mainview/Attendancerecords'], resolve)
const Mandatoryattendance = resolve => require(['../pages/mainview/Mandatoryattendance'], resolve)

const Manage = resolve => require(['../pages/mainview/Manage'], resolve)
const Setupthe = resolve => require(['../pages/mainview/Setupthe'], resolve)
const Mobilephonebinding = resolve => require(['../pages/settingpage/Mobilephonebinding'], resolve)
const Bindingschool = resolve => require(['../pages/settingpage/Bindingschool'], resolve)
const msg = resolve => require(['../pages/settingpage/msg'], resolve)
const TeachersManagement = resolve => require(['../pages/settingpage/TeachersManagement'], resolve)
const Addteacher = resolve => require(['../pages/settingpage/Addteacher'], resolve)

const Phoneverification = resolve => require(['../pages/settingpage/Phoneverification'], resolve)
const Studentspage = resolve => require(['../pages/studentspage/Studentspage'], resolve)
const Studentinfo = resolve => require(['../pages/studentspage/Studentinfo'], resolve)
const Addstudentinfo = resolve =>require(['../pages/studentspage/Addstudentinfo'],resolve)
const Commentontheinput = resolve => require(['../pages/studentspage/Commentontheinput'], resolve)
const Login = resolve => require(['../pages/login/Login'], resolve)
const proRootDic = '/website/studentmanagemet/';

/*配置路由目录*/
const routes = [
    {
        path: proRootDic, component: App, meta: {keepAlive: false}, redirect: proRootDic + 'login',
        //配置子路由 meta: {keepAlive: true}
        children: [
            {path: 'home', component: Home, meta: {keepAlive: true}, name: 'Home'},

            {path: 'Mandatoryattendance/:type', component: Mandatoryattendance, meta: {keepAlive: false}, name: 'Mandatoryattendance'},

            {path: 'Attendancerecords/:date', component: Attendancerecords, meta: {keepAlive: false}, name: 'Attendancerecords'},

            {path: 'manage', component: Manage, meta: {keepAlive: true}, name: 'Manage'},
            {path: 'mobilephonebinding', component: Mobilephonebinding, meta: {keepAlive: false},name: 'Mobilephonebinding'},
            {path: 'Bindingschool', component: Bindingschool, meta: {keepAlive: false}, name: 'Bindingschool'},
            {path: 'msg', component: msg, meta: {keepAlive: true}, name: 'msg'},
            {path: 'TeachersManagement', component: TeachersManagement, meta: {keepAlive: false}, name: 'TeachersManagement'},
            {path: 'Addteacher', component: Addteacher, meta: {keepAlive: false}, name: 'Addteacher'},

            {path: 'setupthe', component: Setupthe, meta: {keepAlive: true}, name: 'Setupthe'},
            {path: 'studentspage/:id/:name', component: Studentspage, meta: {keepAlive: false}, name: 'Studentspage'},
            {path: 'studentspage/addstudent/:classid/:studentid/', component: Addstudentinfo,meta: {keepAlive: false},name: 'Addstudentinfo'},
            {path: 'studentinfo/:classid/:studentid', component: Studentinfo, meta: {keepAlive: false}, name: 'Studentinfo'},
            {path: 'commentontheinput/:classid/:studentid/:name/:recordid', component: Commentontheinput, meta: {keepAlive: true}, name: 'Commentontheinput'},
            {path: 'phoneverification/:id/:name', component: Phoneverification, meta: {keepAlive: false}, name: 'Phoneverification'},
            { path: 'login', component: Login, name: 'login'}
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
    else {
        if (to.name != 'login') {
            router.push({name: 'login'});
        }
        else {
            next();
        }
    }
});
export  default router

