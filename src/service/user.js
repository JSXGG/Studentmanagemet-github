/**
 * Created by baird on 2017/3/24.
 */
import Api from 'service/api'
const UserService = {}
UserService.getschoolinfo = (model)=> {
    return Api.fetchDataByToken('/api/getschoolinfo', 'post', model);
}
export default UserService;
