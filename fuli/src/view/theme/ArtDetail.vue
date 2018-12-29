<template>
  <div class="animalTheme">
     <!-- 头部 -->
    <Header></Header>
    <div class="box">
      <div class="top clearDiv">
        <h3 class="floatLeft">巡游表演</h3>
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
              <img src="../../assets/img/theme-art-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-art-img2.png" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="../../assets/img/theme-art-img2.png" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="right floatRight">
          <h3>售卖商品</h3>
          <p>纪念品/卡通玩具/衣服帽子周边</p>
          <h3>表演时长</h3>
          <p>50分钟</p>
        </div>
      </div>
      <div class="content">我们的22个特色人物将带您前往壮丽的海底世界。 通过使用高科技灯光和音频效果，您将永远不会忘记该节目带给您的有趣体验。</div>
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
      }
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
  }
};
</script>
<style lang="scss" scoped>
.animalTheme {
  width: 100%;
  background: url(../../assets/img/theme-detail-bg.png) no-repeat;
  background-size: 1920px 100%;
  //padding-top: 390px;
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
				cursor: pointer;
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
        width: 670px;
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
        }
      }
    }
    .content {
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 28px;
      padding: 40px 10px 0 10px;
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