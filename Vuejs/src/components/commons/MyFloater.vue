<template>

    <div class="socialconnect">
        <ul id="mainpar-socialconnect-connect-list" role="group" class="socialConnect background-black text-white">
            <li>     
                <a href="http://www.crown.com/zh-cn/forklift-dealers.html" tabindex="-1" data-gtm-event="locateDealer" data-gtm-info="cta">
                    <span class="social-title">查找经销商</span>
                    <i class="fa fa-map-marker fa-fw"></i>
                </a>              
            </li>   
            <li> 
                <a href="#" data-toggle="modal" data-target="#modal-contact-form">
                    <span class="social-title">请求更多信息</span>
                    <i class="fa fa-comment fa-fw"></i>
                </a>
            </li>   
            <li>   
                <a href="mailto:?Subject=科朗设备公司%20%7C%20中国%20%7C%20您的物料搬运设备和解决方案的提供者&amp;body=你好，我在crown.com看到这个，你可能会感兴趣。请点击以下链接：%3Chttp%3A%2F%2Fwww.crown.com%2Fzh-cn.html%3E" tabindex="-1">
                    <span class="social-title">通过电子邮件分享</span>
                    <i class="fa fa-envelope-o fa-fw"></i>
                </a>           
            </li>
        </ul>
        <!-- 
        <script>
            'use strict';

            jQuery(document).ready (function (){
                var $socialShare = jQuery('#mainpar\u002Dsocialconnect-connect-list');
                $socialShare.find('li').hover(function() {
                    jQuery(this).addClass('hover');
                }, function() {
                    jQuery(this).removeClass('hover');
                });
                }
            );
        </script>
        -->
    </div>

</template>

<script>
export default {
  name: 'floater',
  data () {
    return {
      msg: 'i am my-header tag'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
