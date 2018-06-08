<template>
    <div class="detail-footer">
       <ul class="detail-footer-ul">
           <li v-for=" page in pages" class="detail-footer-li">
            {{page}}
           </li>

       </ul>

    </div>

</template>
<script>
export default {
    data:function(){
        return {
            pages:5
        }
    }
}
</script>
<style>
.detail-footer{
    border-top: 2px solid #ccc;
    position: absolute;
    height: 60px;
    width:99%;
    bottom: 0px;
}

.detail-footer-ul{
    position: fixed;
    width: 100%;
    text-align: center;
}
.detail-footer-li{
    color: blue;
    font-size: 20px;
    float: left;
    list-style: none;
    margin-left: 10px;
    width: 5%;
}
</style>


