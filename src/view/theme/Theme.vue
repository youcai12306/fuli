<template>
	<div class="theme">
		<!-- 头部 -->
		<Header></Header>
		<!-- 第一部分 -->
		<div class="banner" id="banner">
			<div class="list-one">
				<div class="one-change" @mouseover="stopTimes" @mouseout="startTimes">
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list1.png" alt @click.stop="jumpImg(0)">
							<p :class="{imgActive:index === 0}">暴风海神湾</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(1)">
							<p :class="{imgActive:index === 1}">美杜莎没落之河</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list3.png" alt @click.stop="jumpImg(2)">
							<p :class="{imgActive:index === 2}">争霸塔</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list4.png" alt @click.stop="jumpImg(3)">
							<p :class="{imgActive:index === 3}">双神战道</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list5.png" alt @click.stop="jumpImg(4)">
							<p :class="{imgActive:index === 4}">赫拉彩虹天梯</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list6.png" alt @click.stop="jumpImg(5)">
							<p :class="{imgActive:index === 5}">奥林匹克竞赛</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list1.png" alt @click.stop="jumpImg(6)">
							<p :class="{imgActive:index === 6}">宙斯雷电环</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(7)">
							<p :class="{imgActive:index === 7}">泰坦战场</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(8)">
							<p :class="{imgActive:index === 8}">赫斯特天地</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(9)">
							<p :class="{imgActive:index === 9}">奥林匹斯挑战池</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(10)">
							<p :class="{imgActive:index === 10}">德墨特尔城堡</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(11)">
							<p :class="{imgActive:index === 11}">科孚冲浪</p>
						</swiper-slide>
						<swiper-slide>
							<img src="../../assets/img/theme-banner-list2.png" alt @click.stop="jumpImg(12)">
							<p :class="{imgActive:index === 12}">雅典娜浴场</p>
						</swiper-slide>
						<!-- Optional controls -->
					</swiper>
					<div class="swiper-prev" @click="prev"></div>
					<div class="swiper-next" @click="next"></div>
				</div>
			</div>
			<div class="shebei">
				<div class="banner-imgs" @mouseover="stopTimes" @mouseout="startTimes">
					<div class="imgList" v-for="(item,key) in 13" :key="item" v-show="key === index">
						<div class="top">
							<div class="top-imgList" v-for="(item,key) in 2" :key="key" v-show="key === datailIndex">
								<img src="../../assets/img/banner-img2.png" alt class="img">
							</div>
							<div class="top-imgMinList">
								<ul>
									<li v-for="(item,key) in 2" :key="key" @click="showDatail(key)">
										<img src="../../assets/img/banner-img1.png" alt class="imgMin">
									</li>
								</ul>
							</div>
						</div>
						<div class="bottom clearDiv">
							<div class="floatLeft" v-if="key == 0">
								<h3>暴风海神湾</h3>
								<p class="p1">从涓涓细浪到拍岸巨浪的八种海浪为你带来全海域舒适感觉，陪同家人朋友在浮圈上享受如同海浪中的美好历程。</p>
								<p class="p1 mt-30">• 水池面积：4050㎡<br>
									• 水深：2.0m<br>
									• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 1">
								<h3>美杜莎没落之河</h3>
								<p class="p1">是一个长470的漂流河，乘坐浮圈顺着湍急的河流忽左忽右，趣味无限。躺在浮圈上悠闲的沿着河漂流真是再惬意不过了，你可以静静的欣赏园里的风景，或跟家人朋友畅谈，也可以想想下一个等待自己的惊险设备会是哪一个。</p>
								<p class="p1 mt-30">• 水深1.05m。<br>
									• 懒人河长470m。<br>
									• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 2">
								<h3>争霸塔</h3>
								<p class="p1">你和你的家人或朋友乘坐圆形皮筏从18.7米的高空出发，迅速穿越一段螺旋滑槽后，挑战地心引力的极限，尽享被龙卷风吸入旋回的感受。</p>
								<p class="p1 mt-30">•哈帝斯滑道 长106.7m，宙斯滑道长98.5m。<br>
									•高度18.7m，仅限身高1.07m以上的客人游玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 3">
								<h3>双神战道</h3>
								<p class="p1">你和你的家人或朋友乘坐圆形皮筏，准备好挑战这个庞大的海蛇型水滑道，它会带您和您的朋友穿越黑暗蜿蜒的隧道弹射到一个狂野的漂浮设施，然后掉进玻璃纤维管内，尝试强烈的倾斜和来回猛冲。</p>
								<p class="p1 mt-30">•帕尔修斯滑道长186.2m，海克力斯滑道长202.5m。<br>
									•高度18.25m，仅限身高1.07m以上的客人游玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 4">
								<h3>赫拉彩虹天梯</h3>
								<p class="p1">由八条各自独立的滑道组成，八个游客可各自选一条滑道，从18.8米高的塔端进入，开始疾驰滑行。游客趴在飞毯似的滑毯上，在完全密封的水槽中完成一个完整回环，进入到开放式的直到俯冲部分，一路激起浪花片片，十分好玩。</p>
								<p class="p1 mt-30">•高18.8m。<br>
									•滑毯滑道，仅限身高1.07m以上的客人游玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 5">
								<h3>奥林匹克竞赛</h3>
								<p class="p1">两个舱室地面装配令人恐惧的活板门，连接着95米长蜿蜒的水滑道。走进舱室静待脚下地面脱落的瞬间，感受肾上腺素的急速飙升，然后骤然垂直落下以15米/秒的速度穿过这个水滑道，推动着您上下颠簸。</p>
								<p class="p1 mt-30">•阿波罗赛道长105.9m，阿尔忒弥斯赛道长83.1m，赫尔默斯赛道长88.3m。<br>
									•仅限身高1.22m以上的客人游玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 6">
								<h3>宙斯雷电环</h3>
								<p class="p1">自由选择三种人体单行直滑的滑道。俯冲而下的高速滑行，彻底体验自由落体的畅快，逆风而行的紧张与刺激，让游客身体的每一个毛孔都充满了疯狂的愉悦感。尽情挑战勇气与胆量，让尖叫和水花伴着你畅享风一般的感觉。</p>
								<p class="p1 mt-30">•闪电之环/雷电之环 长94.4m。<br>
									•仅限身高1.22m以上的客人游玩。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 7">
								<h3>泰坦战场</h3>
								<p class="p1">和家人朋友一同参与，乘坐浮筏，穿越弯道，在高低起伏的滑道上，一同经历跌宕起伏、无与伦比的快感。</p>
								<p class="p1 mt-30">•普罗米修斯滑道长178.4m，圆形橡皮筏，可4人共乘。<br>
									•海波里恩滑道长141.4m，美迪思滑道长133.2m，克洛诺斯滑道长92.5m，客人使用双人皮筏。<br>
									•仅限身高1.07m以上的客人游玩.<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 8">
								<h3>赫斯特天地</h3>
								<p class="p1">专为儿童设计包含12个水炮、5个喷泉水嘴儿童戏水设施。专为所有年龄儿童打造的水上互动游玩设施，这里是充满欢乐童趣的水上乐园，如同梦幻般的童话世界。</p>
								<p class="p1 mt-30">•水深0.6m。<br>
									•有三条宽而低的滑道。<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 9">
								<h3>奥林匹斯挑战池</h3>
								<p class="p1">配备有水上冲关的刺激设备，可以和家人朋友一起比赛，缤纷的游玩设施，超乎想象的奇异场景，在这里享受一段活力四射的时光，在青春洋溢中，感受非比寻常的夏日激情。</p>
								<p class="p1 mt-30">•深1.8m。<br>
									•面积是836㎡和714㎡。<br>
									•身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 10">
								<h3>德墨特尔城堡</h3>
								<p class="p1">精心设计的水上游戏、滑道和攀爬架为特色的水上游乐场。精心设计的水上游戏、滑道和攀爬架为特色的水上游乐场，创造一个惊险刺激的世界。专为儿童设计开发的儿童身体滑梯和管状滑道，滑梯高度让每个孩子都能自信安全地体验征服世界上最好的水滑梯给他们带来的无限快乐。</p>
								<p class="p1 mt-30">•水深0.3m。<br>
									•身高1.02m以下的小朋友<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 11">
								<h3>科孚冲浪</h3>
								<p class="p1">这是一座人造冲浪设备，以模拟如真实海洋的波浪，享受冲浪乐趣，水上滑板等都可在这里玩个过瘾，其困难度与挑战性让人如真实冲浪般的体验</p>
								<p class="p1 mt-30">•趴式及跪式冲浪身高：≥1.07m<br>
									•站立式冲浪身高：≥1.22m<br>
								</p>
							</div>
							<div class="floatLeft" v-if="key == 12">
								<h3>雅典娜浴场</h3>
								<p class="p1">经历了动感的水上欢腾，将身体浸于舒适的SPA绿洲之中，享受水疗按摩所带来的惬意，身体随波荡漾，闭目冥思体验宁静致远的无比轻松畅快</p>
								<p class="p1 mt-30">•水深0.9m.<br>
									•面积 8.5 X 6, 380㎡。<br>
									•温度38°。<br>
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
					<swiper-slide v-for="item in 1" :key="item">
						<img src="../../assets/img/theme-art-img40.png" alt>
					</swiper-slide>
				</swiper>
			</div>

			<div class="meng">
				<div class="certify" id="certify">
					<swiper :options="certifySwiper" ref="certifySwiper">
						<swiper-slide v-for="item in 1" :key="item">
							<div class="venve" @click="jumpArtDetail(0)">
								<img src="../../assets/img/theme-art-img40.png" alt>
								<div class="p1">
									水舞台表演
									<!-- <span>表演时间14：00</span> -->
								</div>
								<div class="p2">水中的舞台，热情洋溢的舞蹈，美妙的音乐，梦幻般的空中杂技表演，将在炎炎夏日里带来清凉的同时，点燃你内心隐藏的激情。<br></div>
							</div>
						</swiper-slide>
					</swiper>
					<!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
				</div>
			</div>
		</div>
		<!-- 动物场馆 -->
		<!-- <div class="animal" id="animal">
      <img src="../../assets/img/theme-animal-title.png" alt class="img">
      <div class="bottom">
        <swiper :options="swiperOptions" ref="mySwipers">
          <swiper-slide v-for="item in 5" :key="item">
            <div class="venve" @click.stop="jumpAnimalDetail(item.id)">
              <img src="../../assets/img/theme-animal-img1.png" alt>
              <h3>海豚馆</h3>
              <p>总水量2.3万吨，游客不仅能欣赏精彩绝伦的海豚表演，更能与聪明可爱的海豚共同畅游，体验前所未有的互动乐趣。</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-paginations" slot="pagination"></div>
      </div>
    </div> -->
		<!-- 主题商店 -->
		<div class="shop" id="shop">
			<div class="shop-box">
				<img src="../../assets/img/theme-shop-title.png" alt class="img">
				<div class="bottom">
					<swiper :options="swiperOptions1" ref="mySwipers1">
						<swiper-slide>
							<div class="venve venve1" @click="jumpShopDetail(0)">
								<div class="venve-list">
									<img src="../../assets/img/theme-shop-img1.png" alt>
									<div class="venve-content">
										<div>阳光回忆</div>
										<p>想在水的世界尽情嬉戏？那让我们先补齐装备吧！这里会有各式各样的水上用品补给</p>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="venve" @click="jumpShopDetail(1)">
								<div class="venve-list">
									<img src="../../assets/img/theme-shop-img1.png" alt>
									<div class="venve-content">
										<div>木马奇珍坊</div>
										<p>集结了与海洋息息相关的纪念品，包括海豚、海龟、海狮等各种造型玩偶。让海洋朋友时刻伴您身边，这里你定能找到心水之选！</p>
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
		<div class="eat" id="eat">
			<div class="eat-box">
				<img src="../../assets/img/theme-eat-title.png" alt class="img">
				<div class="eat-lists clearDiv">
					<div class="eat-list floatLeft" @click="jumpEatDetail(0)">
						<img src="../../assets/img/theme-eat-img1.png" alt>
						<div class="eat-content">
							<div>塔瓦那餐厅</div>
							<p>希腊风格，地中海西式美食广场及东南亚美食，适合一家大小</p>
							<p class="p1">平均消费：￥60-90</p>
						</div>
					</div>
					<div class="eat-list floatLeft" @click="jumpEatDetail(1)">
						<img src="../../assets/img/theme-eat-img1.png" alt>
						<div class="eat-content">
							<div>迈泽美食</div>
							<p>地中海风格，西式快餐美食，提供炸鸡，汉堡包</p>
							<p class="p1">平均消费：￥50-80</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 左侧导航 -->
		<ul class="leftNav">
			<li @click="showYuanQu()">园区介绍</li>
			<li @click="jumpColumn('#banner')">游玩设施</li>
			<li @click="jumpColumn('#art')">精彩演绎</li>
			<!-- <li @click="jumpColumn('#animal')">动物场馆</li> -->
			<li @click="jumpColumn('#shop')">主题商店</li>
			<li @click="jumpColumn('#eat')">特色餐厅</li>
		</ul>
		<div class="alert" v-show="alertShow">
			<div class="alert-box">
				<img src="../../assets/img/theme-quxiao.png" alt class="x" @click="showYuanQu()">
				<h3>麦迪卡斯水乐园</h3>
				<img src="../../assets/img/theme-alert.png" alt class="img">
				<p>四季全时运营的水乐园，在古希腊神话与现代爱琴海风格一秒切换，无与伦比的海洋冒险世界将生动展示，挑战吧，勇者！燃烧吧，肾上腺！高刺激滑道、高空大喇叭、极限竞速滑道、疯狂巨碗等等，20余套戏水滑道，足够让戏水爱好者为之疯狂。区内还配置有主题餐厅、特色商店及各类功能齐全的游客服务设施，满足游客更多需求。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	import Header from "@/components/Header"; //引入头部
	export default {
		name: "Index",
		data() {
			return {
				alertShow: false,
				newSwiperIndex: 0,
				value: "购票",
				date: "2018-12-12",
				swiperOption: {
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					slidesPerView: 6
					// autoplay: {
					//   delay: 3000
					// },
					// loop:true,
				},
				swiperOptions: {
					//循环
					loop: true,
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
					//循环
					loop: true,
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
					//         loop: true,
					//         loopedSlides: 5,
					// autoplay: true,
					//         navigation: {
					//           nextEl: ".swiper-button-next",
					//           prevEl: ".swiper-button-prev"
					//         },
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
					//         loop: true,
					//         loopedSlides: 5,
					effect: "fade"
				},
				index: 0,
				datailIndex: 0
			};
		},
		mounted() {
			this.swiperInit();
			this.$nextTick(() => {
				var swiper = this.$refs.certifySwiper.swiper;
				var swiper2 = this.$refs.certifySwiper1.swiper;
				swiper.controller.control = swiper2;
			});
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
			showDatail(key) {
				this.datailIndex = key;
			},
			//跳转到指定位置
			jumpColumn(col) {
				this.alertShow = false;
				let top = document.querySelector(col).offsetTop;
				window.scroll(0, top);
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
			}
		},
		watch: {
			index: function(newVal, oldVal) {
				if (newVal === 6) {
					this.swiper.slideTo(newVal + 1, 500, false); //切换到看不见的slide，速度为.5秒
				} else if (newVal === 12) {
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
	.theme {
		width: 100%;

		.banner {
			height: 1660px;
			background: url(../../assets/img/theme-bg1.png) no-repeat 0 0;
			background-size: 1920px 100%;

			.list-one {
				width: 100%;
				padding-top: 389px;

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
						border: 3px solid rgba(255, 255, 255, 1);
					}

					p {
						position: absolute;
						z-index: 2;
						bottom: 3px;
						width: 140px;
						height: 25px;
						line-height: 25px;
						background: rgba(0, 0, 0, 0.8);
						margin: 0 auto;
						font-size: 12px;
						color: rgba(255, 255, 255, 1);
						cursor: pointer;
					}

					.imgActive {
						height: 78px;
						line-height: 78px;
					}

					.swiper-prev {
						background: rgba(0, 0, 0, 1) url(../../assets/img/md-l.png) no-repeat center center;
						position: absolute;
						left: -80px;
						top: 50%;
						margin-top: -42px;
						width: 50px;
						height: 84px;
					}

					.swiper-next {
						background: rgba(0, 0, 0, 1) url(../../assets/img/md-r.png) no-repeat center center;
						position: absolute;
						right: -80px;
						top: 50%;
						margin-top: -42px;
						width: 50px;
						height: 84px;
					}
				}
			}

			.shebei {
				width: 1200px;
				height: 439px;
				margin: 0 auto;
				margin-top: 54px;

				.banner-imgs {
					.imgList {
						width: 1200px;
						height: 439px;

						.top {
							position: relative;

							.top-imgList {
								.img {
									height: 439px;
									width: 1200px;
								}
							}

							.top-imgMinList {
								position: absolute;
								bottom: 3px;
								height: 102px;
								background: rgba(0, 0, 0, 0.6);
								width: 100%;

								ul {
									position: absolute;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);

									li {
										float: left;
										margin: 0 30px;
										cursor: pointer;

										img {
											width: 105px;
											height: 60px;
										}
									}
								}
							}
						}

						.bottom {
							width: 1200px;
							height: 340px;
							background: rgba(255, 255, 255, 1);
							padding-top: 32px;
							padding-left: 68px;

							.div2 {
								margin-left: 56px;
							}

							h3 {
								font-size: 22px;
								position: relative;

								font-weight: bold;
								color: rgba(0, 0, 0, 1);

								&::before {
									content: "";
									width: 15px;
									height: 27px;
									background: rgba(0, 145, 234, 1);
									position: absolute;
									left: -24px;
								}

								margin-bottom: 24px;
							}

							.p1 {
								width: 548px;
								font-size: 12px;
								font-weight: bold;
								color: rgba(102, 102, 102, 1);
								line-height: 18px;
							}

							.p2 {
								font-size: 12px;
								font-weight: bold;
								color: rgba(102, 102, 102, 1);
								line-height: 24px;
							}
						}
					}
				}
			}
		}

		.art {
			width: 100%;
			height: 1062px;
			/* background: url(../../assets/img/index-item1.png) no-repeat;
      background-size: 100% 100%; */
			text-align: center;
			padding-top: 60px;

			.img {
				width: 456px;
				height: 93px;
				position: relative;
				z-index: 11;
			}

			position: relative;

			.meng {
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				right: 0;
				z-index: 10;
				background: rgba(15, 57, 119, 0.7);
			}

			.meng2 {
				width: 100%;
				height: 1088px;
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
				background: #fff;

				img {
					width: 100%;
					height: 100%;
					display: inline-block;
				}
			}
		}

		//动物场馆
		.animal {
			width: 100%;
			height: 1080px;
			text-align: center;
			background: url(../../assets/img/theme-animal.png) no-repeat;
			background-size: 100% 100%;
			padding-top: 163px;

			.img {
				width: 456px;
				height: 93px;
			}

			.bottom {
				position: relative;
				width: 1200px;
				margin: 0 auto;
				margin-top: 65px;

				.venve {
					width: 360px;
					height: 470px;
					background: rgba(255, 255, 255, 1);
					border: 5px solid rgba(255, 255, 255, 1);
					border-radius: 6px;
					text-align: center;
					padding-bottom: 20px;
					overflow: hidden;
					cursor: pointer;

					img {
						width: 350px;
						height: 275px;
					}

					h3 {
						font-size: 22px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 30px;
						margin-top: 30px;
						position: relative;

						&::before {
							position: absolute;
							content: "";
							width: 60px;
							height: 4px;
							background: rgba(137, 201, 151, 1);
							position: absolute;
							left: 70px;
							top: 14px;
						}

						&::after {
							position: absolute;
							content: "";
							width: 60px;
							height: 4px;
							background: rgba(137, 201, 151, 1);
							position: absolute;
							left: 220px;
							top: 14px;
						}
					}

					p {
						margin: 0 auto;
						width: 306px;
						font-size: 12px;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
						line-height: 18px;
					}
				}

				.swiper-paginations {
					margin-top: 71px;
					width: 100%;
				}
			}
		}

		//主题商店
		.shop {
			width: 100%;
			height: 1080px;
			background: url(../../assets/img/theme-shop.png) no-repeat;
			background-size: 100% 100%;

			.shop-box {
				width: 100%;
				height: 100%;
				// background: rgba(136, 171, 218, 0.9);
				text-align: center;
				padding-top: 92px;

				.img {
					width: 456px;
					height: 93px;
				}

				.bottom {
					position: relative;
					width: 1200px;
					margin: 0 auto;
					margin-top: 65px;

					// margin-left: 210px;
					// margin-right: 210px;
					.venve1 {
						margin-left: 210px;
					}

					.venve {
						width: 360px;
						height: 470px;
						background: rgba(255, 255, 255, 1);
						border: 5px solid rgba(255, 255, 255, 1);
						border-radius: 6px;
						cursor: pointer;

						.venve-list {
							img {
								width: 100%;
								height: 258px;
								overflow: hidden;
							}

							.venve-content {
								width: 100%;
								height: 182px;
								text-align: left;
								background-color: #ffffff;
								padding-top: 30px;
								margin-top: -5px;

								div {
									font-size: 22px;
									font-weight: bold;
									color: rgba(236, 80, 19, 1);
									position: relative;

									padding-left: 20px;

									&::after {
										position: absolute;
										content: "";
										width: 60px;
										height: 4px;
										background: rgba(236, 80, 19, 1);
										position: absolute;
										left: 20px;
										top: 35px;
									}
								}

								p {
									font-size: 14px;
									font-family: MicrosoftYaHei;
									font-weight: bold;
									color: rgba(102, 102, 102, 1);
									line-height: 18px;
									padding: 35px 20px 20px 20px;
									overflow: hidden;
								}
							}
						}
					}

					.swiper-paginations1 {
						margin-top: 71px;
						width: 100%;
					}
				}
			}
		}

		//特色餐厅
		.eat {
			width: 100%;
			height: 1080px;
			background: url(../../assets/img/theme-eat.png) no-repeat;
			background-size: 100% 100%;

			.eat-box {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.1);
				text-align: center;
				padding-top: 92px;

				.img {
					width: 456px;
					height: 93px;
				}

				.eat-lists {
					padding-left: 395px;
					padding-top: 75px;
					cursor: pointer;

					.eat-list {
						&:nth-of-type(2n) {
							margin-left: 127px;
						}

						img {
							width: 500px;
							height: 309px;
							overflow: hidden;
						}

						.eat-content {
							width: 500px;
							height: 190px;
							text-align: left;
							background-color: #ffffff;
							padding-top: 30px;
							margin-top: -5px;

							div {
								font-size: 22px;
								font-weight: bold;
								color: rgba(236, 80, 19, 1);
								position: relative;

								padding-left: 20px;

								&::after {
									position: absolute;
									content: "";
									width: 60px;
									height: 4px;
									background: rgba(236, 80, 19, 1);
									position: absolute;
									left: 20px;
									top: 35px;
								}
							}

							p {
								font-size: 14px;
								font-family: MicrosoftYaHei;
								font-weight: bold;
								color: rgba(102, 102, 102, 1);
								line-height: 18px;
								padding: 35px 20px 20px 20px;
								overflow: hidden;
							}

							.p1 {
								padding: 0 20px 20px 20px;
							}
						}
					}
				}
			}
		}
	}

	.leftNav {
		width: 150px;
		height: 374px;
		background: rgba(7, 100, 233, 1);
		border-radius: 15px;
		position: fixed;
		left: 114px;
		top: 50%;
		margin-top: -215px;
		padding: 40px 0;
		z-index: 10;

		li {
			width: 150px;
			height: 59px;
			line-height: 59px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			cursor: pointer;

			&:hover {
				background: rgba(73, 147, 252, 1);
			}
		}
	}

	.alert {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);

		.alert-box {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -265px;
			margin-left: -395px;
			width: 790px;
			height: 530px;
			background: rgba(255, 255, 255, 1);
			padding: 0 45px;

			h3 {
				line-height: 24px;
				font-size: 24px;
				font-family: MicrosoftYaHei-Bold;
				font-weight: bold;
				color: rgba(52, 149, 242, 1);
				border-bottom: 1px solid rgba(202, 202, 202, 1);
				padding-bottom: 23px;
				padding-top: 31px;
			}

			.img {
				width: 697px;
				height: 220px;
				margin-top: 5px;
				margin-bottom: 45px;
			}

			p {
				font-size: 14px;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 28px;
			}

			.x {
				width: 35px;
				height: 36px;
				position: absolute;
				right: -50px;
				top: -25px;
			}
		}
	}
</style>
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
