import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    }
  ]
})
