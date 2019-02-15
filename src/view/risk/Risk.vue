<template>
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="risk-title">
					<p class="p1">{{$t('risk.title')}}</p>
					<p class="p2" v-html="$t('risk.description')"></p>
				</div>
				<div class="location">{{$t('Position')}}><router-link to="index" tag="span">{{$t('Home')}}></router-link>{{$t('risk.title')}}</div>
			</div>
			<div class="content">
				<div class="inner-box">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(item,index) in data" :key="index" :style="{background:'rgba(246,179,127,.65)',width:'1200px',height:'686px'}">
							<div class="clearDiv">
								<div class="left floatLeft">
									<img :src="item.facePictureId[0]" alt="图片">
									<button class="btn1">{{$t('risk.btn1')}}</button>
									<button class="btn2">{{$t('risk.btn2')}}</button>
								</div>
								<div class="right floatRight">
									<p class="p1">{{item.title}}</p>
									<p class="p2">{{item.content0.substring(3,item.content0.length-4)}}</p>
									<div class="video" @click="status=true">
										<img src="../../assets/img/risk-bg6.png" alt="视频背景图片" v-if="!status">
										<template v-if="status">
											<video controls="" autoplay="" name="media">
												<source :src="item.content1.substring(3,item.content1.length-4)" type="video/mp4"></video>
										</template>
									</div>
								</div>
							</div>
						</swiper-slide>
						<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
						<div class="swiper-button-next swiper-button-black" slot="button-next"></div>
					</swiper>
					<div class="list">
						<p class="list-t" v-html="$t('risk.h2_title')"></p>
						<ul class="clearDiv">
							<li v-for="item in 4" :key="item">
								<img :src="`../../../static/risk-bg${item}.png`" alt>
								<p>
									<template v-if="item == 1">{{$t('risk.name1')}}</template>
									<template v-if="item == 2">{{$t('risk.name2')}}</template>
									<template v-if="item == 3">{{$t('risk.name3')}}</template>
									<template v-if="item == 4">{{$t('risk.name4')}}</template>
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
	import Cookies from 'js-cookie';
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	import Header from "@/components/Header"; //引入头部
	import {
		IMG_Url
	} from "@/package/common";
	export default {
		data() {
			return {
				status: false,
				swiperOption: {
					notNextTick: true,
					//循环
					loop: true,
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
				},
				pageSize: 4,
				pageIndex: 1,
				imgs: [],
				list: [],
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0
			};
		},

		components: {
			swiper,
			swiperSlide,
			Header
		},
		computed: {
			data() { //处理冒险之旅图片数据
				let list = this.list;
				list.forEach((v, k) => {
					if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							this.imgs.forEach(res => {
								if (val == res.id) {
                  					v.facePictureId[key] = IMG_Url + res.fileName;
								}
							});
						})
					}
				});
				return list;
			}
		},
		methods: {
			getSearch(type, pageSize, pageIndex, isEnglish) { //获取冒险之旅列表 后台ID=D pageSize分页大小 pageIndex第几页 isEnglish中英文标识
				this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
				).then(res => {
					if (res.code === 200) {
					let xin = [];
					let xin2 = "";
					let list = [];
					if (type == 'D') {
						this.list = res.data.content || [];
						list = this.list;
					}
					list.forEach((v, k) => { //拼接图片字符串
						if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							// if (key == 0) { //获取第一个图片
							xin.push(val);
							xin2 = xin.join(",");
							// }
						})
						}
					});
					this.GetSelectFiles(xin2, type);
					} else {
					console.log("读取失败");
					}
				});
			},
			GetSelectFiles(obj, type) { //批量获取图片
				this.$fetch(`${this.$url1}:2600/staticResource-mucon/selectFiles`, {
					ids: obj
				}).then(res => {
					this.imgs = res.data;
				});
			},
		},
		mounted() {
			this.getSearch('D', this.pageSize, this.pageIndex, this.isEnglish);
		}
	};
</script>
<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/risk-bg.jpg) no-repeat top center;
		background-size: 1920px 100%;
		padding-top: 376px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			background: linear-gradient(180deg,
				rgba(114, 180, 42, 1),
				rgba(134, 212, 100, 1));
			box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.35);
			position: relative;

			.risk-title {
				position: absolute;
				top: -345px;
				left: 390px;
				width: 350px;
				color: #fff;

				.p1 {
					font-size: 48px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					margin-bottom: 30px;
					line-height: 48px;
				}

				.p2 {
					font-size: 20px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 30px;
				}
			}

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
				/* cursor: pointer; */
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
						left: 50px;
						top:220px;
					}

					.swiper-button-next {
						width: 39px;
						height: 98px;
						background: rgba(255, 255, 255, 0.6) url(../../assets/img/md-r.png) no-repeat center center ;
						border-radius: 10px;
						right: 50px;
						top:220px;
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
						.img1{
							width: 194px;
							height: 359px;
							margin-left: 50px;
						}
						.img2{
							width: 312px;
							height: 382px;
						}
						.img3{
							width: 312px;
							height: 382px;
						}
						.img4{
							width: 312px;
							height: 382px;
						}
						.btn1 {
							cursor: pointer;
							float: left;
							width: 100px;
							height: 38px;
							background: rgba(248, 181, 81, 1);
							border: 1px solid rgba(233, 151, 8, 1);
							border-radius: 19px;
							font-size: 14px;
							font-weight: 400;
							color: rgba(255, 255, 255, 1);
							margin-left: 79px;
							margin-right: 24px;
							&:hover{
								background: #f8d651;
							}
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
							&:hover{
								background: #f8857c;
							}
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
					height: 560px;

					.list-t {
						width: 100%;
						font-size: 18px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 28px;
					}

					ul {
						margin-top: 40px;

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
