/**
 * Created by baird on 2017/3/29.
 */
import Api from 'service/api'
import Vue from 'vue'
import SessionStorge from 'service/sdSessionStorge'
const LoginService = {}
LoginService.Login = (model)=> {
    return Api.fetchDataByToken('/api/login', 'post', model).then(function (response) {
        Vue.$vux.loading.hide();
        if(response.data&&response.data.result == '1'){
            Vue.$vux.toast.show({
                text: '登录成功'
            })
            SessionStorge.setUserToken(response.data.usertoken);
            return '1';
        }
        else{
            Vue.$vux.toast.show({
                text: response.data.error
            })
        }
    })
}
export default LoginService;
