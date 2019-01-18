import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store';
import {
	getCookie
} from "@/package/cookie";

//登录
const Login = r => require.ensure([], () => r(require('@/view/Login')), 'Login')
//注册

const Register = r => require.ensure([], () => r(require('@/view/Register')), 'Register')
//忘记密码
const Forget = r => require.ensure([], () => r(require('@/view/Forget')), 'Forget')
//首页
const Index = r => require.ensure([], () => r(require('@/view/Index')), 'Index')
//园区介绍
const Park = r => require.ensure([], () => r(require('@/view/Park/Park')), 'Park')
//产品列表
const Order = r => require.ensure([], () => r(require('@/view/Orderonline/Order')), 'Order')
const Tickets = r => require.ensure([], () => r(require('@/view/Orderonline/Tickets')), 'Tickets')
//门票商品详情页
const TicketDetail = r => require.ensure([], () => r(require('@/view/TicketDetail')), 'TicketDetail')
//零售商品详情页
const ProductDetail = r => require.ensure([], () => r(require('@/view/ProductDetail')), 'ProductDetail')
//下订单页面
const Suborder = r => require.ensure([], () => r(require('@/view/Orderonline/Suborder')), 'Suborder')
const Suborder2 = r => require.ensure([], () => r(require('@/view/Orderonline/Suborder2')), 'Suborder2')
//支付页面
const success = r => require.ensure([], () => r(require('@/view/Orderonline/success')), 'success')
const ok = r => require.ensure([], () => r(require('@/view/Orderonline/ok')), 'ok')
const error1 = r => require.ensure([], () => r(require('@/view/Orderonline/error1')), 'error1')
//主题乐园
const Theme = r => require.ensure([], () => r(require('@/view/theme/Theme')), 'Theme')
const AnimalDetail = r => require.ensure([], () => r(require('@/view/theme/AnimalDetail')), 'AnimalDetail')
const artTheme = r => require.ensure([], () => r(require('@/view/theme/artTheme')), 'artTheme')
const EatDetail = r => require.ensure([], () => r(require('@/view/theme/EatDetail')), 'EatDetail')
const ShopDetail = r => require.ensure([], () => r(require('@/view/theme/ShopDetail')), 'ShopDetail')
const ArtDetail = r => require.ensure([], () => r(require('@/view/theme/ArtDetail')), 'ArtDetail')
//冒险海洋
const Adventure = r => require.ensure([], () => r(require('@/view/Adventure/Adventure')), 'Adventure')

// 新闻中心首页
const News = r => require.ensure([], () => r(require('@/view/news/News')), 'News')
const NewList = r => require.ensure([], () => r(require('@/view/news/NewList')), 'NewList')
const NewDetail = r => require.ensure([], () => r(require('@/view/news/NewDetail')), 'NewDetail')
const NoticeList = r => require.ensure([], () => r(require('@/view/news/NoticeList')), 'NoticeList')
const NoticeDetail = r => require.ensure([], () => r(require('@/view/news/NoticeDetail')), 'NoticeDetail')

// 游玩指南
const ditu = r => require.ensure([], () => r(require('@/view/Visitguide/ditu.vue')), 'ditu')
// 主题酒店
const Hotel = r => require.ensure([], () => r(require('@/view/hotel/Hotel')), 'Hotel')
const HotelDetail = r => require.ensure([], () => r(require('@/view/hotel/HotelDetail')), 'HotelDetail')

//优惠活动
const SpecialOffier = r => require.ensure([], () => r(require('@/view/specialOffier/SpecialOffier.vue')), 'SpecialOffier')
const Events = r => require.ensure([], () => r(require('@/view/specialOffier/Events')), 'Events')
const EventsDetail = r => require.ensure([], () => r(require('@/view/specialOffier/EventsDetail')), 'EventsDetail')
//冒险之旅
const Risk = r => require.ensure([], () => r(require('@/view/risk/Risk')), 'Risk')
//动物百科
const Animal = r => require.ensure([], () => r(require('@/view/animal/Animal')), 'Animal')
const AnimalDetails = r => require.ensure([], () => r(require('@/view/animal/AnimalDetail')), 'AnimalDetail')
const BaiDetails = r => require.ensure([], () => r(require('@/view/animal/BaiDetail')), 'BaiDetail')
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
// 个人中心-反馈
const Feedback = r => require.ensure([], () => r(require('@/view/Mine/Feedback')), 'Feedback')
const FeedbackDetail = r => require.ensure([], () => r(require('@/view/Mine/FeedbackDetail')), 'FeedbackDetail')

Vue.use(Router)

let router = new Router({
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
		},
		{
			path: '/park',
			name: 'Park',
			component: Park, //园区介绍
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
				path: '/tickets/:typeId',
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
			meta: {
				requireAuth: true
			},
			component: Suborder //下订单页面
		},
		{
			path: '/suborder2',
			name: 'Suborder2',
			meta: {
				requireAuth: true
			},
			component: Suborder2 //下订单页面
		},
		{
			path: '/news',
			component: News, //新闻
			children: [{
					path: '/',
					component: NewList,
				},
				{
					path: '/newList',
					name: 'NewList',
					component: NewList,
				},
				{
					path: '/noticeList',
					name: 'NoticeList',
					component: NoticeList,
				},
				{
					path: '/newDetail',
					name: 'NewDetail',
					component: NewDetail,
				},
				{
					path: '/noticeDetail',
					name: 'NoticeDetail',
					component: NoticeDetail,
				},
			]
		},
		{ //游玩指南
			path: '/ditu',
			name: 'ditu',
			component: ditu,
		},
		{
			path: '/specialOffier',
			component: SpecialOffier, //精彩活动
			children: [{
					path: '/',
					component: Events,
				},
				{
					path: '/events',
					name: 'events',
					component: Events,
				},
				{
					path: '/EventsDetail',
					component: EventsDetail
				}
			]
		},
		{
			path: '/risk',
			name: 'Risk',
			component: Risk, //冒险之旅
		},
		{
			path: '/animal',
			name: 'Animal',
			component: Animal, //动物百科
		},
		{
			path: '/animalDetails/:id',
			name: 'AnimalDetails',
			component: AnimalDetails, //动物百科详情
		},
		{
			path: '/baiDetails/:type/:id',
			name: 'BaiDetails',
			component: BaiDetails, //动物百科详情
		},
		{
			path: '/success',
			name: 'success',
			meta: {
				requireAuth: true
			},
			component: success //支付页面
		},
		{
			path: '/ok',
			name: 'ok',
			meta: {
				requireAuth: true
			},
			component: ok //支付成功
		},
		{
			path: '/error1',
			name: 'error1',
			meta: {
				requireAuth: true
			},
			component: error1 //支付失败
		},
		{
			path: '/theme/:id',
			name: 'Theme',
			component: Theme //主题乐园
		},
		{
			path: '/Adventure',
			name: 'Adventure',
			component: Adventure
		},
		{
			path: '/animalDetail',
			name: 'AnimalDetail',
			component: AnimalDetail //动物详情
		},
		{
			path: '/eatDetail',
			name: 'EatDetail',
			component: EatDetail //餐厅详情
		},
		{
			path: '/artDetail',
			name: 'ArtDetail',
			component: ArtDetail // 演绎中心
		},
		{
			path: '/shopDetail',
			name: 'ShopDetail',
			component: ShopDetail //主题商店
		},
		{
			path: '/artTheme',
			name: 'artTheme',
			component: artTheme
		},
		{
			path: '/hotel',
			name: 'Hotel',
			component: Hotel //主题酒店
		},
		{
			path: '/hotelDetail',
			name: 'HotelDetail',
			component: HotelDetail //主题酒店
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
				nav: 3,
				requireAuth: true
			},
			children: [ //个人中心二级子路由
				{
					path: '/',
					component: Prepaid,
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/prepaid',
					name: 'Prepaid',
					component: Prepaid,
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/couponCenter',
					name: 'CouponCenter',
					component: CouponCenter, //我的优惠券
					meta: {
						nav: 3,
						requireAuth: true
					},
				},
				{
					path: '/myIntegral',
					name: 'MyIntegral',
					component: MyIntegral, //我的积分
					meta: {
						nav: 3,
						requireAuth: true
					},
				},
				{
					path: '/shoppingCar',
					name: 'ShoppingCar',
					component: ShoppingCar, //购物车
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/shoppingAdress',
					name: 'ShoppingAdress',
					component: ShoppingAdress, //收货地址
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/myMessage',
					name: 'MyMessage',
					component: MyMessage, //消息列表
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/messageDetail',
					name: 'MessageDetail',
					component: MessageDetail, //消息详情
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/membership',
					name: 'Membership',
					component: Membership, //个人资料
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/Feedback',
					name: 'Feedback',
					component: Feedback, //反馈
					meta: {
						nav: 3,
						requireAuth: true
					}
				},
				{
					path: '/FeedbackDetail',
					name: 'FeedbackDetail',
					component: FeedbackDetail, //反馈详情
					meta: {
						nav: 3,
						requireAuth: true
					}
				}
			]
		},
		{
			path: '/orderDetail',
			name: 'OrderDetail',
			meta: {
				nav: 3,
				requireAuth: true
			},
			component: OrderDetail //订单详情
		},
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
		if (getCookie('userData')) { // 判断是否登录
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	} else {
		next();
	}
})
// 跳转页面的时候滚动条在最上面
router.afterEach((to,from,next) => {
	window.scrollTo(0,0);
})

export default router
