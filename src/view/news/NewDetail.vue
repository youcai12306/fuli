<template>
  <!-- 园区新闻 -->
  <div class="r">
    <div class="title clearDiv">
      <div class="floatLeft">新闻中心</div>
      <div class="floatRight location">当前位置：新闻中心>园区新闻>新闻详情</div>
    </div>

    <!-- 所有新闻 -->
    <div class="main-new">
      <div class="titles clearDiv">
        <div class="title-left floatLeft">
          <div class="one">{{data.infoTitle}}</div>
          <div class="two">{{data.createTime}}&nbsp;&nbsp; 来源：富力海洋欢乐世界 浏览次数：65</div>
        </div>
        <router-link to="/newList" tag="div" class="title-right floatRight">返回</router-link>
      </div>
      <div class="content">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="../../assets/img/login-bg.png">
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </div>
      <div>{{data.infoContent}}</div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "News",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      data:{}
    };
  },
  created() {
    document.title = "新闻中心详情";
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted(){
     this.$post('http://192.168.2.61:2670/info/secondary/getInfo?infoId='+this.$route.query.id).then((res) =>{
       console.log(res.data)
      this.data = res.data
    })
  }
};
</script>

<style scoped="" lang="scss">
// 主体
.r {
  position: relative;
  height: 1200px;
  width: 920px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
  margin-top: 20px;
  .title {
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: rgba(238, 238, 238, 1);
    width: 100%;
    height: 91px;
    line-height: 91px;
    background: rgba(77, 175, 236, 1);
    padding-left: 37px;
    border-radius: 10px 10px 0 0;
    .location {
      height: 22px;
      font-size: 14px;
      font-family: FZZZHONGJW--GB1-0;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      padding-left: 40px;
      background: url(../../assets/img/new-4.png) no-repeat 15px 0;
      margin-top: 50px;
      margin-right: 34px;
    }
  }

  .main-new {
    padding: 31px 34px 0 37px;
    width: 100%;
    .titles {
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(153, 153, 153, 1);
      .title-left {
        .one {
          font-size: 16px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        .two {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-top: 30px;
        }
      }
      .title-right {
        width: 76px;
        height: 35px;
        background: rgba(235, 235, 235, 1);
        border: 1px solid rgba(210, 210, 210, 1);
        text-align: center;
        line-height: 35px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-top: 18px;
				cursor: pointer;
      }
    }
    .content {
      margin: 30px auto;
      position: relative;
      width: 681px;
      height: 315px;
      .swiper-container {
        img {
          width: 681px;
          height: 315px;
        }
      }

      .swiper-button-prev {
        left: -60px;
        width: 38px;
        height: 89px;
        margin-top: -44px;
        background: url(../../assets/img/new-6.png) no-repeat 0 0;
        &:focus{
          outline-width: 0
        }
      }
      .swiper-button-next {
        right: -60px;
        width: 38px;
        height: 89px;
        margin-top: -44px;
        background: url(../../assets/img/new-5.png) no-repeat 0 0;
        &:focus{
           outline-width: 0
        }
      }
    }
  }
}
</style>
