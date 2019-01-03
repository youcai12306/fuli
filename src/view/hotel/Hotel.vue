<!-- 度假酒店 -->
<template>
  <div class="hotel">
    <Header></Header>
    <div class="top">
      <img src="../../assets/img/hotel-img1.png" alt>
      <div class="top-box">
        <h3>元旦特惠
          <br>在旅途中温暖跨年
        </h3>
        <p>和我一起，在新的风景中迎接新的一年</p>
      </div>
    </div>
    <div class="bottom">
      <h3>度假酒店/Resort Hotel</h3>
      <ul class="clearDiv">
        <li v-for="item in 5" :key="item.id" @click="jumpDetail(0)">
          <img src="../../assets/img/hotel-img1.png" alt>
          <p>凯悦酒店</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"; //引入头部
export default {
  data() {
    return {};
  },

  components: {
    Header
  },

  computed: {},

  methods: {
    jumpDetail(id) {
      this.$router.push({
        path: "/hotelDetail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.hotel {
  .top {
    position: relative;
    padding-top: 47%;
    height: 0;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .top-box {
      width: 411px;
      height: 171px;
      background: rgba(10, 10, 10, 0.78);
      position: absolute;
      left: 19%;
      top: 15%;
      padding-top: 25px;
      padding-left: 30px;
      h3 {
        font-size: 30px;
        font-weight: bold;
        color: rgba(249, 186, 17, 1);
        line-height: 44px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
    }
  }
  .bottom {
    width: 1200px;
    margin: 0 auto;
    h3 {
      //   height: 26px;
      line-height: 26px;
      font-size: 26px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      padding-bottom: 14px;
      padding-top: 78px;
      border-bottom: 2px solid rgba(191, 191, 191, 1);
    }
    ul {
      padding-bottom: 195px;
      li {
        float: left;
        margin-top: 80px;
        width: 378px;
        height: 231px;
        position: relative;
        margin-right: 33px;
        cursor: pointer;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        img {
          width: 378px;
          height: 231px;
        }
        p {
          padding-left: 20px;
          bottom: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 58px;
          line-height: 58px;
          background: rgba(0, 0, 0, 0.77);
          font-size: 16px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>