<template>
  <div>
    <Header1></Header1>
    <div class="sc1">
      <div class="sc2">
        <div class="sc3">
          <div class="sc4">
            <p>
              订单创建成功，订单号：<span>{{this.$route.query.orderId}}</span>
            </p>
          </div>
          <div class="sc5">
            <div class="sc6">
              <p class="sc61">支付金额： <span class="sc7">{{this.$route.query.price2}}元</span></p>

              <span class="sc62">选择支付方式：</span>
              <img
                class="m1"
                src="../../assets/img/zhifubao.png"
                alt=""
                :class="{active:isActive==0}"
                @click="change(0)"
              >
              <img
                class="m2"
                src="../../assets/img/weixin.png"
                alt=""
                :class="{active:isActive==1}"
                @click="change(1)"
              >
              
              <img
                class="m3"
                src="../../assets/img/wangyin.png"
                alt=""
                :class="{active:isActive==2}"
                @click="change(2)"
              >
              <p class="scc">此功能暂未开通</p>
              <p class="sc63">请在30分钟内完成支付，如未完成订单自动关闭</p>
              <p class="sc64">剩余时间 <span>{{minute}}分{{second}}秒</span></p>

            </div>
          </div>
          <div class="sc7">
            <img
              src="../../assets/img/zhifu111.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
export default {
  components: {
    Header1
  },
  data() {
    return {
      isActive: "",
      minutes: 30,
      seconds: 59
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    change(isActive) {
      this.isActive = isActive;
      if(isActive==0){
        
      }
    },
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    // 倒计时器
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
      second: function () {
        return this.num(this.seconds)
      },
      minute: function () {
        return this.num(this.minutes)
      }
    }


};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
  color: #333;
}
span {
  font-size: 20px;
  color: #333;
}
.sc1 {
  background-image: url(../../assets/img/bacdd.png);
  height: 100%;
  overflow: hidden;
  .sc2 {
    width: 1200px;
    background-color: #fff;
    height: 100%;
    padding-bottom: 1000px;
    margin: 0 auto;
    overflow: hidden;
    .sc3 {
      margin-top: 66px;
      margin-left: 74px;
      margin-right: 80px;
      .sc4 {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 26px;
        margin-bottom: 40px;
        span {
          color: #333333;
          font-size: 20px;
        }
      }
      .sc5 {
        .sc6 {
            .scc{
                color:#E3574C;
                font-size: 12px;
                margin-left:456px;
                margin-top: 13px;
            }
          .sc61 {
            margin-bottom: 33px;
            .sc7 {
              color: #e3574c;
            }
          }
          .sc62 {
            display: block;
            margin-bottom: 35px;
          }
          .sc63 {
            margin-bottom: 26px;
            margin-top: 63px;
          }
          .sc64 {
            span {
              color: #e3574c;
            }
          }
          img {
            // margin-bottom: 89px;
            margin-right: 44px;
            border: 1px solid #bfbfbf;
            &.active {
              border-color: #0764e9;
              box-shadow: 0px 14px 57px 0px rgba(5, 67, 35, 0.35);
            }
          }
          .m1 {
            padding: 12px 27px;
          }
          .m2 {
            padding: 11px 12px;
          }
          .m3 {
            padding: 16px 9px;
          }
        }
      }
      .sc7 {
        img {
          margin-left: 830px;
          margin-top: 93px;
        }
      }
    }
  }
}
</style>
