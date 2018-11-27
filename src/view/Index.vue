<template>
  <div class="main">
    <div class="banner">
      <div class="banner-imgs">
        <img
          src="../assets/img/index-bg1.png"
          alt=""
          v-show="0 === index"
        >
        <img
          src="../assets/img/index-bg2.png"
          alt=""
          v-show="1 === index"
        >
        <img
          src="../assets/img/index-bg1.png"
          alt=""
          v-show="2 === index"
        >
        <img
          src="../assets/img/index-bg2.png"
          alt=""
          v-show="3 === index"
        >
        <img
          src="../assets/img/index-bg1.png"
          alt=""
          v-show="4 === index"
        >
        <img
          src="../assets/img/index-bg2.png"
          alt=""
          v-show="5 === index"
        >
        <img
          src="../assets/img/index-bg1.png"
          alt=""
          v-show="6 === index"
        >
        <img
          src="../assets/img/index-bg2.png"
          alt=""
          v-show="7 === index"
        >
      </div>
      <div class="banner-content clearDiv">
        <div class="ticket content-list">
          <p class="title">购票</p>
          <el-select
            v-model="value"
            class="select-list"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="content-list">
          <p class="title">标准票（1.4M以上）</p>
          <el-date-picker
            v-model="date"
            type="date"
            class="select-list"
          >
          </el-date-picker>
        </div>
        <div class="content-list">
          <p class="title">标准票（1.4M以上）</p>
          <el-select
            v-model="value"
            class="select-list"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="content-list">
          <p class="title">儿童（1.0-1.4M）</p>
          <el-select
            v-model="value"
            class="select-list"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="content-list">
          <p class="title">老人（65岁以上）</p>
          <el-select
            v-model="value"
            class="select-list"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="search">
          <button>查询</button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-list">
        <div class="list-one">
          <div
            class="one-change"
            @mouseover="stopTimes"
            @mouseout="startTimes"
          >
            <swiper
              :options="swiperOption"
              ref="mySwiper"
            >
              <!-- slides -->
              <swiper-slide><img
                  src="../assets/img/index-item1.png"
                  alt=""
                  :class="{imgActive:index === 0}"
                > </swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item2.png"
                  alt=""
                  :class="{imgActive:index === 1}"
                ></swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item3.png"
                  alt=""
                  :class="{imgActive:index === 2}"
                ></swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item4.png"
                  alt=""
                  :class="{imgActive:index === 3}"
                ></swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item5.png"
                  alt=""
                  :class="{imgActive:index === 4}"
                > </swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item6.png"
                  alt=""
                  :class="{imgActive:index === 5}"
                ></swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item1.png"
                  alt=""
                  :class="{imgActive:index === 6}"
                ></swiper-slide>
              <swiper-slide><img
                  src="../assets/img/index-item2.png"
                  alt=""
                  :class="{imgActive:index === 7}"
                ></swiper-slide>
              <!-- Optional controls -->
            </swiper>
            <div
              class="swiper-prev"
              @click="prev"
            ></div>
            <div
              class="swiper-next"
              @click="next"
            ></div>
          </div>
        </div>
        <div class="new-active">
          <div class="title">
            <div class="ch">最新活动<span>/Latest activities</span></div>
            <div class="title-bottom">
              <div></div>
            </div>
          </div>
          <div class="new-swiper">
            <div class="swiper-box">
              <el-carousel
                :interval="4000"
                type="card"
                height="248px"
                indicator-position="none"
                :autoplay="false"
                arrow="never"
                ref="car"
                @change="change"
              >
                <el-carousel-item
                  v-for="(item,key) in 6"
                  :key="key"
                >
                  <div class="div">
                    <img
                      src="../assets/img/index-new-img1.png"
                      alt=""
                      :class="{colorA:key === newSwiperIndex}"
                    >
                    <p
                      class="titless"
                      v-show="newSwiperIndex === key"
                    >2019精彩活动马上来袭！</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
              <div
                class="prev"
                @click="prevs"
              ></div>
              <div
                class="next"
                @click="nexts"
              ></div>
            </div>
          </div>
        </div>
        <div class="new-hot">
          <div class="title">
            <img
              src="../assets/img/index-hot-balloon.png"
              alt=""
              class="title-img"
            >
            <div class="ch">最新活动<span>/Latest activities</span></div>
            <div class="title-bottom">
              <div></div>
            </div>
            <a
              href="#"
              class="more"
            >更多<img
                src="../assets/img/index-hot-more.png"
                alt=""
              ></a>
          </div>
          <div class="hot-content clearDiv">
            <div class="content-left">
              <div
                class="list clearDiv"
                v-for="item in 3"
                :key="item.id"
              >
                <div class="list-left"><img
                    src="../assets/img/index-hot-img1.png"
                    alt=""
                  ></div>
                <div class="list-right">
                  <div class="list-title">世界马戏精英亮相珠海长隆 国际顺准开幕式明...</div>
                  <div class="list-content">长隆海洋王国的“丛林过山车、沙雕城堡、海鸟世界象龟展区”于2018年11月20日起暂停服务，该区域将会进行升级改造，敬请期待！</div>
                </div>
              </div>
            </div>
            <div class="content-right">
              <img
                src="../assets/img/index-hot-img2.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
        slidesPerView: 6,
        // autoplay: {
        //   delay: 3000
        // },
        // loop:true,
      },
      index: 0
    };
  },
  mounted() {
    this.swiperInit();
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
    swiperSlide
  },
  created(){
    document.title = "海洋欢乐世界度假区"
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
.main {
  width: 100%;
  .banner {
    height: 719px;
    position: relative;
    .banner-imgs {
      position: absolute;
      z-index: -1;
      img {
        height: 719px;
        width: 100%;
      }
    }
    .banner-content {
      width: 1049px;
      height: 110px;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.75);
      box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.35);
      padding-top: 21px;
      padding-left: 61px;
      .content-list {
        float: left;
        .title {
          font-size: 14px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        .select-list {
          margin-top: 11px;
          margin-right: 23px;
          width: 152px;
          height: 39px;
        }
      }
      .search {
        padding-top: 30px;
        button {
          width: 69px;
          height: 39px;
          background: rgba(109, 196, 38, 1);
          font-size: 16px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          border-radius: 5px;
        }
      }
    }
  }
  .content {
    margin-top: -145px;
    height: 1466px;
    background: url(../assets/img/index-bg3.png) no-repeat 0 0;
    background-size: 1920px 100%;
    .content-list {
      width: 1200px;
      margin: 0 auto;
      .list-one {
        width: 100%;
        padding-top: 65px;
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
            width: 13px;
            height: 22px;
            background: url(../assets/img/index-swiper-prev.png) no-repeat 0 0;
            position: absolute;
            left: -29px;
            top: 50%;
            margin-top: -11px;
          }
          .swiper-next {
            width: 13px;
            height: 22px;
            background: url(../assets/img/index-swiper-next.png) no-repeat 0 0;
            position: absolute;
            right: -29px;
            top: 50%;
            margin-top: -11px;
          }
        }
      }
    }
    .new-active {
      margin-top: 72px;
      .title {
        height: 89px;
        background-color: #6dc426;
        text-align: center;
        color: #ffffff;
        padding: 16px 0;
        letter-spacing: 2px;
        .ch {
          font-size: 35px;
          span {
            font-size: 25px;
            margin-left: 15px;
          }
        }
        .title-bottom {
          margin: 0 auto;
          width: 388px;
          height: 10px;
          background-color: #4e9b0f;
          position: relative;
          margin-top: 5px;
          div {
            position: absolute;
            top: 0;
            left: 0;
            width: 262px;
            height: 10px;
            background-color: #cdeefd;
          }
        }
      }
      .new-swiper {
        padding-bottom: 30px;
        padding-top: 20px;
        height: 296px;
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
          }
          .prev {
            position: absolute;
            left: -60px;
            top: 50%;
            margin-top: -45px;
            background-image: url(../assets/img/index-new-next.png);
            background-repeat: no-repeat;
            background-position: center center;
          }
          .next {
            position: absolute;
            right: -60px;
            top: 50%;
            margin-top: -45px;
            background-image: url(../assets/img/index-new-prev.png);
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
    }
    .new-hot {
      .title {
        height: 102px;
        background-color: #0764e9;
        text-align: center;
        color: #ffffff;
        padding: 16px 0;
        position: relative;
        margin-top: 36px;
        letter-spacing: 2px;
        .title-img {
          position: absolute;
          left: -40px;
          top: -35px;
        }
        .ch {
          font-size: 35px;
          span {
            font-size: 25px;
            margin-left: 15px;
          }
        }
        .title-bottom {
          margin: 0 auto;
          width: 388px;
          height: 10px;
          background-color: #0552bf;
          position: relative;
          margin-top: 5px;
          div {
            position: absolute;
            top: 0;
            left: 0;
            width: 262px;
            height: 10px;
            background-color: #cdeefd;
          }
        }
        .more {
          position: absolute;
          top: 64px;
          right: 62px;
          font-size: 16px;
          color: #ffffff;
          display: inline-block;
          img {
            width: 11px;
            height: 13px;
          }
        }
      }
      .hot-content {
        background-color: #ffffff;
        box-shadow: 5px 6px 7px 0px rgba(51, 75, 179, 0.35);
        .content-left {
          float: left;
          padding-top: 38px;
          padding-left: 31px;
          .list {
            margin-bottom: 43px;
            .list-left {
              float: left;
              img {
                width: 226px;
                height: 147px;
              }
            }
            .list-right {
              float: left;
              margin-left: 26px;
              margin-right: 20px;
              .list-title {
                width: 351px;
                font-size: 16px;
                color: #333333;
              }
              .list-content {
                width: 365px;
                font-size: 14px;
                line-height: 25px;
                color: #333333;
              }
            }
          }
        }
        .content-right {
          padding-top: 23px;
        }
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
</style>