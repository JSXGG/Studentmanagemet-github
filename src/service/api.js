/**
 * Created by baird on 2016/12/30.
 */
import axios from 'axios';
import Vue from 'vue'
const HOST = '';
import sessionstorge from 'service/sdSessionStorge'
import router from '../router/router'

const Api = {
    getUrl: function (url) {
        return HOST + url;
    },
    getCongif: function (_url, _method, _parameter) {
        let config = {
            method: _method ? _method : 'get',
            url: Api.getUrl(_url),
            data: _parameter || {}
        };
        if (config.method === 'get' && Object.keys(config.data).length > 0) { //拼接URL
            var quert_string = [];
            Object.keys(config.data).forEach(function (key) {
                quert_string.push(key + '=' + config.data[key]);
            })
            config.url = config.url + '?' + quert_string.join('&');
        }
        return config;
    },
    fetchDataByToken: function (_url, _method, _parameter) {
        if (sessionstorge.getUserToken()) {
            if(!_parameter){
                _parameter = {};
            }
            _parameter['usertoken'] = sessionstorge.getUserToken()
        }
        let config = Api.getCongif(_url, _method, _parameter)
        return axios(config).then((response) => {
            if (response.data &&
                response.data.error) {
                if(response.data.error == 'usertokenInvalid'){
                    Vue.$vux.loading.hide();
                    Vue.$vux.toast.show({
                        type: 'warn',
                        text: '登录已经过期，请重新登录'
                    })
                    sessionstorge.cleanUserToken();
                    sessionstorge.cleanUserInfo();
                    setTimeout(()=>{
                        router.push({name:'login'});
                    },500)
                }
                else {
                    Vue.$vux.loading.hide();
                    Vue.$vux.toast.show({
                        type: 'warn',
                        text: response.data.error
                    })
                }
            }
            return response;
        }).catch(function () {
            Vue.$vux.loading.hide();
            Vue.$vux.toast.show({
                type: 'warn',
                position: 'bottom',
                text: '网络异常'
            })
        })
    },
}
export default Api;
