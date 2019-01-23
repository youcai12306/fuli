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
				<div class="one-change" @mouseover="stopTimes" @mouseout="startTimes">
					<swiper :options="swiperOption" ref="mySwiper" v-if="list2.length > 0">
						<!-- slides -->
						<template v-for="(item,k) in list2">
							<swiper-slide>
								<img :src="item.facePictureId[0] || imgSrc" :alt="item.title" @click.stop="jumpImg(k)">
								<p :class="{imgActive:index === k}">{{item.title}}</p>
							</swiper-slide>
						</template>
						<!-- Optional controls -->
					</swiper>
					<div class="swiper-prev" @click="prev"></div>
					<div class="swiper-next" @click="next"></div>
				</div>
			</div>
			<div class="shebei">
				<div class="banner-imgs" @mouseover="stopTimes" @mouseout="startTimes">
          <div class="imgList" v-for="(item,i) in 13" :key="item" v-show="i === index">
            <div class="top">
              <div
                class="top-imgList"
                v-for="(item,key) in 2"
                :key="key"
                v-show="key === datailIndex"
              >
                <img
                  :src="`../../../static/theme/${i+1}.png`"
                  alt
                  class="img"
                  v-show="changeImg == 0"
                >
                <img
                  :src="`../../../static/theme/${i+2}.png`"
                  alt
                  class="img"
                  v-show="changeImg == 1"
                >
              </div>
              <div class="top-imgMinList">
                <ul>
                  <li v-for="(item,keys) in 2" :key="keys" @click="showDatail(keys)">
                    <img src="../../assets/img/banner-img1.png" alt class="imgMin">
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom clearDiv">
              <div class="floatLeft" v-if="i == 0">
                <h3>暴风海神湾</h3>
                <p class="p1">从涓涓细浪到拍岸巨浪的八种海浪为你带来全海域舒适感觉，陪同家人朋友在浮圈上享受如同海浪中的美好历程。</p>
                <p class="p1 mt-30">• 水池面积：4050㎡
                  <br>• 水深：2.0m
                  <br>• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 1">
                <h3>美杜莎没落之河</h3>
                <p
                  class="p1"
                >是一个长470的漂流河，乘坐浮圈顺着湍急的河流忽左忽右，趣味无限。躺在浮圈上悠闲的沿着河漂流真是再惬意不过了，你可以静静的欣赏园里的风景，或跟家人朋友畅谈，也可以想想下一个等待自己的惊险设备会是哪一个。</p>
                <p class="p1 mt-30">• 水深1.05m。
                  <br>• 懒人河长470m。
                  <br>• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 2">
                <h3>争霸塔</h3>
                <p class="p1">你和你的家人或朋友乘坐圆形皮筏从18.7米的高空出发，迅速穿越一段螺旋滑槽后，挑战地心引力的极限，尽享被龙卷风吸入旋回的感受。</p>
                <p class="p1 mt-30">•哈帝斯滑道 长106.7m，宙斯滑道长98.5m。
                  <br>•高度18.7m，仅限身高1.07m以上的客人游玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 3">
                <h3>双神战道</h3>
                <p
                  class="p1"
                >你和你的家人或朋友乘坐圆形皮筏，准备好挑战这个庞大的海蛇型水滑道，它会带您和您的朋友穿越黑暗蜿蜒的隧道弹射到一个狂野的漂浮设施，然后掉进玻璃纤维管内，尝试强烈的倾斜和来回猛冲。</p>
                <p class="p1 mt-30">•帕尔修斯滑道长186.2m，海克力斯滑道长202.5m。
                  <br>•高度18.25m，仅限身高1.07m以上的客人游玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 4">
                <h3>赫拉彩虹天梯</h3>
                <p
                  class="p1"
                >由八条各自独立的滑道组成，八个游客可各自选一条滑道，从18.8米高的塔端进入，开始疾驰滑行。游客趴在飞毯似的滑毯上，在完全密封的水槽中完成一个完整回环，进入到开放式的直到俯冲部分，一路激起浪花片片，十分好玩。</p>
                <p class="p1 mt-30">•高18.8m。
                  <br>•滑毯滑道，仅限身高1.07m以上的客人游玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 5">
                <h3>奥林匹克竞赛</h3>
                <p
                  class="p1"
                >两个舱室地面装配令人恐惧的活板门，连接着95米长蜿蜒的水滑道。走进舱室静待脚下地面脱落的瞬间，感受肾上腺素的急速飙升，然后骤然垂直落下以15米/秒的速度穿过这个水滑道，推动着您上下颠簸。</p>
                <p class="p1 mt-30">•阿波罗赛道长105.9m，阿尔忒弥斯赛道长83.1m，赫尔默斯赛道长88.3m。
                  <br>•仅限身高1.22m以上的客人游玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 6">
                <h3>宙斯雷电环</h3>
                <p
                  class="p1"
                >自由选择三种人体单行直滑的滑道。俯冲而下的高速滑行，彻底体验自由落体的畅快，逆风而行的紧张与刺激，让游客身体的每一个毛孔都充满了疯狂的愉悦感。尽情挑战勇气与胆量，让尖叫和水花伴着你畅享风一般的感觉。</p>
                <p class="p1 mt-30">•闪电之环/雷电之环 长94.4m。
                  <br>•仅限身高1.22m以上的客人游玩。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 7">
                <h3>泰坦战场</h3>
                <p class="p1">和家人朋友一同参与，乘坐浮筏，穿越弯道，在高低起伏的滑道上，一同经历跌宕起伏、无与伦比的快感。</p>
                <p class="p1 mt-30">•普罗米修斯滑道长178.4m，圆形橡皮筏，可4人共乘。
                  <br>•海波里恩滑道长141.4m，美迪思滑道长133.2m，克洛诺斯滑道长92.5m，客人使用双人皮筏。
                  <br>•仅限身高1.07m以上的客人游玩.
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 8">
                <h3>赫斯特天地</h3>
                <p
                  class="p1"
                >专为儿童设计包含12个水炮、5个喷泉水嘴儿童戏水设施。专为所有年龄儿童打造的水上互动游玩设施，这里是充满欢乐童趣的水上乐园，如同梦幻般的童话世界。</p>
                <p class="p1 mt-30">•水深0.6m。
                  <br>•有三条宽而低的滑道。
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 9">
                <h3>奥林匹斯挑战池</h3>
                <p
                  class="p1"
                >配备有水上冲关的刺激设备，可以和家人朋友一起比赛，缤纷的游玩设施，超乎想象的奇异场景，在这里享受一段活力四射的时光，在青春洋溢中，感受非比寻常的夏日激情。</p>
                <p class="p1 mt-30">•深1.8m。
                  <br>•面积是836㎡和714㎡。
                  <br>•身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 10">
                <h3>德墨特尔城堡</h3>
                <p
                  class="p1"
                >精心设计的水上游戏、滑道和攀爬架为特色的水上游乐场。精心设计的水上游戏、滑道和攀爬架为特色的水上游乐场，创造一个惊险刺激的世界。专为儿童设计开发的儿童身体滑梯和管状滑道，滑梯高度让每个孩子都能自信安全地体验征服世界上最好的水滑梯给他们带来的无限快乐。</p>
                <p class="p1 mt-30">•水深0.3m。
                  <br>•身高1.02m以下的小朋友
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 11">
                <h3>科孚冲浪</h3>
                <p class="p1">这是一座人造冲浪设备，以模拟如真实海洋的波浪，享受冲浪乐趣，水上滑板等都可在这里玩个过瘾，其困难度与挑战性让人如真实冲浪般的体验</p>
                <p class="p1 mt-30">•趴式及跪式冲浪身高：≥1.07m
                  <br>•站立式冲浪身高：≥1.22m
                  <br>
                </p>
              </div>
              <div class="floatLeft" v-if="i == 12">
                <h3>雅典娜浴场</h3>
                <p class="p1">经历了动感的水上欢腾，将身体浸于舒适的SPA绿洲之中，享受水疗按摩所带来的惬意，身体随波荡漾，闭目冥思体验宁静致远的无比轻松畅快</p>
                <p class="p1 mt-30">•水深0.9m.
                  <br>•面积 8.5 X 6, 380㎡。
                  <br>•温度38°。
                  <br>
                </p>
              </div>
            </div>
          </div>
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
					notNextTick: true,
					slidesPerView: 6,
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
			swiperInit() {
				this.times = setInterval(() => {
					this.index++;
				}, 2000);
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
				this.$nextTick(() => {
					var swiper = this.$refs.certifySwiper.swiper;
					var swiper2 = this.$refs.certifySwiper1.swiper;
					swiper.controller.control = swiper2;

// 					var mySwiper = this.$refs.mySwiper.swiper;
// 					var mySwiper2 = this.$refs.mySwiper2.swiper;
// 					mySwiper.controller.control = mySwiper2;
// 					mySwiper2.controller.control = mySwiper;
				});
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
				console.log(oldVal)
				console.log(this.list2.length)
				if (newVal >= 7 && newVal <= 12) {
					this.swiper.slideTo(newVal + 1, 500, false); //切换到看不见的slide，速度为.5秒
				} else if (newVal === this.list2.length) {
					this.index = 0;
					this.swiper.slideTo(this.index, 500, false); //切换到第一个slide，速度为.5秒
				} else if (newVal === -1) {
					this.index = this.list2.length-1;
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
