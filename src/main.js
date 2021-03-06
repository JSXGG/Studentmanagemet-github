import Vue from 'vue'
import router from './router/router'
import store from './store/store'//使用vuex。
import mixins from './mixins/page.mixins'
import './less/theme.less'

import  { AlertPlugin } from 'vux'
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



import  { LoadingPlugin ,ToastPlugin,ConfirmPlugin} from 'vux'
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(ConfirmPlugin);

window.myVue = Vue;



