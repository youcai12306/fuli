<template>
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="risk-title">
					<p class="p1">动物百科</p>
					<p class="p2">倘若你徜徉在这片资讯丰富的地带
						<br>也一定能收获无穷欢乐！
					</p>
				</div>
				<div class="location">当前位置>
					<router-link to="/index" tag="span">首页></router-link>
					<router-link to="animal" tag="span">动物百科</router-link>
					<div class="ditu-img"></div>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="actives = keys" :class="{anActive:actives == keys}">
							<template v-if="keys == 0">动物课堂</template>
							<template v-if="keys == 1">保育救助</template>
							<template v-if="keys == 2">科普活动</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys == actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<template v-if="actives == 0">
						<div class="box">
							<div class="ani-title">鲸鲨馆的海洋大家庭</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="video" @click="handleOpen('鲸鲨')"><img src="../../assets/img/Moonify 1.0.png" alt="鲸鲨"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【鲸鲨】">【鲸鲨】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('水母')"><img src="../../assets/img/Moonify 1.0.png" alt="水母"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'2'}}" title="【水母】">【水母】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('小丑鱼')"><img src="../../assets/img/Moonify 1.0.png" alt="小丑鱼"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'3'}}" title="【小丑鱼】">【小丑鱼】</router-link>
										</div>
									</el-col>
								</el-row>
							</div>

							<div class="ani-title mt74">来自极地的客人们</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="video" @click="handleOpen('北极熊是重大一吨的北极霸龙')"><img src="../../assets/img/Moonify 1.0.png" alt="【北极熊是重大一吨的北极霸龙】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'4'}}" title="【北极熊是重大一吨的北极霸龙】">【北极熊是重大一吨的北极霸龙】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('白色的海中巨兽')"><img src="../../assets/img/Moonify 1.0.png" alt="【白色的海中巨兽】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'5'}}" title="【白色的海中巨兽】">【白色的海中巨兽】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('调皮的企业可是难得的好爸爸')"><img src="../../assets/img/Moonify 1.0.png" alt="【调皮的企业可是难得的好爸爸】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【调皮的企业可是难得的好爸爸】">【调皮的企业可是难得的好爸爸】</router-link>
										</div>
									</el-col>
								</el-row>
							</div>

							<div class="list clearDiv mt74 mb0">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="ani-title">海洋精灵</div>
									</el-col>
									<el-col :span="8">
										<div class="ani-title">水中飞翼</div>
									</el-col>
									<el-col :span="8"></el-col>
								</el-row>
							</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="video" @click="handleOpen('海豚')"><img src="../../assets/img/Moonify 1.0.png" alt="【海豚】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【海豚】">【海豚】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('鳐鱼')"><img src="../../assets/img/Moonify 1.0.png" alt="【鳐鱼】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【鳐鱼】">【鳐鱼】</router-link>
										</div>
									</el-col>
								</el-row>
							</div>



							<div class="ani-title mt74">南海之珍</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="video" @click="handleOpen('绿海龟')"><img src="../../assets/img/Moonify 1.0.png" alt="【绿海龟】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【绿海龟】">【绿海龟】</router-link>
										</div>
									</el-col>
									<el-col :span="8">
										<div class="video" @click="handleOpen('玳瑁')"><img src="../../assets/img/Moonify 1.0.png" alt="【玳瑁】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【玳瑁】">【玳瑁】</router-link>
										</div>
									</el-col>
								</el-row>
							</div>

							<div class="ani-title mt74">诙谐的小胖子</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="video" @click="handleOpen('海狮')"><img src="../../assets/img/Moonify 1.0.png" alt="【海狮】"></div>
										<div class="video-a">
											<router-link :to="{name:'AnimalDetails',params:{id:'1'}}" title="【海狮】">【海狮】</router-link>
										</div>
									</el-col>
								</el-row>
							</div>

						</div>
					</template>
					<template v-if="actives == 1">
						<div class="box2">
							<!-- <ul>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'1',id:'1'}}" title="搁浅领航鲸救助(上)">
										<i></i>
										<span class="p1">搁浅领航鲸救助(上)</span>
										<span class="p2">海南海洋欢乐世界 | 2016-05-18</span>
									</router-link>
								</li>
								<li>
									<router-link :to="{name:'BaiDetails',params:{type:'1',id:'2'}}" title="搁浅领航鲸救助(下)">
										<i></i>
										<span class="p1">搁浅领航鲸救助(下)</span>
										<span class="p2">海南海洋欢乐世界 | 2016-05-18</span>
									</router-link>
								</li>
							</ul>
							<div class="pages">
								
              </div>-->
							<template v-for="item in 4">
								<router-link tag="li" :to="{path:'/EventsDetail',query:{id:'5c1f5349f8dac609dd5cd6b7'}}">
									<img src="../../assets/img/specialOffier-bg1.png" alt>
									<div class="box3">
										<h3 class="t">百变万圣节</h3>
										<p>2018-11-11</p>
									</div>
								</router-link>
							</template>
						</div>
					</template>
					<template v-if="actives == 2">
						<div class="box2">
							<!-- <ul>
                <li>
                  <router-link
                    :to="{name:'BaiDetails',params:{type:'2',id:'1'}}"
                    title="携手 “净滩”，向海洋垃圾宣战"
                  >
                    <i></i>
                    <span class="p1">携手 “净滩”，向海洋垃圾宣战</span>
                    <span class="p2">海南海洋欢乐世界 | 09.19</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{name:'BaiDetails',params:{type:'2',id:'2'}}"
                    title="海洋日系列活动-科普进校园暨世界"
                  >
                    <i></i>
                    <span class="p1">海洋日系列活动-科普进校园暨世界</span>
                    <span class="p2">海南海洋欢乐世界 | 2018.07.08</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name:'BaiDetails',params:{type:'2',id:'3'}}" title="行动吧海洋小卫士">
                    <i></i>
                    <span class="p1">行动吧海洋小卫士</span>
                    <span class="p2">海南海洋欢乐世界 | 2018.06.09</span>
                  </router-link>
                </li>
              </ul> -->
							<!-- <div class="pages">
               
              </div> -->
							<template v-for="item in 4">
								<router-link tag="li" :to="{path:'/EventsDetail',query:{id:'5c1f5349f8dac609dd5cd6b7'}}">
									<img src="../../assets/img/specialOffier-bg1.png" alt>
									<div class="box3">
										<h3 class="t">百变万圣节</h3>
										<p>2018-11-11</p>
									</div>
								</router-link>
							</template>
						</div>
					</template>
				</div>
			</div>
		</div>

		<!-- 播放器 -->
		<el-dialog :title="title" :visible.sync="centerDialogVisible" width="40%" center class="videos" :before-close="handleClose">
			<video ref="plays" :src="url" autoplay></video>
		</el-dialog>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				actives: 0,
				pageSize: 10,
				pageIndex: 1,
				totle: 100,
				centerDialogVisible: false,
				title:"提示",
				url:""
			};
		},
		computed: {},
		components: {
			Header
		},
		methods: {
			//分页
			changePage(val) {
				this.GetList(0, this.pageSize, val);
			},
			handleClose(done) {
				this.title = "提示";
				this.url = "";
				done();
			},
			handleOpen(title,url){
				this.title = title;
				this.url = url || "http://1.193.217.86/657248386D83E718FD97C341D/03001201005C272BC3EDF784F483AB6D146CAF-A7C5-4A26-9198-6BF30CFBA061.mp4?ccode=050F&duration=210&expire=18000&psid=c29bfef98e764b2f54cd6e8a41ad948e&ups_client_netip=6fafa990&ups_ts=1546497446&ups_userid=&utid=P2yiFEgDlTgCAXdinMiUZGFx&vid=XMzk4OTIwNTMwOA%3D%3D&vkey=Aaf59e348471e335f57107983201e1d8c&sp=&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=003a300d1e2b623e20946ba931ca9d3844326089170f166a&ali_redirect_ex_tmining_ts=1546497456&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0";
				this.centerDialogVisible = !this.centerDialogVisible;
			}
		},
		mounted() {
			let id = this.$route.query.type;
			if (id != undefined) {
				this.actives = id;
			}
		}
	};
</script>
<style lang='scss' scoped>
	.risk {
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
			position: relative;

			.risk-title {
				position: absolute;
				top: -330px;
				right: 215px;
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
				cursor: pointer;
				position: relative;

				.ditu-img {
					position: absolute;
					top: -227px;
					left: -130px;
					background: url(../../assets/img/ditu-qq.png) no-repeat;
					width: 527px;
					height: 227px;
				}
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
					padding-top: 50px;

					.ani-title {
						font-size: 24px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						padding-left: 50px;
						position: relative;

						&:before {
							content: "";
							display: block;
							position: absolute;
							left: 30px;
							top: 4px;
							width: 12px;
							height: 26px;
							background: rgba(7, 100, 233, 1);
						}
					}

					.box-top {
						position: relative;

						.img {
							width: 863px;
							height: 400px;
						}

						.top {
							position: absolute;
							top: 118px;
							left: 0;
							width: 422px;
							height: 184px;
							background: rgba(0, 0, 0, 0.8);
							font-weight: 400;
							color: rgba(255, 255, 255, 1);
							padding-left: 17px;

							.a-t {
								font-size: 18px;
								margin-top: 20px;
								margin-bottom: 20px;
							}

							.a-c {
								font-size: 14px;
								height: 89px;
								width: 386px;
								overflow: hidden;
							}
						}
					}

					.list {
						margin: 0 30px;
						padding: 30px 0;
						width: 800px;

						&.mb0 {
							margin-bottom: 0;
							padding-bottom: 0;
							padding-top: 0;
							margin-top: 74px;
						}

						.video {
							width: 254px;
							height: 142px;
							overflow: hidden;

							img {
								width: 100%;
								height: 100%;
								cursor: pointer;
							}
						}

						.video-a {
							width: 100%;
							height: 14px;
							line-height: 14px;
							margin-top: 22px;
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;

							a {
								color: rgba(102, 102, 102, 1);
							}
						}
					}
				}

				.box2 {
					width: 863px;
					min-height: 1000px;
					padding: 50px 0;
					background: #fff;
					margin: 0 auto;

					li {
						cursor: pointer;
						float: left;
						margin-left: 50px;
						margin-top: 30px;
						list-style: none;

						img {
							width: 339px;
							height: 214px;
							font-size: 0;
						}

						.box3 {
							width: 339px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
							border-top: 0;
							margin-top: -5px;
							padding-left: 20px;

							h3 {
								//text-align: center;
								font-size: 20px;
								font-weight: bold;
								color: rgba(51, 51, 51, 1);
								padding: 15px 0;
							}

							p {
								font-size: 14px;
								font-weight: 500;
								color: rgba(51, 51, 51, 1);
								padding: 10px 0;
							}

							hr {
								margin: 0 auto;
								width: 71px;
								height: 1px;
								background: rgba(0, 0, 0, 1);
								opacity: 0.3;
								margin-bottom: 24px;
							}

							div {
								font-size: 13px;
								font-weight: 400;
								color: rgba(51, 51, 51, 1);
								margin-left: 34px;
								margin-bottom: 10px;

								span {
									color: rgba(153, 153, 153, 1);
								}
							}

							button {
								margin-left: 81px;
								width: 178px;
								height: 57px;
								background: rgba(248, 160, 75, 1);
								box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.15);
								text-align: center;
								margin-bottom: 22px;
								font-size: 17px;
								font-weight: 400;
								color: rgba(255, 255, 255, 1);
								cursor: pointer;
								margin-top: 10px;
							}
						}
					}

					// ul {
					//   li {
					//     position: relative;
					//     font-size: 14px;
					//     font-family: MicrosoftYaHei;
					//     font-weight: 400;
					//     color: rgba(51, 51, 51, 1);
					//     width: 100%;
					//     height: 70px;
					//     line-height: 70px;
					//     padding: 0 40px 0 60px;
					//     border-bottom: 1px solid #d7d7d7;

					//     &:hover {
					//       background: #d5f1ff;
					//     }

					//     a {
					//       color: #333333;
					//     }

					//     i {
					//       display: block;
					//       position: absolute;
					//       top: 50%;
					//       left: 40px;
					//       transform: translateY(-50%);
					//       border-radius: 100%;
					//       background: #000;
					//       margin-right: 10px;
					//       width: 5px;
					//       height: 5px;
					//     }

					//     .p1 {
					//       display: inline-block;
					//       width: 550px;
					//       height: 100%;
					//       overflow: hidden;
					//       text-overflow: ellipsis;
					//       white-space: nowrap;
					//     }

					//     .p2 {
					//       display: inline-block;
					//       text-align: right;
					//       position: absolute;
					//       top: 0;
					//       right: 40px;
					//       width: 250px;
					//       height: 70px;
					//     }
					//   }
					// }

					.pages {
						width: 100%;
						height: 32px;
						margin-top: 90px;
						margin-bottom: 60px;
						text-align: center;
					}
				}
			}
		}
	}

	.mt74 {
		margin-top: 74px;
	}

	.risk .content .right .box .list.mt74 {
		.ani-title {
			padding-left: 20px;

			&:before {
				left: 0;
			}
		}
	}
	.videos{
		video{
			width: 100%;
			height: 100%;
		}
	}
</style>
