import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Index from '@/view/Index'
import Mine from '@/view/Mine/Mine'
import Forget from '@/view/Forget'
import Order from '@/view/Orderonline/Order'
import tickets from '@/view/Orderonline/tickets'
import Suborder from '@/view/Orderonline/Suborder'
import Carsuborder from '@/view/Orderonline/Carsuborder'
import success from '@/view/Orderonline/success'
import ok from '@/view/Orderonline/ok'
import error1 from '@/view/Orderonline/error1'
import guide from '@/view/Visitguide/guide'
import menpiao from '@/view/Visitguide/menpiao'
import jiudian from '@/view/Visitguide/jiudian'
import yingye from '@/view/Visitguide/yingye'
import jiaotong from '@/view/Visitguide/jiaotong'
import changjian from '@/view/Visitguide/changjian'
import binke from '@/view/Visitguide/binke'
import elie from '@/view/Visitguide/elie'
import nianka from '@/view/Visitguide/nianka'
import ditu from '@/view/Visitguide/ditu'
//注册
const Register = r => require.ensure([], () => r(require('@/view/Register')), 'Register')
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
const News = r => require.ensure([], () => r(require('@/view/news/News')), 'News')
const NewList = r => require.ensure([], () => r(require('@/view/news/NewList')), 'NewList')
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
const OrderDetail = r => require.ensure([], () => r(require('@/view/Mine/Order/OrderDetail')), 'OrderDetail')
// 个人中心-积分
const MyIntegral = r => require.ensure([], () => r(require('@/view/Mine/MyIntegral')), 'MyIntegral')
// 个人中心-购物车
const ShoppingCar = r => require.ensure([], () => r(require('@/view/Mine/ShoppingCar')), 'ShoppingCar')
// 个人中心-收货地址
const ShoppingAdress = r => require.ensure([], () => r(require('@/view/Mine/ShoppingAdress')), 'ShoppingAdress')
// 个人中心-消息管理
const MyMessage = r => require.ensure([], () => r(require('@/view/Mine/MyMessage')), 'MyMessage')
// 个人中心-消息详情
const MessageDetail = r => require.ensure([], () => r(require('@/view/Mine/MessageDetail')), 'MessageDetail')

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
        path: '/order',
        name: 'Order',
        component: Order,
        
        children: [
          {
            path: '/tickets/:id',
            name: 'tickets',
            component: tickets,
          },
          

      ],
      // redirect:'/tickets/1',
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/suborder',
        name: 'Suborder',
        component: Suborder
      },
      {
        path: '/carsuborder',
        name: 'Carsuborder',
        component: Carsuborder
      },
      {
        path: '/mcgrady',
        name: 'McGrady',
        component: McGrady
      },
      {
        path: '/news',
        name: 'News',
        component: News,
        children: [{
            path: '/',
            name: 'NewList',
            component: NewList
          },
          {
            path: '/newList',
            name: 'NewList',
            component: NewList
          }
        ]
      },
      {
        path: '/success',
        name: 'success',
        component: success
      },
      {
        path: '/ok',
        name: 'ok',
        component: ok
      },
      {
        path: '/error1',
        name: 'error1',
        component: error1
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
        children: [ //个人中心二级子路由
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
            children: [ //我的订单子路由
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
            children: [{
                path: '/',
                component: CouponReceived,
                meta: {
                  nav: 2
                }
              },
              {
                path: '/couponReceived',
                name: 'CouponReceived',
                component: CouponReceived,
                meta: {
                  nav: 2
                }
              },
              {
                path: '/couponUsed',
                name: 'CouponUsed',
                component: CouponUsed,
                meta: {
                  nav: 2
                }
              },
              {
                path: '/couponUnused',
                name: 'CouponUnused',
                component: CouponUnused,
                meta: {
                  nav: 2
                }
              },
              {
                path: '/couponStale',
                name: 'CouponStale',
                component: CouponStale,
                meta: {
                  nav: 2
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
            path: '/messageDetail',
            name: 'MessageDetail',
            component: MessageDetail,
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
          },


        ]
      },
      {
        path: '/guide',
        name: 'guide',
        component: guide,
        children: [{
            path: '/menpiao',
            name: 'menpiao',
            component: menpiao,
          },
          {
            path: '/jiudian',
            name: 'jiudian',
            component: jiudian,
          },
          {
            path: '/yingye',
            name: 'yingye',
            component: yingye,
          },
          {
            path: '/jiaotong',
            name: 'jiaotong',
            component: jiaotong,
          },
          {
            path: '/changjian',
            name: 'changjian',
            component: changjian,
          },
          {
            path: '/binke',
            name: 'binke',
            component: binke,
          },
          {
            path: '/elie',
            name: 'elie',
            component: elie,
          },
          {
            path: '/nianka',
            name: 'nianka',
            component: nianka,
          },
          {
            path: '/ditu',
            name: 'ditu',
            component: ditu,
          },
        ]
      },

    ]
  }, {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: OrderDetail
  },

)
