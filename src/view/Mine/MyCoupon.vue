<template>
  <div class="main">
    <div class="title clearDiv">
      <p class="floatLeft title-left">优惠券</p>
      <p class="floatRight title-right">使用规则</p>
    </div>
    <div class="content">
      <p>可使用(<span>4</span>张)</p>
      <ul class="clearDiv">
        <li><img src="../../assets/img/mine-coupon20.png" alt=""></li>
        <li><img src="../../assets/img/mine-coupon30.png" alt=""></li>
        <li><img src="../../assets/img/mine-coupon50.png" alt=""></li>
        <li><img src="../../assets/img/mine-coupon100.png" alt=""></li>
      </ul>
    </div>
    <div class="content used">
      <p>已过期(<span>2</span>张)</p>
      <ul class="clearDiv">
        <li><img src="../../assets/img/mine-coupon20-use.png" alt=""></li>
        <li><img src="../../assets/img/mine-coupon30-use.png" alt=""></li>
      </ul>
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
  .title {
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding: 49px 0 11px 0;
    border-bottom: 2px solid rgba(238,238,238,1);
    .title-left {
      font-size: 16px;
      line-height: 28px;
    }
    .title-right {
      font-size:12px;
      width: 68px;
      height: 27px;
      line-height: 27px;
      text-align: center;
      border: 1px solid rgba(7, 100, 233, 1);
      border-radius: 5px;
      color:  rgba(7,100,233,1);
    }
  }
  .content{
    margin-top:64px;
    p{
      font-size:12px;
      font-weight:bold;
      color:rgba(227,87,76,1);
      margin: 0 0 34px 10px;
    }
    ul{
      padding-left: 77px;
      li{
        position: relative;
        float: left;
        margin-right: 31px;
        img{
          width:134px;
          height:64px;
        }
      }
      li::before{
        content: '';
        position: absolute;
        width:8px;
        height:8px;
        background:rgba(187,187,187,1);
        border-radius:50%;
        top:50%;
        margin-top: -4px;
        left: -22px;
      }
    }
  }
  .used{
    margin-top: 59px;
  }
}
</style>