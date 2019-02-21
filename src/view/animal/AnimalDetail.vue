<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-25
		描述：动物课堂详情页面  需要动物百科ID
	-->
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="location">{{$t('Position')}}>
					<router-link to="/index" tag="span">{{$t('Home')}}></router-link>
					<router-link to="animal" tag="span">{{$t('animal.title')}}</router-link>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<router-link class="li" :to="{path:'/animal',query:{type:item}}" tag="li" v-for="item in 7" :key="item" :class="{anActive:actives == item}">
							{{$t(`animal.navName${item}`)}}
						</router-link>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box">
						<template>
							<div class="title-1">
								{{list.infoTitle}} <span @click="go">{{$t('Return')}}</span>
							</div>
							
							<div class="box-swiper" v-if="status">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide v-for="(item,index) in data.infoPic" :key="index">
										<img :src="item.picid || i">
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev" v-if="data.infoPic.length > 1"></div>
								<div class="swiper-button-next" v-if="data.infoPic.length > 1"></div>
							</div>

							<div v-html="list.infoContent"></div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	import {
		IMG_Url2
	} from "@/package/common";
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	export default {
		data() {
			return {
				actives: 1,
				swiperOption: { //轮播图配置
					autoplay: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
				},
				id: this.$route.params.id || 1,
				list: [],
				img: [],
				i: require('../../assets/img/anila6/1.png'),
				status:false
			}
		},
		components: {
			Header,
			swiper,
			swiperSlide
		},
		computed: {
			data() {
				let list = this.list;
				if (list.infoPic) { //是否有图片
					list.infoPic.forEach((val, key) => {
						this.img.forEach(res => {
							if (val.picid == res.id) {
								val.picid = IMG_Url2 + res.fileName;
							}
						});
					})
				}
				return list;
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			go() { //返回
				this.$router.push({
					path: '/animal'
				})
			},
			getList() { //根据id获取内容
				this.$fetch(this.$url1 + ':6110/mongodb-mucon/info/primary/get?infoId=' + this.id + '&isEnglish=' +
					this.$isEnglish).then((res) => {
					this.list = res.data;
					let xin = [];
					let xin2 = "";
					if (this.list.infoPic) { //是否有图片
						this.status = !this.status;
						this.list.infoPic.forEach((val, key) => {
							xin.push(val.picid);
							xin2 = xin.join(",");
						})
					}
					this.GetSelectFiles(xin2);
				})
			},
			GetSelectFiles(obj) { //批量获取图片
				this.$fetch(`${this.$url1}:2600/staticResource-mucon/selectFiles`, {
					ids: obj
				}).then(res => {
					this.img = res.data;
				});
			}
		},
	}
</script>

<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/theme-animal-bg.jpg) no-repeat top center;
		padding-top: 438px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			background: linear-gradient(180deg,
				rgba(15, 107, 234, 1),
				rgba(52, 142, 240, 1));
			box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);
			position: relative;

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

			.left {
				width: 250px;
				background: rgba(255, 255, 255, 0.2);
				padding-bottom: 30px;
				border-radius: 0 0 10px 10px;

				.ul {
					width: 213px;
					margin: 0 auto;
					background-color: rgba(255, 255, 255, 1);
					padding-top: 30px;

					.li {
						position: relative;
						height: 70px;
						line-height: 70px;
						text-align: center;
						font-size: 18px;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						cursor: pointer;

						img {
							position: absolute;
							width: 8px;
							height: 14px;
							margin-left: 10px;
							top: 50%;
							margin-top: -7px;
							right: 30px;
						}

						&:hover div {
							display: block;
						}

						div {
							display: none;
							left: 222px;
							top: 0;
							width: 370px;
							height: 114px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
							position: absolute;
							z-index: 10;
							padding: 25px;

							&:after {
								content: "";
								position: absolute;
								top: 50%;
								left: -4px;
								transform: translate(-50%, 0);
								border-right: 9px solid rgba(255, 255, 255, 1);
								/*此处将左右的边框设置为透明色*/
								border-top: 9px solid transparent;
								border-bottom: 9px solid transparent;
								margin-top: -32px;
							}

							ul {
								li {
									float: left;
									height: 28px;
									font-size: 14px;
									font-weight: 400;
									color: rgba(153, 153, 153, 1);
									line-height: 28px;
									padding: 0 10px;
								}

								.liActive {
									color: rgba(249, 126, 47, 1);
								}
							}
						}
					}

					.anActive {
						background: rgba(249, 126, 47, 1);
						color: rgba(255, 255, 255, 1);
					}
				}
			}

			.right {
				width: 908px;
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.08);
				border-radius: 0px 0px 10px 10px;
				padding-bottom: 44px;

				.box {
					width: 863px;
					min-height: 800px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;
					padding: 50px 48px 50px 32px;

					.title-1 {
						position: relative;
						width: 100%;
						height: 35px;
						font-size: 24px;
						line-height: 35px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						span {
							position: absolute;
							top: 0;
							right: 0;
							width: 74px;
							height: 33px;
							text-align: center;
							background: rgba(235, 235, 235, 1);
							border: 1px solid rgba(210, 210, 210, 1);
							font-size: 14px;
							color: #666666;
							cursor: pointer;
						}
					}

					.title-2 {
						width: 100%;
						height: 30px;
						margin-top: 10px;
						line-height: 30px;
						font-size: 18px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						span {
							margin-left: 10px;
							font-size: 14px;
							color: rgba(51, 51, 51, 1);
						}
					}

					.box-swiper {
						width: 100%;
						height: 459px;
						margin-top: 20px;
						overflow: hidden;
						position: relative;
						margin-bottom: 20px;
					}

					.span-1 {
						margin-top: 50px;
						font-size: 12px;
						color: #666666;
						width: 100%;
						height: 30px;
						line-height: 30px;
					}

					.span-2 {
						line-height: 24px;
						font-size: 14px;
						color: #666666;
						margin-bottom: 50px;
					}

					.div-video {
						width: 778px;
						height: 435px;
						overflow: hidden;
						cursor: pointer;

						video {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>
<style lang="scss">
	.box-swiper {

		.swiper-button-next,
		.swiper-button-prev {
			width: 38px;
			height: 89px;
			background: rgba(51, 51, 51, 0.2) url(../../assets/img/new-5.png) no-repeat;
			top: 50%;
			transform: translateY(-50%);

			&:focus {
				outline-style: none;
			}
		}

		.swiper-button-prev {
			left: 20px;
			background: url(../../assets/img/new-6.png) no-repeat;
		}

		.swiper-button-next {
			right: 20px;
		}

		.swiper-slide {
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
