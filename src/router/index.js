import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import McGrady from '@/view/McGrady'
import News from '@/view/News'
import Reset from '@/view/Reset'
import Index from '@/view/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/index'
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
		{
      path: '/mcgrady',
      name: 'McGrady',
      component: McGrady
    },
		{
      path: '/news',
      name: 'News',
      component: News
    },
		{
      path: '/reset',
      name: 'Reset',
      component: Reset
    }
  ]
})
