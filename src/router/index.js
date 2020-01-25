import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import invoice from './routes/invoice'
import stock from './routes/stock'
import vehicle from './routes/vehicle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/invoice',
    component: () => import(/* webpackChunkName: "invoice" */ '../pages/invoice/Index'),
    children: [...invoice]
  },
  {
    path: '/stock',
    component: () => import(/* webpackChunkName: "stock" */ '../pages/stock/Index'),
    children: [...stock]
  },
  {
    path: '/vehicles',
    component: () => import(/* webpackChunkName: "pages/vehicle/vehicles" */ '../pages/vehicle/Index'),
    children: [...vehicle]
  }
]

const router = new VueRouter({
  routes
})

export default router
