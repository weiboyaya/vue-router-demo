<template>
    <div class="detail-head">
        <div :class="backClass" @click="back" @mouseover="over" @mouseout="out">返回</div>
        <div class="detail-head-title">商品详情页</div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            backClass:"detail-head-back"
        }
    },
    methods:{
        back:function(){
             this.$router.push({path:"/"});
        },
        over:function(){
            this.backClass="detail-head-back-on";
        },
        out:function(){
            this.backClass="detail-head-back";
        }
    }
}
</script>

<style>
.detail-head{
     height: 50px;
     padding-top: 3px;
     text-align: center;
     font-family:Verdana, Geneva, Tahoma, sans-serif;
     border-bottom: 2px solid #ccc;
}
.detail-head-back{
    float: left;
    font-size: 25px;
    color: #d0d0d0;
    margin-left: 10px;
    cursor: pointer;
}
.detail-head-back-on{
    float: left;
    font-size: 25px;
    color: #ffaf60;
    margin-left: 10px;
    cursor: pointer;
}
.detail-head-title{
    font-size: 40px;
   
}
</style>
