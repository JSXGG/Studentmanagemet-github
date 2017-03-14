import Vue from 'vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import router from './router/router'
import store from './store/store'//使用vuex。
// Vue.use(MintUI)
const app = new Vue({
    router,
    store
}).$mount('#app')



