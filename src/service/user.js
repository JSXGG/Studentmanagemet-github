/**
 * Created by baird on 2017/3/24.
 */
import Api from 'service/api'
const UserService = {};
UserService.getschoolinfo = (model)=> {
    return Api.fetchDataByToken('/api/getschoolinfo', 'post', model);
}
/*获取老师信息*/
UserService.gettecherinfobyid = (model)=>{
    return Api.fetchDataByToken('/api/gettecherinfobyid', 'post', model);
};
export default UserService;
