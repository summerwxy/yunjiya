<template>
    <div class="introduction">
        <ycolumn bgclass="background-blacker" bgimg="/static/fp/456761_1920_e.png" yclass="everyDevice text-white padding-4x-top padding-2x-bottom">
            <div class="col-sm-8 ">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-90 text-left">
                                <h1>公司简介</h1>
                                <h2>云吉亚机械设备</h2>
                                <p>TODO: 这边记得改，我们秉着“质量第一，服务至上”的经营理念，力求专业，优质，诚信，高效，我们相信有优质的产品，诚信的服务一定会让您满意。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 ">
                <div class="container-inner">
                    <div class="parsys">
                    </div>
                </div>
            </div>
        </ycolumn>
        <ycolumn yclass="everyDevice text-black container-vertical-aligned no-padding-left padding-4x-top no-padding-right padding-4x-bottom">
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="imagecomponent">
                            <div class="container-image no-padding-left  no-padding-right text-black ">
                                <my-picture src="/static/fp/9651324.jpg" alt="" title=""></my-picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 text-left">
                                <h3>仓库图</h3>
                                <p>TODO: 这边记得改，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>
        <ycolumn bgclass="background-grey-lightester" yclass="desktopTabletOnly text-black container-vertical-aligned no-padding-top no-padding-bottom">
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 text-left">
                                <h3>办公区</h3>
                                <p>TODO: 这边记得改，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="imagecomponent">
                            <div class="container-image no-padding-top  no-padding-bottom text-black clearfix">
                                <my-picture src="/static/fp/paul-bence-395888.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>
        <ycolumn yclass="everyDevice text-black padding-4x-top padding-4x-bottom">
            <div class="col-sm-12 ">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 text-left">
                                <h2 style="text-align: center;">仓库内部图</h2>
                                <p style="text-align: center;">TODO: 这边记得改，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="imagecomponent">
                            <div class="container-image text-black clearfix">
                                <my-picture src="/static/fp/GDPGLP20-30MX-Diesel-LPG-Forklift-Truck-App11.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ycolumn>
        <ycolumn bgclass="background-grey-lightester" yclass="desktopTabletOnly text-black container-vertical-aligned no-padding-top no-padding-bottom">
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="richtext">
                            <div class="width-100 text-left">
                                <h3>维修场景图</h3>
                                <p>TODO: 这边记得改，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh，balh。</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 vertical-align-middle">
                <div class="container-inner">
                    <div class="parsys">
                        <div class="imagecomponent">
                            <div class="container-image no-padding-top  no-padding-bottom text-black clearfix">
                                <my-picture src="/static/fp/Service-forklift-alat-berat-blog.jpg" alt=""/>
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
import MyCallToAction from '../commons/MyCallToAction'
export default {
  name: 'introduction',
  components: {
    MyCallToAction
  },
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
