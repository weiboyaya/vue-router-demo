<template>
    <div class="detail-content">
        <img :src="goods[id].image" alt="" class="detail-content-img">
        <div class="detail-conten-title" >{{goods[id].title}}</div>
        <div class="detail-conten-msg">{{goods[id].info}}</div>
    </div>
</template>
<script>
import Bus from './bus.js'

export default {
    data(){
        return{
             goods:[
                {title:"德芙",info:"特价优惠",id:"1",image:"http://m.360buyimg.com/babel/s211x211_jfs/t3688/270/776223567/128582/fa074fb3/58170f6dN6b9a12bf.jpg!q50.jpg.webp"},
                { title: "费列罗", info: "特价优惠",id:"2", image: "http://m.360buyimg.com/babel/s211x211_jfs/t613/100/1264998035/221234/1a29d51f/54c34525Nb4f6581c.jpg!q50.jpg.webp"},
                { title: "大米", info: "特价优惠",id:"3", image: "http://m.360buyimg.com/babel/s211x211_jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg!q50.jpg.webp"},
                { title: "安慕希", info: "特价优惠",id:"4", image: "http://m.360buyimg.com/babel/s211x211_jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg!q50.jpg.webp"},
                { title: "金典", info: "特价优惠",id:"5", image: "http://m.360buyimg.com/babel/s211x211_jfs/t2482/145/1424008556/91991/d62f5454/569f47a2N3f763060.jpg!q50.jpg.webp"},
                { title: "味可滋", info: "特价优惠",id:"6", image: "http://m.360buyimg.com/babel/s211x211_jfs/t2368/3/874563950/70786/7b5e8edd/563074c8N4d535db4.jpg!q50.jpg.webp" },
                { title: "泸州老窖", info: "特价优惠",id:"7", image: "http://m.360buyimg.com/babel/s211x211_jfs/t283/166/1424018055/189580/7c0792b7/543b4958N05fa2feb.jpg!q50.jpg.webp"},
                { title: "剑南春", info: "特价优惠",id:"8", image: "http://m.360buyimg.com/babel/s350x350_g15/M05/1A/0A/rBEhWlNeLAwIAAAAAAHyok3PZY0AAMl8gO8My0AAfK6307.jpg!q50.jpg.webp"},
                { title: "蓝莓", info: "特价优惠",id:"9", image: "http://m.360buyimg.com/babel/s211x211_jfs/t2332/148/2952098628/94387/e64654e2/56f8d76aNb088c2ab.jpg!q50.jpg.webp" },
                { title: "树懒果园 泰国进口大金煌芒果", info: "5斤装，约2-4个果，大！！！甜！！！",id:"10", image: "http://m.360buyimg.com/n0/jfs/t3709/334/1378702984/206759/5c100ab5/58253588Naaa05c5c.jpg!q70.jpg"}
                
            ],
            id:""
        }
        
    },
    mounted(){
        this.id=this.$route.params.id-1;
    }

}
</script>
<style>
.detail-content{
    text-align:center;
}
.detail-content-img{
    width:25%;
    height:20%;
}
.detail-conten-title{
    font-size: 30px;
    color: #FF8806;
}
.detail-conten-msg{
    font-size: 25px;
    margin-top: 10px;
    color: #9d9d9d;
}
</style>

