<!--  -->
<template>
  <div class="order-detail">
    <div class="nav">
      <ul class="nav-content clearDiv">
        <li class="floatLeft">您好，欢迎登录富力海洋欢乐世界度假区！
          <router-link to="/">[返回首页]</router-link>
        </li>
        <li class="floatRight">
          <span class="phone-img"></span>客服电话400-xxxx-xxx
        </li>
        <li class="floatRight phon-type">手机版</li>
      </ul>
    </div>
    <div class="nav2">
      <ul class="nav-logo clearDiv">
        <li class="floatLeft">
          <img src="../../../assets/img/logo.png" alt>
        </li>
        <li class="mine-center floatLeft">会员中心</li>
        <li class="mine-login floatRight">
          <span></span>退出登录
        </li>
      </ul>
    </div>
    <div class="box">
      <div class="content">
        <div class="one">
          <div class="one-left">您的位置：个人中心 > 订单信息</div>
          <div class="one-right">返回</div>
        </div>
        <div class="two">
          <table class="two-table" cellspacing="0" cellpadding="0">
            <tr>
              <td class="td-1 td-title">订单金额</td>
              <td class="td-2 td-title">订单信息</td>
              <td rowspan="5" class="td-3 td-bottom">
                <div>
                  订单状态：
                  <span>未支付</span>
                </div>
                <div class="now-pay">立即支付</div>
                <div class="cancel-pay">取消支付</div>
              </td>
            </tr>
            <tr>
              <td class="td-1">订单总金额：</td>
              <td class="td-2">交易订单：</td>
            </tr>
            <tr>
              <td class="td-1">优惠券总金额：</td>
              <td class="td-2">订单时间：</td>
            </tr>
            <tr>
              <td class="td-1">退款总金额：</td>
              <td class="td-2">支付时间：</td>
            </tr>
            <tr>
              <td class="td-1 td-bottom">
                实付金额：
                <span>￥111</span>
              </td>
              <td class="td-2 td-bottom">下单渠道：</td>
            </tr>
          </table>
        </div>
        <div class="three">
          <table class="three-table" cellspacing="0" cellpadding="0">
            <tr class="title">
              <td class="td-1">商品</td>
              <td class="td-2">单价</td>
              <td class="td-3">数量</td>
              <td class="td-4">小计</td>
              <td class="td-5">订单状态</td>
              <td class="td-6">操作</td>
            </tr>
            <tbody v-for="item in 3" :key="item">
              <tr>
                <td colspan="6" class="td-7">子单编号：565626596565</td>
              </tr>
              <tr class="tr">
                <td colspan="6" class="td-8">成人全日票</td>
              </tr>
              <tr class="tr">
                <td class="td-1">游玩时间：2018.05.06</td>
                <td class="td-2">￥160</td>
                <td class="td-3">X2</td>
                <td class="td-4">￥160</td>
                <td class="td-5">已核销</td>
                <td class="td-6"></td>
              </tr>
              <tr class="tr">
                <td colspan="6">
                  核销码：
                  <a href="#">http:www.chsodvjsndvowdiv.com</a>(点击链接获取二维码)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="four">
          <table class="four-table" cellspacing="0" cellpadding="0">
            <tr class="title">
              <td class="td-1">游玩人信息</td>
              <td class="td-2">收件人信息</td>
            </tr>
            <tr>
              <td class="td-1">姓名：</td>
              <td class="td-2">姓名：</td>
            </tr>
            <tr>
              <td class="td-1">电话：</td>
              <td class="td-2">电话</td>
            </tr>
            <tr>
              <td class="td-1 td-bottom">身份证：</td>
              <td class="td-2 td-bottom">地址：</td>
            </tr>
          </table>
        </div>
        <div class="five">
          <div class="title clearDiv">
            <div :class="{active:type === 0}" @click="changeType(0)">支付信息</div>
            <div :class="{active:type === 1}" @click="changeType(1)">退订信息</div>
          </div>
          <div>
            <table cellspacing="0" cellpadding="0" class="five-table"  v-show="type === 0">
              <tr class="titles">
                <td class="td-1">序号</td>
                <td class="td-2">子单编码</td>
                <td class="td-3">支付金额</td>
                <td class="td-4">支付渠道</td>
                <td class="td-5">操作</td>
                <td class="td-6">支付时间</td>
              </tr>
              <tr>
                <td class="td-1">1</td>
                <td class="td-2">A</td>
                <td class="td-3">1000</td>
                <td class="td-4">支付宝</td>
                <td class="td-5">支付</td>
                <td class="td-6">2018/12/05 14:30:00</td>
              </tr>
              <tr>
                <td class="td-1 td-bottom" colspan="2">合计</td>
                <td class="td-6 td-bottom" colspan="4">1000</td>
              </tr>
            </table>
            <table cellspacing="0" cellpadding="0" class="five-table" v-show="type === 1">
              <tr class="titles">
                <td class="td-1">序号</td>
                <td class="td-2">子单编码</td>
                <td class="td-3">申请时间</td>
                <td class="td-4">退订数量</td>
                <td class="td-5">审核标识</td>
                <td class="td-6">审核时间</td>
              </tr>
              <tr>
                <td class="td-1 td-bottom">1</td>
                <td class="td-2 td-bottom">A</td>
                <td class="td-3 td-bottom">1000</td>
                <td class="td-4 td-bottom">支付宝</td>
                <td class="td-5 td-bottom">支付</td>
                <td class="td-6 td-bottom">2018/12/05 14:30:00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0
    };
  },

  components: {},

  computed: {},

  methods: {
    //切换类型
    changeType(type) {
      this.type = type;
    }
  }
};
</script>
<style lang='scss' scoped>
.order-detail {
  .nav {
    width: 100%;
    height: 63px;
    line-height: 63px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: url(../../../assets/img/mine-nav.png) no-repeat 0 0;
    background-size: 100% 100%;

    .nav-content {
      width: 1200px;
      margin: 0 auto;

      a {
        color: rgba(255, 255, 255, 1);
      }

      li {
        .phone-img {
          display: inline-block;
          width: 20px;
          height: 22px;
          background: url(../../../assets/img/mine-phone.png) no-repeat 0 0px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }

      .phon-type {
        margin-right: 20px;
      }
    }
  }

  .nav2 {
    width: 100%;
    height: 125px;
    line-height: 125px;
    background-color: #359af7;

    ul {
      width: 1200px;
      margin: 0 auto;
      height: 125px;
      line-height: 125px;

      li {
        font-weight: 400;
        color: rgba(255, 255, 255, 1);

        img {
          vertical-align: middle;
        }
      }

      .mine-center {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        margin-left: 22px;
        padding-left: 18px;
        border-left: 1px solid #ffffff;
        margin-top: 36px;
      }

      .mine-login {
        font-size: 14px;

        span {
          width: 19px;
          height: 21px;
          display: inline-block;
          vertical-align: middle;
          background: url(../../../assets/img/mine-login.png) no-repeat 0 0;
          margin-right: 5px;
        }
      }
    }
  }
  .box {
    width: 100%;
    height: 100%;
    background: #084c99 url(../../../assets/img/mine-bg.png) no-repeat;
    font-weight: 400;
    .content {
      width: 1200px;
      margin: 0 auto;
      background-color: #ffffff;
      padding-left: 55px;
      padding-top: 43px;
      padding-bottom: 30px;
      .one {
        height: 34px;
        line-height: 34px;
        .one-left {
          float: left;
          font-size: 16px;
          color: rgba(51, 51, 51, 1);
        }
        .one-right {
          float: right;
          width: 69px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          border: 1px solid rgba(7, 100, 233, 1);
          font-size: 14px;
          color: rgba(7, 100, 233, 1);
          margin-right: 221px;
        }
      }
      .two {
        margin-top: 20px;
        .two-table {
          border: 1px solid rgba(191, 191, 191, 1);
          td {
            height: 60px;
            border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
          }
          .td-title {
            font-weight: bold;
          }
          .td-1 {
            width: 226px;
            padding-left: 20px;
            span {
              font-size: 16px;
              color: rgba(227, 87, 76, 1);
            }
          }
          .td-2 {
            width: 384px;
            padding-left: 20px;
          }
          .td-3 {
            width: 311px;
            text-align: center;
            border-right: 0;
            span {
              font-size: 18px;
              color: rgba(227, 87, 76, 1);
            }
            .now-pay {
              width: 90px;
              height: 36px;
              line-height: 36px;
              background: rgba(7, 100, 233, 1);
              color: rgba(255, 255, 255, 1);
              margin: 30px auto;
            }
            .cancel-pay {
              width: 90px;
              height: 36px;
              line-height: 36px;
              border: 1px solid rgba(191, 191, 191, 1);
              color: rgba(7, 100, 233, 1);
              margin: 0 auto;
            }
          }
          .td-bottom {
            border-bottom: 0;
          }
        }
      }
      .three {
        margin-top: 30px;
        .three-table {
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          .title {
            width: 921px;
            height: 57px;
            background: rgba(7, 100, 233, 1);
            font-size: 14px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
          .tr td {
            padding-top: 5px;
            padding-bottom: 5px;
          }
          td {
            padding-left: 20px;
          }
          .td-1 {
            width: 300px;
          }
          .td-2 {
            width: 150px;
          }
          .td-3 {
            width: 100px;
          }
          .td-4 {
            width: 100px;
          }
          .td-5 {
            width: 100px;
          }
          .td-6 {
            width: 173px;
          }
          .td-7 {
            height: 41px;
            background: rgba(221, 232, 249, 1);
            padding-left: 20px;
          }
          .td-8 {
            font-weight: bold;
          }
        }
      }
      .four {
        margin-top: 30px;
        .four-table {
          border: 1px solid rgba(191, 191, 191, 1);
          .title {
            td {
              height: 56px;
              text-align: center;
              font-weight: bold;
            }
          }
          td {
            height: 43px;
            border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
            padding-left: 20px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
          .td-1 {
            width: 431px;
          }
          .td-2 {
            border-right: 0;
            width: 490px;
          }
          .td-bottom {
            border-bottom: 0;
          }
        }
      }
      .five {
          margin-top: 80px;
        .title {
          div {
            float: left;
            width: 462px;
            height: 52px;
            line-height: 52px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: rgba(7, 100, 233, 1);
            background: rgba(216, 232, 254, 1);
            &.active {
              position: relative;
              background: rgba(7, 100, 233, 1);
              color: rgba(255, 255, 255, 1);
              &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                border-bottom: 9px solid rgba(255, 255, 255, 1);
                /*此处将左右的边框设置为透明色*/
                border-right: 9px solid transparent;
                border-left: 9px solid transparent;
              }
            }
          }
        }
        .five-table {
          border: 1px solid rgba(191, 191, 191, 1);
          margin-top: 5px;
          .titles {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
          td {
              height: 52px;
              text-align: center;
              border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
          }
          .td-1{
              width: 110px;
          }
          .td-2{
              width: 150px;
          }
           .td-3{
              width: 150px;
          }
           .td-4{
              width: 150px;
          }
           .td-5{
              width: 150px;
          }
           .td-6{
              width: 212px;
              border-right: 0;
          }
          .td-bottom{
              border-bottom: 0;
          }
        }
      }
    }
  }
}
</style>