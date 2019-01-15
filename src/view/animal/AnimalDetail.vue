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
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="go" :class="{anActive:actives == keys}">
							<template v-if="keys == 0">{{$t('animal.navName1')}}</template>
							<template v-if="keys == 1">{{$t('animal.navName2')}}</template>
							<template v-if="keys == 2">{{$t('animal.navName3')}}</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys == actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box">
						<template v-if="type == 1">
							<div class="title-1">
								哺乳类-鲸豚类 <span @click="go">{{$t('Return')}}</span>
							</div>
							<div class="title-2">
								瓶鼻海豚<span>中文名 宽吻海豚 拉丁学名 Tursiops truncatus (Montagu, 1821)</span>
							</div>

							<div class="box-swiper">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide>
										<img src="../../assets/img/anila6/1.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/1.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/1.png" alt="">
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
						</template>

						<template v-if="type == 2">
							<div class="title-1">
								哺乳类-鲸豚类 <span @click="go">返回</span>
							</div>
							<div class="title-2">
								白鲸<span>中文名 白鲸 拉丁学名 Delphinapterus leucas (Pallas，1776) </span>
							</div>

							<div class="box-swiper">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide>
										<img src="../../assets/img/anila6/2.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/2.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/2.png" alt="">
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>

							<div class="span-1">
								保护现状 CITES附录Ⅱ；中国国家二级保护野生动物；列入《世界自然保护联盟》（IUCN）濒危物种红色名录近危物种（NT）。
							</div>

							<div class="span-2">
								体型 躯体粗壮，呈白色或黄色，头圆、喙短，没有背鳍。体长平均3-5米，可达5.5米。体重雄性可达1500千克；雌性可达1350千克。<br>
								寿命 32-40年（野外）。<br>
								食性 以鱼类为主，也食用无脊椎动物，如蟹、虾、蛤蚌、蠕虫、章鱼、鱿鱼以及其它海洋底栖生物。<br>
								繁殖 胎生，繁殖季一般在2月末到4月初，妊娠期持续14个月。<br>
								分布 北极、亚北极水域。<br>
							</div>
						</template>

						<template v-if="type == 3">
							<div class="title-1">
								鳍脚类 <span @click="go">返回</span>
							</div>
							<div class="title-2">
								海象<span>中文名 海象 拉丁学名 Odobenus rosmarus（Linnaeus，1758）</span>
							</div>

							<div class="box-swiper">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide>
										<img src="../../assets/img/anila6/3.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/3.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/3.png" alt="">
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>

							<div class="span-1">
								保护现状 《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）易危（VU）
							</div>

							<div class="span-2">
								体型 身体呈圆筒形，粗壮而肥胖，雄兽体长3.3-4.5米，体重1200-3000千克，雌兽较小，体长一般为2.9-3.3米，体重600-900千克。<br>
								寿命 30-40年<br>
								食性 肉食性<br>
								繁殖 胎生，雌兽每3年产一胎，妊娠期为11-13个月，每胎只产1仔。<br>
								分布 环北极圈海域<br>
							</div>
						</template>

						<template v-if="type == 4">
							<div class="title-1">
								鳍脚类 <span @click="go">返回</span>
							</div>
							<div class="title-2">
								南美海狮<span>中文名 南美海狮 拉丁学名 Otaria flavescens </span>
							</div>

							<div class="box-swiper">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide>
										<img src="../../assets/img/anila6/4.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/4.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/4.png" alt="">
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>

							<div class="span-1">
								保护现状 《世界自然保护联盟濒危物种红色名录》（The IUCN Red List）无危（LC）
							</div>

							<div class="span-2">
								体型 雄性2-2.5米，雌性平均2米。体重雄性200-350千克，雌性140-150千克。<br>
								寿命 16-20年<br>
								食性 肉食性<br>
								繁殖 胎生，8月到12月间为南海狮的交配季节，12月到2月间幼崽出生。<br>
								分布 南美洲的海岸线和沿海的小岛上<br>
							</div>
						</template>

						<template v-if="type == 5">
							<div class="title-1">
								海牛类 <span @click="go">返回</span>
							</div>
							<div class="title-2">
								西非海牛<span>中文名 西非海牛 拉丁学名 Trichechus senegalensis</span>
							</div>

							<div class="box-swiper">
								<swiper :options="swiperOption" ref="mySwiper">
									<swiper-slide>
										<img src="../../assets/img/anila6/5.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/5.png" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/img/anila6/5.png" alt="">
									</swiper-slide>
								</swiper>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>

							<div class="span-1">
								保护现状 CITES附录Ⅰ；中国国家二级保护野生动物；列入《世界自然保护联盟》（IUCN）2015年濒危物种红色名录易危物种（UV）。
							</div>

							<div class="span-2">
								体型 体型呈纺锤状，背部宽阔无背鳍，头部比例小。体长可达4.5米，体重200-500公斤。<br>
								寿命 约30年<br>
								食性 草食性，以多种浮水、半水生与挺水植物以及浅滩植物为食。<br>
								繁殖 胎生，怀孕期约1年，通常1胎产1仔。<br>
								分布 非洲西部海岸与河流水域<br>
							</div>
						</template>
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
				active: 0,
				actives: 0,
				swiperOption: { //轮播图配置
					autoplay: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
				},
				type: this.$route.params.id,
				list: '',
				id: 1
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
			this.getList();
		},
		methods: {
			go() { //返回
				this.$router.push({
					path: '/animal',
					query: {
						type: '0'
					}
				})
			},
			getList() { //根据id获取内容
				let data = {
					id: this.id
				}
				this.$fetch(`${this.$url1}:2130/payment-aggregate/findPayMentreByOrderId`,data).then(res => {
					if(res.code == 200) {
						this.list = res.data.data || '';
					}
				}).catch(error => {
					console.log(error.response)
				})
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
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
