<template>
    <div>
        <my-mainhead></my-mainhead>
            <div class="about">
                <p>xx于2004年正式涉足电商领域，2017年，xx集团市场交易额接近1.3万亿元*。2017年7月，xx再次入榜《财富》全球500强，位列第261位，在全球仅次于亚马逊和Alphabet，位列互联网企业第三。</p>
                <p>2014年5月，xx集团在美国纳斯达克证券交易所正式挂牌上市，是中国第一个成功赴美上市的大型综合型电商平台。2015年7月，xx凭借高成长性入选纳斯达克100指数和纳斯达克100平均加权指数。</p> 
                <button class="about-more" @click="seeMore">更多...</button>
            <div v-if="seen">
                <p>xx坚持诚信经营，大量品牌直供从源头杜绝假货，对假冒伪劣商品“零容忍”，通过严审商家资质、严控进货渠道、自主研发质控系统等六大举措确保正品行货。xx坚守“正道成功”的价值取向，坚定地呼吁用合法方式获得商业成功。</p>
                <p>多年来xx重拳出击、实力反腐。推行实名公布反腐案例、设立反腐奖励专项基金、公布《xx集团举报人保护和奖励制度》、上线反腐网站 “廉洁xx”等数项坚定、扎实的反腐举措，打造健康有序的商业环境。</p>
                <p>xx奉行正道成功、客户为先、只做第一的价值观，期望成为全球最值得信赖的企业。</p>
            </div>
            <router-link to="remark" append>备注</router-link>
            <router-view></router-view> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            seen:false
        }
    },
    methods:{
        seeMore:function(){
            this.seen=!this.seen;
        }
    }
}
</script>
<style>
.about{
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
}
.about-more{
    font-family: 'Courier New', Courier, monospace;
    color:dimgray;
    border:2px solid cornflowerblue;
}
</style>

