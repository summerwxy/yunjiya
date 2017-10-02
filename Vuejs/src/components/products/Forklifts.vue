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
                <div class="container text-black padding-2x-top padding-2x-bottom">
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
                                    <div v-for="(ser, j) in product.series" :class="['col-sm-6', 'item', 'item-height-2x', 'nth-child-' + (j + 1), {'odd': ((j + 1) % 2 == 1)}, {'even': ((j + 1) % 2 == 0)}, {'last-child': ((j + 1) == product.series.length)}]">
                                        <picture>
                                            <!-- [if IE 9]><video style="display: none;"><![endif]-->
                                            <source :srcset="ser.bg1" media="(max-width: 767px)">
                                            <source :srcset="ser.bg2" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img :src="ser.bg2" :alt="ser.title" :title="ser.title"/>
                                        </picture>
                                        <h5 class="item-title">{{ser.title}}</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source :srcset="ser.bg3" media="(max-width: 767px)">
                                                    <source :srcset="ser.bg4" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img :src="ser.bg4" :alt="ser.title" :title="ser.title"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">{{ser.overlayTitle}}</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li v-for="(feature, k) in ser.features">{{feature}}</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" :href="ser.url">{{ser.button}}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 " v-if="(product.series.length % 2) == 1">
                                        TODO: 奇怪 DOM有出現, 但是畫面上沒效果, 把上面的 total-item-1 2 3 4 5 放回去 就能解決
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div class="productmatrix">
            <div class="container-fluid ">
                <div class="container text-black total-items-3  padding-2x-top  padding-2x-bottom ">
                    <div id="reachtrucks">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>前移式叉车</h3>
                                        <h5>作业效率达到新高度</h5>
                                        <p>Crown-科朗前移式叉车系列通过前所未有的提升高度、承载能力、多功能性和节能性帮助用户实现物料的高效运送和存储。</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-6 item item-height-2x nth-child-1 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series.png?fmt=png-alpha" alt="RR/RD系列" title="RR/RD系列"/>
                                        </picture>
                                        <h5 class="item-title">RR/RD系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series-selected.png" alt="RR/RD系列" title="RR/RD系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">前移式叉车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2000kg</li>
                                                    <li>提升高度：最高11225mm</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/rr-rd-rider-deep-reach-truck.html">了解RR/RD系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-2 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series.png?fmt=png-alpha" alt="RM/RMD系列" title="RM/RMD系列"/>
                                        </picture>
                                        <h5 class="item-title">RM/RMD系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series-selected.png" alt="RM/RMD系列" title="RM/RMD系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">方柱型门架前移式叉车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2040kg</li>
                                                    <li>提升高度：最高12825mm</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/rm-rmd-rider-deep-reach-monolift-mast-truck.html">了解RM/RMD系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-3 odd last-child">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series.png?fmt=png-alpha" alt="ESR系列" title="ESR系列"/>
                                        </picture>
                                        <h5 class="item-title">ESR系列</h5>
                                    <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series-selected.png" alt="ESR系列" title="ESR系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">配备冷库驾驶室的前移式叉车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2000kg</li>
                                                    <li>提升高度：最高13000mm</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/esr-reach-truck.html">了解ESR系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="productmatrix">
            <div class="container-fluid background-grey-lightestest">
                <div class="container text-black total-items-3  padding-2x-top  padding-2x-bottom ">
                    <div id="orderpickers">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>拣选车</h3>
                                        <h5>让卓越性能更进一步</h5>
                                        <p>无论是平地作业，还是高处作业，Crown-科朗拣选车都对拣选工艺进行了优化。叉车卓越的性能、稳定性和行业领先的人体工学设计让操作员更加高效、自信地完成各项工作。</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-6 item item-height-2x nth-child-1 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series.png" alt="GPC系列" title="GPC系列"/>
                                        </picture>
                                        <h5 class="item-title">GPC系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/gpc-series-selected.png" alt="GPC系列" title="GPC系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">中心控制托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2700kg</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/gpc-low-level-order-picker.html">了解GPC系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-2 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series.png?fmt=png-alpha" alt="SP系列" title="SP系列"/>
                                        </picture>
                                        <h5 class="item-title">SP系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sp-series-selected.png" alt="SP系列" title="SP系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">高位拣选车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1250kg</li>
                                                    <li>提升高度：最高9600mm</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/sp-stockpicker.html">了解SP系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-3 odd last-child">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series.png?fmt=png-alpha" alt="WAV系列" title="WAV系列"/>
                                        </picture>
                                        <h5 class="item-title">WAV系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wav60-series-selected.png" alt="WAV系列" title="WAV系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">多功能拣选车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>操作员承载能力：最高135kg</li>
                                                    <li>装载托盘承载能力：最高90kg</li>
                                                    <li>装载甲板承载能力：最高115kg</li>
                                                    <li>提升高度：最高 2997mm</li>
                                                </ul>      
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/wave-work-assist-vehicle.html">了解WAV系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="productmatrix">
            <div class="container-fluid ">
                <div class="container text-black total-items-6  padding-2x-top  padding-2x-bottom ">
                    <div id="stackers">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>堆高机</h3>
                                        <h5>值得信赖的控制性能</h5>
                                        <p>Crown-科朗将安全与效率融入每种堆高机设计。操作简便的全系列步行式堆高机提供卓越的操纵性和应用灵活性。</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-6 item item-height-2x nth-child-1 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series.png?fmt=png-alpha" alt="ST/SX系列" title="ST/SX系列" />
                                        </picture>
                                        <h5 class="item-title">ST/SX系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/st-series-selected.png" alt="ST/SX系列" title="ST/SX系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">步行式跨腿堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1350kg</li>
                                                    <li>提升高度：最高4250mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/st-sx-stacker.html">了解ST/SX系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-2 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series.png?fmt=png-alpha" alt="SH/SHR系列" title="SH/SHR系列" />
                                        </picture>
                                        <h5 class="item-title">SH/SHR系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sh-series-selected.png" alt="SH/SHR系列" title="SH/SHR系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">重型堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1800kg</li>
                                                    <li>提升高度：最高4875mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/sh-shr-heavy-duty-reach-stacker.html">了解SH/SHR系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-3 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series.png.transform/mobile-image/img..png?fmt=png-alpha" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series.png?fmt=png-alpha" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series.png?fmt=png-alpha" alt="ES系列" title="ES系列" />
                                        </picture>
                                        <h5 class="item-title">ES系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/es-series-selected.png" alt="ES系列" title="ES系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1600kg</li>
                                                    <li>提升高度：最高5400mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/es-fork-over-stacker.html">了解ES系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-4 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series.png" alt="ET系列" title="ET系列" />
                                        </picture>
                                        <h5 class="item-title">ET系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/et-series-selected.png" alt="ET系列" title="ET系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1600kg</li>
                                                    <li>提升高度：最高5400mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/et-platform-stacker.html">了解ET系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-5 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series.png" alt="DT系列" title="DT系列" />
                                        </picture>
                                        <h5 class="item-title">DT系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/dt-series-selected.png" alt="DT系列" title="DT系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">双托盘堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2000kg</li>
                                                    <li>提升高度：最高2600mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/dt-double-stacker-pallet-truck.html">了解DT系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-height-2x nth-child-6 even last-child">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series.png" alt="WF系列" title="WF系列" />
                                        </picture>
                                        <h5 class="item-title">WF系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wf-series-selected.png" alt="WF系列" title="WF系列" />
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">堆高机</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高1200kg</li>
                                                    <li>提升高度：最高4400mm</li>
                                                </ul>
                                                <div class="container-cta">
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/wf-pallet-stacker.html">了解WF系列</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="productmatrix">
            <div class="container-fluid background-grey-lightestest">
                <div class="container text-black total-items-8  padding-2x-top  padding-2x-bottom ">
                    <div id="pallettrucks">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>托盘搬运车</h3>
                                        <h5>作业效率大幅提升</h5>
                                        <p>从手动托盘搬运车到电动坐驾式托盘搬运车，Crown-科朗可为任何托盘搬运作业提供适当型号的叉车。创新设计和坚固结构确保长期高价值和多功能性。</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-6 item nth-child-1 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series.png" alt="PTH系列" title="PTH系列"/>
                                        </picture>
                                        <h5 class="item-title">PTH系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pth-series-selected.png" alt="PTH系列" title="PTH系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">手动托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2300kg</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/pth-hand-pallet-truck.html">了解PTH系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-2 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series.png" alt="WP系列" title="WP系列"/>
                                        </picture>
                                        <h5 class="item-title">WP系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wp-series-selected.png" alt="WP系列" title="WP系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">步行式托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2020kg</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/wp-pallet-truck.html">了解WP系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-3 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series.png" alt="PW系列" title="PW系列"/>
                                        </picture>
                                        <h5 class="item-title">PW系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pw-series-selected.png" alt="PW系列" title="PW系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">步行式托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高3600kg</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/pw-pallet-truck.html">了解PW系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-4 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series.png" alt="PE系列" title="PE系列"/>
                                        </picture>
                                        <h5 class="item-title">PE系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pe-series-selected.png" alt="PE系列" title="PE系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">末端控制托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高3640kg</li>
                                                    <li>货叉：二级或三级</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/pe-end-controlled-rider-pallet-truck.html">了解PE系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-5 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series.png" alt="PC系列" title="PC系列"/>
                                        </picture>
                                        <h5 class="item-title">PC系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pc-series-selected.png" alt="PC系列" title="PC系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">中心控制托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高3600kg</li>
                                                    <li>货叉：二级或三级</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/pc-center-controlled-rider-pallet-truck.html">了解PC系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-6 even">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series.png" alt="PR系列" title="PR系列"/>
                                        </picture>
                                        <h5 class="item-title">PR系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/pr-series-selected.png" alt="PR系列" title="PR系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">站驾式托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高3000kg</li>
                                                    <li>货叉：二级或三级</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/pr-rider-pallet-truck.html">了解PR系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-7 odd">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series.png" alt="WT系列" title="WT系列"/>
                                        </picture>
                                        <h5 class="item-title">WT系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/wt-series-selected.png" alt="WT系列" title="WT系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">带站板托盘搬运车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高2500kg</li>
                                                    <li>站板：折叠或固定</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/wt-platform-pallet-truck.html">了解WT系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item nth-child-8 even last-child">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick.png" alt="QuickPick Remote" title="QuickPick Remote"/>
                                        </picture>
                                        <h5 class="item-title">QuickPick Remote</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/orderpick-series-selected.png" alt="QuickPick Remote" title="QuickPick Remote"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">快速拣选远程控制技术</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>自动化工作流程能提高作业效率最高达25%</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/quickpick-order-picker.html">了解QuickPick Remote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="productmatrix">
            <div class="container-fluid ">
                <div class="container text-black total-items-1  padding-2x-top  padding-2x-bottom ">
                    <div id="towtractors">
                        <div class="container-productmatrix container-fluid">
                            <div class="row">
                                <div class="col-sm-4 item-group-intro">
                                    <div>
                                        <h3>牵引车</h3>
                                        <h5>帮你完成最艰巨的任务</h5>
                                        <p>创新的技术和坚固的结构是Crown-科朗牵引车高品质的基础，它为生产、仓库和配送中心应用工况提供出色的牵引力和控制性能。</p>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-6 item nth-child-1 odd last-child">
                                        <picture>
                                            <!--[if IE 9]><video style="display: none;"><![endif]-->
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                            <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series.png" media="(min-width: 768px)">
                                            <!--[if IE 9]></video><![endif]-->
                                            <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series.png" alt="TR系列" title="TR系列"/>
                                        </picture>
                                        <h5 class="item-title">TR系列</h5>
                                        <div class="overlay">
                                            <div class="container-overlay-image">
                                                <picture>
                                                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series-selected.png.transform/mobile-image/img..png" media="(max-width: 767px)">
                                                    <source srcset="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series-selected.png" media="(min-width: 768px)">
                                                    <!--[if IE 9]></video><![endif]-->
                                                    <img src="http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tr-series-selected.png" alt="TR系列" title="TR系列"/>
                                                </picture>
                                            </div>
                                            <div class="container-overlay-text">
                                                <h6 class="item-overlay-title">牵引车</h6>
                                                <i class="fa fa-arrow-circle-down overlay-close"></i>
                                                <ul class="item-features">
                                                    <li>承载能力：最高4535kg</li>
                                                </ul>
                                                <div class="container-cta">                      
                                                    <a class="btn btn-cta background-orange text-white" href="http://www.crown.com/zh-cn/forklifts/tr-tow-tractor.html">了解TR系列
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 item item-empty item-empty-1 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="calltoactionpanel">
            <div class="container-fluid background-orange text-white    ">
                <input type="hidden" id="calltoactionsize" value="3"/>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 container-callToAction " v-for="(cta, i) in callToAction">  <!-- if i == 0 class = "first-child" -->
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
        describe: '无论是平台上还是通道内，Crown-科朗平衡重叉车可凭借超强动力、作业效率和性能适应最严酷的应用工况。',
        series: [{
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rc-series.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rc-series.png?fmt=png-alpha',
          title: 'RC系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rc-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rc-series-selected.png',
          overlayTitle: '三轮站驾式电动平衡重叉车',
          features: ['承载能力：最高1800kg', '提升高度：最高7010mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rc-stand-up-rider-counterbalanced-truck.html',
          button: '了解RC系列'
        }, {
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sc-6000-series.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sc-6000-series.png?fmt=png-alpha',
          title: 'SC系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sc-6000-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sc-6000-series-selected.png',
          overlayTitle: '三轮和四轮坐驾式电动平衡重叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高7490mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/sc-sit-down-counterbalanced-truck.html',
          button: '了解SC系列'
        }, {
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/fc5200.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/fc5200.png?fmt=png-alpha',
          title: 'FC系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/fc5200-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/fc5200-selected.png',
          overlayTitle: '四轮坐驾式电动平衡重叉车',
          features: ['承载能力：最高3000kg', '提升高度：最高7925mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/fc-sit-down-counterbalanced-truck.html',
          button: '了解FC系列'
        }]
      }, {
        id: 'verynarrowaisletrucks',
        title: '特窄通道叉车',
        subtitle: '专为性能设计',
        describe: '穿越狭窄的通道时，需要具备高度的灵活性和操控能力。Crown-科朗的 特窄通道叉车精良的设计带来了卓越的舒适度和稳定性，可以轻松完成各项任务。',
        series: [{
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tsp-series.png.transform/mobile-image/img..png',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tsp-series.png',
          title: 'TSP系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tsp-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/tsp-series-selected.png',
          overlayTitle: '三向叉车',
          features: ['承载能力：最高1500kg', '提升高度：最高17145mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/tsp-turret-stockpicker.html',
          button: '了解TSP系列'
        }]
      }, {
        id: 'reachtrucks',
        title: '前移式叉车',
        subtitle: '作业效率达到新高度',
        describe: 'Crown-科朗前移式叉车系列通过前所未有的提升高度、承载能力、多功能性和节能性帮助用户实现物料的高效运送和存储。',
        series: [{
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series.png?fmt=png-alpha',
          title: 'RR/RD系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rr-series-selected.png',
          overlayTitle: '前移式叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高11225mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rr-rd-rider-deep-reach-truck.html',
          button: '了解RR/RD系列'
        }, {
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series.png?fmt=png-alpha',
          title: 'RM/RMD系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/rm-series-selected.png',
          overlayTitle: '方柱型门架前移式叉车',
          features: ['承载能力：最高2040kg', '提升高度：最高12825mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/rm-rmd-rider-deep-reach-monolift-mast-truck.html',
          button: '了解RM/RMD系列'
        }, {
          bg1: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series.png.transform/mobile-image/img..png?fmt=png-alpha',
          bg2: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series.png?fmt=png-alpha',
          title: 'ESR系列',
          bg3: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series-selected.png.transform/mobile-image/img..png',
          bg4: 'http://www.crown.com/content/dam/crown/images/products-page/forklifts-page/sr-series-selected.png',
          overlayTitle: '配备冷库驾驶室的前移式叉车',
          features: ['承载能力：最高2000kg', '提升高度：最高13000mm'],
          url: 'http://www.crown.com/zh-cn/forklifts/esr-reach-truck.html',
          button: '了解ESR系列'
        }]
      }],
      callToAction: [{url: 'http://www.crown.com/zh-cn/', icon: 'fa fa-comment fa-3x fa-fw', title: '请求更多信息', text: '寻求我们的帮助。'},
        {url: 'http://www.crown.com/zh-cn/forklift-rentals.html', icon: 'fa icon-crown icon-forklift fa-3x fa-fw', title: '需要租赁叉车？', text: '详细了解我们的租赁库存。'},
        {url: 'http://www.crown.com/zh-cn/forklift-dealers.html', icon: 'fa fa-map-marker fa-3x fa-fw', title: '查找附近的Crown-科朗公司', text: '搜索Crown-科朗分公司或经销商。'}],
      dummy: 'DUMMY'
    }
  },
  mounted () {
    this.$nextTick(() => {
      // TODO: 有個 icon -forklift 這個需要處理
      var jQuery = window.jQuery
      jQuery(document).ready(function () {
        jQuery('.productmatrix').each(function (key, value) {
          jQuery(this).on('click', '.item:not(.open, .item-group-intro)', function () {
            jQuery(this).addClass('open')
          }).on('click', '.container-overlay-text', function () {
            jQuery(this).closest('.item').removeClass('open')
          })
        })
        jQuery('.fitText').fitText()
      })
      // close item when clicking out side of an item.
      jQuery(document).mouseup(function (e) {
        var container = jQuery('.item')
        if (!container.is(e.target) && // if the target of the click isn't the container...
          container.has(e.target).length === 0) { // ... nor a descendant of the container
          container.removeClass('open')
        }
      })
    })
  }
}
</script>

< ! - - Add "scoped" attribute to limit CSS to this component only - - >
<style scoped>

</style>
