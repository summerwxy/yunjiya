<template>
    <footer>
        <div>
            <div class="footer iparsys parsys">
                <ycolumn bgclass="background-black" bgimg="" yclass="everyDevice text-white padding-2x-top padding-4x-bottom">
                    <div class="col-sm-3">
                        <div class="container-inner">
                            <div class="parsys">
                                <div class="richtext">
                                    <div class="padding-2x-top width-100">
                                        <h6>联系我们</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="textwithicon">
                                    <div>
                                        <div class="icon-column">
                                            <i class="fa fa-map-marker fa-fw fa-lg"></i>
                                        </div>
                                        <div class="text-column">
                                            <router-link to="forklift-dealers">
                                                <div>
                                                    <p>查找经销商</p>
                                                </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="textwithicon">
                                    <div>
                                        <div class="icon-column">
                                            <i class="fa fa-group fa-fw fa-lg"></i>
                                        </div>
                                        <div class="text-column">
                                            <a href="http://www.crown.com/content/zh-cn/contact-us.html">
                                                <div>
                                                    <p>联系我们</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="textwithicon">
                                    <div>
                                        <div class="icon-column">
                                            <i class="fa fa-phone fa-fw fa-lg"></i>
                                        </div>
                                        <div class="text-column">
                                            <p>13812791230</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 ">
                        <div class="container-inner">
                            <div class="parsys">
                                <div class="richtext">
                                    <div class=" padding-2x-top width-100">
                                        <h6>关于 Yunjiya-云吉亚</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="textwithicon">
                                    <div>
                                        <div class="text-column-no-padding">
                                            <router-link to="/introduction">
                                                <div>
                                                    <p>公司简介</p>
                                                </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="textwithicon">
                                    <div>
                                        <div class="text-column-no-padding">
                                            <a href="http://www.crown.com/content/zh-cn/careers.html">
                                                <div>
                                                    <p>招贤纳士</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="container-inner">
                            <div class="parsys"></div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="container-inner">
                            <div class="parsys">
                                <div class="richtext">
                                    <div class="padding-2x-top width-100">
                                        <h6>站内搜索</h6>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="sitesearchbox">
                                    <form action="http://www.crown.com/zh-cn/search-results.html" accept-charset="UTF-8">
                                        <label for="sitesearch">
                                            <i class="fa fa-search sitesearch-icon"></i> 
                                            <span class="sr-only">
                                                Search
                                            </span>
                                        </label>
                                        <input id="sitesearch" class="sitesearch" maxlength="2048" name="q" placeholder="搜索 Yunjiya-云吉亚"/>
                                    </form>            
                                </div>
                            </div>
                        </div>
                    </div>
                </ycolumn>
                <ycolumn bgclass="background-black" bgimg="" yclass="everyDevice text-white">
                    <div class="col-sm-8 ">
                        <div class="container-inner">
                            <div class="parsys">
                                <div class="richtext">
                                    <div class="width-100 text-left">
                                        <p>
                                            <span class="text-grey-lighter">
                                                &nbsp; © 2017 云吉亚设备有限公司 &nbsp; | 
                                                &nbsp; <a href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备10099999号</a> &nbsp;
                                            </span>
                                        </p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 ">
                        <div class="container-inner">
                            <div class="parsys">
                                <div class="socialicons">
                                    <div>
                                        <ul id="footer-column_0-column2-socialicons-connect-list" role="group">
                                            <li>
                                                <a v-if="false" href="https://wx.qq.com/undefined?lang=zh_CN" target="_blank" tabindex="-1">
                                                    <i class="fa fa-wechat fa-fw"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ycolumn>
                <div class="new section">
                </div>
                <div class="iparys_inherited">
                    <div class="par">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'i am my-header tag'
    }
  }
}
</script>

<style scoped>

</style>
