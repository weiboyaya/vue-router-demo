<template>
    <div>
        <ul class="main-content-ul">
            <li v-for=" (good,index) in $store.state.goods" :class="(index==idx?li_class_on:li_class)" :title="good.title" :good="good"  @mouseover="onClass(index)" @mouseout="outClass(index)" @click="click(good)">
                <div class="main-content-li-div">
                    <img :src="good.image" alt="" :class="(index==idx?img_class_on:img_class)"> 
                </div>
                <div class="main-content-msg">
                    <span class="main-content-title">{{good.title}}</span>
                    <span class="main-content-price">￥ {{good.price|numberFormat}}</span>
                </div>
            </li>
        </ul>
        <router-link to="/remark"></router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import Bus from './bus.js'

export default {
    data(){
        return{
            //goods:$store.state.goods,
            li_class_on:"main-content-li-on",
            li_class:"main-content-li",
            img_class:"main-content-li-img",
            img_class_on:"main-content-li-img-on",
            idx:-1
        }
    },
    methods:{
       onClass:function(index){
           this.idx=index;
       },
        outClass:function(event){
             this.idx=-1;
        },
        click:function(good){
            this.$router.push({path:"/detail/"+good.id});
            
        }
         
    },
    filters:{
            numberFormat:function(value){
                var val=value.split(".");
                if(val.length<2){
                   value+=".00" 
                }
                return value;
            }
    }

}
</script>
<style>
.main-content-ul{
    position: fixed;
}
.main-content-li{
    list-style: none;
    float: left;
    margin: 5px 10px 0 0;
    width:200px;
    height: 200px;
    border:5px solid #e0e0e0;

}
.main-content-li-on{
    list-style: none;
    float: left;
    margin: 5px 10px 0 0;
    width:200px;
    height: 200px;
    border:5px solid #ffaf60;
    cursor: pointer;
}
.main-content-li-div{
    text-align: center;
}
.main-content-li-img{
    width:150px;
    height: 150px;
}

.main-content-li-img-on{
    width:160px;
    height: 160px;
}
.main-content-msg{
    text-align: center;
    margin: 10px 0 0 0;
}
.main-content-title{
   font-family:Verdana, Geneva, Tahoma, sans-serif;
   font-weight: bold;
}
.main-content-price{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FF8806;
     font-weight: bold;
}
</style>

