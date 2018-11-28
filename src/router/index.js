import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import News from '@/view/News'
import Reset from '@/view/Reset'
import Index from '@/view/Index'
import waterworld from '@/view/waterworld'
const McGrady = r => require.ensure([], () => r(require('@/view/McGrady/McGrady')), 'McGrady')

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
    },
    {
      path: '/waterworld',
      name: 'waterworld',
      component: waterworld
    }
  ]
})
