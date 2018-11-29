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
// 个人中心-积分
const MyIntegral = r => require.ensure([], () => r(require('@/view/Mine/MyIntegral')), 'MyIntegral')
// 个人中心-购物车
const ShoppingCar = r => require.ensure([], () => r(require('@/view/Mine/ShoppingCar')), 'ShoppingCar')
// 个人中心-收货地址
const ShoppingAdress = r => require.ensure([], () => r(require('@/view/Mine/ShoppingAdress')), 'ShoppingAdress')
// 个人中心-消息管理
const MyMessage = r => require.ensure([], () => r(require('@/view/Mine/MyMessage')), 'MyMessage')
// 个人中心-会员资料
const Membership = r => require.ensure([], () => r(require('@/view/Mine/Membership')), 'Membership')
// 个人中心-修改密码
const ChangePwd = r => require.ensure([], () => r(require('@/view/Mine/ChangePwd')), 'ChangePwd')


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
      component: Mine,
      meta: {
        nav: 2
      },
			children: [
        {
          path: '/',
          name: 'MyOrder-default',
          component: MyOrder,
          meta: {
            nav: 2
          }
        },
				{
					path: '/myorder',
					name: 'MyOrder',
          component: MyOrder,
          meta: {
            nav: 2
          }
        },
        {
					path: '/myCoupon',
					name: 'MyCoupon',
          component: MyCoupon,
          meta: {
            nav: 2
          }
        },
        {
					path: '/couponCenter',
					name: 'CouponCenter',
          component: CouponCenter,
          meta: {
            nav: 2
          }
        },
        {
					path: '/orderdetails',
					name: 'OrderDetails',
          component: OrderDetails,
          meta: {
            nav: 2
          }
        },
        {
					path: '/myIntegral',
					name: 'MyIntegral',
          component: MyIntegral,
          meta: {
            nav: 2
          }
        },
        {
					path: '/shoppingCar',
					name: 'ShoppingCar',
          component: ShoppingCar,
          meta: {
            nav: 2
          }
        },
        {
					path: '/shoppingAdress',
					name: 'ShoppingAdress',
          component: ShoppingAdress,
          meta: {
            nav: 2
          }
        },
        {
					path: '/myMessage',
					name: 'MyMessage',
          component: MyMessage,
          meta: {
            nav: 2
          }
        },
        {
					path: '/membership',
					name: 'Membership',
          component: Membership,
          meta: {
            nav: 2
          }
        },
        {
					path: '/changePwd',
					name: 'ChangePwd',
          component: ChangePwd,
          meta: {
            nav: 2
          }
        }
         
			]
    }
  ]
})
