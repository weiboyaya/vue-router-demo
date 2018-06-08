<template>
    <div class="main-footer">
       <ul class="main-footer-ul">
           <li v-for=" page in pages" class="main-footer-li">
            {{page}}
           </li>

       </ul>

    </div>
</template>
<script>
export default {
    data:function(){
        return{
            pages:[1,2,3,4]
        }
    }

}
</script>
<style>
.main-footer{
    border-top: 2px solid #ccc;
    position: absolute;
    height: 60px;
    width:99%;
    bottom: 0px;
}

.main-footer-ul{
    position: fixed;
    width: 100%;
    text-align: center;
}
.main-footer-li{
    color: blue;
    font-size: 20px;
    float: left;
    list-style: none;
    margin-left: 10px;
    width: 5%;
}
</style>


