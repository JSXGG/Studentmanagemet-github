/**
 * Created by baird on 2017/4/15.
 */
import vue from 'vue'
import moment from 'moment'
vue.filter('moment', function (value) {
    if (value == '1') {
        return '午托'

    }
    else if (value == '2') {
        return '晚托'

    }
    else if (value == '3') {
        return '全托'
    }
    else {
        return ''
    }
})

vue.filter('dateformat', function (value) {
    if(value&&value.length>0){
        var day = moment.unix(value).format('HH:mm');
        return day;
    }
    return '--'
})

vue.filter('formatName', function (item) {
    if (item) {
        return item.firstname + item.lastname;
    }
    return ''
})


vue.filter('formatNameNotationpage', function (item) {
    if (item) {
        return item.firstname + item.lastname+'老师的批注';
    }
    return ''
})
