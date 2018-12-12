import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Index from '@/view/Index'
import Mine from '@/view/Mine/Mine'
import Forget from '@/view/Forget'


//注册
const Register = r =>require.ensure([], () => r(require('@/view/Register')), 'Register')
//麦迪卡斯首页
const McGrady = r => require.ensure([], () => r(require('@/view/McGrady/McGrady')), 'McGrady')

//欢乐海洋世界首页
const waterworld = r => require.ensure([], () => r(require('@/view/waterworld')), 'waterworld')

//门票商品详情页
const TicketDetail = r => require.ensure([], () => r(require('@/view/TicketDetail')), 'TicketDetail')

//零售商品详情页
const ProductDetail = r => require.ensure([], () => r(require('@/view/ProductDetail')), 'ProductDetail')

//购物车页面
const ShoppingCar1 = r => require.ensure([], () => r(require('@/view/ShoppingCar1')), 'ShoppingCar1')

// 新闻中心首页
const News = r => require.ensure([], () => r(require('@/view/News')), 'News')
const Reset = r => require.ensure([], () => r(require('@/view/Reset')), 'Reset')

// 个人中心-我的卡券
const MyCoupon = r => require.ensure([], () => r(require('@/view/Mine/MyCoupon')), 'MyCoupon')
// 个人中心-卡券中心
const CouponCenter = r => require.ensure([], () => r(require('@/view/Mine/CouponCenter')), 'CouponCenter')

// 个人中心-我的订单
const MyOrder = r => require.ensure([], () => r(require('@/view/Mine/MyOrder')), 'MyOrder')
const Invoice = r => require.ensure([], () => r(require('@/view/Mine/Invoice')), 'Invoice')
const Unpaid = r => require.ensure([], () => r(require('@/view/Mine/Order/Unpaid')), 'Unpaid')
const Prepaid = r => require.ensure([], () => r(require('@/view/Mine/Order/Prepaid')), 'Prepaid')
const Consumed = r => require.ensure([], () => r(require('@/view/Mine/Order/Consumed')), 'Consumed')
const Refund = r => require.ensure([], () => r(require('@/view/Mine/Order/Refund')), 'Refund')
const Audit = r => require.ensure([], () => r(require('@/view/Mine/Order/Audit')), 'Audit')
const Faudit = r => require.ensure([], () => r(require('@/view/Mine/Order/Faudit')), 'Faudit')
const Error = r => require.ensure([], () => r(require('@/view/Mine/Order/Error')), 'Error')
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

const CouponReceived = r => require.ensure([], () => r(require('@/view/Mine/coupon/CouponReceived')), 'CouponReceived')
const CouponUsed = r => require.ensure([], () => r(require('@/view/Mine/coupon/CouponUsed')), 'CouponUsed')
const CouponUnused = r => require.ensure([], () => r(require('@/view/Mine/coupon/CouponUnused')), 'CouponUnused')
const CouponStale = r => require.ensure([], () => r(require('@/view/Mine/coupon/CouponStale')), 'CouponStale')


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
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
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
      path: '/ticketDetail',
      name: 'TicketDetail',
      component: TicketDetail
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/shoppingCar1',
      name: 'ShoppingCar1',
      component: ShoppingCar1
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        nav: 2
      },
			children: [//个人中心二级子路由
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
					// name: 'MyOrder',
          component: MyOrder,
          meta: {
            nav: 2
          },
					children:[//我的订单子路由
						{
							path: '/',
							name: 'Unpaid-default',
							component: Unpaid,
							meta: {
								nav: 2
							}
						},
						{
							path: '/unpaid',
							name: 'Unpaid',
							component: Unpaid,
							meta: {
								nav: 2
							}
						},
						{
							path: '/prepaid',
							name: 'Prepaid',
							component: Prepaid,
							meta: {
								nav: 2
							}
						},
						{
							path: '/consumed',
							name: 'Consumed',
							component: Consumed,
							meta: {
								nav: 2
							}
						},
						{
							path: '/refund',
							name: 'Refund',
							component: Refund,
							meta: {
								nav: 2
							}
						},
						{
							path: '/audit',
							name: 'Audit',
							component: Audit,
							meta: {
								nav: 2
							}
						},
						{
							path: '/faudit',
							name: 'Faudit',
							component: Faudit,
							meta: {
								nav: 2
							}
						},
						{
							path: '/error',
							name: 'Error',
							component: Error,
							meta: {
								nav: 2
							}
						}
					]
        },
        {
					path: '/myCoupon',
          component: MyCoupon,
          meta: {
            nav: 2
          },
          children:[
            {
              path: '/',
              component: CouponReceived,
              meta:{
                nav:2
              }
            },
            {
              path: '/couponReceived',
              name: 'CouponReceived',
              component: CouponReceived,
              meta:{
                nav:2
              }
            },
            {
              path: '/couponUsed',
              name: 'CouponUsed',
              component: CouponUsed,
              meta:{
                nav:2
              }
            },
            {
              path: '/couponUnused',
              name: 'CouponUnused',
              component: CouponUnused,
              meta:{
                nav:2
              }
            },
            {
              path: '/couponStale',
              name: 'CouponStale',
              component: CouponStale,
              meta:{
                nav:2
              }
            }
          ]
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
					path: '/Invoice',
					name: 'Invoice',
          component: Invoice,
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
