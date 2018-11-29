import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Index from '@/view/Index'
import Mine from '@/view/Mine/Mine'


//麦迪卡斯首页
const McGrady = r => require.ensure([], () => r(require('@/view/McGrady/McGrady')), 'McGrady')

//欢乐海洋世界首页
const waterworld = r => require.ensure([], () => r(require('@/view/waterworld')), 'waterworld')

// 新闻中心首页
const News = r => require.ensure([], () => r(require('@/view/News')), 'News')
const Reset = r => require.ensure([], () => r(require('@/view/Reset')), 'Reset')

// 个人中心-我的卡券
const MyCoupon = r => require.ensure([], () => r(require('@/view/Mine/MyCoupon')), 'MyCoupon')
// 个人中心-卡券中心
const CouponCenter = r => require.ensure([], () => r(require('@/view/Mine/CouponCenter')), 'CouponCenter')

// 个人中心-我的订单
const MyOrder = r => require.ensure([], () => r(require('@/view/Mine/MyOrder')), 'MyOrder')
const OrderDetails = r => require.ensure([], () => r(require('@/view/Mine/OrderDetails')), 'OrderDetails')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      path: '/',
      redirect: '/index'
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
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        nav: 2
      },
			children: [
				{
					path: '',
					name: 'MyOrder',
					component: MyOrder
				},
				{
					path: '/myorder',
					name: 'MyOrder',
					component: MyOrder
        },
        {
					path: '/myCoupon',
					name: 'MyCoupon',
					component: MyCoupon
        },
        {
					path: '/couponCenter',
					name: 'CouponCenter',
					component: CouponCenter
        },
        {
					path: '/orderdetails',
					name: 'OrderDetails',
					component: OrderDetails
				}
			]
    }
  ]
})
