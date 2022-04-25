import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebView from '../views/WebView.vue'
import NewView from '../views/NewView.vue'
import JokesView from '../views/JokesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/web',
    name: 'web',
    component: WebView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: JokesView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
