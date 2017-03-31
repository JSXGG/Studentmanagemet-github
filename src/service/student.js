/**
 * Created by baird on 2017/3/30.
 */
import Api from 'service/api'
const Service = {};
Service.getstudentlist = (classid)=> {
    return Api.fetchDataByToken('/api/getstudentlist', 'post',{classid});
}
export default Service;
