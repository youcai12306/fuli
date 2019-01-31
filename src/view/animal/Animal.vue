<template>
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="risk-title">
					<p class="p1">{{$t('animal.title')}}</p>
					<p class="p2" v-html="$t('animal.description')"></p>
				</div>
				<div class="location">{{$t('Position')}}>
					<router-link to="/index" tag="span">{{$t('Home')}}></router-link>
					<router-link to="animal" tag="span">{{$t('animal.title')}}</router-link>
					<div class="ditu-img"></div>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<router-link class="li" :to="{path:'/animal',query:{type:item}}" tag="li" v-for="item in 3" :key="item" :class="{anActive:actives == item}">
							{{$t(`animal.navName${item}`)}}
						</router-link>
					</ul>
				</div>
				<div class="right floatRight">
					<template v-if="actives == 1">
						<div class="box">
							<div class="ani-title">{{$t('animal.Text')}}</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<template v-for="(item,k) in data" v-if="k < 3">
										<el-col :span="8">
											<div class="video" @click="handleOpen(item.infoTitle)">
												<img :src="item.picid || img2" :alt="item.infoTitle">
											</div>
											<div class="video-a">
												<router-link :to="{name:'AnimalDetails',params:{id:item.id}}" :title="item.infoTitle">
													【{{item.infoTitle}}】
												</router-link>
											</div>
										</el-col>
									</template>
								</el-row>
							</div>

							<div class="ani-title mt74">{{$t('animal.Text1')}}</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<template v-for="(item,k) in data" v-if="k >= 3 && k < 6">
										<el-col :span="8">
											<div class="video" @click="handleOpen(item.infoTitle)">
												<img :src="item.picid || img2" :alt="item.infoTitle">
											</div>
											<div class="video-a">
												<router-link :to="{name:'AnimalDetails',params:{id:item.id}}" :title="item.infoTitle">
													【{{item.infoTitle}}】
												</router-link>
											</div>
										</el-col>
									</template>
								</el-row>
							</div>

							<div class="list clearDiv mt74 mb0">
								<el-row :gutter="20">
									<el-col :span="8">
										<div class="ani-title">{{$t('animal.Text2')}}</div>
									</el-col>
									<el-col :span="8">
										<div class="ani-title">{{$t('animal.Text3')}}</div>
									</el-col>
									<el-col :span="8"></el-col>
								</el-row>
							</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<template v-for="(item,k) in data" v-if="k >= 6 && k < 8">
										<el-col :span="8">
											<div class="video" @click="handleOpen(item.infoTitle)">
												<img :src="item.picid || img2" :alt="item.infoTitle">
											</div>
											<div class="video-a">
												<router-link :to="{name:'AnimalDetails',params:{id:item.id}}" :title="item.infoTitle">
													【{{item.infoTitle}}】
												</router-link>
											</div>
										</el-col>
									</template>
								</el-row>
							</div>



							<div class="ani-title mt74">{{$t('animal.Text4')}}</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<template v-for="(item,k) in data" v-if="k >= 8 && k < 10">
										<el-col :span="8">
											<div class="video" @click="handleOpen(item.infoTitle)">
												<img :src="item.picid || img2" :alt="item.infoTitle">
											</div>
											<div class="video-a">
												<router-link :to="{name:'AnimalDetails',params:{id:item.id}}" :title="item.infoTitle">
													【{{item.infoTitle}}】
												</router-link>
											</div>
										</el-col>
									</template>
								</el-row>
							</div>

							<div class="ani-title mt74">{{$t('animal.Text5')}}</div>
							<div class="list clearDiv">
								<el-row :gutter="20">
									<template v-for="(item,k) in data" v-if="k == 10">
										<el-col :span="8">
											<div class="video" @click="handleOpen(item.infoTitle)">
												<img :src="item.picid || img2" :alt="item.infoTitle">
											</div>
											<div class="video-a">
												<router-link :to="{name:'AnimalDetails',params:{id:item.id}}" :title="item.infoTitle">
													【{{item.infoTitle}}】
												</router-link>
											</div>
										</el-col>
									</template>
								</el-row>
							</div>
						</div>
					</template>
					<template v-if="actives == 2">
						<div class="box2">
							<template v-for="item in data1">
								<router-link tag="li" :to="{name:'BaiDetails',params:{type:'2',id:item.structureId}}">
									<img :src="item.facePictureId[0] || img" :alt="item.infoTitle">
									<div class="box3">
										<h3 class="t">{{item.title}}</h3>
										<p>{{item.createTime}}</p>
									</div>
								</router-link>
							</template>
							<div class="pages">
								<el-pagination background layout="prev, pager, next" :total="totle" :current-page.sync="pageIndex" :page-size="pageSize"
								 @current-change="changePage"></el-pagination>
							</div>
						</div>
					</template>
					<template v-if="actives == 3">
						<div class="box2 box-shadow">
							<template v-for="item in data2">
								<router-link tag="li" :to="{name:'BaiDetails',params:{type:'3',id:item.structureId}}">
									<img :src="item.facePictureId[0] || img" :alt="item.infoTitle">
									<div class="box3">
										<h3 class="t">{{item.title}}</h3>
										<p>{{item.createTime}}</p>
									</div>
								</router-link>
							</template>
							<div class="pages">
								<el-pagination background layout="prev, pager, next" :total="count" :current-page.sync="pageIndex2" :page-size="pageSize"
								 @current-change="changePage2"></el-pagination>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>

		<!-- 播放器 -->
		<el-dialog :title="title" :visible.sync="centerDialogVisible" width="40%" center class="videos" :before-close="handleClose">
			<video ref="plays" :src="url" controls></video>
		</el-dialog>
	</section>
</template>

<script>
	import Cookies from 'js-cookie'
	import {
		IMG_Url
	} from "@/package/common";
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				actives: 0,
				pageSize: 4,
				pageIndex: 1,
				pageIndex2: 1,
				totle: 0,
				centerDialogVisible: false,
				title: "提示",
				url: "",
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0,
				list1: [],
				list2: [],
				list: [],
				count: 0,
				img: require('../../assets/img/specialOffier-bg201.png'), //默认图片
				img2: require('../../assets/img/Moonify 1.0.png'),
				imgs: [], //科普活动图片集合
				imgs2: [], //保育救助图片集合
				imgs3: []
			};
		},
		computed: {
			data() { //处理动物课堂数据
				let list = this.list;
				let str = [];
				list.forEach((v, k) => {
					if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							this.imgs3.forEach(res => {
								if (val == res.id) {
									v.facePictureId[key] = IMG_Url + res.fileName;
								}
							});
						})
					}
					str.push(v);
				});
				return str.reverse();
			},
			data1() { //处理保育救助数据
				let list = this.list1;
				list.forEach(v => {
					if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							this.imgs2.forEach(res => {
								if (val == res.id) {
									v.facePictureId[key] = IMG_Url + res.fileName;
								}
							});
						})
					}
				});
				return list;
			},
			data2() { //处理科普活动数据
				let list = this.list2;
				list.forEach(v => {
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
		components: {
			Header
		},
		methods: {
			//分页
			changePage(val) {
				this.getSearch('G2-1', this.pageSize, val, this.isEnglish);
			},
			//分页
			changePage2(val) {
				this.getSearch('G2-2', this.pageSize, val, this.isEnglish);
			},
			handleClose(done) { //关闭播放器
				this.title = "提示";
				this.url = "";
				done();
			},
			handleOpen(title, url) { //打开播放器
				this.title = title;
				this.url = url ||
					"http://1.193.217.86/657248386D83E718FD97C341D/03001201005C272BC3EDF784F483AB6D146CAF-A7C5-4A26-9198-6BF30CFBA061.mp4?ccode=050F&duration=210&expire=18000&psid=c29bfef98e764b2f54cd6e8a41ad948e&ups_client_netip=6fafa990&ups_ts=1546497446&ups_userid=&utid=P2yiFEgDlTgCAXdinMiUZGFx&vid=XMzk4OTIwNTMwOA%3D%3D&vkey=Aaf59e348471e335f57107983201e1d8c&sp=&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=003a300d1e2b623e20946ba931ca9d3844326089170f166a&ali_redirect_ex_tmining_ts=1546497456&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0";
				this.centerDialogVisible = !this.centerDialogVisible;
			},
			getSearch(type, pageSize, pageIndex, isEnglish) { //获取保育救助列表 保育救助后台ID=4 pageSize分页大小 pageIndex第几页 isEnglish中英文标识
				this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
				).then(res => {
					if (res.code === 200) {
						let xin = [];
						let xin2 = "";
						let list = [];
						if (type == 'G2-1') {
							this.list1 = res.data.content || [];
							list = this.list1;
							this.totle = res.data.totalElements;
						} else if (type == 'G2-2') {
							this.list2 = res.data.content || [];
							list = this.list2;
							this.count = res.data.totalElements;
						} else if (type == "G1-1") {
							this.list = res.data.content || [];
							list = this.list;
						}
						list.forEach((v, k) => { //拼接图片字符串
							if (v.facePictureId) { //是否有图片
								v.facePictureId.forEach((val, key) => {
									if (key == 0) { //获取第一个图片
										xin.push(val);
										xin2 = xin.join(",");
									}
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
					if (type == 'G2-1') this.imgs2 = res.data;
					else if (type == 'G2-2') this.imgs = res.data;
					else if (type == 'G1-1') this.imgs3 = res.data;
				});
			}
		},
		mounted() {
			let id = this.$route.query.type;
			if (id != undefined) {
				this.actives = id;
			}
			//获取数据列表  （保育救助后台ID=4 科普活动后台ID=5 动物课堂后台ID=6）pageSize分页大小 pageIndex第几页 isEnglish中英文标识
			this.getSearch('G2-1', this.pageSize, this.pageIndex, this.isEnglish);
			this.getSearch('G2-2', this.pageSize, this.pageIndex2, this.isEnglish);
			// this.getSearch('G1-1', 11, 1, this.isEnglish);
		},
		watch: {
			$route() {
				this.actives = this.$route.query.type;
			}
		}
	};
</script>
<style lang='scss' scoped>
	.risk {
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
				/* cursor: pointer; */
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

					&.box-shadow {
						box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
					}

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
					/* padding: 50px 0; */
					background: #fff;
					margin: 0 auto;
					position: relative;

					li {
						cursor: pointer;
						float: left;
						margin-left: 52px;
						margin-top: 60px;
						list-style: none;

						img {
							width: 339px;
							height: 214px;
							font-size: 0;
							box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.16);
						}

						.box3 {
							width: 339px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
							border-top: 0;
							margin-top: -5px;
							padding-left: 20px;

							h3 {
								height: 80px;
								line-height: 18px;
								font-size: 18px;
								font-family: MicrosoftYaHei-Bold;
								font-weight: bold;
								padding: 42px 20px 20px 0;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							p {
								height: 14px;
								line-height: 14px;
								font-size: 14px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(102, 102, 102, 1);
								padding-bottom: 36px;
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

	.videos {
		video {
			width: 100%;
			height: 100%;
		}
	}

	.pages {
		position: absolute;
		height: 32px;
		margin-top: 60px;
		text-align: center;
		left: 50%;
		bottom: 30px;
		transform: translateX(-50%);
	}
</style>
