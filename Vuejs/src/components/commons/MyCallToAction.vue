<template>
    <div class="calltoactionpanel">
        <div class="container-fluid background-orange text-white    ">
            <input type="hidden" id="calltoactionsize" value="3"/>
            <div class="container">
                <div class="row">
                    <div :class="['col-sm-4', 'container-callToAction', {'first-child': i == 0}]" v-for="(cta, i) in callToAction">
                        <div class="callToAction text-white">
                            <a :href="cta.url">
                                <i :class="cta.icon"></i>
                                <h4 class="callToAction-title">
                                    <span class="callToAction-title-inner">{{cta.title}}</span>
                                </h4>
                                <div class="bodyText text-center">
                                    <p>{{cta.text}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div> 
</template>

<script>
// TODO: 有個 icon -forklift 這個需要處理
export default {
  name: 'calltoaction',
  data () {
    return {
      callToAction: [{url: 'http://www.crown.com/zh-cn/', icon: 'fa fa-comment fa-3x fa-fw', title: '请求更多信息', text: '寻求我们的帮助。'},
        {url: 'http://www.crown.com/zh-cn/forklift-rentals.html', icon: 'fa icon-crown icon-forklift fa-3x fa-fw', title: '需要租赁叉车？', text: '详细了解我们的租赁库存。'},
        {url: 'http://www.crown.com/zh-cn/forklift-dealers.html', icon: 'fa fa-map-marker fa-3x fa-fw', title: '查找附近的Crown-科朗公司', text: '搜索Crown-科朗分公司或经销商。'}],
      dummy: 'DUMMY'
    }
  }
}
</script>

<style scoped>

</style>