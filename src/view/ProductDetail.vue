<template>
  <div class="main">
    <div class="content">
      <div class="nav clearDiv">
        <div class="floatLeft">当前位置：网上订购>零售商品详情页</div>
        <div class="floatRight">我的订单</div>
        <div class="floatRight shopping-car">
          <img src="../assets/img/shopping-car.png">购物车(
          <span>0</span>)
        </div>
      </div>
      <div class="main-one clearDiv">
        <div class="one-left">
          <img src="../assets/img/index-item6.png" alt>
          <div class="swiper">
            <div class="swiper-contents">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(list,key) in imgs" :key="key">
                  <img :src="list" :class="{borderImg:key === index}">
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-prev" @click="prev"></div>
            <div class="swiper-next" @click="next"></div>
          </div>
        </div>
        <div class="one-right">
          <div class="right-title">熊大熊二毛绒玩具光头强儿童玩偶套装公仔之变形记生日礼物</div>
          <div class="right-pay clearDiv">
            <div class="title">可退订</div>
            <div class="new-price">
              ￥{{100}}
              <span class="old-price">原价￥{{290}}</span>
            </div>
            <div class="pay pay-num">
              <span>购买数量:</span>
              <el-input-number
                v-model="num1"
                @change="handleChange"
                :min="1"
                :max="10"
                label="描述文字"
                class="num-change"
              ></el-input-number>
            </div>
            <div class="pay pay-type">
              <span>配送方式：</span>
              <button @click="changeGiveType(0)" :class="{btn:changeA === 0}">邮寄</button>
              <button @click="changeGiveType(1)" :class="{btn:changeA === 1}">自提</button>
            </div>
            <p class="tip">注：请选择邮寄方式</p>
            <img src="../assets/img/add-shoppingcar.png" alt class="img1">
            <img src="../assets/img/nowbuy.png" alt class="img2">
          </div>
        </div>
      </div>
      <div class="details">
        <ul class="clearDiv">
          <li :class="{li:changeB === 0}" @click="changeType(0)">商品详情</li>
          <li :class="{li:changeB === 1}" @click="changeType(1)">预定须知</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        notNextTick: true
      },
      imgs: [
        "../assets/pear-1.png",
        "../assets/pear-2.png",
        "../assets/pear-3.png",
        "../assets/pear-4.png"
      ],
      index: 0,
      num1: 1,
      changeA:0,
      changeB: 0
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    prev() {
      this.swiper.slidePrev();
      this.index--;
      if (this.index <= 0) {
        this.index = 0;
      }
      console.log(this.index);
    },
    next() {
      this.swiper.slideNext();
      this.index++;
      if (this.index >= this.imgs.length) {
        this.index = this.imgs.length - 1;
      }
    },
    handleChange(value) {
      console.log(typeof value);
    },
    //配送方式切换
    changeGiveType(type){
        this.changeA = type;
    },
    //详情和须知切换
    changeType(type){
        this.changeB = type;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/img/pdDetail-bg.png) no-repeat 0 0;
  background-size: 1920px 100%;
  .content {
    width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 1);
    padding: 50px 50px 0 40px;
    .nav {
      height: 23px;
      line-height: 23px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 38px;
      .shopping-car {
        height: 23px;
        line-height: 23px;
        margin-right: 23px;
        img {
          float: left;
          width: 23px;
          height: 23px;
        }
      }
    }
    .main-one {
      .one-left,
      .one-right {
        float: left;
      }
      .one-left {
        img {
          width: 450px;
          height: 450px;
        }
        .swiper {
          width: 450px;
          position: relative;
          height: 110px;
          .swiper-contents {
            margin-top: 27px;
            padding: 0 42px;
            img {
              width: 109px;
              height: 109px;
            }
            .borderImg {
              border: 1px solid red;
            }
          }
          .swiper-prev {
            position: absolute;
            left: 0;
            top: 50%;
            background: url(../assets/img/pdDetail-prev.png) no-repeat 0 0;
            width: 18px;
            height: 32px;
            margin-top: -16px;
          }
          .swiper-next {
            position: absolute;
            right: 0;
            top: 50%;
            background: url(../assets/img/pdDetail-next.png) no-repeat 0 0;
            width: 18px;
            height: 32px;
            margin-top: -16px;
          }
        }
      }
      .one-right {
        margin-left: 37px;
        position: relative;
        .right-title {
          margin-left: 8px;
          font-size: 18px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          padding-bottom: 34px;
        }
        .right-pay {
          width: 620px;
          height: 395px;
          background: rgba(247, 247, 247, 1);
          padding: 12px 38px 0 13px;
          .title {
            width: 54px;
            height: 23px;
            line-height: 23px;
            text-align: center;
            border: 1px solid rgba(242, 115, 115, 1);
            border-radius: 5px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(242, 115, 115, 1);
          }
          .new-price {
            font-size: 22px;
            font-weight: bold;
            color: rgba(227, 87, 76, 1);
            margin-top: 31px;
            span {
              font-size: 14px;
              text-decoration: line-through;
              color: rgba(153, 153, 153, 1);
            }
          }
          .pay {
            font-size: 16px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-top: 30px;
            * {
              float: left;
            }
          }
          .pay-num {
            height: 40px;
            line-height: 40px;
            .num-change {
              margin-left: 10px;
              width: 129px;
            }
          }
          .pay-type {
            height: 30px;
            line-height: 30px;
            button {
              width: 69px;
              height: 30px;
              line-height: 30px;
              margin-left: 20px;
              background-color: rgba(255, 255, 255, 1);
              font-size: 16px;
              font-weight: 400;
              color:rgba(51,51,51,1);
              border: 1px solid rgba(51,51,51,1);
            }
            .btn{
                border: 1px solid rgba(227, 87, 76, 1);
                color: rgba(227, 87, 76, 1);
            }   
          }
          .tip {
            font-size: 12px;
            font-weight: 400;
            color: rgba(227, 87, 76, 1);
            padding-top: 20px;
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(228, 228, 228, 1);
          }
          img {
            margin-top: 34px;
            width: 146px;
            height: 43px;
          }
          .img1 {
            margin-left: 10px;
          }
          .img2 {
            margin-left: 18px;
          }
        }
      }
      .detail-tilte {
        margin-top: 64px;
        text-align: center;
      }
    }
    .details {
      padding-top: 120px;
      ul {
        li {
          float: left;
          width: 125px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          background: rgba(244, 244, 244, 1);
          font-size: 16px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
        .li{
            color:rgba(255,255,255,1);
            background:rgba(227,87,76,1);
        }
      }
    }
  }
}
</style>