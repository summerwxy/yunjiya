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
                                                <a href="tel:13812791230" class="btn-dealerLocator btn-orange">
                                                    <i class="fa fa-phone"></i>
                                                    <span class="btn-dealerLocator-text">13812791230</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn-search text-black " data-toggle="modal" data-target="#modal-search">
                                                    <i class="fa fa-search"></i> <span class="btn-search-text hidden-xs">搜索 Yunjiya-云吉亚</span>                          
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
                                            <li v-for="(category, index) in menu" :class="{'dropdown': !category.path, 'nav-item': !!category.path}">

                                                <router-link v-if="!!category.path" class="nav-link" :to="'/' + category.path">{{category.category}}</router-link>

                                                <a v-if="!category.path" data-target="#" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {{ category.category }}
                                                </a>
                                                <label v-if="!category.path" class="hidden">Drawer</label>
                                                <div v-if="!category.path" class="dropdown-menu theme-nav-dropdown-menu background-black" role="menu">
                                                    <div class="container container-dropdown text-white background-black">
                                                        <div class="row">
                                                            <div class="col-sm-4 theme-nav-dropdown-menu-list-container">
                                                                <ul class="theme-nav-dropdown-menu-list">
                                                                    <li role="presentation" v-for="(item, j) in category.items">
                                                                        <router-link :to="'/' + item.path">{{item.title}}</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-sm-8 hidden-xs container-side-content" id="drawer-side-content">
                                                                [SOMETHING HERE]
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

                                            <li v-for="(link, i) in links">
                                                <a :href="link.url" class="dropdown-toggle link-only mobile-only link-only" style="color: lightpink;">{{link.text}}</a>
                                            </li>
                                        </ul>
                                        <div class="hidden-lg">
                                            <div class="col-xs-12 container-theme-nav-dropdown-close">
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="false" class="nav-button-navigation navbar-right visible-lg">
                                        <ul class="list-inline">
                                            <li>
                                                <a href="tel:13812791230" class="btn-dealerLocator btn-orange">
                                                    <i class="fa fa-phone"></i>
                                                    <span class="btn-dealerLocator-text">13812791230</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn-search btn-rounded btn-grey-lightester text-black " data-toggle="modal" data-target="#modal-search">
                                                    <i class="fa fa-search"></i> <span class="btn-search-text">搜索 Yunjiya-云吉亚</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="breadcrumb-container">
                                    <div class="breadcrumb">
                                        <router-link :to="'/'">返回主页</router-link> / 
                                    </div>
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
// TODO: 處理 7xxpx ~ 1200px 寬度的時候, menu 怪怪的
export default {
  name: 'header',
  data () {
    return {
      header_phone: '联系电话：13812791230',
      header_email: '电子邮箱：lemon@yunjiya.cn',
      logo_url: '/static/title_logo.png',
      logo_title: '云吉亚机械 Yunjiya',
      menu: [{
        category: '公司简介',
        path: 'introduction'
      }, {
        category: '产品展示',
        items: [{title: '品牌A', path: 'brand/aa'},
          {title: '品牌B', path: 'brand/bb'},
          {title: '品牌C', path: 'brand/cc'},
          {title: '品牌D', path: 'brand/dd'}]
      }, {
        category: '二手车业务',
        path: 'used'
      }, {
        category: '租赁业务',
        path: 'rental'
      }, {
        category: '配件维修',
        path: 'parts'
      }, {
        category: '动态',
        path: 'news'
      }, {
        category: '[X]',
        items: [{title: '产品-全新叉车', path: 'forklifts'},
          {title: '产品-租赁叉车', path: 'rentals'},
          {title: '产品-二手叉车', path: 'pre-owned'},
          {title: '产品-查看所有产品', path: 'products'},
          {title: '解决方案-车队管理', path: 'fleet-management'},
          {title: '解决方案-金融方案', path: 'financing'},
          {title: '解决方案-查看所有解决方案', path: 'solutions'},
          {title: '支持-安全与培训', path: 'safety-training'},
          {title: '支持-服务与部件', path: 'service-parts'},
          {title: '支持-经销商网络', path: 'forklift-dealers'},
          {title: '支持-查看所有支持', path: 'support'},
          {title: '为什么-客户案例', path: 'customer-results'},
          {title: '为什么-可持续发展', path: 'sustainability'},
          {title: '为什么-行业认可', path: 'awards'},
          {title: '为什么-为什么选择 Yunjiya-云吉亚', path: 'why'}]
      }],
      links: [
        {text: '联系电话：13812791230', url: 'tel:13812791230'},
        {text: '电子邮箱：lemon@yunjiya.cn', url: 'mailto:?Subject=云吉亚，你好！我有一些需要'}
      ],
      dummy: 'DUMMY'
    }
  }
}
</script>

<style scoped>
@media (min-width: 1199px) {
    .header-main .theme-navbar-nav>li>a.nav-link:after {
        content: '';
    }
}
</style>