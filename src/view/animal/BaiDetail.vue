<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-25
		描述：保育救助\科普活动详情页面  需要ID
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
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="go" :class="{anActive:actives == keys || type == keys}">
							<template v-if="keys == 0">{{$t('animal.navName1')}}</template>
							<template v-if="keys == 1">{{$t('animal.navName2')}}</template>
							<template v-if="keys == 2">{{$t('animal.navName3')}}</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys == actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box">
						<div class="title-1">
							{{list.infoTitle}}<span @click="go">{{$t('Return')}}</span>
						</div>
						<div class="title-2">
							<span>{{list.createTime}}</span>
						</div>
						<div class="conent-main" v-html="list.infoContent">

						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Cookies from 'js-cookie'
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				actives: 0,
				type: this.$route.params.type,
				id: this.$route.params.id,
				list: '',
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0
			}
		},
		components: {
			Header
		},
		computed: {

		},
		mounted() {
			if (!this.type || !this.id) { //没有判断状态和ID
				this.$router.push({
					path: '/animal',
					query: {
						type: this.type || '1'
					}
				})
			} else {
				this.actives = this.type;
			}
			this.getList();
		},
		methods: {
			go() { //返回
				this.$router.push({
					path: '/animal',
					query: {
						type: this.type
					}
				})
			},
			getList() { //根据id获取内容
				this.$fetch(this.$url1 + ':6110/mongodb-mucon/info/primary/get?infoId=' + this.$route.params.id + '&isEnglish=' +
					this.isEnglish).then((res) => {
					this.list = res.data;
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
						padding-right: 80px;
						height: 35px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
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
							font-size: 14px;
							color: #999999;
						}
					}

					.box-swiper {
						width: 100%;
						overflow: hidden;
						position: relative;
						text-align: center;

						* {
							max-width: 100%;
							display: inline-block;
							;
						}

						span {
							margin-top: 20px;
							margin-bottom: 20px;
							display: block;
							color: #666666;
						}

					}

					.span-3 {
						text-indent: 2em;
						line-height: 24px;
						font-size: 14px;
						color: #333;
						margin-bottom: 20px;
						margin-top: 20px;

						* {
							text-indent: 2em;
						}
					}

				}
			}
		}
	}

	.conent-main {
		margin-top: 20px;
		width: 100%;
		height: 667px;
		overflow-y: auto;

		&::-webkit-scrollbar {
			/*滚动条整体样式*/
			width: 10px;
			/*高宽分别对应横竖滚动条的尺寸*/
			height: 1px;
		}

		&::-webkit-scrollbar-thumb {
			/*滚动条里面小方块*/
			border-radius: 10px;
			background-color: #F90;
			background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
		}

		&::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
			/* border-radius: 10px; */
			background: #EDEDED;
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
