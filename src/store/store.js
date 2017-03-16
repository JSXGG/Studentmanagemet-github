/**
 * Created by baird on 2017/3/13.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import comm from './modules/comm';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        comm
    },
    strict: process.env.NODE_ENV !== 'production',
});
export default store
