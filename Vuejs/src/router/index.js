import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Forklifts from '@/components/products/Forklifts'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/forklifts', name: 'Forklifts', component: Forklifts },
    { path: '/', name: 'Home', component: Home }
  ]
})
