<template>
	<div class="main">
		<div class="mine-bg">
			<ul class="mine-info clearDiv">
				<li class="portrait floatLeft">
					<img src="../../assets/img/touxiang1.png" alt>
				</li>
				<li class="info-people floatLeft">
					<p class="people-phone">{{$store.getters.userInfo.mobile}}，{{$t('header.huan')}}</p>
					<p class="lev clearDiv">
						<span>{{$t('Center.my')}}：</span>
						<img src="../../assets/img/content-1.png" alt>
					</p>
				</li>
				<li class="coupon floatLeft">
					<p class="num">0</p>
					<p class="words">{{$t('mine.Coupons')}}</p>
				</li>
				<li class="integral floatLeft">
					<p class="num nums">0</p>
					<p class="words">{{$t('mine.Integral')}}</p>
				</li>
			</ul>
			<div class="mine-content clearDiv">
				<div class="content-left floatLeft">
					<el-menu router class="el-menu-vertical-demo" active-text-color="#2D7AE4" @open="handleOpen" @close="handleClose"
					 :default-openeds="openeds">
						<el-submenu index="1">
							<template slot="title">
								<span>{{$t('mine.navNmae1')}}</span>
							</template>
							<el-menu-item :index="`/prepaid`" :class="{'is_active' : $route.path=='/mine' || $route.path=='/myorder' || $route.path=='/prepaid'}">{{$t('mine.navNmae2')}}</el-menu-item>
							<el-menu-item :index="`/shoppingCar`" :class="{'is_active' : $route.path=='/shoppingCar'}">{{$t('mine.navNmae3')}}</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<span>{{$t('mine.navNmae4')}}</span>
							</template>
							<el-menu-item :index="`/MyIntegral`" :class="{'is_active' : $route.path=='/MyIntegral'}">{{$t('mine.navNmae5')}}</el-menu-item>
							<el-menu-item :index="`/couponCenter`" :class="{'is_active' : $route.path=='/couponCenter'}">{{$t('mine.navNmae6')}}</el-menu-item>
							<!-- <el-menu-item
                :index="`/CouponCenter`"
                :class="{'is_active' : $route.path=='/CouponCenter'}"
              >卡券中心</el-menu-item> -->
							<el-menu-item :index="`/`" :class="{'is_active' : $route.path=='/'}">{{$t('mine.navNmae7')}}</el-menu-item>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<span>{{$t('mine.navNmae8')}}</span>
							</template>
							<el-menu-item :index="`/Membership`" :class="{'is_active' : $route.path=='/Membership'}">{{$t('mine.navNmae9')}}</el-menu-item>
							<el-menu-item :index="`/`" :class="{'is_active' : $route.path=='/'}">{{$t('mine.navNmae10')}}</el-menu-item>
							<el-menu-item :index="`/ShoppingAdress`" :class="{'is_active' : $route.path=='/ShoppingAdress'}">{{$t('mine.navNmae11')}}</el-menu-item>
							<el-menu-item :index="`/MyMessage`" :class="{'is_active' : $route.path=='/MyMessage'}">{{$t('mine.navNmae12')}}</el-menu-item>
							<el-menu-item :index="`/Feedback`" :class="{'is_active' : $route.path=='/Feedback'}">{{$t('mine.navNmae13')}}</el-menu-item>
							<!-- <el-menu-item
                :index="`/ChangePwd`"
                :class="{'is_active' : $route.path=='/ChangePwd'}"
              >修改密码</el-menu-item> -->
						</el-submenu>
						<!-- <el-submenu index="4">
              <template slot="title">
                <span>账户中心</span>
              </template>
            </el-submenu> -->
					</el-menu>
				</div>
				<div class="content-right floatRight">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		inject: ['reload'],
		data() {
			return {
				openeds: ["1", "2", "3", "4"] //展开的菜单导航
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted() {

		},
		watch: {
			$route() {
				this.reload();
			}
		}
	};
</script>
<style lang='scss' scoped>
	.main {
		width: 100%;

		.mine-bg {
			padding-top: 20px;
			width: 100%;
			height: 100%;
			background: #084c99 url(../../assets/img/mine-bg.png) no-repeat top center;

			.mine-info {
				width: 1200px;
				height: 248px;
				background: rgba(255, 255, 255, 1);
				margin: 0 auto;

				li {
					height: 248px;
					line-height: 248px;
				}

				.portrait {
					margin-left: 130px;

					img {
						width: 141px;
						height: 132px;
						border-radius: 50%;
						vertical-align: middle;
					}
				}

				.info-people {
					width: 435px;
					height: 139px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: normal;
					margin-top: 72px;
					padding: 10px 195px 0 38px;
					border-right: 2px solid #cccccc;

					p {
						margin-bottom: 25px;
						font-size: 14px;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);

						a {
							font-size: 12px;
							text-decoration: underline;
							color: rgba(227, 87, 76, 1);
						}
					}

					.people-phone {
						font-size: 18px;
						font-weight: bold;
					}

					.lev {
						height: 50px;
						line-height: 50px;

						* {
							float: left;
						}

						img {
							width: 67px;
							/* height: 50px; */
						}
					}
				}

				.coupon {
					padding: 101px 100px 101px 137px;
					line-height: normal;
					text-align: center;
				}

				.integral {
					padding: 101px 0;
					line-height: normal;
					text-align: center;
				}

				.coupon .num,
				.integral .num {
					font-size: 47px;
					font-weight: bold;
					color: rgba(238, 50, 35, 1);
				}

				.integral .num {
					color: rgba(255, 170, 23, 1);
				}

				.coupon .words,
				.integral .words {
					font-size: 20px;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
			}

			.mine-content {
				width: 1200px;
				margin: 20px auto 0 auto;

				.content-left {
					width: 198px;
					height: 1244px;
					background: rgba(255, 255, 255, 1);
					text-align: center;
					padding-top: 32px;

					dl {
						dt {
							font-size: 18px;
							font-weight: bold;
							color: rgba(7, 100, 233, 1);
							margin-bottom: 24px;

							span {
								width: 19px;
								height: 15px;
								display: inline-block;
								background: url(../../assets/img/mine-jiantou.png) no-repeat 0 0;
								margin-left: 5px;
							}
						}

						dd {
							font-size: 14px;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
							margin-bottom: 24px;
						}
					}
				}

				.content-right {
					width: 980px;
					min-height: 1244px;
					background: rgba(255, 255, 255, 1);
					padding: 0 30px;
					padding-bottom: 30px;
				}
			}
		}
	}
</style>
<style lang="scss">
	.date .date-begin .el-input__inner {
		height: 27px;
		line-height: 27px;
	}

	.date .el-input__prefix {
		text-align: right;
		right: 0;
	}

	.date .el-input--small .el-input__icon {
		line-height: 27px;
	}

	.content-left {
		.el-submenu__title:hover {
			background: none;
		}

		.el-submenu__title {
			font-size: 18px;
			font-family: MicrosoftYaHei;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			text-align: left;
			padding: 0 !important;
			padding-left: 50px !important;
		}

		.el-submenu__icon-arrow {
			right: 60px;
			font-size: 20px;
			color: #666666;

			&::before {
				content: " "
			}
		}

		.el-submenu .el-menu-item {
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			text-align: left;
			padding: 0 !important;
			padding-left: 50px !important;
		}

		.el-menu-item:focus,
		.el-menu-item:hover {
			background: none;
		}

		.el-menu-item.is_active {
			color: #2d7ae4;
		}
	}
</style>
