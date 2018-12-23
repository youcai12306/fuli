import Vue from 'vue'
import Router from 'vue-router'

//登录
const Login = r => require.ensure([], () => r(require('@/view/Login')), 'Login')
//注册
const Register = r => require.ensure([], () => r(require('@/view/Register')), 'Register')
//忘记密码
const Forget = r => require.ensure([], () => r(require('@/view/Login')), 'Forget')
//首页
const Index = r => require.ensure([], () => r(require('@/view/Index')), 'Index')
//产品列表
const Order = r => require.ensure([], () => r(require('@/view/Orderonline/Order')), 'Order')
const Tickets = r => require.ensure([], () => r(require('@/view/Orderonline/Tickets')), 'Tickets')
//门票商品详情页
const TicketDetail = r => require.ensure([], () => r(require('@/view/TicketDetail')), 'TicketDetail')
//零售商品详情页
const ProductDetail = r => require.ensure([], () => r(require('@/view/ProductDetail')), 'ProductDetail')
//下订单页面
const Suborder = r => require.ensure([], () => r(require('@/view/Orderonline/Suborder')), 'Suborder')
//支付页面
const success = r => require.ensure([], () => r(require('@/view/Orderonline/success')), 'success')
//主题乐园
const Theme = r => require.ensure([], () => r(require('@/view/theme/Theme')), 'Theme')
const AnimalTheme = r => require.ensure([], () => r(require('@/view/theme/AnimalTheme')), 'AnimalTheme')
// 新闻中心首页
const News = r => require.ensure([], () => r(require('@/view/news/News')), 'News')
const NewList = r => require.ensure([], () => r(require('@/view/news/NewList')), 'NewList')
const NewDetail = r => require.ensure([], () => r(require('@/view/news/NewDetail')), 'NewDetail')
const NoticeList = r => require.ensure([], () => r(require('@/view/news/NoticeList')), 'NoticeList')
const NoticeDetail = r => require.ensure([], () => r(require('@/view/news/NoticeDetail')), 'NoticeDetail')

// 游玩指南
const ditu = r => require.ensure([], () => r(require('@/view/Visitguide/ditu')), 'ditu')

//优惠活动
const SpecialOffier = r => require.ensure([], () => r(require('@/view/specialOffier/SpecialOffier')), 'SpecialOffier')
const Events = r => require.ensure([], () => r(require('@/view/specialOffier/Events')), 'Events')
//冒险之旅
const Risk = r => require.ensure([], () => r(require('@/view/risk/Risk')), 'Risk')
//动物百科
const Animal = r => require.ensure([], () => r(require('@/view/animal/Animal')), 'Animal')
// 个人中心-我的订单
const Mine = r => require.ensure([], () => r(require('@/view/Mine/Mine')), 'Mine')
const Prepaid = r => require.ensure([], () => r(require('@/view/Mine/Order/Prepaid')), 'Prepaid')
const OrderDetail = r => require.ensure([], () => r(require('@/view/Mine/Order/OrderDetail')), 'OrderDetail')
// 个人中心-购物车
const ShoppingCar = r => require.ensure([], () => r(require('@/view/Mine/ShoppingCar')), 'ShoppingCar')
// 个人中心-我的积分
const MyIntegral = r => require.ensure([], () => r(require('@/view/Mine/MyIntegral')), 'MyIntegral')
// 个人中心-我的优惠券
const CouponCenter = r => require.ensure([], () => r(require('@/view/Mine/CouponCenter')), 'CouponCenter')
// 个人中心-个人信息
const Membership = r => require.ensure([], () => r(require('@/view/Mine/Membership')), 'Membership')
// 个人中心-收货地址
const ShoppingAdress = r => require.ensure([], () => r(require('@/view/Mine/ShoppingAdress')), 'ShoppingAdress')
// 个人中心-消息管理
const MyMessage = r => require.ensure([], () => r(require('@/view/Mine/MyMessage')), 'MyMessage')
// 个人中心-消息详情
const MessageDetail = r => require.ensure([], () => r(require('@/view/Mine/MessageDetail')), 'MessageDetail')


Vue.use(Router)

export default new Router({
	routes: [{
			path: '*',
			redirect: '/index' //报错去首页
		},
		{
			path: '/',
			path: '/',
			redirect: '/index' //默认首页
		},
		{
			path: '/index',
			name: 'Index',
			component: Index, //首页
			meta: {
				nav: 1
			},
		},
		{
			path: '/login',
			name: 'Login',
			component: Login //登录
		},
		{
			path: '/forget',
			name: 'Forget',
			component: Forget //忘记密码
		},

		{
			path: '/order',
			name: 'Order',
			component: Order,
			children: [{
				path: '/tickets/:id',
				name: 'Tickets',
				component: Tickets, //订票列表
			}]
		},
		{
			path: '/register',
			name: 'Register',
			component: Register //注册
		},
		{
			path: '/suborder',
			name: 'Suborder',
			component: Suborder //下订单页面
		},
		{
			path: '/news',
			component: News, //新闻
			meta: {
				nav: 1
			},
			children: [{
					path: '/',
					component: NewList,
					meta: {
						nav: 1
					},
				},
				{
					path: '/newList',
					name: 'NewList',
					component: NewList,
					meta: {
						nav: 1
					},
				},
				{
					path: '/noticeList',
					name: 'NoticeList',
					component: NoticeList,
					meta: {
						nav: 1
					},
				},
				{
					path: '/newDetail',
					name: 'NewDetail',
					component: NewDetail,
					meta: {
						nav: 1
					},
				},
				{
					path: '/noticeDetail',
					name: 'NoticeDetail',
					component: NoticeDetail,
					meta: {
						nav: 1
					},
				},
			]
		},
		{//游玩指南
			path: '/ditu',
			name: 'ditu',
			component: ditu,
			meta: {
				nav: 1
			}
		},
		{
			path: '/specialOffier',
			component: SpecialOffier, //精彩活动
			meta: {
				nav: 1
			},
			children: [{
					path: '/',
					component: Events,
					meta: {
						nav: 1
					},
				},
				{
					path: '/events',
					component: Events,
					meta: {
						nav: 1
					},
				}
			]
		},
		{
			path: '/risk',
			name: 'Risk',
			component: Risk, //冒险之旅
			meta: {
				nav: 1
			},
		},
		{
			path: '/animal',
			name: 'Animal',
			component: Animal, //动物百科
			meta: {
				nav: 1
			},
		},
		{
			path: '/success',
			name: 'success',
			component: success //支付页面
		},
		{
			path: '/theme',
			name: 'Theme',
			component: Theme //主题乐园
		},
		{
			path: '/animalTheme',
			name: 'AnimalTheme',
			component: AnimalTheme //主题乐园
		},
		{
			path: '/ticketDetail',
			name: 'TicketDetail',
			component: TicketDetail, //订单详情
		},
		{
			path: '/productDetail',
			name: 'ProductDetail',
			component: ProductDetail //零售详情
		},
		{
			path: '/mine',
			component: Mine,
			meta: {
				nav: 3
			},
			children: [ //个人中心二级子路由
				{
					path: '/',
					component: Prepaid,
					meta: {
						nav: 3
					}
				},
				{
					path: '/prepaid',
					name: 'Prepaid',
					component: Prepaid,
					meta: {
						nav: 3
					}
				},
				{
					path: '/couponCenter',
					name: 'CouponCenter',
					component: CouponCenter, //我的优惠券
				},
				{
					path: '/myIntegral',
					name: 'MyIntegral',
					component: MyIntegral, //我的积分
				},
				{
					path: '/shoppingCar',
					name: 'ShoppingCar',
					component: ShoppingCar, //购物车
					meta: {
						nav: 2
					}
				},
				{
					path: '/shoppingAdress',
					name: 'ShoppingAdress',
					component: ShoppingAdress, //收货地址
					meta: {
						nav: 2
					}
				},
				{
					path: '/myMessage',
					name: 'MyMessage',
					component: MyMessage, //消息列表
					meta: {
						nav: 2
					}
				},
				{
					path: '/messageDetail',
					name: 'MessageDetail',
					component: MessageDetail, //消息详情
					meta: {
						nav: 2
					}
				},
				{
					path: '/membership',
					name: 'Membership',
					component: Membership, //个人资料
					meta: {
						nav: 2
					}
				}
			]
		},
		{
			path: '/orderDetail',
			name: 'OrderDetail',
			component: OrderDetail //订单详情
		},
	]
})
