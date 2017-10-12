import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Forklifts from '@/components/products/Forklifts'
import Rentals from '@/components/products/Rentals'
import PreOwned from '@/components/products/PreOwned'
import Products from '@/components/products/Products'
import FleetManagement from '@/components/solutions/FleetManagement'
import Financing from '@/components/solutions/Financing'
import Solutions from '@/components/solutions/Solutions'
import SafetyTraining from '@/components/support/SafetyTraining'
import ServiceParts from '@/components/support/ServiceParts'
import ForkliftDealers from '@/components/support/ForkliftDealers'
import Support from '@/components/support/Support'
import CustomerResults from '@/components/why/CustomerResults'
import Sustainability from '@/components/why/Sustainability'
import Awards from '@/components/why/Awards'
import Why from '@/components/why/Why'
import Introduction from '@/components/pages/Introduction'
import Used from '@/components/pages/Used'
import Rental from '@/components/pages/Rental'
import Parts from '@/components/pages/Parts'
import News from '@/components/pages/News'
import Brand from '@/components/pages/Brand'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/introduction', name: 'Introduction', component: Introduction },
    { path: '/used', name: 'Used', component: Used },
    { path: '/rental', name: 'Rental', component: Rental },
    { path: '/parts', name: 'Parts', component: Parts },
    { path: '/news', name: 'News', component: News },
    { path: '/brand/:name', name: 'Brand', component: Brand },
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/forklifts', name: 'Forklifts', component: Forklifts },
    { path: '/rentals', name: 'Rentals', component: Rentals },
    { path: '/pre-owned', name: 'PreOwned', component: PreOwned },
    { path: '/products', name: 'Products', component: Products },
    { path: '/fleet-management', name: 'FleetManagement', component: FleetManagement },
    { path: '/financing', name: 'Financing', component: Financing },
    { path: '/solutions', name: 'Solutions', component: Solutions },
    { path: '/safety-training', name: 'SafetyTraining', component: SafetyTraining },
    { path: '/service-parts', name: 'ServiceParts', component: ServiceParts },
    { path: '/forklift-dealers', name: 'ForkliftDealers', component: ForkliftDealers },
    { path: '/support', name: 'Support', component: Support },
    { path: '/customer-results', name: 'CustomerResults', component: CustomerResults },
    { path: '/sustainability', name: 'Sustainability', component: Sustainability },
    { path: '/awards', name: 'Awards', component: Awards },
    { path: '/why', name: 'Why', component: Why },
    { path: '/', name: 'Home', component: Home }
  ],
  scrollBehavior (to, from, savedPosition) { // https://router.vuejs.org/en/advanced/scroll-behavior.html
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
