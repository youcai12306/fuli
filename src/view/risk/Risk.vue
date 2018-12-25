<template>
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="location">当前位置><router-link to="index" tag="span">首页></router-link>冒险之旅</div>
			</div>
			<div class="content">
				<div class="inner-box">
					<swiper :options="swiperOption">
						<swiper-slide :style="{background:'#F6B37F',width:'1200px',height:'686px'}">
							<div class="clearDiv">
								<div class="left floatLeft">
									<img src="../../assets/img/risk-bg5.png" alt="图片">
									<button class="btn1">同款商品</button>
									<button class="btn2">游戏互动</button>
								</div>
								<div class="right floatRight">
									<p class="p1">你们好我是杰克船长</p>
									<p class="p2">勇敢、爱冒险、有领导才能，但偶尔有点冒失，需三思而后行。</p>
									<div class="video" @click="status=true">
										<img src="../../assets/img/risk-bg6.png" alt="视频背景图片" v-if="!status">
										<template v-if="status">
											<video controls="" autoplay="" name="media">
												<source src="http://220.164.101.233/6972ABA05563D7189138F285D/03000A17005A6D6FDD431E055EEB3ED1C172E0-9A6B-0F5C-3683-71EB5632A884.mp4?ccode=050F&amp;duration=392&amp;expire=18000&amp;psid=9de947e6e0e2165a511f0bbaaa3a0f24&amp;ups_client_netip=77629cc8&amp;ups_ts=1545639349&amp;ups_userid=&amp;utid=P2yiFEgDlTgCAXdinMiUZGFx&amp;vid=XMzEyMjcxNjAw&amp;vkey=A424309d5ad1aaba3737f078c6d9fdae9&amp;sp=&amp;ali_redirect_domain=ykugc.cp31.ott.cibntv.net&amp;ali_redirect_ex_ftag=95670d958d49197e342f1df4ea06b2766aaef08cf8811e3d&amp;ali_redirect_ex_tmining_ts=1545639355&amp;ali_redirect_ex_tmining_expire=3600&amp;ali_redirect_ex_hot=0"
												 type="video/mp4"></video>
										</template>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide :style="{background:'#F6B37F',width:'1200px',height:'686px'}"></swiper-slide>
						<swiper-slide :style="{background:'#F6B37F',width:'1200px',height:'686px'}"></swiper-slide>
						<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
						<div class="swiper-button-next swiper-button-black" slot="button-next"></div>
					</swiper>
					<div class="list">
						<p class="list-t">海洋王国家族成员<br>精灵可爱吉祥物</p>
						<ul class="clearDiv">
							<li v-for="item in 4" :key="item">
								<img :src="`../../../static/risk-bg${item}.png`" alt>
								<p>
									<template v-if="item == 1">海象博士</template>
									<template v-if="item == 2">海豚丹妮</template>
									<template v-if="item == 3">海龟泰利</template>
									<template v-if="item == 4">企鹅帕西</template>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				status: false,
				swiperOption: {
					notNextTick: true,
					//循环
					// loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					// autoplay: true,
					// autoplay: {
					//     delay: 3000,
					//     stopOnLastSlide: false,
					//     disableOnInteraction: true,
					// },
					// 设置轮播
					// effect: "flip",
					//滑动速度
					speed: 800,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					// grabCursor : true,
					//滑动之后回调函数
					on: {
						slideChangeTransitionEnd: function() {
							// console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
						}
					},
					//左右点击
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					}
				}
			};
		},

		components: {
			swiper,
			swiperSlide,
			Header
		},

		computed: {},

		methods: {}
	};
</script>
<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/risk-bg.png) no-repeat top center;
		background-size: 1920px 100%;
		padding-top: 408px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			background: linear-gradient(180deg,
				rgba(114, 180, 42, 1),
				rgba(134, 212, 100, 1));
			box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.35);

			.location {
				//   height: 22px;
				height: 66px;
				line-height: 66px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				padding-left: 34px;
				background: url(../../assets/img/new-4.png) no-repeat 15px center;
				cursor: pointer;
			}
		}

		.content {
			width: 1200px;
			margin: 0 auto;
			background-color: rgba(255, 255, 255, 0.2);
			padding-bottom: 44px;

			.inner-box {
				background-color: rgba(255, 255, 255, 1);
				width: 1140px;
				margin: 0 auto;
				padding-top: 50px;

				.swiper-container {
					.swiper-button-prev {
						width: 39px;
						height: 98px;
						background: rgba(255, 255, 255, 0.6) url(../../assets/img/md-l.png) no-repeat center center;
						border-radius: 10px;
					}

					.swiper-button-next {
						width: 39px;
						height: 98px;
						background: rgba(255, 255, 255, 0.6) url(../../assets/img/md-r.png) no-repeat center center;
						border-radius: 10px;
					}

					.left {
						width: 414px;
						margin: 80px 0 0 126px;

						img {
							width: 414px;
							height: 414px;
							display: block;
							margin-bottom: 50px;
						}

						.btn1 {
							cursor: pointer;
							width: 100px;
							height: 38px;
							background: rgba(248, 181, 81, 1);
							border: 1px solid rgba(233, 151, 8, 1);
							border-radius: 19px;
							font-size: 14px;
							font-weight: 400;
							color: rgba(255, 255, 255, 1);
							margin-left: 34px;
							margin-right: 24px;
						}

						.btn2 {
							cursor: pointer;
							width: 100px;
							height: 38px;
							background: rgba(233, 93, 56, 1);
							border: 1px solid rgba(248, 211, 81, 1);
							border-radius: 19px;
							font-size: 14px;
							font-weight: 400;
							color: rgba(255, 255, 255, 1);
						}
					}

					.right {
						margin-right: 170px;
						margin-top: 122px;
						width: 382px;

						.p1 {
							width: 100%;
							height: 24px;
							line-height: 24px;
							font-size: 24px;
							overflow: hidden;
							font-weight: bold;
							margin-bottom: 30px;
						}

						.p2 {
							width: 100%;
							height: 44px;
							line-height: 24px;
							overflow: hidden;
							color: #333333;
							margin-bottom: 44px;
						}

						.video {
							width: 378px;
							height: 211px;
							cursor: pointer;

							video {
								width: 100%;
								height: 100%;
								position: relative;
								z-index: 2;
							}
						}
					}
				}

				.list {
					padding-top: 100px;
					padding-left: 90px;
					height: 686px;

					.list-t {
						width: 100%;
						font-size: 18px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 28px;
					}

					ul {
						margin-top: 113px;

						li {
							float: left;
							margin-right: 30px;

							img {
								width: 220px;
								height: 220px;
								border: 2px solid rgba(210, 210, 210, 1);
							}

							p {
								margin-top: 20px;
								text-align: center;
								font-size: 16px;
								font-weight: bold;
								color: rgba(51, 51, 51, 1);
							}
						}
					}
				}
			}
		}
	}
</style>
