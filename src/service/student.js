/**
 * Created by baird on 2017/3/30.
 */
import Api from 'service/api'
const Service = {};
/*获取学生列表*/
Service.getstudentlist = (classid)=> {
    return Api.fetchDataByToken('/api/getstudentlist', 'post',{classid});
}
/*添加学生*/
Service.addstudent = (model)=> {
    return Api.fetchDataByToken('/api/addstudent', 'post',model);
}
export default Service;
