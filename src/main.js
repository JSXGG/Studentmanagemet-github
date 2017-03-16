import Vue from 'vue'
import router from './router/router'
import store from './store/store'//使用vuex。
import mixins from './mixins/page.mixins'

const FastClick = require('fastclick')
FastClick.attach(document.body)
const app = new Vue({
    router,
    store
}).$mount('#app')
/*
* 全局混合，定义每个Vue实例都会执行。
* reloadData
* */
Vue.mixin({
    mixins: [mixins]
});
import  { LoadingPlugin } from 'vux'
import  { ToastPlugin } from 'vux'

Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);


