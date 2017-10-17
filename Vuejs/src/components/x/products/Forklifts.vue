<template>

    <div class="forklifts">
        <div class="column">
            <div class="container-fluid background-blacker ">
                <div class="container background-blacker ">
                    <div class="clearfix row background-blacker everyDevice text-white   padding-4x-top  padding-4x-bottom" style="background-image: url('');background-repeat: no-repeat; background-size: cover; background-position: center center;">
                        <div class="col-sm-8 ">
                            <div class="container-inner">
                                <div class="parsys">
                                    <div class="richtext">
                                        <div class="width-100 component-left">
                                            <h1>{{title}}</h1>
                                            <h2>{{subtitle}}</h2>
                                            <p>{{describe}}</p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 ">
                            <div class="container-inner">
                                <div class="parsys"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="stickynav">
            <div>
                <div class="wrapper-stickynav">
                    <div class="container-fluid background-grey-lightest">
                        <div class="container-stickynav background-grey-lightest">
                            <div class="container">
                                <div class="background-grey-lightest     ">
                                    <div class="container-stickynav-parent">
                                        <ul id="mainpar-stickynav-anchor-list" class="nav text-black">
                                            <li role="presentation">
                                                <a href="#counterbalanceforklifts" class="btn-stickynav">平衡重叉车</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#verynarrowaisletrucks" class="btn-stickynav">特窄通道叉车</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#reachtrucks" class="btn-stickynav">前移式叉车</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#orderpickers" class="btn-stickynav">拣选车</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#stackers" class="btn-stickynav">堆高机</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#pallettrucks" class="btn-stickynav">托盘搬运车</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#towtractors" class="btn-stickynav">牵引车</a>
                                            </li>
                                            <li class="pull-right container-cta" role="presentation">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="productmatrix" v-for="(product, i) in products">
            <div :class="['container-fluid', {'background-grey-lightestest': (i % 2 == 1)}]">
                <div :class="['container', 'text-black', 'padding-2x-top', 'padding-2x-bottom', 'total-items-' + product.series.length]">
                    <div :id="product.id">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>{{product.title}}</h3>
                                        <h5>{{product.subtitle}}</h5>
                                        <p>{{product.describe}}</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div v-for="(ser, j) in product.series" :class="['col-sm-6', 'item', {'item-height-2x': product.x2}, 'nth-child-' + (j + 1), {'odd': ((j + 1) % 2 == 1)}, {'even': ((j + 1) % 2 == 0)}, {'last-child': ((j + 1) == product.series.length)}]">
                                        <picture>
                                            <!-- [if IE 9]><video style="display: none;"><![endif]-->
                                            <source :srcset="getBg1(ser.prefix)" media="(max-width: 767px)">
                                            <source :srcset="getBg2(ser.prefix)" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img :src="getBg2(ser.prefix)" :alt="ser.title" :title="ser.title"/>
                                        </picture>
                                        <h5 class="item-title">{{ser.title}}</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source :srcset="getBg3(ser.prefix)" media="(max-width: 767px)">
                                                    <source :srcset="getBg4(ser.prefix)" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img :src="getBg4(ser.prefix)" :alt="ser.title" :title="ser.title"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">{{ser.overlayTitle}}</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li v-for="(feature, k) in ser.features">{{feature}}</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" :href="ser.url">了解{{ser.title}}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 " v-if="(product.series.length % 2) == 1">
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
  name: 'forklifts',
  data () {
    return {
      title: '叉车',
      subtitle: '优越的性能，屡获殊荣的设计',
      describe: '我们的设计以提高操作员作业效率、安全性和产品寿命为核心，通过提供长期价值使Crown-科朗成为用户的最佳选择。',
      products: [{
        id: 'counterbalanceforklifts',
        title: '平衡重叉车',
        subtitle: '提升可靠性标杆',
        x2: false,
        describe: '无论是平台上还是通道内，Crown-科朗平衡重叉车可凭借超强动力、作业效率和性能适应最严酷的应用工况。',
        series: [{
          prefix: 'rc-series',
          title: 'RC系列',
          overlayTitle: '三轮站驾式电动平衡重叉车',
          features: ['承载能力：最高1800kg', '提升高度：最高7010mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rc-stand-up-rider-counterbalanced-truck.html'
        }, {
          prefix: 'sc-6000-series',
          title: 'SC系列',
          overlayTitle: '三轮和四轮坐驾式电动平衡重叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高7490mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/sc-sit-down-counterbalanced-truck.html'
        }, {
          prefix: 'fc5200',
          title: 'FC系列',
          overlayTitle: '四轮坐驾式电动平衡重叉车',
          features: ['承载能力：最高3000kg', '提升高度：最高7925mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/fc-sit-down-counterbalanced-truck.html'
        }]
      }, {
        id: 'verynarrowaisletrucks',
        x2: true,
        title: '特窄通道叉车',
        subtitle: '专为性能设计',
        describe: '穿越狭窄的通道时，需要具备高度的灵活性和操控能力。Crown-科朗的 特窄通道叉车精良的设计带来了卓越的舒适度和稳定性，可以轻松完成各项任务。',
        series: [{
          prefix: 'tsp-series',
          title: 'TSP系列',
          overlayTitle: '三向叉车',
          features: ['承载能力：最高1500kg', '提升高度：最高17145mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/tsp-turret-stockpicker.html'
        }]
      }, {
        id: 'reachtrucks',
        x2: true,
        title: '前移式叉车',
        subtitle: '作业效率达到新高度',
        describe: 'Crown-科朗前移式叉车系列通过前所未有的提升高度、承载能力、多功能性和节能性帮助用户实现物料的高效运送和存储。',
        series: [{
          prefix: 'rr-series',
          title: 'RR/RD系列',
          overlayTitle: '前移式叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高11225mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rr-rd-rider-deep-reach-truck.html'
        }, {
          prefix: 'rm-series',
          title: 'RM/RMD系列',
          overlayTitle: '方柱型门架前移式叉车',
          features: ['承载能力：最高2040kg', '提升高度：最高12825mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rm-rmd-rider-deep-reach-monolift-mast-truck.html'
        }, {
          prefix: 'sr-series',
          title: 'ESR系列',
          overlayTitle: '配备冷库驾驶室的前移式叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高13000mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/esr-reach-truck.html'
        }]
      }, {
        id: 'orderpickers',
        x2: true,
        title: '拣选车',
        subtitle: '让卓越性能更进一步',
        describe: '无论是平地作业，还是高处作业，Crown-科朗拣选车都对拣选工艺进行了优化。叉车卓越的性能、稳定性和行业领先的人体工学设计让操作员更加高效、自信地完成各项工作。',
        series: [{
          prefix: 'gpc-series',
          title: 'GPC系列',
          overlayTitle: '中心控制托盘搬运车',
          features: ['承载能力：最高2700kg'],
          url: 'http://www.crown.com/zh-cn/forklifts/gpc-low-level-order-picker.html'
        }, {
          prefix: 'sp-series',
          title: 'SP系列',
          overlayTitle: '高位拣选车',
          features: ['承载能力：最高1250kg', '提升高度：最高9600mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/sp-stockpicker.html'
        }, {
          prefix: 'wav60-series',
          title: 'WAV系列',
          overlayTitle: '多功能拣选车',
          features: ['操作员承载能力：最高135kg', '装载托盘承载能力：最高90kg', '装载甲板承载能力：最高115kg', '提升高度：最高 2997mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/wave-work-assist-vehicle.html'
        }]
      }, {
        id: 'stackers',
        x2: true,
        title: '堆高机',
        subtitle: '值得信赖的控制性能',
        describe: 'Crown-科朗将安全与效率融入每种堆高机设计。操作简便的全系列步行式堆高机提供卓越的操纵性和应用灵活性。',
        series: [{
          prefix: 'st-series',
          title: 'ST/SX系列',
          overlayTitle: '步行式跨腿堆高机',
          features: ['承载能力：最高1350kg', '提升高度：最高4250mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/st-sx-stacker.html'
        }, {
          prefix: 'sh-series',
          title: 'SH/SHR系列',
          overlayTitle: '重型堆高机',
          features: ['承载能力：最高1800kg', '提升高度：最高4875mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/sh-shr-heavy-duty-reach-stacker.html'
        }, {
          prefix: 'es-series',
          title: 'ES系列',
          overlayTitle: '堆高机',
          features: ['承载能力：最高1600kg', '提升高度：最高5400mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/es-fork-over-stacker.html'
        }, {
          prefix: 'et-series',
          title: 'ET系列',
          overlayTitle: '堆高机',
          features: ['承载能力：最高1600kg', '提升高度：最高5400mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/et-platform-stacker.html'
        }, {
          prefix: 'dt-series',
          title: 'DT系列',
          overlayTitle: '双托盘堆高机',
          features: ['承载能力：最高2000kg', '提升高度：最高2600mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/dt-double-stacker-pallet-truck.html'
        }, {
          prefix: 'wf-series',
          title: 'WF系列',
          overlayTitle: '堆高机',
          features: ['承载能力：最高1200kg', '提升高度：最高4400mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/wf-pallet-stacker.html'
        }]
      }, {
        id: 'pallettrucks',
        x2: false,
        title: '托盘搬运车',
        subtitle: '作业效率大幅提升',
        describe: '从手动托盘搬运车到电动坐驾式托盘搬运车，Crown-科朗可为任何托盘搬运作业提供适当型号的叉车。创新设计和坚固结构确保长期高价值和多功能性。',
        series: [{
          prefix: 'pth-series',
          title: 'PTH系列',
          overlayTitle: '手动托盘搬运车',
          features: ['承载能力：最高2300kg'],
          url: 'http://www.crown.com/zh-cn/forklifts/pth-hand-pallet-truck.html'
        }, {
          prefix: 'wp-series',
          title: 'WP系列',
          overlayTitle: '步行式托盘搬运车',
          features: ['承载能力：最高2020kg'],
          url: 'http://www.crown.com/zh-cn/forklifts/wp-pallet-truck.html'
        }, {
          prefix: 'pw-series',
          title: 'PW系列',
          overlayTitle: '步行式托盘搬运车',
          features: ['承载能力：最高3600kg'],
          url: 'http://www.crown.com/zh-cn/forklifts/pw-pallet-truck.html'
        }, {
          prefix: 'pe-series',
          title: 'PE系列',
          overlayTitle: '末端控制托盘搬运车',
          features: ['承载能力：最高3640kg', '货叉：二级或三级'],
          url: 'http://www.crown.com/zh-cn/forklifts/pe-end-controlled-rider-pallet-truck.html'
        }, {
          prefix: 'pc-series',
          title: 'PC系列',
          overlayTitle: '中心控制托盘搬运车',
          features: ['承载能力：最高3600kg', '货叉：二级或三级'],
          url: 'http://www.crown.com/zh-cn/forklifts/pc-center-controlled-rider-pallet-truck.html'
        }, {
          prefix: 'pr-series',
          title: 'PR系列',
          overlayTitle: '站驾式托盘搬运车',
          features: ['承载能力：最高3000kg', '货叉：二级或三级'],
          url: 'http://www.crown.com/zh-cn/forklifts/pr-rider-pallet-truck.html'
        }, {
          prefix: 'wt-series',
          title: 'WT系列',
          overlayTitle: '带站板托盘搬运车',
          features: ['承载能力：最高2500kg', '站板：折叠或固定'],
          url: 'http://www.crown.com/zh-cn/forklifts/wt-platform-pallet-truck.html'
        }, {
          prefix: 'orderpick',
          title: 'QuickPick Remote',
          overlayTitle: '快速拣选远程控制技术',
          features: ['自动化工作流程能提高作业效率最高达25%'],
          url: 'http://www.crown.com/zh-cn/forklifts/quickpick-order-picker.html'
        }]
      }, {
        id: 'towtractors',
        x2: false,
        title: '牵引车',
        subtitle: '帮你完成最艰巨的任务',
        describe: '创新的技术和坚固的结构是Crown-科朗牵引车高品质的基础，它为生产、仓库和配送中心应用工况提供出色的牵引力和控制性能。',
        series: [{
          prefix: 'tr-series',
          title: 'TR系列',
          overlayTitle: '牵引车',
          features: ['承载能力：最高4535kg'],
          url: 'http://www.crown.com/zh-cn/forklifts/tr-tow-tractor.html'
        }]
      }],
      dummy: 'DUMMY'
    }
  },
  methods: {
    getBg1: function (s) {
      return 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/' + s + '.png.transform/mobile-image/img..png'
    },
    getBg2: function (s) {
      return 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/' + s + '.png'
    },
    getBg3: function (s) {
      s = (s === 'orderpick') ? s + '-series' : s
      return 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/' + s + '-selected.png.transform/mobile-image/img..png'
    },
    getBg4: function (s) {
      s = (s === 'orderpick') ? s + '-series' : s
      return 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/' + s + '-selected.png'
    }
  },
  mounted () {
    this.$nextTick(() => {
      var jQuery = window.jQuery
      jQuery(document).ready(function () {
        jQuery('.productmatrix').each(function (key, value) {
          jQuery(this).on('click', '.item:not(.open, .item-group-intro)', function () {
            jQuery(this).addClass('open')
          }).on('click', '.container-overlay-text', function () {
            jQuery(this).closest('.item').removeClass('open')
          })
        })
      })
      // close item when clicking out side of an item.
      jQuery(document).mouseup(function (e) {
        var container = jQuery('.item')
        if (!container.is(e.target) && // if the target of the click isn't the container...
          container.has(e.target).length === 0) { // ... nor a descendant of the container
          container.removeClass('open')
        }
      })
      window.initStickyNav()
    })
  }
}
</script>

<style scoped>

</style>
