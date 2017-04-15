/**
 * Created by baird on 2017/3/29.
 */
import Api from 'service/api'
import Vue from 'vue'
import SessionStorge from 'service/sdSessionStorge'
const LoginService = {}
LoginService.Login = (model)=> {
    Vue.$vux.loading.show({
        text: '登录中'
    });
    return Api.fetchDataByToken('/api/login', 'post', model).then(function (response) {
        Vue.$vux.loading.hide();
        if (response.data && response.data.result == '1') {
            Vue.$vux.toast.show({
                text: '登录成功'
            })
            SessionStorge.setUserToken(response.data.usertoken);
            SessionStorge.setUserInfo(response.data.userInfo);
            return '1';
        }
        else {
            Vue.$vux.toast.show({
                text: response.data.error
            })
        }
    })
}
LoginService.GetWeiXinLoginUrl = (model)=> {
    Vue.$vux.loading.show({
        text: '登录中'
    });
    return Api.fetchDataByToken('/api/getweixinloginurl', 'post', model).then(function (response) {
        Vue.$vux.loading.hide();
        if (response.data && response.data.result == '1') {
            Vue.$vux.toast.show({
                text: '获取成功'
            })
            return response.data.url;
        }
        else {
            Vue.$vux.toast.show({
                text: response.data.error
            })
        }
    })
}
export default LoginService;
