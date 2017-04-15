/**
 * Created by baird on 2017/3/29.
 */
const prefix = 'SD_V1';
export default {
    setUserToken(value){
        window.sessionStorage.setItem(prefix + 'usertoken', value)
    },
    getUserToken(){
        return window.sessionStorage.getItem(prefix + 'usertoken');
    },
    //清除usertoken。
    cleanUserToken(){
        window.sessionStorage.removeItem(prefix + 'usertoken');
    },
    setUserInfo(Info){
        window.sessionStorage.setItem(prefix + 'userinfo', JSON.stringify(Info))
    },
    /*获取用户信息*/
    getUserInfo(){
        let userInfo = window.sessionStorage.getItem(prefix + 'userinfo');
        return JSON.parse(userInfo);
    },
    //清除UserInfo。
    cleanUserInfo(){
        window.sessionStorage.removeItem(prefix + 'userinfo');
    },
}
