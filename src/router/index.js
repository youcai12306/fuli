import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Index from '@/view/Index'

//麦迪卡斯首页
const McGrady = r => require.ensure([], () => r(require('@/view/McGrady/McGrady')), 'McGrady')

//欢乐海洋世界首页
const waterworld = r => require.ensure([], () => r(require('@/view/waterworld')), 'waterworld')

// 新闻中心首页
const News = r => require.ensure([], () => r(require('@/view/News')), 'News')
const Reset = r => require.ensure([], () => r(require('@/view/Reset')), 'Reset')

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
