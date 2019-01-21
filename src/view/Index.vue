<template>
	<div class="main">
		<Header></Header>
		<div class="banner">
			<div class="banner-imgs">
				<img src="../assets/img/index-banner1.jpg" alt v-show="0 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/img102.jpg" alt v-show="1 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/index-banner1.jpg" alt v-show="2 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/index-banner1.jpg" alt v-show="3 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/index-banner1.jpg" alt v-show="4 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/img102.jpg" alt v-show="5 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/index-banner1.jpg" alt v-show="6 === index" @click="jumpHuodongDetail(0)">
				<img src="../assets/img/index-banner1.jpg" alt v-show="7 === index" @click="jumpHuodongDetail(0)">
			</div>
			<div class="banner-content clearDiv">
				<div class="content-list">{{$t('index.date')}}
					<el-date-picker v-model="date" type="date" placeholder="选择日期" @change="getTicketList()" format="yyyy-MM-dd"
					 value-format="yyyy-MM-dd" class="select-list" :editable="false" :picker-options="pickerOptions0"></el-date-picker>
				</div>
				<div class="ticket content-list">{{$t('index.Tickets')}}
					<el-select v-model="key" class="select-list" @change="ab()">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :stockId="item.stockId"></el-option>
					</el-select>
				</div>
				<div class="search">
					<button @click="jumpProductDetail()">{{$t('index.Inquire')}}</button>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-list">
				<div class="list-one">
					<div class="one-change" @mouseover="stopTimes" @mouseout="startTimes">
						<swiper :options="swiperOption" ref="mySwiper">
							<!-- slides -->
							<swiper-slide>
								<img src="../assets/img/index-img12.png" alt :class="{imgActive:index === 0}" @click.stop="jumpImg(0)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/img101.png" alt :class="{imgActive:index === 1}" @click.stop="jumpImg(1)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/index-img14.png" alt :class="{imgActive:index === 2}" @click.stop="jumpImg(2)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/index-img15.png" alt :class="{imgActive:index === 3}" @click.stop="jumpImg(3)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/index-img12.png" alt :class="{imgActive:index === 4}" @click.stop="jumpImg(4)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/img101.png" alt :class="{imgActive:index === 5}" @click.stop="jumpImg(5)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/index-img14.png" alt :class="{imgActive:index === 6}" @click.stop="jumpImg(6)">
							</swiper-slide>
							<swiper-slide>
								<img src="../assets/img/index-img15.png" alt :class="{imgActive:index === 7}" @click.stop="jumpImg(7)">
							</swiper-slide>
							<!-- Optional controls -->
						</swiper>
						<div class="swiper-prev" @click="prev"></div>
						<div class="swiper-next" @click="next"></div>
					</div>
				</div>
				<div class="new-active">
					<div class="title">
						<div class="ch">
							最新活动
							<span>/Latest activities</span>
						</div>
					</div>
					<div class="new-swiper">
						<div class="swiper-box">
							<el-carousel :interval="4000" type="card" height="248px" :autoplay="false" arrow="never" ref="car" @change="change">
								<el-carousel-item v-for="(item,key) in data" :key="key">
									<div class="div" @click="jumpHuodongDetail(item.structureId)">
										<img :src="item.facePictureId[0]" alt :class="{colorA:key === newSwiperIndex}">
										<p class="titless" :class="{colorB:key != newSwiperIndex}">{{item.title}}</p>
									</div>
								</el-carousel-item>
							</el-carousel>
							<div class="prev" @click="prevs"></div>
							<div class="next" @click="nexts"></div>
						</div>
					</div>
				</div>
				<div class="new-hot">
					<div class="title">
						<div class="ch">
							最新热点
							<span>/Latest activities</span>
						</div>
					</div>
					<div class="hot-content clearDiv">
						<ul class="content-left floatLeft">
							<router-link to="/tickets/1" tag="li">
								<img src="../assets/img/index-img4.png" alt>
								<p>{{$t('index.Latest1')}}</p>
							</router-link>
							<router-link to="/animal?type=1" tag="li" class="li2">
								<img src="../assets/img/index-img5.png" alt>
								<p>{{$t('index.Latest2')}}</p>
							</router-link>
							<router-link :to="{path:'/ditu',query:{id:'3'}}" tag="li" class="li3">
								<img src="../assets/img/index-img6.png" alt>
								<p>{{$t('index.Latest3')}}</p>
							</router-link>
							<router-link :to="{path:'/Park'}" tag="li" class="li4">
								<img src="../assets/img/index-img7.png" alt>
								<p>{{$t('index.Latest4')}}</p>
							</router-link>
						</ul>
						<div class="content-main floatLeft">
							<div class="top clearDiv">
								<img :src="img" alt class="floatLeft" @error="userAvaterError">
								<div class="top-box floatLeft">
									<div class="clearDiv box-top">
										<div class="floatLeft">{{newFirst.infoTitle}}</div>
										<router-link to="/news" class="floatRight">更多>></router-link>
									</div>
									<div class="floatLeft box-bottom" v-html="newFirstContent"></div>
								</div>
							</div>
							<ul class="bottom">
								<li class="clearDiv" v-for="(item,key) in newList" :key="key">
									{{item.infoTitle}}
									<router-link :to="{path:'/newDetail',query:{id:item.id}}">详情>></router-link>
								</li>
							</ul>
						</div>
						<div class="content-right floatLeft">
							<p class="right-yule">{{$t('index.Latest5')}}</p>
							<img src="../assets/img/index-hot-img2.png" alt>
							<router-link class="knowDetail" to="/risk">{{$t('index.Latest6')}}</router-link>
						</div>
					</div>
				</div>
				<el-row class="info-row clearDiv">
					<el-col :span="12" class="info-col1">
						<span class="icoe"></span>
						<span class="time">{{showTime()}}</span>
						<div class="info-img clearDiv">
							<img src="../assets/img/md-5.png">
							<p>{{$t('index.day1')}}</p>
							<p class="p">{{$t('index.day2')}}</p>
						</div>
						<div class="info-boutton">
							<router-link :to="{path:'/ditu',query:{id:'2'}}">{{$t('index.button1')}}</router-link>
						</div>
					</el-col>
					<el-col :span="12" class="info-col1">
						<span class="icoe"></span>
						<div class="info-img2 clearDiv">
							<img src="../assets/img/md-10.png">
							<div class="info-p">
								<p>
									{{$t('index.Ticket1')}}
									<span>{{$t('index.Ticket1_yuan')}}</span>/{{$t('index.person')}}
								</p>
								<p class="p">
									{{$t('index.Ticket2')}}
									<span>{{$t('index.Ticket2_yuan')}}</span>/{{$t('index.person')}}
								</p>
							</div>
						</div>
						<div class="info-boutton">
							<router-link :to="{path:'/tickets/1'}">{{$t('index.button2')}}</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div class="juedui">
			<img src="../assets/img/index-juedui-phone.png" alt>
			<p>{{$t('index.Layer1')}}</p>
			<p style="margin-top:10px">400-xxxxxx</p>
			<img src="../assets/img/index-sever.jpg" alt>
			<p>{{$t('index.Layer2')}}</p>
			<img src="../assets/img/index-dingyue.jpg" alt>
			<p>{{$t('index.Layer3')}}</p>
		</div>
	</div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	import {
		IMG_Url
	} from "@/package/common";
	import Header from "@/components/Header"; //引入头部
	import defaultHead from "../assets/img/index-img8.png";
	import {
		HTTP_DETAIL
	} from "@/package/common";
	import Cookies from 'js-cookie'
	export default {
		name: "Index",
		data() {
			return {
				newSwiperIndex: 0,
				options: [],
				key: "",
				date: "",
				swiperOption: {
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					slidesPerView: 6
				},
				index: 0,
				skId: "",
				id: "",
				newFirst: "",
				newFirstContent: "",
				newList: [],
				img: "",
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				},
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0,
				pageSize: 100,
				pageIndex: 1,
				list: [],
				list2: [],
				imgs : []
			};
		},
		mounted() {
			let today = new Date();
			this.date = this.$tool.formatData(today);
			this.getNewList();
			this.getTicketList();
			this.swiperInit();
			this.getSearch('B', this.pageSize, this.pageIndex, this.isEnglish);//Banner
			this.getSearch('E', this.pageSize, this.pageIndex, this.isEnglish);//最新活动
		},
		methods: {
			getSearch(type, pageSize, pageIndex, isEnglish) { //获取Banner 最新活动列表 Banner后台ID=B 最新活动ID=E pageSize分页大小 pageIndex第几页 isEnglish中英文标识
				this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
				).then(res => {
					if (res.code === 200) {
					let xin = [];
          			let xin2 = "";
					let list = [];
					if (type == 'B') {
						this.list = res.data.content || [];
					}
					if (type == 'E') {
						this.list2 = res.data.content || [];
						list = this.list2;
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
					}
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
			//跳转背景
			jumpImg(index) {
				clearInterval(this.times);
				this.index = index;
			},
			//设置默认图片
			userAvaterError(e) {
				e.target.src = defaultHead;
			},
			//获取新闻列表
			getNewList() {
				this.$fetch(
					this.$url1 +
					":6110/mongodb-mucon/info/primary/search?type=1&pageSize=5&pageNum=1&isEnglish=" + this.isEnglish
				).then(res => {
					if (res.code === 200) {
						let newList = res.data.content;
						if (newList != null) {
							this.newFirst = res.data.content[0];
							if (this.newFirst.infoPic.length) {
								this.$fetch(
									this.$url1 +
									":2600/staticResource-mucon/selectFileById?id=" +
									this.newFirst.infoPic[0].picid
								).then(res => {
									if (res.code === 200) {
										this.img = IMG_Url + res.data.fileName;
									}
								});
							}
							this.$post(
								this.$url1 +
								":6110/mongodb-mucon/info/primary/get?infoId=" +
								this.newFirst.id
							).then(res => {
								if (res.code === 200) {
									this.newFirstContent = res.data.infoContent;
								}
							});
							this.newList = res.data.content.slice(1);
						}
					}
				});
			},
			//获取产品列表
			getTicketList() {
				this.options = [];
				this.key = "";
				this.$fetch(this.$url1 + ":5001/product-aggregate/findProductByStock", {
					playDate: this.date
				}).then(res => {
					if (res.code == 200) {
						let data = res.data.list;
						if (data != null) {
							for (let item of data) {
								this.options.push({
									value: item.id,
									label: item.productName,
									stockId: item.stockId
								});
							}
							this.key = res.data.list[0].id;
							this.id = this.key;
							this.skId = res.data.list[0].stockId;
						}
					}
				});
			},
			ab() {
				for (let item of this.options) {
					if (this.key == item.value) {
						this.skId = item.stockId;
						this.id = this.key;
					}
				}
			},
			//点击查询
			jumpProductDetail() {
				this.$router.push({
					path: "/TicketDetail",
					query: {
						id: this.id,
						stockId: this.skId
					}
				});
			},
			//跳转活动详情
			jumpHuodongDetail(id) {
				this.$router.push({
					path: "/eventsDetail",
					query: {
						id: id
					}
				});
			},
			change(newVal, oldVal) {
				this.newSwiperIndex = newVal;
			},
			swiperInit() {
				this.times = setInterval(() => {
					this.index++;
				}, 4000);
			},
			//停止定时器
			stopTimes() {
				clearInterval(this.times);
			},
			//开启定时器
			startTimes() {
				this.swiperInit();
			},
			//切换上一张
			prev() {
				this.index--;
				this.swiper.slideTo(this.index, 500, false);
			},
			//切换下一张
			next() {
				this.index++;
				this.swiper.slideTo(this.index, 500, false);
			},
			prevs() {
				this.$refs.car.prev();
			},
			nexts() {
				this.$refs.car.next();
			},
			showTime() {
				let show_day = new Array(
					"星期日",
					"星期一",
					"星期二",
					"星期三",
					"星期四",
					"星期五",
					"星期六"
				);
				let time = new Date();
				let year = time.getFullYear();
				let month = time.getMonth() + 1;
				let date = time.getDate();
				let day = time.getDay();
				let hour = time.getHours();
				let minutes = time.getMinutes();
				let second = time.getSeconds();
				hour < 10 ? (hour = "0" + hour) : hour;
				minutes < 10 ? (minutes = "0" + minutes) : minutes;
				second < 10 ? (second = "0" + second) : second;
				let now_time = month + "月" + date + "日" + " " + show_day[day] + "";
				return now_time;
			}
		},
		components: {
			swiper,
			swiperSlide,
			Header
		},
		created() {
			document.title = "海洋欢乐世界度假区";
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			data() { //处理最新活动图片数据
				let list = this.list2;
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
		watch: {
			index: function(newVal, oldVal) {
				if (newVal === 6) {
					this.swiper.slideTo(newVal + 1, 500, false); //切换到看不见的slide，速度为.5秒
				} else if (newVal === 8) {
					this.index = 0;
					this.swiper.slideTo(this.index, 500, false); //切换到第一个slide，速度为.5秒
				} else if (newVal === -1) {
					this.index = 7;
					this.swiper.slideTo(this.index, 500, false); //切换到最后一个slide，速度为.5秒
				}
			}
		}
	};
</script>
<style lang='scss' scoped>
	.main {
		width: 100%;
		.banner {
			// height: 864px;
			padding-top: 45%;
			position: relative;
			overflow: hidden;
			height: 0;

			.banner-imgs {
				position: absolute;
				left: 0;
				top: 0;
				height: 100%;
				width: 100%;
				z-index: 0;

				img {
					// height: 864px;
					height: 100%;
					width: 100%;
					cursor: pointer;
				}
			}

			.banner-content {
				width: 882px;
				height: 94px;
				margin: 0 auto;
				background: rgba(0, 0, 0, 0.75);
				box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.35);
				padding-left: 37px;
				font-size: 14px;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				position: absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);

				.content-list {
					float: left;

					.select-list {
						margin-top: 29px;
						margin-left: 19px;
						margin-right: 35px;
						width: 255px;
						height: 39px;
					}
				}

				.search {
					float: left;

					button {
						width: 69px;
						height: 39px;
						background: rgba(109, 196, 38, 1);
						font-size: 16px;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
						border-radius: 5px;
						margin-top: 29px;
					}
				}
			}
		}

		.content {
			margin-top: -180px;
			background: url(../assets/img/index-img9.png) no-repeat 0 0;
			background-size: 1920px 100%;
			position: relative;
			.content-list {
				width: 1200px;
				min-width: 1200px;
				margin: 0 auto;

				.list-one {
					width: 100%;
					padding-top: 37px;

					.one-change {
						width: 971px;
						height: 84px;
						margin: 0 auto;
						position: relative;

						.swiper-slide {
							text-align: center;
							display: -webkit-box;
							display: -ms-flexbox;
							display: -webkit-flex;
							display: flex;
							-webkit-box-pack: center;
							-ms-flex-pack: center;
							-webkit-justify-content: center;
							justify-content: center;
							-webkit-box-align: center;
							-ms-flex-align: center;
							-webkit-align-items: center;
							align-items: center;
						}

						img {
							width: 146px;
							height: 84px;
							margin: 0 auto;
							box-sizing: border-box;
							cursor: pointer;
						}

						.imgActive {
							border: 3px solid rgba(255, 255, 255, 1);
						}

						.swiper-prev {
							cursor: pointer;
							width: 21px;
							height: 36px;
							background: url(../assets/img/index-img11.png) no-repeat 0 0;
							position: absolute;
							left: -29px;
							top: 50%;
							margin-top: -18px;
						}

						.swiper-next {
							cursor: pointer;
							width: 21px;
							height: 36px;
							background: url(../assets/img/index-img10.png) no-repeat 0 0;
							position: absolute;
							right: -29px;
							top: 50%;
							margin-top: -18px;
						}
					}
				}
			}

			.new-active {
				margin-top: 100px;
				background: url(../assets/img/index-img2.png) no-repeat;
				background-size: 100% 100%;

				.title {
					height: 89px;
					background-color: rgba(255, 255, 255, 0.18);
					text-align: center;
					color: #ffffff;
					padding: 16px 0;
					letter-spacing: 2px;
					padding-top: 40px;

					.ch {
						font-size: 26px;

						span {
							font-size: 25px;
						}
					}
				}

				.new-swiper {
					padding-bottom: 30px;
					padding-top: 40px;
					height: 360px;
					background-color: rgba(255, 255, 255, 0.18);
					box-shadow: 5px 6px 7px 0px rgba(51, 75, 179, 0.35);

					.swiper-box {
						margin-left: 112px;
						margin-right: 142px;
						position: relative;

						.div {
							position: relative;
							width: 100%;
							height: 100%;
						}

						.prev,
						.next {
							width: 38px;
							height: 89px;
							background: rgba(255, 255, 255, 0.59);
							cursor: pointer;
						}

						.prev {
							width: 38px;
							height: 89px;
							position: absolute;
							left: -60px;
							top: 35%;
							margin-top: -40px;
							background: rgba(109, 196, 38, 0.6) url(../assets/img/index-new-next.png) no-repeat;
							background-position: center center;
						}

						.next {
							position: absolute;
							right: -60px;
							top: 35%;
							margin-top: -40px;
							background: rgba(109, 196, 38, 0.6) url(../assets/img/index-new-prev.png) no-repeat;
							background-position: center center;
						}
					}
				}
			}

			.new-hot {
				background: url(../assets/img/index-img3.png) no-repeat;
				background-size: 100% 100%;
				min-width: 1200px;

				.title {
					text-align: center;
					color: #ffffff;
					margin-top: 100px;
					letter-spacing: 2px;
					padding-top: 40px;

					.ch {
						font-size: 26px;

						span {
							font-size: 25px;
						}
					}
				}

				.hot-content {
					box-shadow: 5px 6px 7px 0px rgba(51, 75, 179, 0.35);
					padding-top: 78px;
					padding-left: 40px;
					padding-bottom: 35px;

					.content-left {
						li {
							width: 180px;
							height: 89px;
							padding-top: 10px;
							cursor: pointer;
							background: linear-gradient(0deg,
								rgba(12, 109, 206, 1),
								rgba(68, 165, 210, 1));
							text-align: center;

							img {
								width: 42px;
								height: 42px;
							}

							p {
								font-size: 16px;
								font-weight: 400;
								color: rgba(255, 255, 255, 1);
							}
						}

						.li2 {
							background: linear-gradient(0deg,
								rgba(101, 176, 23, 1),
								rgba(152, 224, 75, 1));
						}

						.li3 {
							background: linear-gradient(0deg,
								rgba(224, 71, 101, 1),
								rgba(231, 122, 143, 1));
						}

						.li4 {
							background: linear-gradient(0deg,
								rgba(247, 131, 17, 1),
								rgba(241, 172, 73, 1));
						}
					}

					.content-main {
						margin-left: 33px;

						.top {
							img {
								width: 179px;
								height: 137px;
							}

							.top-box {
								margin-left: 14px;

								.box-top {
									height: 17px;
									line-height: 17px;
									margin-bottom: 18px;

									div {
										font-size: 16px;
										font-weight: bold;
										color: rgba(51, 51, 51, 1);
										max-width: 280px;
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
									}

									a {
										font-size: 12px;
										font-weight: 400;
										color: rgba(7, 104, 248, 1);
									}
								}

								.box-bottom {
									width: 337px;
									height: 94px;
									font-size: 14px;
									line-height: 24px;
									font-weight: 400;
									color: rgba(102, 102, 102, 1);
									overflow: hidden;
								}
							}
						}

						.bottom {
							li {
								font-size: 14px;
								font-weight: 400;
								color: rgba(51, 51, 51, 1);
								padding: 20px 0;
								position: relative;
								padding-left: 20px;
								border-bottom: 1px solid rgba(125, 125, 125, 0.1);
								cursor: pointer;

								&::before {
									content: "";
									width: 8px;
									height: 8px;
									background-color: #ed3f31;
									border-radius: 50%;
									position: absolute;
									left: 0;
									margin-top: 5px;
								}

								a {
									float: right;
									font-size: 12px;
									font-weight: 400;
									color: rgba(153, 153, 153, 1);
								}
							}
						}
					}

					.content-right {
						margin-top: -35px;
						margin-left: 23px;
						position: relative;

						p {
							position: absolute;
							top: 12px;
							left: 140px;
							font-size: 16px;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
						}

						img {
							width: 343px;
							height: 397px;
						}

						.knowDetail {
							position: absolute;
							bottom: 45px;
							left: 50%;
							transform: translateX(-50%);
							width: 102px;
							height: 40px;
							line-height: 40px;
							background: rgba(196, 78, 246, 1);
							border-radius: 20px;
							text-align: center;
							font-size: 14px;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							cursor: pointer;
						}
					}
				}
			}

			.info-row {
				width: 1190px;
				min-width: 1190px;
				margin: 0 auto;
				margin-top: 80px;
				padding-bottom: 385px;
				background: url(../assets/img/md-11.png) no-repeat;

				.info-col1 {
					position: relative;

					.icoe {
						display: block;
						position: absolute;
						top: 10px;
						left: -20px;
						width: 232px;
						height: 72px;
						background: url(../assets/img/md-6.png) no-repeat top center;
					}

					.time {
						display: block;
						position: absolute;
						top: 42px;
						right: 66px;
						font-weight: bold;
						color: rgba(3, 106, 185, 1);
						font-size: 18px;
					}

					.info-img {
						margin-top: 128px;
						margin-left: 131px;
						height: 80px;

						img {
							width: 119px;
							height: 70px;
							margin-right: 22px;
							float: left;
						}

						p {
							width: 200px;
							float: left;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							font-size: 18px;
							height: 24px;
							line-height: 24px;
						}

						.p {
							margin-top: 16px;
						}
					}

					.info-boutton {
						margin-top: 34px;
						width: 593px;
						height: 82px;
						padding: 16px 0;
						background: rgba(7, 174, 205, 1);

						a {
							display: block;
							width: 236px;
							height: 51px;
							line-height: 51px;
							text-align: center;
							background: rgba(56, 183, 246, 1);
							box-shadow: 0px 6px 7px 0px rgba(42, 91, 2, 0.22);
							border-radius: 26px;
							font-size: 22px;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							// background: url(../assets/img/md-7.png) no-repeat;
							margin: 0 auto;

							&:hover {
								background: #0093fb;
							}

							// font-size: 22px;
							// font-weight: bold;
							// color: rgba(255, 255, 255, 1);
							// text-align: center;
							// line-height: 51px;
						}
					}

					&:nth-of-type(2) {
						.icoe {
							background: url(../assets/img/md-9.png) no-repeat;
							width: 248px;
						}

						.info-img2 {
							position: absolute;
							left: 145px;
							top: 78px;

							img {
								display: block;
								width: 107px;
								height: 56px;
								float: left;
								margin-right: 37px;
								margin-top: 34px;
							}

							.info-p {
								float: left;
								padding-top: 20px;

								p {
									font-weight: bold;
									color: rgba(255, 255, 255, 1);
									font-size: 14px;
									height: 26px;

									// margin: 10px 0;
									span {
										font-size: 28px;
									}
								}

								.p {
									margin-top: 20px;
								}
							}
						}

						.info-boutton {
							margin-top: 242px;
							width: 596px;
							margin-left: -2px;
							height: 82px;
							padding: 16px 0;
							background: rgba(72, 154, 5, 1);

							a {
								display: block;
								width: 236px;
								height: 51px;
								line-height: 51px;
								text-align: center;
								background: rgba(154, 218, 16, 1);
								box-shadow: 0px 6px 7px 0px rgba(42, 91, 2, 0.22);
								border-radius: 26px;
								font-size: 22px;
								font-weight: bold;
								color: rgba(255, 255, 255, 1);
								// background: url(../assets/img/md-7.png) no-repeat;
								margin: 0 auto;

								&:hover {
									background: #6dc30c;
								}
							}
						}
					}
				}
			}
		}

		.juedui {
			position: fixed;
			left: 50px;
			top: 50%;
			margin-top: -307px;
			width: 174px;
			height: 614px;
			background: url(../assets/img/index-juedui-bg.png) no-repeat;
			z-index: 999;
			text-align: center;
			padding-top: 175px;

			img {
				margin-top: 30px;
				width: 75px;
				height: 75px;
			}

			p {
				height: 17px;
				font-size: 16px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>
<style>
	.swiper-box .el-carousel__item .colorB {
		bottom: 0;
	}

	.colorA {
		border: 5px solid rgba(255, 237, 40, 1);
		box-shadow: 0px 8px 7px 0px rgba(94, 94, 94, 0.52);
	}

	.swiper-box .el-carousel__item .div {
		width: 429px;
		height: 100%;
	}

	.titless {
		position: absolute;
		bottom: 5px;
		left: 5px;
		right: 5px;
		height: 70px;
		line-height: 70px;
		background: rgba(27, 27, 27, 0.78);
		font-size: 14px;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		padding-left: 32px;
	}

	.swiper-box .el-carousel__item img {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.swiper-box .el-carousel__mask {
		opacity: 0;
		background-color: transparent;
	}

	.new-active .swiper-box .el-carousel__indicators {
		margin-top: 20px;
		margin-bottom: 28px;
	}

	.swiper-box .el-carousel__indicator .el-carousel__button {
		width: 13px;
		height: 13px;
		background: rgba(99, 99, 99, 1);
		border-radius: 50%;
		margin: 0 5px;
	}
</style>
