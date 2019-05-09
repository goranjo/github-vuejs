import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Repo from '../components/Repo/Repo'
import User from '../components/User/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users/:name',
      name: 'User',
      component: User
    },
    {
      path: '/users/:name/repos',
      name: 'Repo',
      component: Repo
    }

  ]
})
