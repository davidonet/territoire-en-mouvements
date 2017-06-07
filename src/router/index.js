import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Welcome
  }, {
    path: '/list',
    component: List
  }]
})
