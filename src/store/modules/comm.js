/**
 * Created by baird on 2017/3/13.
 */
/**
 * Created by baird on 2016/12/30.
 */
import * as types from '../mutation';
const state = {
    isBack: false,   //是否显示返回
    title: '',  //显示标题内容
    isHeader: true,  //是否显示头部标题
    isFooter: false  //是否显示底部
};
const actions = {
    commConf({commit}, settings){
        commit(types.COMM_CONF, settings);
    }
}
const getters = {
    commConf: state => state,
};

const mutations = {
    [types.COMM_CONF](state, settings){
        state = Object.assign(state, settings);
    }
};
export default {
    state,
    actions,
    getters,
    mutations
}
