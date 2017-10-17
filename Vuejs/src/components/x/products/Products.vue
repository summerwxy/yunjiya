<template>
    <div class="products">
        <div class="column">
            <div class="container-fluid background-grey-darker ">
                <div class="container background-grey-darker ">
                    <div class="clearfix row background-grey-darker everyDevice text-white padding-6x-top  padding-6x-bottom" style="background-image: url('http://www.crown.com/content/dam/crown/images/products-page/forklift-showroom-bg-hero.jpg');background-repeat: no-repeat; background-size: cover; background-position: center center;">
                        <div class="col-sm-8 ">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="richtext">
                                        <div class="    width-90 component-left">
                                            <h1>产品</h1>
                                            <h2>推动用户业务发展</h2>
                                            <p>Crown-科朗为托盘搬运、拣选和专业化作业提供门类齐全的叉车和物料搬运设备，推动用户业务增长。</p>
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
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div id="forklifts" class="container-fluid  ">
                <div class="container  ">
                    <div class="clearfix row  everyDevice text-black container-vertical-aligned padding-4x-top" style="background-image: url('');background-repeat: no-repeat; background-size: cover; background-position: center center;">
                        <div class="col-sm-4 vertical-align-middle">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="richtext">
                                        <div class="padding-2x-bottom width-90">
                                            <h2>Crown-科朗叉车</h2>
                                            <p>Crown-科朗产品设计、制造和支持方面处处体现着Crown-科朗对叉车创新技术、耐用性和生产效率的孜孜以求。</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="calltoactionbutton">
                                        <div class="text-left">
                                            <a href="http://www.crown.com/zh-cn/forklifts.html" class="btn btn-cta text-white background-orange">查看Crown-科朗全系列叉车</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 vertical-align-middle">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="imagecomponent">
                                        <div class="container-image text-black clearfix">
                                            <my-picture src="http://www.crown.com/content/dam/crown/images/products-page/sc-featured-forklift.jpg" alt="Crown SC6000 lift truck"></my-picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="container-fluid  ">
                <div class="container  ">
                    <div class="clearfix row  everyDevice text-black   padding-2x-top  padding-4x-bottom" style="background-image: url('');background-repeat: no-repeat; background-size: cover; background-position: center center;">
                        <div class="col-sm-6 ">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="richtext">
                                        <div class="    width-90 ">
                                            <h4><a href="http://www.crown.com/zh-cn/pre-owned-forklifts.html">二手叉车</a></h4>
                                            <p>Crown-科朗二手叉车能够提供与新Crown-科朗叉车同样可靠的服务。我们的二手叉车包括各类仍然“坚固好用”的托盘搬运车。</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="calltoactionbutton">
                                        <div class="Left     ">
                                            <a href="http://www.crown.com/zh-cn/pre-owned-forklifts.html" class="btn btn-plain text-black ">了解更多</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 ">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="richtext">
                                        <div class="    width-90 text-left">
                                            <h4><a href="http://www.crown.com/zh-cn/forklift-rentals.html">租赁计划</a></h4>
                                            <p>用户可随时租用需要的叉车。基于行业领先的技术支持，Crown-科朗经销商网络有功能最齐全的最新型叉车可供租赁。</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="calltoactionbutton">
                                        <div class="Left     ">
                                            <a href="http://www.crown.com/zh-cn/forklift-rentals.html" class="btn btn-plain text-black ">了解更多</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MyCallToAction></MyCallToAction>

        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
  name: 'products',
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
