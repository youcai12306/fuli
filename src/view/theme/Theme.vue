<template>
	<div class="theme">
		<!-- 头部 -->
		<Header></Header>
		<!-- 第一部分 -->
		<div class="banner" id="banner">
			<div class="theme-title">
				<p>麦迪卡斯水乐园</p>
			</div>
			<div class="list-one">
				<div class="one-change">
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<template v-for="(item,k) in list2">
							<swiper-slide>
								<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
								<p>{{item.title}}</p>
							</swiper-slide>
						</template>
						<!-- Optional controls -->
					</swiper>
					<div class="swiper-prev"></div>
					<div class="swiper-next"></div>
				</div>
			</div>
			<div class="shebei">
				<div class="banner-imgs">
					<swiper :options="swiperOption2" ref="mySwiper2">
						<swiper-slide class="imgList" v-for="(v,i) in list2" :key="i">
							<div class="top">
								<!-- <div class="top-imgList" v-for="(item,key) in list2" :key="key" v-show="key === datailIndex">
									<template v-for="val in item.facePictureId">
										<img :src="val || imgSrc" :alt="item.title" class="img" v-show="changeImg == key">
									</template>
								</div> -->
								<div class="top-imgMinList">
									<ul>
										<!-- <li v-for="(item,keys) in list2" :key="keys" @click="showDatail(keys)">
											<template v-for="val in item.facePictureId">
												<img :src="val || imgSrc" :alt="item.title" class="imgMin">
											</template>
										</li> -->
									</ul>
								</div>
							</div>
							<div class="bottom clearDiv">
								<div class="floatLeft" v-for="(item,key) in list2" :key="key" v-if="i == key">
									<h3>{{item.title}}</h3>
									<p class="pad1" v-html="item.content0"></p>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
		<!-- 精彩演绎 -->
		<div class="art" id="art">
			<img src="../../assets/img/theme-art-img4.png" alt class="img">
			<div class="meng2">
				<swiper :options="certifySwiper1" ref="certifySwiper1">
					<swiper-slide v-for="(item,i) in list3" :key="i">
						<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
					</swiper-slide>
				</swiper>
			</div>

			<div class="meng">
				<div class="certify" id="certify">
					<swiper :options="certifySwiper" ref="certifySwiper">
						<swiper-slide v-for="(item,i) in list3" :key="i">
							<div class="venve" @click="jumpArtDetail(item.structureId)">
								<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
								<div class="p1">{{item.title}}
									<!-- <span>表演时间14：00</span> -->
								</div>
								<div class="p2" v-html="item.content0">
								</div>
							</div>
						</swiper-slide>
					</swiper>
					<!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
				</div>
			</div>
		</div>
		<!-- 动物场馆 -->
		<div class="animal" id="animal" v-if="list4 != 0">
			<img src="../../assets/img/theme-animal-title.png" alt class="img">
			<div class="bottom">
				<swiper :options="swiperOptions" ref="mySwipers">
					<swiper-slide v-for="(item,i) in list3" :key="i">
						<div class="venve" @click.stop="jumpAnimalDetail(item.structureId)">
							<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
							<h3>{{item.title}}</h3>
							<p v-html="item.content0"></p>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-paginations" slot="pagination" v-if="list4.length > 3"></div>
			</div>
		</div>
		<!-- 主题商店 -->
		<div class="shop" id="shop" v-if="list5 != 0">
			<div class="shop-box">
				<img src="../../assets/img/theme-shop-title.png" alt class="img">
				<div class="bottom">
					<swiper :options="swiperOptions1" ref="mySwipers1">
						<swiper-slide v-for="(item,i) in list5" :key="i">
							<div class="venve" @click="jumpShopDetail(item.structureId)">
								<div class="venve-list">
									<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
									<div class="venve-content">
										<div>{{item.title}}</div>
										<p v-html="item.content0"></p>
									</div>
								</div>
							</div>
						</swiper-slide>
					</swiper>
					<!-- <div class="swiper-paginations1" slot="pagination"></div> -->
				</div>
			</div>
		</div>
		<!-- 特色餐厅 -->
		<div class="eat" id="eat" v-if="list6 != 0">
			<div class="eat-box">
				<img src="../../assets/img/theme-eat-title.png" alt class="img">
				<div class="eat-lists clearDiv">
					<template v-for="(item,i) in list6">
						<div class="eat-list floatLeft" @click="jumpEatDetail(item.structureId)">
							<img :src="item.facePictureId[0] || imgSrc" :alt="item.title">
							<div class="eat-content">
								<div>{{item.title}}</div>
								<p v-html="item.content0"></p>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
		<!-- 左侧导航 -->
		<ul class="leftNav">
			<li @click="showYuanQu()">园区介绍</li>
			<li @click="jumpColumn('#banner')" :class="{navColorActive:abc== 0}">游玩设施</li>
			<li @click="jumpColumn('#art')" :class="{navColorActive:abc== 1}">精彩演艺</li>
			<li @click="jumpColumn('#animal')" v-if="list4 != 0">动物场馆</li>
			<li @click="jumpColumn('#shop')" :class="{navColorActive:abc== 2}">主题商店</li>
			<li @click="jumpColumn('#eat')" :class="{navColorActive:abc== 3}">特色餐厅</li>
		</ul>
		<div class="alert" v-show="alertShow" @click="closeYuanQu()">
			<div class="alert-box" @click.stop>
				<img src="../../assets/img/theme-quxiao.png" alt class="x" @click="showYuanQu()">
				<template v-for="item in list1" v-if="list1 != 0">
					<h3>{{item.title}}</h3>
					<img :src="item.facePictureId[0] || imgSrc" alt class="img">
					<p v-html="item.content0"></p>
				</template>
			</div>
		</div>
		<!-- 回到顶部按钮 -->
		<img src="../../assets/img/top.png" alt class="To-top" @click="jumpColumn('#top')" v-show="topShow>1000?true:false">
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
	export default {
		name: "Index",
		data() {
			return {
				id: this.$route.params.id,
				abc: 0,
				alertShow: false,
				newSwiperIndex: 0,
				value: "购票",
				date: "2018-12-12",
				swiperOption: {
					// centeredSlides: true,
					slidesPerView: 6,
					spaceBetween: 20
				},
				swiperOption2: {
					effect: "fade",
					navigation: {
						nextEl: ".swiper-next",
						prevEl: ".swiper-prev"
					}
				},
				swiperOptions: {
					//设定初始化时slide的索引
					initialSlide: 0,
					//放几个
					slidesPerView: 3,
					spaceBetween: 60,
					//自动播放
					autoplay: {
						delay: 5000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},
					//分页器设置
					pagination: {
						el: ".swiper-paginations",
						clickable: true
					}
				},
				swiperOptions1: {
					//设定初始化时slide的索引
					initialSlide: 0,
					//放几个
					slidesPerView: 2,
					spaceBetween: 60,
					//自动播放
					// autoplay: {
					//   delay: 5000,
					//   stopOnLastSlide: false,
					//   disableOnInteraction: true
					// },
					//分页器设置
					pagination: {
						el: ".swiper-paginations1",
						clickable: true
					}
				},
				certifySwiper: {
					//精彩演艺
					watchSlidesProgress: true,
					slidesPerView: "auto",
					centeredSlides: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					on: {
						progress: function(progress) {
							for (let i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								let modify = 1;
								if (Math.abs(slideProgress) > 1) {
									modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
								}
								let translate = slideProgress * modify * 500 + "px";
								let scale = 1 - Math.abs(slideProgress) / 5;
								let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
								slide.transform(
									"translateX(" + translate + ") scale(" + scale + ")"
								);
								slide.css("zIndex", zIndex);
								slide.css("opacity", 1);
								if (Math.abs(slideProgress) > 3) {
									slide.css("opacity", 0);
								}
							}
						},
						setTransition: function(transition) {
							for (var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								slide.transition(transition);
							}
						}
					}
				},
				certifySwiper1: {
					watchSlidesProgress: true,
					slidesPerView: "auto",
					centeredSlides: true,
					effect: "fade"
				},
				index: 0,
				datailIndex: 0,
				changeImg: 0,
				topShow: 0,
				list1: [], //6个模块的数据 从上到下园区介绍、游玩设施、精彩演艺、动物场馆、主题商店、特色餐厅
				list2: [],
				list3: [],
				list4: [],
				list5: [],
				list6: [],
				img: [], //图片集合
				imgSrc: require('@/assets/img/blank.png')
			};
		},
		mounted() {
			// this.swiperInit();
			this.$nextTick(() => {
				var swiper = this.$refs.certifySwiper.swiper;
				var swiper2 = this.$refs.certifySwiper1.swiper;
				swiper.controller.control = swiper2;

				var mySwiper = this.$refs.mySwiper.swiper;
				var mySwiper2 = this.$refs.mySwiper2.swiper;
				// mySwiper.controller.control = mySwiper2;
				mySwiper2.controller.control = mySwiper;
			});
			window.addEventListener("scroll", this.handleScroll);
		},
		methods: {
			//跳转对应图片
			jumpImg(index) {
				clearInterval(this.times);
				this.index = index;
			},
			//跳转动物详情
			jumpAnimalDetail(id) {
				this.$router.push({
					path: "/animalDetail",
					query: {
						id: id
					}
				});
			},
			//跳转主题商店
			jumpShopDetail(id) {
				this.$router.push({
					path: "/shopDetail",
					query: {
						id: id
					}
				});
			},
			//跳转演绎中心
			jumpArtDetail(id) {
				this.$router.push({
					path: "/artDetail",
					query: {
						id: id
					}
				});
			},
			//跳转餐厅详情页
			jumpEatDetail(id) {
				this.$router.push({
					path: "/eatDetail",
					query: {
						id: id
					}
				});
			},
			//显示园区乐园
			showYuanQu() {
				this.alertShow = !this.alertShow;
			},
			//关闭园区乐园
			closeYuanQu() {
				this.alertShow = false;
			},
			change(newVal, oldVal) {
				this.newSwiperIndex = newVal;
			},
			// 			swiperInit() {
			// 				this.times = setInterval(() => {
			// 					this.index++;
			// 				}, 2000);
			// 			},
			//停止定时器
			stopTimes() {
				clearInterval(this.times);
			},
			//开启定时器
			// 			startTimes() {
			// 				this.swiperInit();
			// 			},
			//切换上一张
			prev() {
				this.index--;
				this.swiper.slideTo(this.index, 500, false);
			},
			//切换下一张
			next() {
				this.index++;
				console.log(this.index);
				this.swiper.slideTo(this.index, 500, false);
			},
			prevs() {
				this.$refs.car.prev();
			},
			nexts() {
				this.$refs.car.next();
			},
			//跳转详情图片
			showDatail(keys) {
				this.changeImg = keys;
			},
			//跳转到指定位置
			jumpColumn(col) {
				if (col == "#top") {
					let distance =
						document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
					//window.scroll(0, 0);
					let step = distance / 50; //每步的距离
					(function jump() {
						if (distance > 0) {
							distance -= step;
							window.scrollTo(0, distance);
							setTimeout(jump, 5);
						}
					})();
				} else {
					this.alertShow = false;
					let top = document.querySelector(col).offsetTop;
					window.scroll(0, top);
				}
			},
			handleScroll() {
				let scrollTop =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop;
				this.topShow = scrollTop;

				if (scrollTop >= 0 && scrollTop < 1757) {
					this.abc = 0;
				} else if (scrollTop >= 1757 && scrollTop < 2819) {
					this.abc = 1;
				} else if (scrollTop >= 2819 && scrollTop < 3899) {
					this.abc = 2;
				} else {
					this.abc = 3;
				}
			},
			getIntroduced() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A1-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getFacilities() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A2-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getActing() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A3-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getVenues() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A4-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getStore() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A5-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getRestaurant() {
				return this.$fetch(
					`${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?pageNum=1&pageSize=100&linkIndex=A6-${this.id}&isEnglish=${this.$isEnglish}`
				)
			},
			getLists() { //获取6个模块数据 
				var that = this;
				that.$axios.all([that.getIntroduced(), that.getFacilities(), that.getActing(),
						that.getVenues(), that.getStore(), that.getRestaurant()
					])
					.then(that.$axios.spread(function(Introduced, Facilities, Acting, Venues, Store, Restaurant) {
						that.list1 = Introduced.data.content || [];
						that.list2 = Facilities.data.content || [];
						that.list3 = Acting.data.content || [];
						that.list4 = Venues.data.content || [];
						that.list5 = Store.data.content || [];
						that.list6 = Restaurant.data.content || [];
						//获取所有图片
						let array = [...that.list1, ...that.list2, ...that.list3, ...that.list4, ...that.list5, ...that.list6];
						let xin2 = array.map(res => {
							let pic = res.facePictureId.map(v => {
								return v
							}).join(",");
							return pic;
						}).join(",");
						that.GetSelectFiles(xin2);
					}))
			},
			GetSelectFiles(obj) { //批量获取图片
				this.$fetch(`${this.$url1}:2600/staticResource-mucon/selectFiles`, {
					ids: obj
				}).then(res => {
					this.img = res.data;
					this.getData();
				});
			},
			getData() {
				let that = this;
				//处理返回数据
				that.list1 = that.data(that.list1);
				that.list2 = that.data(that.list2);
				that.list3 = that.data(that.list3);
				that.list4 = that.data(that.list4);
				that.list5 = that.data(that.list5);
				that.list6 = that.data(that.list6);
			},
			data(obj) { //处理返回数据
				let list = obj;
				list.forEach(v => {
					if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							this.img.forEach(res => {
								if (val == res.id) {
									v.facePictureId[key] = IMG_Url + res.fileName;
								}
							});
						})
					}
				});
				return list.length == 0 ? 0 : list;
			}
		},
		components: {
			swiper,
			swiperSlide,
			Header
		},
		created() {
			document.title = "海洋欢乐世界度假区";
			this.getLists();
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		watch: {
			index: function(newVal, oldVal) {
				//console.log(newVal)
				if (newVal >= 7 && newVal <= 12) {
					this.swiper.slideTo(newVal + 1, 500, false); //切换到看不见的slide，速度为.5秒
				} else if (newVal === 13) {
					this.index = 0;
					this.swiper.slideTo(this.index, 500, false); //切换到第一个slide，速度为.5秒
				} else if (newVal === -1) {
					this.index = 11;
					this.swiper.slideTo(this.index, 500, false); //切换到最后一个slide，速度为.5秒
				}
			},
			$route() { //监听路由参数变化
				console.log(this.$route.params.id)
				let ID = this.$route.params.id;
				this.id = ID;
				this.getLists();
			}
		}
	};
</script>

<style lang='scss' scoped src="@/assets/scss/theme.scss"></style>
<style>
	.colorA {
		border: 5px solid rgba(255, 237, 40, 1);
		box-shadow: 0px 8px 7px 0px rgba(94, 94, 94, 0.52);
	}

	.swiper-box .el-carousel__item .div {
		width: 429px;
		height: 100%;
	}

	.swiper-box .el-carousel__item .titless {
		width: 463px;
		position: absolute;
		bottom: 5px;
		left: 5px;
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

	.swiper-box .el-carousel__indicators {
		margin-top: 40px;
		margin-bottom: 28px;
	}

	.swiper-box .el-carousel__indicator .el-carousel__button {
		width: 13px;
		height: 13px;
		background: rgba(99, 99, 99, 1);
		border-radius: 50%;
		margin: 0 5px;
	}

	.theme .swiper-paginations .swiper-pagination-bullet,
	.theme .swiper-paginations1 .swiper-pagination-bullet {
		margin: 0 10px;
		width: 18px;
		height: 18px;
		border: 2px solid rgba(255, 255, 255, 1);
		border-radius: 50%;
	}

	.theme .swiper-paginations .swiper-pagination-bullet-active,
	.theme .swiper-paginations1 .swiper-pagination-bullet-active {
		background: rgba(255, 255, 255, 1);
	}

	.meng2 .swiper-container {
		width: 100%;
		height: 100%;
	}
</style>
<style src="@/assets/scss/certify.css" scoped="scoped"></style>
