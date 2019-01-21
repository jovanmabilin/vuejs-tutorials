import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Profile from '@/components/account/profile'
import Home from '@/components/Home'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Landing',
      component: Landing,
    },
  ]
})
