// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import seller from './components/seller/seller'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'

Vue.config.productionTip = false
import './common/style/index.styl'
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings},
  { path: '/', redirect: '/goods' }
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
