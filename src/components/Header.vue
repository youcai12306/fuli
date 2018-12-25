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
					<li class="order" @click="jumpOrderTicket" :class="{'actives' : $route.name == 'Tickets'}">
						<template v-if="$route.name == 'Tickets'">
							<img src="../assets/img/header-1.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header1.png" alt>
						</template>
						<p>网上订购</p>
					</li>
					<!-- 主题乐园 -->
					<li @mouseover="showNavList(1),height='97px'" @mouseout="hiddenNavList(1),height='0px'" class="theme" :class="{'actives' : $route.name == 'Theme'}">
						<template v-if="$route.name == 'Theme'">
							<img src="../assets/img/header-2.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header2.png" alt>
						</template>
						<p>主题乐园</p>
					</li>
					<!-- 度假酒店 -->
					<li class="hotel" :class="{'actives' : $route.name == ''}">
						<template v-if="$route.name == ''">
							<img src="../assets/img/header-3.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header3.png" alt>
						</template>
						<p>度假酒店</p>
					</li>
					<!-- 新闻中心 -->
					<router-link to="/news" tag="li" class="news" :class="{'actives' : $route.path == '/news' || $route.path == '/newList' || $route.path == '/noticeList' || $route.path == '/newDetail' || $route.path == '/noticeDetail'}">
						<template v-if="$route.path == '/news' || $route.path == '/newList' || $route.path == '/noticeList' || $route.path == '/newDetail' || $route.path == '/noticeDetail'">
							<img src="../assets/img/header-4.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header4.png" alt>
						</template>
						<p>新闻中心</p>
					</router-link>
					<!-- 游玩指南 -->
					<router-link to="/ditu" tag="li" class="trip" :class="{'actives' : $route.name == 'ditu'}">
						<template v-if="$route.name == 'ditu'">
							<img src="../assets/img/header-5.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header5.png" alt>
						</template>
						<p>游玩指南</p>
					</router-link>
					<!-- 优惠活动 -->
					<router-link to="/specialOffier" tag="li" class="active" :class="{'actives' : $route.path == '/specialOffier' || $route.path == '/events' || $route.path == '/EventsDetail'}">
						<template v-if="$route.path == '/specialOffier' || $route.path == '/events' || $route.path == '/EventsDetail'">
							<img src="../assets/img/header-6.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header6.png" alt>
						</template>
						<p>优惠活动</p>
					</router-link>
					<!-- 冒险之旅 -->
					<router-link to="/risk" tag="li" class="risk" :class="{'actives' : $route.name == 'Risk'}">
						<template v-if="$route.name == 'Risk'">
							<img src="../assets/img/header-7.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header7.png" alt>
						</template>
						<p>冒险之旅</p>
					</router-link>
					<!-- 动物百科 -->
					<router-link to="/animal" tag="li" class="animal" :class="{'actives' : $route.name == 'Animal'}">
						<template v-if="$route.name == 'Animal'">
							<img src="../assets/img/header-8.png" alt>
						</template>
						<template v-else>
							<img src="../assets/img/header8.png" alt>
						</template>
						<p>动物百科</p>
					</router-link>
				</ul>
			</div>

			<div class="nav-right floatLeft">
				<div class="right-info">
					<div class="login" @click="jumpMine" ref="box">
						<span>{{name}}</span>
						<div class="person-info" v-show="loginShow">
							<div class="info-one">
								<router-link to="/mine" class="mine">个人中心</router-link>
								<!-- <a href="javascript:;" class="mine" >个人中心</a> -->
								<a href="javascript:;" class="exit" @click.stop="setSignOuts">退出</a>
							</div>
							<div class="clearDiv info-two">
								<img src="../assets/img/mine-icon.png" alt class="floatLeft">
								<div class="floatLeft">
									<p>{{$store.getters.userInfo.mobile}}</p>
									<p>我的等级：2</p>
								</div>
							</div>
						</div>
					</div>
					<div class="language-change">
						<span class="ch">中文</span>
						<span>英文</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 主题乐园 -->
		<div class="nav-list" :style="{height:height}" @mouseover="height='97px'" @mouseout="height='0px'">
			<div class="lists">
				<ul>
					<li>
						<router-link to="/theme">
							<p class="list-img">
								<img src="../assets/img/H1.png" alt>
							</p>
							<p class="list-title">麦迪斯卡水乐园</p>
						</router-link>
					</li>
					<li>
						<p class="list-img">
							<img src="../assets/img/H2.png" alt>
						</p>
						<p class="list-title">冒险海洋</p>
					</li>
					<li>
						<p class="list-img">
							<img src="../assets/img/H3.png" alt>
						</p>
						<p class="list-title">生态海岸</p>
					</li>
					<li>
						<p class="list-img">
							<img src="../assets/img/H4.png" alt>
						</p>
						<p class="list-title">探索港湾</p>
					</li>
					<li>
						<p class="list-img">
							<img src="../assets/img/H5.png" alt>
						</p>
						<p class="list-title">深海之城</p>
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
	} from 'vuex'
	import {
		delCookie
	} from "@/package/cookie";
	export default {
		name: "Hearer",
		data() {
			return {
				show: false,
				name: "登录/注册",
				loginShow: false,
				height:0
			};
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			}),
		},
		created() {
			if (Object.keys(this.$store.getters.userInfo).length === 0) {
				this.name = "登录/注册";
			} else {
				this.name = this.$store.getters.userInfo.mobile + ",欢迎您！";
			}
			if (this.$refs.box) {
				document.addEventListener("click", e => {
					if (!this.$refs.box.contains(e.target)) {
						this.loginShow = false;
					}
				});
			}
		},
		updated() {},

		methods: {
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
			//跳转个人中心
			jumpMine() {
				if (Object.keys(this.$store.getters.userInfo).length === 0) {
					this.$router.push("/login");
					this.loginShow = false;
				} else {
					this.loginShow = true;
				}
			},
			//跳转订票页面
			jumpOrderTicket() {
				this.$router.push("/tickets/1");
			},
			...mapActions(["setSignOut"]),
			//退出登录
			setSignOuts() {
				this.setSignOut();
				delCookie('userData')
				this.$router.go(0);

			}
		},
		mounted() {}
	};
</script>
<style lang='scss' scoped>
	.main {
		position: relative;
		height: 97px;

		.main-content {
			height: 97px;
			background-color: #f5f9ff;

			.logo {
				padding-top: 26px;
				margin-left: 180px;
			}

			ul {
				padding-left: 26px;

				li {
					height: 97px;
					padding: 21px 42px 0 42px;
					float: left;
					font-size: 14px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					text-align: center;
					letter-spacing: 2px;
					cursor: pointer;

					&.actives {
						background: rgba(7, 100, 233, 1);
						color: rgba(255, 255, 255, 1);
					}
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
				margin-left: 20px;

				.right-info {
					color: #333333;

					.login {
						float: left;
						background: url(../assets/img/index-login.png) no-repeat 0 0;
						padding-left: 20px;
						position: relative;

						&:hover {
							cursor: pointer;
						}

						.person-info {
							position: absolute;
							width: 189px;
							height: 99px;
							background: rgba(248, 248, 248, 1);
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
						margin-left: 14px;

						span {
							padding: 0 10px;
							letter-spacing: 1px;
						}

						.ch {
							color: #0764e9;
							border-right: 1px solid #333333;
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
			background: rgba(36, 36, 36, 0.7);
			position: relative;
			z-index: 8;
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
			padding: 21px 22px 0 22px !important;
		}
	}
</style>
