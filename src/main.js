import Vue from 'vue'
import App from './App.vue'
import mainhead from './mainHead.vue'
import mainfooter from './mainFooter.vue'
import maincontent from './mainContent.vue'
import detailhead from './detailHead.vue'
import detailfooter from './detailFooter.vue'
import detailcontent from './detailContent.vue'

import router from './router.js'


Vue.component('my-mainhead',mainhead)
Vue.component('my-mainfooter',mainfooter)
Vue.component('my-maincontent',maincontent)
Vue.component('my-detailhead',detailhead)
Vue.component('my-detailfooter',detailfooter)
Vue.component('my-detailcontent',detailcontent)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
