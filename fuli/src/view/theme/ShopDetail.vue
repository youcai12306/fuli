<template>
  <div class="animalTheme">
     <!-- 头部 -->
    <Header></Header>
    <div class="box" v-if="id == 0">
      <div class="top clearDiv">
        <h3 class="floatLeft">阳光回忆</h3>
        <div class="floatRight clearDiv" @click="back()">
          <img src="../../assets/img/theme-back.png" alt>
          <span>返回</span>
        </div>
      </div>
      <div class="img-box clearDiv">
        <div class="left floatLeft">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <!-- <div class="right floatRight">
          <h3>售卖商品</h3>
          <p>纪念品/卡通玩具/衣服帽子周边</p>
        </div> -->
      </div>
      <div class="content">想在水的世界尽情嬉戏？那让我们先补齐装备吧！这里会有各式各样的水上用品补给</div>
    </div>
    <div class="box">
      <div class="top clearDiv">
        <h3 class="floatLeft">木马奇珍坊</h3>
        <div class="floatRight clearDiv" @click="back()">
          <img src="../../assets/img/theme-back.png" alt>
          <span>返回</span>
        </div>
      </div>
      <div class="img-box clearDiv">
        <div class="left floatLeft">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-shop-img2.png" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <!-- <div class="right floatRight">
          <h3>售卖商品</h3>
          <p>纪念品/卡通玩具/衣服帽子周边</p>
        </div> -->
      </div>
      <div class="content">集结了与海洋息息相关的纪念品，包括海豚、海龟、海狮等各种造型玩偶。让海洋朋友时刻伴您身边，这里你定能找到心水之选！</div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "@/components/Header"; //引入头部
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        //自动播放
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      id:0
    };
  },
  components: {
    swiper,
    swiperSlide,
    Header
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  mounted(){
    this.id = this.$route.query.id;
  }
};
</script>
<style lang="scss" scoped>
.animalTheme {
  width: 100%;
  background: url(../../assets/img/theme-detail-bg.png) no-repeat;
  background-size: 1920px 100%;
  padding-bottom: 204px;
  .box {
    margin: 0 auto;
    width: 940px;
    height: 882px;
    background: rgba(255, 255, 255, 1);
    padding: 0 40px;
    margin-top: 390px;
    .top {
      padding-top: 37px;
      h3 {
        height: 46px;
        line-height: 46px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(52, 149, 242, 1);
      }
      div {
        width: 113px;
        height: 46px;
        line-height: 46px;
        background: linear-gradient(
          0deg,
          rgba(27, 106, 236, 1) 0%,
          rgba(78, 192, 248, 1) 100%
        );
        border-radius: 10px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        * {
          float: left;
        }
        img {
          width: 28px;
          height: 28px;
          margin-top: 10px;
          margin-left: 12px;
          margin-right: 10px;
        }
      }
    }
    .img-box {
      margin-top: 44px;
      .left {
        width: 100%;
        height: 400px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        .swiper-pagination {
          height: 60px;
          line-height: 60px;
          background: rgba(0, 0, 0, 0.6);
        }
      }
      .right {
        width: 190px;
        height: 400px;
        background: rgba(5, 88, 165, 1);
        color: rgba(255, 255, 255, 1);
        padding: 0 20px;
        h3 {
          font-size: 16px;
          font-weight: bold;
          padding-top: 43px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          padding-top: 12px;
          color:rgba(227,87,76,1);
        }
      }
    }
    .content {
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 28px;
      padding: 40px 10px 0 10px;
      text-indent: 20px;
    }
  }
}
</style>
<style lang="scss">
.animalTheme {
  .swiper-container {
    height: 100%;
    .swiper-pagination {
      bottom: 0;
      .swiper-pagination-bullet {
        margin: 0 10px;
        width: 18px;
        height: 18px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
      }
      .swiper-pagination-bullet-active{
          background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>