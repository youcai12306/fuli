<!-- 酒店详情 -->
<template>
  <div class="hotel-detail">
    <Header></Header>
    <div class="nav">当前位置：
      <router-link to="/hotel">度假酒店</router-link>> 酒店详情
    </div>
    <div class="top">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(img,index) in swiperImg" :key="index">
          <img :src="img" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="bottom">
      <h3>{{data.title}}</h3>
      <!-- <p>奇思妙想的海景酒店，不仅可以推窗看海，还可以感受来自海洋欢乐世界的奇幻主题，更有神秘卡通人物不经意间的给您带来的惊喜。</p> -->
      <div v-html="data.content0"></div>
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
      id: 0,
      data: {},
      swiperImg: []
    };
  },

  components: {
    swiper,
    swiperSlide,
    Header
  },

  computed: {},

  methods: {
    GetList() {
				this.$fetch('http://101.201.101.138:6110/mongodb-mucon/structure/primary/get?structureId=' + this.id + '&isEnglish='+ this.$isEnglish).then((res) => {
					this.data = res.data;
				})
			}
  },
  mounted() {
    this.id = this.$route.query.id;
    this.swiperImg = this.$route.query.swiperImg;
    this.GetList();
  }
};
</script>
<style lang='scss' scoped>
.hotel-detail {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/hotel-img2.jpg) no-repeat;
  background-size: 1920px 100%;
  .nav {
    background-color: #ffffff;
    width: 1200px;
    height: 62px;
    line-height: 62px;
    padding-left: 36px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    border-top:1px solid rgba(227, 227, 227, 1);
    a {
      color: rgba(51, 51, 51, 1);
    }
  }
  .top {
    width: 1200px;
    margin: 0 auto;
    height: 520px;
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
  .bottom {
    width: 1200px;
    margin: 0 auto;
    height: 636px;
    background-color: #ffffff;
    padding-left: 108px;
    padding-top: 60px;
    h3 {
      height: 18px;
      line-height: 18px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 20px;
    }
    p {
      height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 34px;
    }
  }
}
</style>
<style lang="scss">
.hotel-detail {
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
      .swiper-pagination-bullet-active {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>