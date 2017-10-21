<template>

    <div class="address">


        <ycolumn bgimg="/static/c/dealer-network-bg.jpg" yclass="everyDevice text-black no-padding-left padding-2x-top no-padding-right padding-2x-bottom">
            <div class="col-sm-4">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="padding-2x-top padding-2x-right padding-2x-bottom width-100 component-left">
                                <h3>苏州云吉亚机械设备</h3>
                            </div>
                                <ul>
                                    <li style="list-style-type: none;">
                                        <div class="container-dealerListing">
                                            <p class="text-with-icon"><i class="fa fa-phone fa-fw"></i> 13812791230</p>
                                            <p class="text-with-icon"><i class="fa fa-envelope fa-fw"></i> lemon@yunjiya.cn</p>
                                            <p class="text-with-icon"><i class="fa fa-map-marker fa-fw"></i> <span>苏州市相城区黄埭镇长泾村吉港桥1号</span></p>
                                        </div>
                                    </li>
                                </ul>

                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="container-inner">
                    <div class="parsys">
                        <div id="amap_container" style="width: 100%; height: 400px;"></div>
                    </div>
                </div>
            </div>
        </ycolumn>

        <div class="clearfix"></div>

        <MyCallToAction></MyCallToAction>

        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
  name: 'address',
  data () {
    return {
      dummy: 'DUMMY'
    }
  },
  methods: {
    showMap: function () {
      var map = new window.AMap.Map('amap_container', {
        resizeEnable: true,
        zoom: 11,
        center: [120.566985, 31.424103]
      })
      var marker = new window.AMap.Marker({
        map: map,
        position: [map.getCenter().lng, map.getCenter().lat]
      })
      var infoWindow = new window.AMap.InfoWindow({
        content: '苏州市相城区黄埭镇长泾村吉港桥1号',
        offset: {x: 0, y: -30}
      })
      infoWindow.open(map, marker.getPosition())
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.showMap()
    })
  }
}
</script>

<style scoped>

</style>
