<template>
    <div class="detail-content">
        <img :src="$store.state.goods[id].image" alt="" class="detail-content-img">
        <div class="detail-conten-title" >{{$store.state.goods[id].title}}</div>
        <div class="detail-conten-msg">{{$store.state.goods[id].info}}</div>
    </div>
</template>
<script>
import Bus from './bus.js'

export default {
    data(){
        return{
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

