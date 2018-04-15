import Vue from 'vue'
import Router from 'vue-router'
import Avatar from '@/components/Avatar'
import User from '@/components/User'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    }, {
      path: '/my',
      name: 'User',
      component: User
    },
    {
      path: '/',
      redirect: {
        path: '/login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
