<template>
	<div class="news">
		<div class="main-contion">
			<div class="location">当前位置：首页 > 新闻中心</div>
			<!-- 导航 -->
			<div class="l">
				<div class="header-title">新闻中心</div>
				<ul>
					<li :class="{hover:tabs==1}" @click="tabs = 1,title='所有新闻'">所有新闻</li>
					<li :class="{hover:tabs==2}" @click="tabs = 2,title='海洋欢乐世界新闻'">海洋欢乐世界新闻</li>
					<li :class="{hover:tabs==3}" @click="tabs = 3,title='麦迪卡斯水乐园新闻'">麦迪卡斯水乐园新闻</li>
				</ul>
			</div>
			<!-- 主体 -->
			<div class="r">
				<div class="title">{{title}}</div>

				<!-- 所有新闻 -->
				<div class="main-new" v-show="tabs == 1">
					<div class="hea-img">
						<router-link :to="{path:'/'}">
							<img src="../assets/img/new-1.png" alt="图片">
							<div class="bt">
								<p class="p1">关于“海洋露天剧场围蔽施工”暂停服务的公告</p>
								<p class="p2">来自长隆海洋王国 | 2018.08.09</p>
							</div>
							<div class="button"></div>
						</router-link>
					</div>

					<ul>
						<li v-for="(item,key) in list" v-if="k<7 && key<7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
						<li v-else-if="k>=7 && key >= 7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
					</ul>

					<div class="pages">
						<el-pagination background layout="prev, pager, next" :total="list.length" :page-size="7" @current-change="handleCurrentChange">
						</el-pagination>
					</div>
				</div>

				<!-- 海洋欢乐世界新闻 -->
				<div class="main-new" v-show="tabs == 2">
					<div class="hea-img">
						<router-link :to="{path:'/'}">
							<img src="../assets/img/new-2.png" alt="图片">
							<div class="bt">
								<p class="p1">关于“海洋露天剧场围蔽施工”暂停服务的公告</p>
								<p class="p2">来自长隆海洋王国 | 2018.08.09</p>
							</div>
							<div class="button"></div>
						</router-link>
					</div>

					<ul>
						<li v-for="(item,key) in list2" v-if="k2<7 && key<7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
						<li v-else-if="k2>=7 && key >= 7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
					</ul>

					<div class="pages">
						<el-pagination background layout="prev, pager, next" :total="list2.length" :page-size="7" @current-change="handleCurrentChange2">
						</el-pagination>
					</div>
				</div>

				<!-- 麦迪卡斯水乐园新闻 -->
				<div class="main-new" v-show="tabs == 3">
					<div class="hea-img">
						<router-link :to="{path:'/'}">
							<img src="../assets/img/new-3.png" alt="图片">
							<div class="bt">
								<p class="p1">关于“海洋露天剧场围蔽111施工”暂停服务的公告</p>
								<p class="p2">来自长隆海洋王国 | 2018.08.09</p>
							</div>
							<div class="button"></div>
						</router-link>
					</div>

					<ul>
						<li v-for="(item,key) in list3" v-if="k3<7 && key<7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
						<li v-else-if="k3>=7 && key >= 7">
							<router-link :to="{path:'/'}">
								<i></i>
								<span class="li-itme">{{item.title}}</span>
								<span class="li-span">{{item.span}} | {{item.time}}</span>
							</router-link>
						</li>
					</ul>

					<div class="pages">
						<el-pagination background layout="prev, pager, next" :total="list3.length" :page-size="7" @current-change="handleCurrentChange3">
						</el-pagination>
					</div>
				</div>


				<div class="main-new2">
					<div class="title">其他推荐</div>
					<div class="main-swiper">
						<swiper :options="swiperOption">
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-3.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-2.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-1.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-4.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-1.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}">
									<img src="../assets/img/new-2.png" alt=""><span>关于麦迪卡地水乐园你...</span>
								</router-link>
							</swiper-slide>
						</swiper>
						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	export default {
		name: "News",
		data() {
			return {
				tabs: 1,
				title: "所有新闻",
				swiperOption: { //swiper3
					autoplay: 3000,
					speed: 1000,
					slidesPerView: 4,
					spaceBetween: 18,
					navigation: {
						nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
						prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
						hideOnClick: true, //点击slide时显示/隐藏按钮
						disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
						hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
					}
				},
				page: 1,
				k: 0,
				list: [{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					}
				],
				page2: 1,
				k2: 0,
				list2: [{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
				],
				page3: 1,
				k3: 0,
				list3: [{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
					{
						'title': '关于“丛林过山车、沙雕城堡、海鸟世界象龟展区”升级改造暂停服务的公告',
						'span': '来自海洋欢乐世界',
						'time': '2018.08.09'
					},
				]
			};
		},
		components: {
			swiper,
			swiperSlide
		},
		methods: {
			// 分页1
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				if (val == 1) this.k = 0;
				else this.k = 7;
				this.page = val;
			},
			// 分页2
			handleCurrentChange2(val) {
				console.log(`当前页: ${val}`);
				if (val == 1) this.k2 = 0;
				else this.k2 = 7;
				this.page2 = val;
			},
			// 分页3
			handleCurrentChange3(val) {
				console.log(`当前页: ${val}`);
				if (val == 1) this.k3 = 0;
				else this.k3 = 7;
				this.page3 = val;
			},
			// 获取所有新闻數據
			GetList() {
// 				this.$http.post('/api/goods').then((data) => {
// 					this.list = data.body.data;
// 				})
			},
			// 获取海洋欢乐世界新闻數據
			GetList2() {
// 				this.$http.post('/api/goods').then((data) => {
// 					this.list2 = data.body.data;
// 				})
			},
			// 获取麦迪卡斯水乐园新闻數據
			GetList3() {
// 				this.$http.post('/api/goods').then((data) => {
// 					this.list3 = data.body.data;
// 				})
			}
		},
		mounted() {
			this.GetList();
			this.GetList2();
			this.GetList3();
		}
	}
</script>

<style scoped="" lang="scss">
	.news {
		width: 100%;
		height: 1802px;
		background: #fff url(../assets/img/new-1.png) no-repeat top center;
		background-size: 1920px 100%;

		.main-contion {
			width: 1200px;
			min-height: 1%;
			clear: both;
			margin: 0 auto;
			padding-top: 400px;

			.location {
				height: 22px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 22px;
				padding-left: 40px;
				margin-left: 280px;
				background: url(../assets/img/new-4.png) no-repeat 15px 0;
			}

			// 导航
			.l {
				float: left;
				width: 240px;
				height: 599px;
				background: url(../assets/img/new-3.png) no-repeat top center;
				margin-right: 40px;
				margin-top: 20px;
				box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
				border-radius: 10px;

				.header-title {
					font-size: 35px;
					font-family: MicrosoftYaHei-Bold;
					font-weight: bold;
					color: rgba(238, 238, 238, 1);
					width: 240px;
					height: 180px;
					line-height: 180px;
					text-align: center;
				}

				ul>li {
					width: 100%;
					height: 140px;
					line-height: 140px;
					text-align: center;
					font-size: 20px;
					font-family: MicrosoftYaHei;
					font-weight: bold;
					color: rgba(238, 238, 238, 1);
					cursor: pointer;

					&.hover,
					&:hover {
						background: rgba(228, 119, 30, 1);
					}
				}
			}

			// 主体
			.r {
				height: 1300px;
				width: 920px;
				float: left;
				margin-top: 20px;
				background: url(../assets/img/new-2.png) no-repeat -8px -8px;
				border-radius: 10px;
				box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);

				.title {
					text-align: center;
					font-size: 35px;
					font-family: MicrosoftYaHei-Bold;
					font-weight: bold;
					color: rgba(238, 238, 238, 1);
					width: 100%;
					height: 91px;
					line-height: 91px;
				}

				.main-new {
					padding: 31px 34px 0 37px;
					width: 100%;

					.hea-img {
						width: 100%;
						height: 406px;
						position: relative;
						margin-bottom: 5px;

						img {
							width: 100%;
							height: 100%;
							display: block;
						}

						.bt {
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							height: 70px;
							background: rgba(43, 43, 43, 0.82);
							padding-left: 21px;

							.p1 {
								font-size: 16px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(255, 255, 255, 1);
								margin-top: 14px;
								height: 17px;
							}

							.p2 {
								height: 14px;
								font-size: 12px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(157, 157, 157, 1);
								margin-top: 12px;
							}
						}

						.button {
							width: 19px;
							height: 33px;
							position: absolute;
							right: 36px;
							bottom: 20px;
							background: url(../assets/img/new-7.png) no-repeat;
						}
					}

					ul {
						height: 378px;

						li {
							position: relative;
							width: 100%;
							height: 54px;
							line-height: 14px;
							padding: 20px 0;
							border-top: 1px solid #D7D7D7;
							padding-left: 20px;

							i {
								position: absolute;
								width: 5px;
								height: 5px;
								left: 5px;
								top: 24px;
								background: rgba(191, 191, 191, 1);
								border-radius: 50%;
							}

							&:nth-of-type(1) {
								border-top: none;
							}

							span {
								width: 600px;
								height: 14px;
								display: block;
								float: left;
								font-size: 14px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(51, 51, 51, 1);
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;

								&.li-span {
									width: 200px;
									float: right;
									font-size: 12px;
									font-family: MicrosoftYaHei;
									font-weight: 400;
									color: rgba(157, 157, 157, 1);
									text-align: right;
								}
							}
						}
					}

					.pages {
						height: 32px;
						margin-top: 60px;
						text-align: center;
					}
				}

				.main-new2 {
					width: 100%;
					height: 230px;
					background: rgba(244, 244, 244, 1);
					border-radius: 10px;
					margin-top: 66px;

					.title {
						height: 68px;
						font-size: 14px;
						font-family: MicrosoftYaHei;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						width: 100%;
						padding-left: 100px;
						padding: 25px 0 28px 100px;
						line-height: 15px;
						text-align: left;
					}

					.main-swiper {
						position: relative;
						width: 722px;
						height: 110px;
						margin: 0 auto;

						img {
							width: 167px;
							height: 110px;
							display: inline-block;
						}

						span {
							display: block;
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							height: 30px;
							background: rgba(13, 13, 13, 0.78);
							line-height: 30px;
							width: 143px;
							padding: 0 12px;
							font-size: 12px;
							font-family: MicrosoftYaHei;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
<style lang="scss">
	.main-new2 .main-swiper {
		.swiper-container {
			height: 110px;
		}

		.swiper-button-next,
		.swiper-button-prev {
			width: 38px;
			height: 89px;
			background: rgba(210, 210, 210, 1) url(../assets/img/new-5.png) no-repeat;
			position: absolute;
			right: -60px;
			top: 30px;

			&:focus {
				border: none;
				outline: none;
			}
		}

		.swiper-button-prev {
			right: 0;
			left: -60px;
			background: rgba(210, 210, 210, 1) url(../assets/img/new-6.png) no-repeat;
		}

		.my-button-disabled {
			opacity: .5;
			cursor: not-allowed;
		}
	}
</style>
