import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Cabinet from './views/client_cabinet.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Index
    },
    {
      path: '/cabinet',
      name: 'cabinet',
      component: Cabinet
    }
  ]
})
