/**
 * Created by baird on 2017/3/30.
 */
import Api from 'service/api'
const Service = {};
/*获取学生列表*/
Service.getstudentlist = (classid)=> {
    return Api.fetchDataByToken('/api/getstudentlist', 'post', {classid});
}
Service.getstudentinfo = (studentid)=> {
    return Api.fetchDataByToken('/api/getstudentinfo', 'post', {studentid});
}
/*添加学生*/
Service.addstudent = (model)=> {
    return Api.fetchDataByToken('/api/addstudent', 'post', model);
}
/*修改学生信息*/
Service.updatastudent = (model)=> {
    return Api.fetchDataByToken('/api/updatastudent', 'post', model);
}
/*删除学生*/
Service.delstudent = (model)=> {
    return Api.fetchDataByToken('/api/delstudent', 'post', model);
}
/*添加学生评论*/
Service.addstudentcomment = (model)=> {
    return Api.fetchDataByToken('/api/addstudentcomment', 'post', model);
}
/*根据id获取学生评论列表*/
Service.getcommentbystudentid = (studentid)=> {
    return Api.fetchDataByToken('/api/getcommentbystudentid', 'post', {studentid});
}
/*根据记录id获取评论*/
Service.getcommentbyrecordid = (recordid)=> {
    return Api.fetchDataByToken('/api/getcommentbyrecordid', 'post', {recordid});
}
/*获取日期列表*/
Service.getdatesbyclassid = ()=> {
    return Api.fetchDataByToken('/api/getdatesbyclassid', 'post', {});
}

export default Service;
