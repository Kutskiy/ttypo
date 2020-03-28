import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'basket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/basket.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../views/cards')
  },
  {
    path: '/booklets',
    name: 'booklets',
    component: () => import('../views/booklets')
  },
  {
    path:'/print',
    name: 'print',
    component: () => import('../views/print')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
