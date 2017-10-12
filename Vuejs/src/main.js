// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyPicture from './components/commons/MyPicture'

// === css ===
require('font-awesome/css/font-awesome.css') // font-awesome
require('../static/styles/style.css')

// reigister globally components
Vue.component('my-picture', MyPicture)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
