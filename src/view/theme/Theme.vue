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
              <img src="../../assets/img/theme-banner-list1.png" alt :class="{imgActive:index === 0}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list2.png" alt :class="{imgActive:index === 1}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list3.png" alt :class="{imgActive:index === 2}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list4.png" alt :class="{imgActive:index === 3}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list5.png" alt :class="{imgActive:index === 4}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list6.png" alt :class="{imgActive:index === 5}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list1.png" alt :class="{imgActive:index === 6}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-banner-list2.png" alt :class="{imgActive:index === 7}">
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
          <div class="swiper-prev" @click="prev"></div>
          <div class="swiper-next" @click="next"></div>
        </div>
      </div>
      <div class="shebei">
        <div class="banner-imgs" @mouseover="stopTimes" @mouseout="startTimes">
          <div class="imgList" v-for="(item,key) in 8" :key="item" v-show="key === index">
            <div class="top">
              <div
                class="top-imgList"
                v-for="(item,key) in 2"
                :key="key"
                v-show="key === datailIndex"
              >
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
              <div class="floatLeft">
                <h3>暴风海神湾</h3>
                <p class="p1">从涓涓细浪到拍岸巨浪的八种海浪为你带来全海域舒适感觉，陪同家人朋友在浮圈上享受如同海浪中的美好历程。</p>
              </div>
              <div class="div2 floatLeft">
                <h3>注要事项</h3>
                <p class="p2">• 水池面积：4050水深：2.0m
                  <br>• 身高在1.2m以下须有监护人陪同参玩
                  <br>• 身高在1.5m以下、长者及不识水性者必须穿着救生衣参玩。
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
          <swiper-slide v-for="item in 3" :key="item">
            <img src="../../assets/img/theme-art-img3.png" alt>
          </swiper-slide>
        </swiper>
      </div>

      <div class="meng">
        <div class="certify" id="certify">
          <swiper :options="certifySwiper" ref="certifySwiper">
            <swiper-slide v-for="item in 3" :key="item">
              <div class="venve" @click="jumpArtDetail(0)">
                <img src="../../assets/img/theme-art-img1.png" alt>
                <div class="p1">
                  街头表演
                  <span>表演时间14：00</span>
                </div>
                <div class="p2">舞蹈，音乐，表演，互动，这所有的一切都是为了给你一份难忘的体验。</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <!-- 动物场馆 -->
    <div class="animal" id="animal">
      <img src="../../assets/img/theme-animal-title.png" alt class="img">
      <div class="bottom">
        <swiper :options="swiperOptions" ref="mySwipers">
          <!-- slides -->
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
    </div>
    <!-- 主题商店 -->
    <div class="shop" id="shop">
      <div class="shop-box">
        <img src="../../assets/img/theme-shop-title.png" alt class="img">
        <div class="bottom">
          <swiper :options="swiperOptions1" ref="mySwipers1">
            <swiper-slide v-for="item in 5" :key="item">
              <div class="venve" @click="jumpShopDetail(item.id)">
                <div class="venve-list">
                  <img src="../../assets/img/theme-shop-img1.png" alt>
                  <div class="venve-content">
                    <div>海豚玩具商店</div>
                    <p>同一个世界的另一个角度，这是一个需要你探索求证才能发现的世界，跟着我们来吧！在这里认识聪颖灵敏的 鲸豚类、水陆两生的 鳍脚类、种类这是一个需要你探索求证才能发现的世界，跟着我们……</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-paginations1" slot="pagination"></div>
        </div>
      </div>
    </div>
    <!-- 特色餐厅 -->
    <div class="eat" id="eat">
      <div class="eat-box">
        <img src="../../assets/img/theme-eat-title.png" alt class="img">
        <div class="eat-lists clearDiv">
          <div
            class="eat-list floatLeft"
            @click="jumpEatDetail(item.id)"
            v-for="item in 2"
            :key="item"
          >
            <img src="../../assets/img/theme-eat-img1.png" alt>
            <div class="eat-content">
              <div>塔瓦那餐厅</div>
              <p>希腊风格，地中海西式美食广场及东南亚美食，适合一家大小</p>
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
      <li @click="jumpColumn('#animal')">动物场馆</li>
      <li @click="jumpColumn('#shop')">主题商店</li>
      <li @click="jumpColumn('#eat')">特色餐厅</li>
    </ul>
    <div class="alert" v-show="alertShow">
      <img src="../../assets/img/theme-quxiao.png" alt class="x" @click="showYuanQu()">
      <h3>麦迪卡斯水乐园</h3>
      <img src="../../assets/img/theme-alert.png" alt class="img">
      <p>四季全时运营的水乐园，在古希腊神话与现代爱琴海风格一秒切换，无与伦比的海洋冒险世界将生动展示，挑战吧，勇者！燃烧吧，肾上腺！高刺激滑道、高空大喇叭、极限竞速滑道、疯狂巨碗等等，20余套戏水滑道，足够让戏水爱好者为之疯狂。区内还配置有主题餐厅、特色商店及各类功能齐全的游客服务设施，满足游客更多需求。</p>
    </div>
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
      alertShow: false,
      newSwiperIndex: 0,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
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
          el: ".swiper-paginations1",
          clickable: true
        }
      },
      certifySwiper: {
        //精彩演艺
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        // autoplay: true,
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
        loop: true,
        loopedSlides: 5
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
    //跳转动物详情
    jumpAnimalDetail(id) {
      this.$router.push({ path: "/animalDetail", query: { id: id } });
    },
    //跳转主题商店
    jumpShopDetail(id) {
      this.$router.push({ path: "/shopDetail", query: { id: id } });
    },
    //跳转演绎中心
    jumpArtDetail(id) {
      this.$router.push({ path: "/artDetail", query: { id: id } });
    },
    //跳转餐厅详情页
    jumpEatDetail(id) {
      this.$router.push({ path: "/eatDetail", query: { id: id } });
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
        }

        .imgActive {
          border: 3px solid rgba(255, 255, 255, 1);
        }

        .swiper-prev {
          background: rgba(0, 0, 0, 1) url(../../assets/img/md-l.png) no-repeat
            center center;
          position: absolute;
          left: -80px;
          top: 50%;
          margin-top: -42px;
          width: 50px;
          height: 84px;
        }

        .swiper-next {
          background: rgba(0, 0, 0, 1) url(../../assets/img/md-r.png) no-repeat
            center center;
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
    }
    position: relative;
    .meng {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
      // background: rgba(15, 57, 119, 0.7);
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
          }
        }
      }
    }
  }
}
.leftNav {
  width: 150px;
  height: 433px;
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
</style>
<style src="@/assets/scss/certify.css" scoped="scoped"></style>
