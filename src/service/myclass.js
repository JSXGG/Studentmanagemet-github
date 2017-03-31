/**
 * Created by baird on 2017/3/31.
 */
import Api from 'service/api'
const Service = {};
Service.getmyclasslist = ()=> {
    return Api.fetchDataByToken('/api/getmyclasslist', 'post', );
}
export default Service;
