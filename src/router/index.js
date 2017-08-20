import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/auth/Auth'
import _404 from '@/components/404'
import Login from '@/auth/Login'
import Signup from '@/auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'signup',
          component: Signup
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: _404
    }
  ]
})
