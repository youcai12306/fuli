<template>
	<section>
		<Header></Header>
  <div class="risk">
    <div class="title">
      <div class="location">当前位置><router-link to="index" tag="span">首页></router-link>冒险之旅</div>
    </div>
    <div class="content">
      <div class="inner-box">
        <swiper :options="swiperOption">
          <swiper-slide
            :style="{backgroundImage:'url(../../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1200px',height:'686px'}"
          >
            <div class="clearDiv">
              <div class="left floatLeft">
                <button class="btn1">同款商品</button>
                <button class="btn2">游戏互动</button>
              </div>
              <div class="right floatRight">
                <video width="290" height="180" class="video">
                  <source src="movie.ogg" type="video/ogg">
                </video>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            :style="{backgroundImage:'url(../../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1200px',height:'686px'}"
          ></swiper-slide>
          <swiper-slide
            :style="{backgroundImage:'url(../../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1200px',height:'686px'}"
          ></swiper-slide>
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        </swiper>
        <div class="list">
          <p class="list-t">海洋王国家族成员精灵可爱吉祥物</p>
          <ul class="clearDiv">
            <li v-for="item in 4" :key="item">
              <img src="../../assets/img/login-bg.png" alt>
              <p>海象博士</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
	</section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "@/components/Header"; //引入头部
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        // loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        // autoplay: true,
        // autoplay: {
        //     delay: 3000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: true,
        // },
        // 设置轮播
        // effect: "flip",
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        // grabCursor : true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide,
		Header
  },

  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.risk {
  width: 100%;
  background: #fff url(../../assets/img/new-1.png) no-repeat top center;
  background-size: 1920px 100%;
  padding-top: 440px;
  padding-bottom: 50px;
  .title {
    width: 1200px;
    margin: 0 auto;
    height: 66px;
    background: linear-gradient(
      180deg,
      rgba(114, 180, 42, 1),
      rgba(134, 212, 100, 1)
    );
    box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.35);
    .location {
      //   height: 22px;
      height: 66px;
      line-height: 66px;
      font-size: 14px;
      font-family: FZZZHONGJW--GB1-0;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding-left: 34px;
      background: url(../../assets/img/new-4.png) no-repeat 15px center;
      cursor: pointer;
    }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.2);
    padding-bottom: 44px;
    .inner-box {
      background-color: rgba(255, 255, 255, 1);
      width: 1140px;
      margin: 0 auto;
      padding-top: 50px;
      .swiper-container {
        .swiper-button-prev {
          width: 39px;
          height: 98px;
          background: rgba(255, 255, 255, 0.6) url(../../assets/img/md-l.png)
            no-repeat center center;
          border-radius: 10px;
        }
        .swiper-button-next {
          width: 39px;
          height: 98px;
          background: rgba(255, 255, 255, 0.6) url(../../assets/img/md-r.png)
            no-repeat center center;
          border-radius: 10px;
        }
        .left {
          .btn1 {
            width: 100px;
            height: 38px;
            background: rgba(248, 181, 81, 1);
            border: 1px solid rgba(233, 151, 8, 1);
            border-radius: 19px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-top: 531px;
            margin-left: 159px;
          }
          .btn2 {
            width: 100px;
            height: 38px;
            background: rgba(233, 93, 56, 1);
            border: 1px solid rgba(248, 211, 81, 1);
            border-radius: 19px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-top: 531px;
            margin-left: 23px;
          }
        }
        .right {
          margin-right: 244px;
          margin-top: 309px;
          width: 301px;
          height: 222px;
          border: 1px solid red;
          .video{
            margin: 0 5px;
          }
        }
      }
      .list {
        padding-top: 100px;
        padding-left: 90px;
        height: 686px;
        .list-t {
          width: 144px;
          font-size: 18px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 28px;
        }
        ul {
          margin-top: 113px;
          li {
            float: left;
            margin-right: 30px;
            img {
              width: 220px;
              height: 220px;
              border: 2px solid rgba(210, 210, 210, 1);
            }
            p {
              text-align: center;
              font-size: 16px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
          }
        }
      }
    }
  }
}
</style>