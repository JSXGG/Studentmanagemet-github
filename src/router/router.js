/**
 * Created by baird on 2017/3/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import sdSessionStorge from 'service/sdSessionStorge'
Vue.use(VueRouter);
const App = resolve => require(['../App'], resolve);
const Home = resolve => require(['../pages/mainview/Home'], resolve);

const Attendancerecords = resolve => require(['../pages/mainview/Attendancerecords'], resolve);
const Mandatoryattendance = resolve => require(['../pages/mainview/Mandatoryattendance'], resolve);

const Manage = resolve => require(['../pages/mainview/Manage'], resolve);
const Setupthe = resolve => require(['../pages/mainview/Setupthe'], resolve);
const Mobilephonebinding = resolve => require(['../pages/settingpage/Mobilephonebinding'], resolve);
const Bindingschool = resolve => require(['../pages/settingpage/Bindingschool'], resolve);
const msg = resolve => require(['../pages/settingpage/msg'], resolve);
const TeachersManagement = resolve => require(['../pages/settingpage/TeachersManagement'], resolve);
const Addteacher = resolve => require(['../pages/settingpage/Addteacher'], resolve);

const Phoneverification = resolve => require(['../pages/settingpage/Phoneverification'], resolve);
const Studentspage = resolve => require(['../pages/studentspage/Studentspage'], resolve);
const Studentinfo = resolve => require(['../pages/studentspage/Studentinfo'], resolve);
const Addstudentinfo = resolve => require(['../pages/studentspage/Addstudentinfo'], resolve);
const Commentontheinput = resolve => require(['../pages/studentspage/Commentontheinput'], resolve);
const Notationpage = resolve => require(['../pages/studentspage/Notationpage'], resolve);
const WorkconclusionList = resolve => require(['../pages/workconclusion/WorkconclusionList'], resolve);
// Addtheworksummary
const Addtheworksummary = resolve => require(['../pages/workconclusion/Addtheworksummary'], resolve);

const Studyreport = resolve => require(['../pages/mainview/Studyreport'], resolve);

const Main = resolve => require(['../pages/main/Main'], resolve);
const Mystudent = resolve => require(['../pages/details/Mystudent'], resolve);
/*配置路由目录*/
const routes = [
    {path: '/', component: Main},
    {
        path: '/mandatoryattendance/:type',
        component: Mandatoryattendance,
        meta: {keepAlive: false},
        name: 'Mandatoryattendance'
    },
    {
        path: '/attendancerecords/:date',
        component: Attendancerecords,
        meta: {keepAlive: false},
        name: 'Attendancerecords'
    },
    {
        path: '/studyreport/:id',
        component: Studyreport,
        meta: {keepAlive: false},
        name: 'Studyreport'
    },
    {
        path: '/mobilephonebinding',
        component: Mobilephonebinding,
        meta: {keepAlive: false},
        name: 'Mobilephonebinding'
    },
    {path: '/bindingschool', component: Bindingschool, meta: {keepAlive: false}, name: 'Bindingschool'},
    {path: 'msg', component: msg, meta: {keepAlive: true}, name: 'msg'},
    {
        path: '/teachersmanagement',
        component: TeachersManagement,
        meta: {keepAlive: false},
        name: 'TeachersManagement'
    },
    {path: '/addteacher', component: Addteacher, meta: {keepAlive: false}, name: 'Addteacher'},


    {path: '/setupthe', component: Setupthe, meta: {keepAlive: true}, name: 'Setupthe'},
    {path: '/studentspage/:id/:name', component: Studentspage, meta: {keepAlive: false}, name: 'Studentspage'},
    {path: '/notationpage/:id', component: Notationpage, meta: {keepAlive: false}, name: 'Notationpage'},
    {
        path: '/studentspage/addstudent/:classid/:studentid/',
        component: Addstudentinfo,
        meta: {keepAlive: false},
        name: 'Addstudentinfo'
    },
    {
        path: '/studentinfo/:classid/:studentid',
        component: Studentinfo,
        meta: {keepAlive: true},
        name: 'Studentinfo'
    },
    {
        path: '/commentontheinput/:classid/:studentid/:name/:recordid',
        component: Commentontheinput,
        meta: {keepAlive: true},
        name: 'Commentontheinput'
    },
    {
        path: '/phoneverification/:id/:name',
        component: Phoneverification,
        meta: {keepAlive: false},
        name: 'Phoneverification'
    },
    {path: '/addtheworksummary/:recordid', component: Addtheworksummary, name: 'Addtheworksummary'},
    {path: '/mystudent', component: Mystudent, name: 'mystudent'},
    {path: '/manage', component: Manage, meta: {keepAlive: true}, name: 'Manage'},
    {path: '/home', component: Home, meta: {keepAlive: true}, name: 'Home'},
    {path: '/workconclusionList', component: WorkconclusionList, name: 'WorkconclusionList'},
    {path: '*', redirect: '/'}/*默认路由*/
];
const router = new VueRouter({
    routes
});
export  default router

