import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Index from '@/views/Index'
import My from '@/views/My'
import ShoppingCart from '@/views/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/my',
          name: 'My',
          component: My
        },
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/shopping_cart',
          name: 'ShoppingCart',
          component: ShoppingCart
        }
      ]
    },
    
  ]
})
