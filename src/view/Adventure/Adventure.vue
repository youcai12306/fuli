<template>
  <!--
		作者：lixiaoyi
		时间：2019-01-03
		描述：冒险海洋
  -->
  <div class="theme Adventure" id="Adventure">
    <!-- 头部 -->
    <Header></Header>
    <!-- 第一部分 -->
    <div class="banner" id="banner">
      <div class="theme-title">
        <p>冒险海洋</p>
      </div>
      <div class="list-one">
        <div class="one-change" @mouseover="stopTimes" @mouseout="startTimes">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="../../assets/img/adventrue-img1.png" alt @click.stop="jumpImg(0)">
              <p :class="{imgActive:index === 0}">阿唐大影院</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/adventrue-img2.png" alt @click.stop="jumpImg(1)">
              <p :class="{imgActive:index === 1}">铁锈山激流</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/adventrue-img3.png" alt @click.stop="jumpImg(2)">
              <p :class="{imgActive:index === 2}">旋风飞车</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/adventrue-img4.png" alt @click.stop="jumpImg(3)">
              <p :class="{imgActive:index === 3}">极限坠落</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/adventrue-img5.png" alt @click.stop="jumpImg(4)">
              <p :class="{imgActive:index === 4}">杰克海战</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/adventrue-img6.png" alt @click.stop="jumpImg(5)">
              <p :class="{imgActive:index === 5}">水手秋千</p>
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
          <div class="swiper-prev" @click="prev"></div>
          <div class="swiper-next" @click="next"></div>
        </div>
      </div>
      <div class="shebei">
        <div class="banner-imgs" @mouseover="stopTimes" @mouseout="startTimes">
          <div class="imgList" v-for="(item,i) in 6" :key="item" v-show="i === index">
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
                  <li @click="showDatail(0)">
                    <img src="../../assets/img/adventrue-img7.png" alt class="imgMin">
                  </li>
                  <li @click="showDatail(1)">
                    <img src="../../assets/img/adventrue-img8.png" alt class="imgMin">
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom clearDiv">
              <div class="floatLeft" v-if="i == 0">
                <h3>阿唐大影院</h3>
                <p class="p1">让阿唐带领您参加一场刺激非凡的5D冒险吧！</p>
                <!-- <p class="p1 mt-30">• 水池面积：4050㎡
									<br>• 水深：2.0m
									<br>• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。
									<br>
                </p>-->
              </div>
              <div class="floatLeft" v-if="i == 1">
                <h3>铁锈山激流</h3>
                <p class="p1">乘坐冒险船攀上寒气入骨的铁锈山，体验从山顶高速下滑的刺激感！</p>
                <!-- <p class="p1 mt-30">• 水深1.05m。
									<br>• 懒人河长470m。
									<br>• 身高在1.2m以下须有监护人陪同参玩，身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。
									<br>
                </p>-->
              </div>
              <div class="floatLeft" v-if="i == 2">
                <h3>旋风飞车</h3>
                <p class="p1">置身于旋风中，体验疯狂失控的感觉！</p>
                <!-- <p class="p1 mt-30">•哈帝斯滑道 长106.7m，宙斯滑道长98.5m。
									<br>•高度18.7m，仅限身高1.07m以上的客人游玩。
									<br>
                </p>-->
              </div>
              <div class="floatLeft" v-if="i == 3">
                <h3>极限坠落</h3>
                <p class="p1">体验突然失重掉落海底深渊的刺激感觉吧！</p>
                <!-- <p class="p1 mt-30">•帕尔修斯滑道长186.2m，海克力斯滑道长202.5m。
									<br>•高度18.25m，仅限身高1.07m以上的客人游玩。
									<br>
                </p>-->
              </div>
              <div class="floatLeft" v-if="i == 4">
                <h3>杰克海战</h3>
                <p class="p1">杰克船长需要您登上他的战船，为保护海湾而战斗！</p>
                <!-- <p class="p1 mt-30">•高18.8m。
									<br>•滑毯滑道，仅限身高1.07m以上的客人游玩。
									<br>
                </p>-->
              </div>
              <div class="floatLeft" v-if="i == 5">
                <h3>水手秋千</h3>
                <p class="p1">开心的水手们，一起来享受秋千摆荡的畅快感吧！</p>
                <!-- <p class="p1 mt-30">•阿波罗赛道长105.9m，阿尔忒弥斯赛道长83.1m，赫尔默斯赛道长88.3m。
									<br>•仅限身高1.22m以上的客人游玩。
									<br>
                </p>-->
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
                <div class="p1">水舞台表演
                  <!-- <span>表演时间14：00</span> -->
                </div>
                <div class="p2">水中的舞台，热情洋溢的舞蹈，美妙的音乐，梦幻般的空中杂技表演，将在炎炎夏日里带来清凉的同时，点燃你内心隐藏的激情。
                  <br>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>-->
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
    </div>-->
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
              <div>北极圈餐厅</div>
              <p>极地海洋风格，国际美食广场，适合一家大小</p>
              <p class="p1">平均消费：￥60-90</p>
            </div>
          </div>
          <div class="eat-list floatLeft" @click="jumpEatDetail(1)">
            <img src="../../assets/img/theme-eat-img1.png" alt>
            <div class="eat-content">
              <div>海星咖啡</div>
              <p>欧洲小镇装式，提供特色咖啡及轻食</p>
              <p class="p1">平均消费：￥40-70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 左侧导航 -->
    <ul class="leftNav">
      <li @click="showYuanQu()">园区介绍</li>
      <li @click="jumpColumn('#banner')">游玩设施</li>
      <li @click="jumpColumn('#art')">精彩演艺</li>
      <!-- <li @click="jumpColumn('#animal')">动物场馆</li> -->
      <li @click="jumpColumn('#shop')">主题商店</li>
      <li @click="jumpColumn('#eat')">特色餐厅</li>
    </ul>
    <div class="alert" v-show="alertShow" @click="closeYuanQu()">
      <div class="alert-box" @click.stop>
        <img src="../../assets/img/theme-quxiao.png" alt class="x" @click="showYuanQu()">
        <h3>冒险海洋</h3>
        <img src="../../assets/img/theme-alert.png" alt class="img">
        <p>四季全时运营的水乐园，在古希腊神话与现代爱琴海风格一秒切换，无与伦比的海洋冒险世界将生动展示，挑战吧，勇者！燃烧吧，肾上腺！高刺激滑道、高空大喇叭、极限竞速滑道、疯狂巨碗等等，20余套戏水滑道，足够让戏水爱好者为之疯狂。区内还配置有主题餐厅、特色商店及各类功能齐全的游客服务设施，满足游客更多需求。</p>
      </div>
    </div>
    <!-- 回到顶部按钮 -->
    <img
      src="../../assets/img/top.png"
      alt
      class="To-top"
      @click="jumpColumn('#top')"
      v-show="topShow>1000?true:false"
    >
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "@/components/Header"; //引入头部
export default {
  name: "Index",
  data() {
    return {
      changeImg: 0,
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
      datailIndex: 0,
      topShow: 0
    };
  },
  mounted() {
    this.swiperInit();
    this.$nextTick(() => {
      var swiper = this.$refs.certifySwiper.swiper;
      var swiper2 = this.$refs.certifySwiper1.swiper;
      swiper.controller.control = swiper2;
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
    showDatail(key) {
      this.changeImg = key;
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
      // if(scrollTop>=17500){
      // 	this.topShow = true;
      // }else{
      // 	this.topShow = false;
      // }
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
      //console.log(newVal)
      // if (newVal >= 7 && newVal <= 12) {
      // 	this.swiper.slideTo(newVal + 1, 500, false); //切换到看不见的slide，速度为.5秒
      // } else if (newVal === 7) {
      // 	this.index = 0;
      // 	this.swiper.slideTo(this.index, 500, false); //切换到第一个slide，速度为.5秒
      // } else if (newVal === -1) {
      // 	this.index = 11;
      // 	this.swiper.slideTo(this.index, 500, false); //切换到最后一个slide，速度为.5秒
      // }
      if (newVal == 6) {
        this.index = 0;
        this.swiper.slideTo(this.index, 500, false); //切换到第一个slide，速度为.5秒
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.times);
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
