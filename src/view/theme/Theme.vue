<template>
  <div class="theme">
    <Header></Header>
    <div class="banner">
      <div class="list-one">
        <div class="one-change" @mouseover="stopTimes" @mouseout="startTimes">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="../../assets/img/index-item1.png" alt :class="{imgActive:index === 0}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item2.png" alt :class="{imgActive:index === 1}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item3.png" alt :class="{imgActive:index === 2}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item4.png" alt :class="{imgActive:index === 3}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item5.png" alt :class="{imgActive:index === 4}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item6.png" alt :class="{imgActive:index === 5}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item1.png" alt :class="{imgActive:index === 6}">
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/index-item2.png" alt :class="{imgActive:index === 7}">
            </swiper-slide>
            <!-- Optional controls -->
          </swiper>
          <div class="swiper-prev" @click="prev"></div>
          <div class="swiper-next" @click="next"></div>
        </div>
      </div>
      <div class="shebei">
        <div class="banner-imgs">
          <div class="imgList" v-for="(item,key) in 8" :key="item" v-show="key === index">
            <div class="top">
              <div class="top-imgList">
                <img src="../../assets/img/index-bg1.png" alt class="img" v-show="true">
                <img src="../../assets/img/index-bg1.png" alt class="img" v-show="false">
              </div>
              <div class="top-imgMinList">
                <ul>
                  <li>
                    <img src="../../assets/img/index-bg1.png" alt class="imgMin">
                  </li>
                  <li>
                    <img src="../../assets/img/index-bg1.png" alt class="imgMin">
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
    <div class="art">
      <div class="meng"></div>
    </div>
    <div class="animal">
      <img src="../../assets/img/login-bg.png" alt class="img">
      <div class="bottom">
        <swiper :options="swiperOptions" ref="mySwipers">
          <!-- slides -->
          <swiper-slide>
            <div class="venve">
                <img src="" alt="">
                <p></p>
                <p></p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="venve"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="venve"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="venve"></div>
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
        <div class="swiper-paginations" slot="pagination"></div>
      </div>
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
        //   notNextTick: true,
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
              disableOnInteraction: true,
          },
        // 设置轮播
        //   effect : 'flip',
        //滑动速度
        //   speed:800,
        //滑动方向
        //   direction : 'horizontal',
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        //分页器设置
        pagination: {
          el: ".swiper-paginations",
          clickable: true,
        }
      },
      index: 0
    };
  },
  mounted() {
    // this.swiperInit();
  },
  methods: {
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
    background: url(../../assets/img/index-bg1.png) no-repeat 0 0;
    background-size: 100% 100%;

    .list-one {
      width: 100%;
      padding-top: 635px;
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
              bottom: 0;
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
    width: 1920px;
    height: 1088px;
    background: url(../../assets/img/index-item1.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .meng {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(15, 57, 119, 1);
      opacity: 0.71;
    }
  }
  .animal {
    width: 1920px;
    height: 1080px;
    text-align: center;
    background: url(../../assets/img/login-bg.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 163px;
    .img {
      width: 300px;
      height: 200px;
    }
    .bottom {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      .venve {
        width: 360px;
        height: 470px;
        background: rgba(255, 255, 255, 1);
        border: 5px solid rgba(255, 255, 255, 1);
        border-radius: 6px;
      }
      .swiper-paginations {
          margin-top: 71px;
        width: 100%;
      }
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
.theme .swiper-paginations .swiper-pagination-bullet {
  margin: 0 10px;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.theme .swiper-paginations .swiper-pagination-bullet-active{
    background:rgba(255,255,255,1);
}
</style>