<template>
    <header>
        <div class="modal fade" id="ecatalog-viewer-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-full-page">
                <div class="modal-content">
                    <a class="btn close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                    <div class="modal-body">
                        <div id="ecatalog"></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="header iparsys parsys">
                <div class="header">
                    <header class="header-main">
                        <div class="hidden-xs">
                            <div class="container-fluid clearfix localeselectorheader background-light-black">
                                <div id="menubar" class="container">
                                    <ul>               
                                        <li><i class="fa fa-phone"></i> {{header_phone}}</li>
                                        <li> | </li>
                                        <li><i class="fa fa-envelope-o"></i> {{header_email}} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        <nav class="navbar theme-nav-main" role="navigation">
                            <div class="theme-container-nav">
                                <div class="navbar-header">
                                    <div class="nav-logo">
                                        <router-link :to="'/'" class="navbar-brand theme-navbar-brand">
                                            <img class="img-responsive" :src="logo_url" :alt="logo_title" :title="logo_title" data-emptytext="Logo"/>
                                        </router-link>
                                    </div>
                                    <div class="nav-button-navigation navbar-right text-right hidden-lg">  
                                        <ul class="list-inline">
                                            <li>
                                                <a href="http://www.crown.com/zh-cn/forklift-dealers.html" class="btn-dealerLocator btn-orange">
                                                    <i class="fa fa-map-marker"></i> <span class="btn-dealerLocator-text">查找当地经销商</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn-search text-black " data-toggle="modal" data-target="#modal-search">
                                                    <i class="fa fa-search"></i> <span class="btn-search-text hidden-xs">搜索 Crown-科朗</span>                          
                                                </a>
                                            </li>
                                        </ul>
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main" aria-expanded="false" aria-controls="navbar">   
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="hamburger">
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </span>
                                            <span class="close">&times;</span>
                                        </button>
                                    </div>
                                    <div class="collapse navbar-collapse theme-navbar-collapse " id="navbar-main">
                                        <ul class="nav navbar-nav theme-navbar-nav ">
                                            <li class="dropdown">
                                                <a data-target="#" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    产品
                                                </a>
                                                <label class="hidden">Drawer</label>
                                                <div class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/forklifts.html">全新叉车</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/forklift-rentals.html">租赁叉车</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/pre-owned-forklifts.html">二手叉车</a>
                                                                    </li>                
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/products.html">查看所有产品</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="drawer-side-content">
                                                                jQuery("#drawer-side-content").load("\/content\/zh\u002Dcn\/main\u002Dnavigation\u002Ddrawer\/products.html #content");
                                                            </div>                    
                                                        </div>
                                                    </div>
                                                    <div class="container visible-lg">
                                                        <div class="row">
                                                            <div class="col-xs-12 container-theme-nav-dropdown-close">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-bottom-line"></div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a data-target="#" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    解决方案
                                                </a><label class="hidden"> Drawer</label>
                                                <div class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/fleet-management.html">车队管理</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/financing.html">金融方案</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/solutions.html">查看所有解决方案</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="drawer_0-side-content">
                                                                jQuery("#drawer_0-side-content").load("\/content\/zh\u002Dcn\/main\u002Dnavigation\u002Ddrawer\/solutions.html #content");
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="container visible-lg">
                                                        <div class="row">
                                                            <div class="col-xs-12 container-theme-nav-dropdown-close"></div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-bottom-line"></div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a data-target="#" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    支持
                                                </a>
                                                <label class="hidden"> Drawer</label>
                                                <div class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/safety-training.html">安全与培训</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/service-parts.html">服务与部件</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/forklift-dealers.html">经销商网络</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/support.html">查看所有支持</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="drawer_1-side-content">
                                                                jQuery("#drawer_1-side-content").load("\/content\/zh\u002Dcn\/main\u002Dnavigation\u002Ddrawer\/support.html #content");
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="container visible-lg">
                                                        <div class="row">
                                                            <div class="col-xs-12 container-theme-nav-dropdown-close"></div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-bottom-line"></div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a data-target="#" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    为什么选择 Crown-科朗
                                                </a>
                                                <label class="hidden"> Drawer</label>
                                                <div class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/customer-results.html">客户案例</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/sustainability.html">可持续发展</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/awards.html">行业认可</a>
                                                                    </li>
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/zh-cn/why-crown.html">为什么选择 Crown-科朗</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="drawer_2-side-content">
                                                                jQuery("#drawer_2-side-content").load("\/content\/zh\u002Dcn\/main\u002Dnavigation\u002Ddrawer\/why\u002Dcrown.html #content");
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="container visible-lg">
                                                        <div class="row">
                                                            <div class="col-xs-12 container-theme-nav-dropdown-close"></div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-bottom-line"></div>
                                                </div>
                                            </li>
                                            <li data-name="createddrawer_3" data-path="/content/zh-cn/jcr:content/header/header/mainnav/createddrawer_3">
                                                <a href="#modal-contact-form" data-toggle="modal" data-target="#modal-contact-form" class="dropdown-toggle link-only mobile-only link-only">联系我们</a>
                                            </li>
                                            <li data-name="createddrawer_4" data-path="/content/zh-cn/jcr:content/header/header/mainnav/createddrawer_4">
                                                <a href="http://www.crown.com/en-cn.html" class="dropdown-toggle link-only mobile-only link-only">English</a>
                                            </li>
                                            <li class="dropdown">
                                                <a href="http://www.crown.com/global-selector-page.html" class="{drawer.textColor} mobile-only link-only" onclick="Crown.Common.Cookies.eraseCookie('crownlocation');">Location / Language</a>
                                                <label class="hidden" id="Location / Language">Location / Language Drawer</label>
                                                <div class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu" aria-labelledby="Location / Language">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation">
                                                                        <a role="menuitem" tabindex="-1" href="http://www.crown.com/global-selector-page.html" onclick="Crown.Common.Cookies.eraseCookie('crownlocation');">中国（切换)</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="createddrawer_5-side-content">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="container visible-lg">
                                                        <div class="row">
                                                            <div class="col-xs-12 container-theme-nav-dropdown-close">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-bottom-line"></div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="hidden-lg">
                                            <div class="col-xs-12 container-theme-nav-dropdown-close">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nav-button-navigation navbar-right visible-lg">
                                        <ul class="list-inline">
                                            <li>
                                                <a href="http://www.crown.com/zh-cn/forklift-dealers.html" class="btn-dealerLocator btn-orange">
                                                    <i class="fa fa-map-marker"></i>
                                                    <span class="btn-dealerLocator-text">查找当地经销商</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn-search btn-rounded btn-grey-lightester text-black " data-toggle="modal" data-target="#modal-search">
                                                    <i class="fa fa-search"></i> <span class="btn-search-text">搜索 Crown-科朗</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="breadcrumb-container">
                                    <div class="breadcrumb"></div>
                                </div>
                            </div>


                            <div class="modal fade modal-sitesearch " id="modal-search" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="container">
                                            <a class="btn close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container container-sitesearch">
                                                <form action="http://www.crown.com/zh-cn/search-results.html" accept-charset="UTF-8">
                                                    <label for="sitesearch">
                                                        <i class="fa fa-search sitesearch-icon"></i> 
                                                        <span class="sr-only">
                                                            Search
                                                        </span>
                                                    </label>
                                                    <input id="sitesearch" class="sitesearch" maxlength="2048" name="q" placeholder="站内搜索"/>
                                                </form>            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
    </header>
</template>


 


<script>
export default {
  name: 'header',
  data () {
    return {
      header_phone: '13812791230',
      header_email: 'lemon@yunjiya.cn',
      logo_url: '/static/title_logo.png',
      logo_title: '云吉亚 Yunjiya',
      dummy: 'DUMMY'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>







</style>
