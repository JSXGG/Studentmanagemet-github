/**
 * Created by baird on 2017/3/24.
 */
import Api from 'service/api'
const UserService = {};
UserService.getschoolinfo = (model)=> {
    return Api.fetchDataByToken('/api/getschoolinfo', 'post', model);
}
/*获取老师信息*/
UserService.gettecherinfobyid = (model)=> {
    return Api.fetchDataByToken('/api/gettecherinfobyid', 'post', model);
};
/*绑定学校*/
UserService.getbindingschool = (model)=> {
    return Api.fetchDataByToken('/api/bindingschool', 'post', model);
};

/*获取学生列表*/
UserService.getstudentlistbymoment = (moment)=> {
    return Api.fetchDataByToken('/api/getstudentlistbymoment', 'post', {moment: moment});
};
/*获取签到列表  */
UserService.getsignlistbyclassid = (model)=> {
    return Api.fetchDataByToken('/api/getsignlistbyclassid', 'post', model);
};
/*批量签到*/
UserService.batchstudentsignin = (model)=> {
    return Api.fetchDataByToken('/api/batchstudentsignin', 'post', model);
};
/*根据日期获取学生签到记录*/
UserService.getsignlistbydate = (model)=> {
    return Api.fetchDataByToken('/api/getsignlistbydate', 'post', model);
};
/*添加批注*/
UserService.addanotation = (model)=>{
    return Api.fetchDataByToken('/api/addanotation', 'post', model);
}
/*根据记录id获取批注*/
UserService.getnotationbyrecordid = (recordid)=>{
    return Api.fetchDataByToken('/api/getnotationbyrecordid', 'post', {recordid});
}
export default UserService;
