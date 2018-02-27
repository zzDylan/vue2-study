import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Index from '@/views/Index'
import My from '@/views/My'
import ShoppingCart from '@/views/ShoppingCart'
import Category from '@/views/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/shopping_cart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },
        {
          path: '/my',
          name: 'My',
          component: My
        }
      ]
    },
    
  ]
})
