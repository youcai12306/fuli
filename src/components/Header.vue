<template>
	<div class="main">
		<div class="main-content">
			<div class="logo floatLeft">
				<router-link to="/index">
					<img src="../assets/img/logo.png" alt>
				</router-link>
			</div>
			<div class="floatLeft">
				<ul>
					<!-- 网上订购 -->
					<li class="order" @click="jumpOrderTicket" :class="{'actives' : ['Tickets','TicketDetail','Suborder2','suborder'].indexOf($route.name) != -1}" @mouseover="overHover('Tickets')"
					 @mouseout="outHover('')">
						<template v-if="['Tickets','TicketDetail','Suborder2','suborder'].indexOf($route.name) != -1 || hover == 'Tickets' || hover == 'TicketDetail' || hover == 'Suborder2' || hover == 'suborder'">
							<img src="../assets/img/header-1.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header1.png" alt>
						</template>
						<p>{{$t('header.title1')}}</p>
					</li>
					<!-- 主题乐园 -->
					<li to="/theme/1" @mouseover="showNavList(1),overHover('Theme'),height='97px'" @mouseout="hiddenNavList(1),outHover(''),height='0px'"
					 class="theme" :class="{'actives' : $route.name == 'Theme'}">
						<router-link to="/theme/1" tag="div">
							<template v-if="$route.name == 'Theme' || hover == 'Theme'">
								<img src="../assets/img/header-2.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header2.png" alt>
							</template>
							<p>{{$t('header.title2')}}</p>
						</router-link>
					</li>
					<!-- 度假酒店 -->
					<li class="hotel" :class="{'actives' : $route.name == 'Hotel' ||  $route.name == 'HotelDetail'}" @mouseover="overHover('a')"
					 @mouseout="outHover('')">
						<router-link to="/hotel" tag="div">
							<template v-if="$route.name == 'Hotel' || $route.name == 'HotelDetail' || hover == 'a'">
								<img src="../assets/img/header-3.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header3.png" alt>
							</template>
							<p>{{$t('header.title3')}}</p>
						</router-link>
					</li>
					<!-- 新闻中心 -->
					<li class="news" :class="{'actives' : $route.path == '/news' || $route.path == '/newList' || $route.path == '/noticeList' || $route.path == '/newDetail' || $route.path == '/noticeDetail'}"
					 @mouseover="overHover('news')" @mouseout="outHover('')">
						<router-link to="/news" tag="div">
							<template v-if="$route.path == '/news' || $route.path == '/newList' || $route.path == '/noticeList' || $route.path == '/newDetail' || $route.path == '/noticeDetail' || hover == 'news'">
								<img src="../assets/img/header-4.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header4.png" alt>
							</template>
							<p>{{$t('header.title4')}}</p>
						</router-link>
					</li>

					<!-- 游玩指南 -->
					<li class="trip" :class="{'actives' : $route.name == 'ditu'}" @mouseover="overHover('ditu')" @mouseout="outHover('')">
						<router-link to="/ditu" tag="div">
							<template v-if="$route.name == 'ditu' || hover == 'ditu'">
								<img src="../assets/img/header-5.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header5.png" alt>
							</template>
							<p>{{$t('header.title5')}}</p>
						</router-link>
					</li>

					<!-- 优惠活动 -->
					<li class="active" :class="{'actives' : $route.path == '/specialOffier' || $route.path == '/events' || $route.path == '/EventsDetail'}"
					 @mouseover="overHover('specialOffier')" @mouseout="outHover('')">
						<router-link :to="{path:'/events',query:{id:'E'}}" tag="div">
							<template v-if="$route.path == '/specialOffier' || $route.name == 'events' || $route.path == '/EventsDetail' || hover == 'specialOffier'">
								<img src="../assets/img/header-6.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header6.png" alt>
							</template>
							<p>{{$t('header.title6')}}</p>
						</router-link>
					</li>

					<!-- 冒险之旅 -->
					<li class="risk" :class="{'actives' : $route.name == 'Risk'}" @mouseover="overHover('Risk')" @mouseout="outHover('')">
						<router-link to="/risk" tag="div">
							<template v-if="$route.name == 'Risk' || hover == 'Risk'">
								<img src="../assets/img/header-7.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header7.png" alt>
							</template>
							<p>{{$t('header.title7')}}</p>
						</router-link>
					</li>

					<!-- 动物百科 -->
					<li class="animal" :class="{'actives' : $route.name == 'Animal' || $route.name == 'BaiDetails'}" @mouseover="overHover('Animal')"
					 @mouseout="outHover('')">
						<router-link to="/animal" tag="div">
							<template v-if="$route.name == 'Animal' || $route.name == 'BaiDetails' || hover == 'Animal'">
								<img src="../assets/img/header-8.png" alt>
							</template>
							<template v-else>
								<img src="../assets/img/header8.png" alt>
							</template>
							<p>{{$t('header.title8')}}</p>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="nav-right floatLeft">
				<div class="right-info">
					<div class="login" ref="box">
						<span v-if="!showMineInfo" @click.stop="jumpMine()">{{$t('header2.Login')}}</span>
						<span v-else class="mine-mengbox span">
							{{name}},{{$t('header.huan')}}
							<div class="person-info">
								<div class="info-one">
									<router-link to="/prepaid" class="mine" :class="{ml60:chs == 'en'}">{{$t('Center.Center')}}</router-link>
									<!-- <a href="javascript:;" class="mine" >个人中心</a> -->
									<a href="javascript:;" class="exit" @click.stop="setSignOuts">{{$t('Center.Exit')}}</a>
								</div>
								<div class="clearDiv info-two">
									<img src="../assets/img/touxiang123.png" alt class="floatLeft">
									<div class="floatLeft">
										<p>{{$store.getters.userInfo.mobile}}</p>
										<p>{{$t('Center.my')}}：{{this.$store.getters.getUserData.memberlevel}}</p>
									</div>
								</div>
							</div>
						</span>
					</div>
					<!-- <div class="language-change" @click="$translate">
            <span :class="{ch:ch == 0}">中文</span>
            <span :class="{en:ch == 1}">英文</span>
          </div> -->
					<div class="language-change">
						<span :class="{ch:chs == 'zh'}" @click.stop="handleSetLanguage('zh'),chs='zh'">{{$t('Chinese')}}</span>
						<span :class="{en:chs == 'en'}" @click.stop="handleSetLanguage('en'),chs='en'">{{$t('English')}}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 主题乐园 -->
		<div class="nav-list" :style="{height:height}" @mouseover="height='97px'" @mouseout="height='0px'">
			<div class="lists">
				<ul>
					<li>
						<router-link to="/theme/1">
							<p class="list-img">
								<img src="../assets/img/H1.png" alt>
							</p>
							<p class="list-title">{{$t('Themes.title1')}}</p>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/2">
							<p class="list-img">
								<img src="../assets/img/H2.png" alt>
							</p>
							<p class="list-title">{{$t('Themes.title2')}}</p>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/3">
							<p class="list-img">
								<img src="../assets/img/H3.png" alt>
							</p>
							<p class="list-title">{{$t('Themes.title3')}}</p>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/4">
							<p class="list-img">
								<img src="../assets/img/H4.png" alt>
							</p>
							<p class="list-title">{{$t('Themes.title4')}}</p>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/5">
							<p class="list-img">
								<img src="../assets/img/H5.png" alt>
							</p>
							<p class="list-title">{{$t('Themes.title5')}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapActions
	} from "vuex";
	import {
		mapGetters
	} from "vuex";
	import {
		delCookie
	} from "@/package/cookie";
	import Cookies from 'js-cookie'
	export default {
		name: "Hearer",
		data() {
			return {
				show: false,
				name: "",
				height: 0,
				hover: "",
				chs: Cookies.get('language') || 'zh',
				ch: sessionStorage.getItem("language") || '0'
			};
		},
		computed: {
			...mapGetters({
				user: "getUserData"
			})
		},
		created() {
			if (Object.keys(this.$store.getters.userInfo).length === 0) {
				this.showMineInfo = false;
				this.name = "";
			} else {
				this.showMineInfo = true;
				this.name = this.$store.getters.userInfo.mobile;
			}
		},
		methods: {
			overHover(str) {
				this.hover = str;
			},
			outHover(str) {
				this.hover = str;
			},
			showNavList(type) {
				if (type === 2) {
					clearTimeout(this.time);
				}
				this.show = true;
			},
			hiddenNavList(type) {
				if (type === 2) {
					this.show = false;
				} else {
					this.time = setTimeout(() => {
						this.show = false;
					}, 2000);
				}
			},

			//跳转登录
			jumpMine() {
				this.$router.push("/login");
			},
			//跳转订票页面
			jumpOrderTicket() {
				this.$router.push("/tickets/0");
			},
			...mapActions(["setSignOut"]),
			//退出登录
			setSignOuts() {
				this.setSignOut();
				delCookie("userData");
				this.$router.go(0);
			},
			handleSetLanguage(lang) {
				if(lang == 'zh'){
					sessionStorage.setItem('isChinese','0')
				}else{
					sessionStorage.setItem('isChinese','1')
				}
				this.$i18n.locale = lang;
				this.$store.dispatch("setLanguage", lang);
				window.location.reload();
			}
		}
	};
</script>
<style lang='scss' scoped>
	.main {
		position: relative;
		height: 97px;

		.main-content {
			height: 97px;
			/* overflow: hidden; */
			background-color: #ffffff;
			min-width: 1200px;

			.logo {
				padding-top: 26px;
				margin-left: 180px;
			}

			ul {
				padding-left: 26px;

				li {
					height: 97px;
					//padding-top: 20px;
					width: 140px;
					float: left;
					font-size: 14px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					text-align: center;
					letter-spacing: 2px;
					cursor: pointer;

					&.actives,
					&:hover {
						background: rgba(7, 100, 233, 1);
						color: rgba(255, 255, 255, 1);
					}
					div{
						padding-top: 20px;
						height: 100%;
					}
				}
				.order{
					padding-top: 20px;
				}

				.theme {
					position: relative;

					&:hover {
						background: rgba(7, 100, 233, 1);
						color: rgba(255, 255, 255, 1);
					}

					&:hover .nav-list {
						display: block;
					}
				}
			}

			.nav-right {
				font-size: 12px;
				padding-top: 43px;
				margin-left: 10px;

				.right-info {
					color: #333333;

					.login {
						float: left;
						// background: url(../assets/img/index-login.png) no-repeat 0 0;
						// padding-left: 20px;
						position: relative;

						span {
							background: url(../assets/img/index-login.png) no-repeat 0 center;
							padding: 20px 0;
							padding-left: 20px;
						}

						.span {
							background: url(../assets/img/index-login1.png) no-repeat 0 center;
						}

						&:hover {
							cursor: pointer;
						}

						// &:hover .person-info{
						//   display: block;
						// }
						.mine-mengbox {
							&:hover .person-info {
								display: block;
							}
						}

						.person-info {
							display: none;
							position: absolute;
							width: 189px;
							height: 99px;
							// background: rgba(248, 248, 248, 1);
							background: #ffffff;
							border: 1px solid rgba(231, 229, 229, 1);
							z-index: 11;
							top: 22px;
							left: -55px;
							font-size: 12px;
							color: rgba(102, 102, 102, 1);

							.info-one {
								padding: 5px 0;

								a {
									color: rgba(102, 102, 102, 1);
									margin: 5px 0;
								}

								.mine {
									margin-left: 88px;

									&.ml60 {
										margin-left: 60px;
									}
								}

								.exit {
									margin-left: 10px;
								}
							}

							.info-two {
								img {
									width: 57px;
									height: 57px;
									border-radius: 50%;
									margin: 0 13px;
								}

								div {
									margin-top: 10px;
								}
							}
						}
					}

					.language-change {
						float: left;
						margin-left: 10px;
						font-size: 0;

						span {
							cursor: pointer;
							padding: 0 10px;
							font-size: 12px;
							/* letter-spacing: 1px; */
							display: inline-block;
							position: relative;

							&:nth-of-type(1):after {
								display: block;
								position: absolute;
								top: 0;
								right: 0;
								content: "";
								width: 1px;
								height: 100%;
								background: #333;
							}
						}

						.ch {
							color: #0764e9;
						}

						.en {
							color: #0764e9;
						}
					}
				}
			}
		}

		.nav-list {
			width: 100%;
			/* height: 92px; */
			height: 0px;
			overflow: hidden;
			background: #0764e9;
			position: relative;
			z-index: 12;
			transition: 0.3s;

			.lists {
				width: 1000px;
				margin: 0 auto;
				height: 92px;
				position: relative;
				z-index: 10;

				ul {
					li {
						float: left;
						font-size: 12px;
						font-weight: 400;
						color: rgba(245, 249, 255, 1);
						margin-right: 100px;

						.list-img {
							height: 52px;
							line-height: 52px;
							text-align: center;
							margin-top: 10px;

							img {
								display: inline-block;
								vertical-align: middle;
							}
						}

						.list-title {
							line-height: 30px;
							color: #fff;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 1700px) {
		.main .main-content ul li {
			width: 105px;
			font-size: 14px;
			word-break: break-all;
		}
	}

	@media screen and (max-width: 1550px) {
		.main .main-content ul li {
			width: 88px;
			font-size: 12px;
			word-break: break-all;
		}

		.main .main-content .logo {
			margin-left: 160px !important;
		}
	}

	@media screen and (max-width: 1400px) {
		.main .main-content ul li {
			width: 86px;
			font-size: 12px;
			word-break: break-all;
		}

		.main .main-content .logo {
			margin-left: 70px !important;
		}
	}

	@media screen and (max-width: 1300px) {
		.main .main-content ul li {
			width: 74px;
			font-size: 12px;
			word-break: break-all;
		}

		.main .main-content .logo {
			margin-left: 20px !important;
		}
	}
</style>
