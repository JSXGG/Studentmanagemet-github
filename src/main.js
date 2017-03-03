import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/router'
Vue.use(MintUI)
const app = new Vue({
    router
}).$mount('#app')



