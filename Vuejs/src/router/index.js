import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Forklifts from '@/components/x/products/Forklifts'
import Rentals from '@/components/x/products/Rentals'
import PreOwned from '@/components/x/products/PreOwned'
import Products from '@/components/x/products/Products'
import FleetManagement from '@/components/x/solutions/FleetManagement'
import Financing from '@/components/x/solutions/Financing'
import Solutions from '@/components/x/solutions/Solutions'
import SafetyTraining from '@/components/x/support/SafetyTraining'
import ServiceParts from '@/components/x/support/ServiceParts'
import ForkliftDealers from '@/components/x/support/ForkliftDealers'
import Support from '@/components/x/support/Support'
import CustomerResults from '@/components/x/why/CustomerResults'
import Sustainability from '@/components/x/why/Sustainability'
import Awards from '@/components/x/why/Awards'
import Why from '@/components/x/why/Why'
import Introduction from '@/components/pages/Introduction'
import Used from '@/components/pages/Used'
import Rental from '@/components/pages/Rental'
import Parts from '@/components/pages/Parts'
import News from '@/components/pages/News'
import Brand from '@/components/pages/Brand'
import Address from '@/components/pages/Address'

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
    { path: '/address', name: 'Address', component: Address },
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
