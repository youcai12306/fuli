<template>
  <div class="content">
    <div class="list">
      <p class="content-title">20元优惠券</p>
      <ul class="coupon coupon-20 clearDiv">
        <li v-for="item in 6" :key="item">
          <div class="coupon-content clearDiv">
            <div class="content-left floatLeft">
              <span>￥</span>20
            </div>
            <div class="content-right floatLeft">
              <p class="quan">优惠券</p>
              <p>满199使用</p>
              <p>11.23-11.30</p>
            </div>
          </div>
          <div class="declare">
            <span>使用说明</span>：优惠券有使用期限限制，过了有效期不能使用；订单中包含特价商品时不能使用优惠券，优惠券不能与其他优惠（如促销活动）同时使用；优惠券只能抵扣订单金额，优惠金额超出订单金额部分不能再次使用，不能兑换现单只能使用一张优惠券；
          </div>
        </li>
      </ul>
    </div>
    <div class="list list30">
      <p class="content-title">30元优惠券</p>
      <ul class="coupon coupon-30 clearDiv">
        <li>
          <div class="coupon-content clearDiv">
            <div class="content-left floatLeft">
              <span>￥</span>20
            </div>
            <div class="content-right floatLeft">
              <p class="quan">优惠券</p>
              <p>满199使用</p>
              <p>11.23-11.30</p>
            </div>
          </div>
          <div class="declare">
            <span>使用说明</span>：优惠券有使用期限限制，过了有效期不能使用；订单中包含特价商品时不能使用优惠券，优惠券不能与其他优惠（如促销活动）同时使用；优惠券只能抵扣订单金额，优惠金额超出订单金额部分不能再次使用，不能兑换现单只能使用一张优惠券；
          </div>
        </li>
      </ul>
    </div>
    <div class="list list50">
      <p class="content-title">50元优惠券</p>
      <ul class="coupon coupon-50 clearDiv">
        <li>
          <div class="coupon-content clearDiv">
            <div class="content-left floatLeft">
              <span>￥</span>50
            </div>
            <div class="content-right floatLeft">
              <p class="quan">优惠券</p>
              <p>满199使用</p>
              <p>11.23-11.30</p>
            </div>
          </div>
          <div class="declare">
            <span>使用说明</span>：优惠券有使用期限限制，过了有效期不能使用；订单中包含特价商品时不能使用优惠券，优惠券不能与其他优惠（如促销活动）同时使用；优惠券只能抵扣订单金额，优惠金额超出订单金额部分不能再次使用，不能兑换现单只能使用一张优惠券；
          </div>
        </li>
      </ul>
    </div>
    <div class="list list100">
      <p class="content-title">100元优惠券</p>
      <ul class="coupon coupon-100 clearDiv">
        <li>
          <div class="coupon-content clearDiv">
            <div class="content-left floatLeft">
              <span>￥</span>100
            </div>
            <div class="content-right floatLeft">
              <p class="quan">优惠券</p>
              <p>满199使用</p>
              <p>11.23-11.30</p>
            </div>
          </div>
          <div class="declare">
            <span>使用说明</span>：优惠券有使用期限限制，过了有效期不能使用；订单中包含特价商品时不能使用优惠券，优惠券不能与其他优惠（如促销活动）同时使用；优惠券只能抵扣订单金额，优惠金额超出订单金额部分不能再次使用，不能兑换现单只能使用一张优惠券；
          </div>
        </li>
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
.content {
  margin-top: 51px;
  .list {
    .content-title {
      font-size: 12px;
      font-weight: bold;
      color: rgba(101, 156, 238, 1);
    }
    .coupon {
      margin-top: 19px;
      li {
        float: left;
        position: relative;
        width: 171px;
        height: 81px;
        margin-right: 40px;
        margin-bottom: 37px;
        background: url(../../../assets/img/mine-coupon20.png) no-repeat;
        &:hover {
          .declare {
            display: block;
          }
        }
        .coupon-content {
          color: rgba(255, 255, 255, 1);
          .content-left {
            height: 40px;
            line-height: 40px;
            margin-top: 20px;
            font-size: 40px;
            font-weight: 400;
            padding-right: 10px;
            font-family: Impact;
            border-right: 2px dotted rgba(255, 255, 255, 0.3);
            padding-left: 15px;
            span {
              font-weight: bold;
              font-size: 15px;
            }
          }
          .content-right {
            padding-top: 20px;
            padding-left: 10px;
            p {
              font-size: 12px;
              line-height: 14px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
            .quan {
              font-size: 18px;
              line-height: 21px;
            }
          }
        }
        .declare {
          display: none;
          position: absolute;
          top: -160px;
          left: 30px;
          padding: 12px 10px;
          width: 234px;
          height: 133px;
          background: rgba(235, 242, 253, 1);
          border-radius: 5px;
          font-size: 12px;
          font-weight: 400;
          color: rgba(7, 100, 233, 1);
          line-height: 16px;
          span {
            color: #0764e9;
            font-weight: bold;
          }
        }
        .declare::before {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 15%;
          -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
          border-top: 9px solid rgba(235, 242, 253, 1);
          border-right: 9px solid transparent;
          border-left: 9px solid transparent;
        }
      }
    }
  }
  .list30 {
    .content-title {
      font-size: 12px;
      font-weight: bold;
      color: rgba(242, 167, 89, 1);
    }
    .coupon {
      li {
        background: url(../../../assets/img/mine-coupon30.png);
      }
    }
  }
  .list50 {
    .content-title {
      font-size: 12px;
      font-weight: bold;
      color: rgba(242, 167, 89, 1);
    }
    .coupon {
      li {
        background: url(../../../assets/img/mine-coupon50.png);
      }
    }
  }
  .list100 {
    .content-title {
      font-size: 12px;
      font-weight: bold;
      color: rgba(242, 167, 89, 1);
    }
    .coupon {
      li {
        background: url(../../../assets/img/mine-coupon100.png);
        .coupon-content {
          .content-left {
            border-right: 0;
          }
          .content-right {
            padding-left: 0;
          }
        }
      }
    }
  }
}
</style>