<template>
  <div class="animalTheme">
    <div class="box">
      <div class="top clearDiv">
        <h3 class="floatLeft">海豚纪念商店</h3>
        <div class="floatRight clearDiv" @click="back()">
          <img src="../../assets/img/login-qq.png" alt>
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
        <div class="right floatRight">
          <h3>售卖商品</h3>
          <p>纪念品/卡通玩具/衣服帽子周边</p>
        </div>
      </div>
      <div class="content">「海豚岛」是海豚的家，您可以穿梭于岛上的茅草屋栈道，欣赏海豚的美妙泳姿。如果想近距离观赏海豚，更可顺着楼梯往下走到玻璃前观看。活泼的海豚已适应这里的环境，更会不时表演拿手的连滚翻呢！
 国家一级保护动物，素有“水上大熊猫”之称，拥有天赐的粉红色皮肤，与生俱来的上扬嘴角，一个浅浅的微笑就能萌化你的心，它们又是驰聘于海洋的精灵，喜爱在海中追波逐浪，追逐一个勇敢而智慧的白海豚传说。国家一级保护动物，素有“水上大熊猫”之称，拥有天赐的粉红色皮肤，与生俱来的上扬嘴角，一个浅浅的微笑就能萌化你的心，它们又是驰聘于海洋的精灵，喜爱在海中追波逐浪，追逐一个勇敢而智慧的白海豚传说。</div>
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
  padding-top: 390px;
  padding-bottom: 204px;
  .box {
    margin: 0 auto;
    width: 940px;
    height: 882px;
    background: rgba(255, 255, 255, 1);
    padding: 0 40px;
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