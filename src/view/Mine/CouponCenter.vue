<template>
  <div class="main">
    <div class="coupon">
      <p>{{$t('mine.Coupons')}}</p>
      <div class="content">
        <ul class="clearDiv">
          <li><img src="../../assets/img/mine-couponCenter20-use.png" alt=""><img src="../../assets/img/mine-couponCenter20.png" alt="" v-show="false"></li>
          <li><img src="../../assets/img/mine-couponCenter30.png" alt=""><img src="../../assets/img/mine-couponCenter30-use.png" alt="" v-show="false"></li>
          <li><img src="../../assets/img/mine-couponCenter50.png" alt=""><img src="../../assets/img/mine-couponCenter50-use.png" alt="" v-show="false"></li>
          <li><img src="../../assets/img/mine-couponCenter100.png" alt=""><img src="../../assets/img/mine-couponCenter100-use.png" alt="" v-show="false"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.main {
  .coupon {
    padding-top: 48px;
    padding-bottom: 0px;

    p {
      font-size: 16px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 28px;
      border-bottom: 2px solid rgba(238, 238, 238, 1);
    }
    .content {
      padding-top: 54px;
      padding-left: 45px;
      ul {
        li {
          float: left;
          margin-right: 38px;
          img {
            width: 159px;
            height: 76px;
          }
        }
      }
    }
  }
}
</style>