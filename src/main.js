import Vue from 'vue'
import App from './App.vue'
import MyMainhead from './mainHead.vue'
import MyMainfooter from './mainFooter.vue'
import MyMaincontent from './mainContent.vue'
import MyDetailhead from './detailHead.vue'
import MyDetailfooter from './detailFooter.vue'
import MyDetailcontent from './detailContent.vue'

import about from './about.vue'

import router from './router.js'
import store from './vuex/store.js'


Vue.component('my-mainhead',MyMainhead)
Vue.component('my-mainfooter',MyMainfooter)
Vue.component('my-maincontent',MyMaincontent)
Vue.component('my-detailhead',MyDetailhead)
Vue.component('my-detailfooter',MyDetailfooter)
Vue.component('my-detailcontent',MyDetailcontent)
Vue.component('my-about',about)

/** filter可以定义为全局或局部，当前为全部filter**/
// Vue.filter('numberFormat',function(value){
//   var val=value.split(".");
//   if(val.length<2){
//     value+=".00";
//   }
//   return value;
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


