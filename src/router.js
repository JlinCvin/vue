import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clock from './views/Clock.vue'
import Login from './views/Login.vue'
import Img from './views/Img.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/clock',
      name: 'clock',
      component: Clock,
      children:[
        {
          path: 'list',
          name: 'list',
          component:  () => import('./views/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component:  () => import('./views/User.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/img',
      name: 'img',
      component: Img
    }
  ]
})
