<template>

    <div class="used">
        <ycolumn yclass="everyDevice text-black padding-2x-top">
            <div>
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 component-center">
                                <h2 style="text-align: center;">二手车业务</h2>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="calltoactionbutton">
                            <div class="text-center padding-2x-bottom">
                                <router-link to="forklifts" class="btn btn-cta text-white background-orange">XXXXXXX</router-link>
                            </div>
                        </div>
                        <div class="imagecomponent">
                            <div class="container-image text-black clearfix">
                                <my-picture src="/static/c/china-product-group.jpg" alt="forklifts"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>
        <ycolumn bgclass="background-orange" yclass="everyDevice text-white no-padding-top no-padding-bottom">
            <div class="col-sm-6 ">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class=" padding-2x-top   width-100 component-center">
                                <h1>仓库内部图</h1>
                                <h2>仓库内部图-仓库内部图</h2>
                                <p>仓库内部图-仓库内部图-仓库内部图-仓库内部图-仓库内部图-仓库内部图-仓库内部图<br><br></p>
                                <h5>仓库内部图</h5>
                                <p>仓库内部图</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="calltoactionbutton">
                            <div class="text-left padding-2x-bottom ">
                                <a href="https://crownwj.tmall.com/" class="btn btn-cta text-orange background-grey-lightestest" target="_blank">XXXXXXX</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 ">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="imagecomponent">
                            <div class="container-image no-padding-top  no-padding-bottom text-black clearfix">
                                <picture>
                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                    <source srcset="/static/c/pth-mobile.png" media="(max-width: 450px)">
                                    <source media="(max-width: 768px)">
                                    <!--[if IE 9]></video><![endif]-->
                                    <img class="img-responsive" src="/static/c/PTH-promo.jpg" alt="pth"/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>

        <ycolumn bgclass="background-grey-darker" bgimg="/static/c/fleet-bkgd.jpg" yclass="everyDevice text-white padding-4x-top padding-4x-bottom">
            <div>
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="   padding-2x-bottom width-100 component-center">
                                <h2 style="text-align: center;">维修场景图</h2>
                                <p style="text-align: center;">维修场景图-维修场景图-维修场景图-维修场景图</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="imagecomponent">
                            <div class="container-image padding-2x-top  text-black clearfix ">
                                <my-picture src="/static/c/infolink-tracking.png"/>
                            </div>
                        </div>
                        <div class="richtext">
                            <div class="padding-2x-left  padding-2x-right  width-100 text-left">
                                <h4 style="text-align: center;"><router-link to="fleet-management">车队管理解决方案</router-link></h4>
                                <p style="text-align: center;">测量、比对、分析和使用叉车及操作员数据，支持您做出更好的决策。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="calltoactionbutton">
                            <div class="text-center">
                                <router-link to="fleet-management" class="btn btn-cta text-white background-orange">了解更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>

        <ycolumn yclass="everyDevice text-black padding-4x-top padding-4x-bottom">
            <div class="col-sm-12">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 text-left">
                                <h2 style="text-align: center;">無與倫比的客戶支援</h2>
                                <p style="text-align: center;">讓我們通過優質的服務和培訓計畫持續滿足您的售後需求。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <ycolumn yclass="everyDevice text-black padding-2x-top padding-2x-bottom">
                            <div class="col-sm-6 ">
                                <div class="container-inner">
                                    <div class="parsys">
                                        <div class="calltoactionbutton">
                                            <div class="text-center">
                                                <router-link to="service-parts" class="btn btn-cta text-white background-orange">瞭解有關服務的更多資訊</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 ">
                                <div class="container-inner">
                                    <div class="parsys">
                                        <div class="calltoactionbutton">
                                            <div class="text-center">
                                                <router-link to="safety-training" class="btn btn-cta text-white background-orange">瞭解有關培訓的更多資訊</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ycolumn>
                        <div class="imagecomponent">
                            <div class="container-image text-black clearfix">
                                <my-picture src="/static/c/service-van-pac-rim.jpg" alt="service van"/>
                            </div>
                        </div>
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
  name: 'used',
  data () {
    return {
      dummy: 'DUMMY'
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<style scoped>

</style>
