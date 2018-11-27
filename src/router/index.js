import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login'
import McGrady from '@/view/McGrady'
import News from '@/view/News'
import Reset from '@/view/Reset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
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
