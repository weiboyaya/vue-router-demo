import Vue from 'vue'
import VueRouter from 'vue-router'


import main from './main.vue'
import detail from './detail.vue'
import about from './about.vue'

Vue.use(VueRouter)

var routes=[{
    path:'/',
    component:main,
    children:[]
},{
    path:"/detail/:id",
    component:detail
},{
    path:"/about",
    component:about,
    children:[{
        path:"remark",
        component:{
            template:`<div>
            <p>*  按照行业内主要友商的近似统计方式统计数据</p>
            </div>`
        } 
    }]
    
}]

var router=new VueRouter({
    routes
})

export default router;
