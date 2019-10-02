// import moment from 'moment'
import format from 'date-fns/format'
import Vue from 'vue'
//自定义过滤器
Vue.filter('date-format',function(value,formatStr='yyyy-MM-dd HH:mm:ss'){
  return format(value,formatStr)
})
