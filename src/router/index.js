import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/login',
    name: 'login',
    component: require('@/pages/Login').default
  },
  {
    path: '/',
    component: require('@/Layout').default,
    redirect: '/home',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: require('@/pages/Home').default
      },
      {
        path: 'number',
        name: 'number',
        component: require('@/pages/number/index').default
      },
      // {
      //   path: 'number/edit',
      //   name: 'number/edit',
      //   component: require('@/pages/number/Edit').default
      // },
      // {
      //   path: 'number/num_detail',
      //   name: 'number/num_detail',
      //   component: require('@/pages/number/NumDetail').default
      // },
      // {
      //   path: 'number/write',
      //   name: 'number/write',
      //   component: require('@/pages/number/Write').default
      // },
      // {
      //   path: 'number/produced',
      //   name: 'number/produced',
      //   component: require('@/pages/number/Produced').default
      // },
      // {
      //   path: 'number/producting',
      //   name: 'number/producting',
      //   component: require('@/pages/number/Producting').default
      // },
      {
        path: 'producer',
        name: 'producer',
        component: require('@/pages/producer/index').default
      },
      {
        path: 'product',
        name: 'product',
        component: require('@/pages/product/index').default
      },
      {
        path: 'staff',
        name: 'staff',
        component: require('@/pages/staff/index').default
      }
    ]
  },

  {
    path: '*',
    redirect: '/'
  }
]
const routers = new Router({
  routes
})

export default routers
