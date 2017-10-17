// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyPicture from './components/commons/MyPicture'
import Ycolumn from './components/commons/Ycolumn'
import Ystickynav from './components/commons/Ystickynav'
import MyCallToAction from './components/commons/MyCallToAction'

// === css ===
require('font-awesome/css/font-awesome.css') // font-awesome
// require('bootstrap/dist/css/bootstrap.css') // bootstrap 這行造成 平板 的菜單有問題
require('../static/css/main.css')
require('../static/css/application.css')
require('../static/css/slider.css')
require('../static/css/style.css') // 自己寫的

// === js ===
import jQuery from 'jquery/dist/jquery.min.js' // jquery
window.jQuery = jQuery
window.$ = jQuery
require('../static/js/granite_utils.js') // TODO: TEST
// require('../static/js/granite.js') // TODO: delete this file ??
require('../static/js/foundation_jquery.js') // TODO: TEST
require('../static/js/foundation_main.js') // TODO: TEST
// require('../static/js/modernizr-2.6.2.min.js') // TODO: put it in index.html
require('bootstrap/dist/js/bootstrap.min.js') // bootsteap require('../static/js/bootstrap.min.js')
require('../static/js/jquery-picture-min.js') // TODO: TEST
require('../static/js/jquery-ui.min.js') // TODO: TEST
require('../static/js/picturefill.min.js') // TODO: TEST
require('../static/js/clientlib.js') // TODO: TEST

// reigister globally components
Vue.component('my-picture', MyPicture)
Vue.component('ycolumn', Ycolumn)
Vue.component('ystickynav', Ystickynav)
Vue.component('MyCallToAction', MyCallToAction)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
