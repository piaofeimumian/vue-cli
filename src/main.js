import Vue from 'vue'
import VueRouter from 'vue-router'
import 'cube-ui'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/tabs/goods/goods'
import ratings from './components/tabs/ratings/ratings'
import seller from './components/tabs/seller/seller'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/goods', name: 'goods', component: goods },
    { path: '/ratings', name: 'ratings', component: ratings },
    { path: '/seller', name: 'seller', component: seller }
  ]
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
