import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    redirect:'/index',
    component: ()=>import("../layout"),
    children:[
      {
        path: 'index',
        name: 'index',
        component: ()=>import("../views/index"),
      },
      {
        path: 'goods',
        name: 'goods',
        component: ()=>import("../views/goods"),
      },
      {
        path: 'member',
        name: 'member',
        component: ()=>import("../views/member"),
      },
      {
        path: 'staff',
        name: 'staff',
        component: ()=>import("../views/staff"),
      },
      {
        path: 'supplier',
        name: 'supplier',
        component: ()=>import("../views/supplier"),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
