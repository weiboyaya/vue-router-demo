<template>
    <div>
      <div class="main-head">
        <ul>
          <li :class="(index==1?liTitelClassOn:liTitelClass)" @click="live"  @mouseover="mouseOn(1)" @mouseout="mouseout(1)">生活</li>
          <li class="main-head-li">|</li>
          <li :class="(index==2?liTitelClassOn:liTitelClass)"  @mouseover="mouseOn(2)" @mouseout="mouseout(2)">家电</li>
          <li class="main-head-li">|</li>
          <li :class="(index==3?liTitelClassOn:liTitelClass)"  @mouseover="mouseOn(3)" @mouseout="mouseout(3)">美妆</li>
          <li class="main-head-li">|</li>
          <li :class="(index==4?liTitelClassOn:liTitelClass)"  @mouseover="mouseOn(4)" @mouseout="mouseout(4)">加入我们</li>
          <li class="main-head-li">|</li>
          <li :class="(index==5?liTitelClassOn:liTitelClass)" @click="about" @mouseover="mouseOn(5)" @mouseout="mouseout(5)">关于我们</li>
        </ul>
      </div>
    </div>
    
</template>

<script>

export default {
    data(){
      return {
        index:0,
        liTitelClass:"main-head-li-titel",
        liTitelClassOn:"main-head-li-titel-on"
      }
    },
    methods:{
      about:function(){
        this.$router.push({path:"/about"});
      },
      live:function(){
        this.$router.push({path:"/"});
      },
      mouseOn:function(e){
        this.index=e;
      },
      mouseout:function(e){
        this.index=0;
      }
    }
}
</script>
<style>
.main-head{
  text-align:center;
  background:#E0E0E0;
  height: 50px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  padding-top: 3px;
}
.main-head-li{
  list-style: none;
  float: left;
  margin-left: 10px;
}
.main-head-li-titel{
  list-style: none;
  float: left;
  margin-left: 10px;
  cursor: pointer;
}
.main-head-li-titel-on{
  list-style: none;
  float: left;
  margin-left: 10px;
  cursor: pointer;
  color:#ffaf60;
}
</style>



