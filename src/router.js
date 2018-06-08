import Vue from 'vue'
import VueRouter from 'vue-router'


import main from './main.vue'
import detail from './detail.vue'

Vue.use(VueRouter)

var routes=[{
    path:'/',
    component:main
},{
    path:"/detail/:id",
    component:detail
}]

var router=new VueRouter({
    routes
})

export default router;
