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
				<div class="location">当前位置><router-link to="/index" tag="span">首页></router-link>
					<router-link to="animal" tag="span">动物百科</router-link>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="actives = keys" :class="{anActive:actives === keys}">
							<template v-if="keys == 0">动物课堂</template>
							<template v-if="keys == 1">保育救助</template>
							<template v-if="keys == 2">科普活动</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys === actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box">
						<div class="title-1">
							哺乳类-鲸豚类 <span @click="go">返回</span>
						</div>
						<div class="title-2">
							瓶鼻海豚<span>中文名 宽吻海豚 拉丁学名 Tursiops truncatus (Montagu, 1821)</span>
						</div>

						<div class="box-swiper">
							<swiper :options="swiperOption" ref="mySwiper">
								<swiper-slide>
									<img src="../../assets/img/ADetail2.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<img src="../../assets/img/ADetail2.png" alt="">
								</swiper-slide>
								<swiper-slide>
									<img src="../../assets/img/ADetail2.png" alt="">
								</swiper-slide>
							</swiper>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>

						<div class="span-1">
							保护现状 CITES附录II,中国国家二级保护野生动物,列入《世界自然保护联盟》(IUCN) 2012年濒危物种红色名录无威物种(LC)
						</div>

						<div class="span-2">
							体型——身体为流线型，雌性身长为1.9-2.1米，体重为170-200千克，雄性体长为2.5-3.9米，体重为300-650千克。 <br>
							寿命——雌性宽吻海豚的寿命在80年左右，而雄性宽吻海豚由于生活压力更大，不容易过50年。<br>
							食性——食物主要包括带鱼、鲅鱼、鲻鱼、沙丁鱼等群栖性的鱼类，偶尔也吃乌贼或蟹类，以及其他一些小动物。<br>
							繁殖——胎生哺乳，雌性宽吻海豚在5-12岁时性成熟，雄性稍迟，在10-12岁。<br>
							分布——分布于大西洋、印度洋、南太平洋、地中海<br>
						</div>
						
						<div class="div-video" @click="status=true">
							<img src="../../assets/img/Adetail1.png" alt="图片" v-if="!status">
							<template v-if="status">
								<video controls="" autoplay="" name="media">
									<source src="http://220.164.101.233/6972ABA05563D7189138F285D/03000A17005A6D6FDD431E055EEB3ED1C172E0-9A6B-0F5C-3683-71EB5632A884.mp4?ccode=050F&amp;duration=392&amp;expire=18000&amp;psid=9de947e6e0e2165a511f0bbaaa3a0f24&amp;ups_client_netip=77629cc8&amp;ups_ts=1545639349&amp;ups_userid=&amp;utid=P2yiFEgDlTgCAXdinMiUZGFx&amp;vid=XMzEyMjcxNjAw&amp;vkey=A424309d5ad1aaba3737f078c6d9fdae9&amp;sp=&amp;ali_redirect_domain=ykugc.cp31.ott.cibntv.net&amp;ali_redirect_ex_ftag=95670d958d49197e342f1df4ea06b2766aaef08cf8811e3d&amp;ali_redirect_ex_tmining_ts=1545639355&amp;ali_redirect_ex_tmining_expire=3600&amp;ali_redirect_ex_hot=0"
									type="video/mp4"></video>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	export default {
		data() {
			return {
				status:false,
				active: 0,
				actives: 0,
				swiperOption: { //轮播图配置
					autoplay: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
				}
			}
		},
		components: {
			Header,
			swiper,
			swiperSlide
		},
		computed: {

		},
		mounted() {

		},
		methods: {
			chooseAnimal(key, id) {
				this.actives = key;
				this.active = 0;
			},
			choosetype(key, id) {
				this.active = key;
			},
			go(){//返回
				this.$router.go(-1);
			}
		},
	}
</script>

<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/theme-animal-bg.png) no-repeat top center;
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
					
					.div-video{
						width: 778px;
						height: 435px;
						overflow: hidden;
						cursor: pointer;
						video{
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
	}
</style>
