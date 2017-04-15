/**
 * Created by baird on 2017/4/15.
 */
import vue from 'vue'
vue.filter('moment', function (value) {
    if(value == '1'){
        return '午托'

    }
    else if(value == '2'){
        return '晚托'

    }
    else if(value == '3'){
        return '全托'
    }
    else {
        return ''
    }
})
