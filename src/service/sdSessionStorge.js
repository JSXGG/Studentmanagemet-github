/**
 * Created by baird on 2017/3/29.
 */
const  prefix = 'SD_V1';
export default {
    setUserToken(value){
        window.sessionStorage.setItem(prefix+'usertoken',value)
    },
    getUserToken(){
        return window.sessionStorage.getItem(prefix+'usertoken');
    },
    //清除usertoken。
    cleanUserToken(){
        window.sessionStorage.removeItem(prefix+'usertoken');
    }
}
