<template>
  <div>
    <Header></Header>
    <div class="sc1">
      <div class="sc2">
        <div class="sc3">
          <!-- 微信支付遮罩层 -->
          <div
            class="su21 clearDiv"
            v-show="flag"
          >
            <div class="bg clearDiv"></div>
            <div class="show clearDiv">
              <div class="su22">微信支付</div>
              <div class="su23">
                <div class="su24">
                  <p>支付金额：<span>{{this.$route.query.price2}}</span></p>
                </div>
                <div class="su25">
                  <!-- <img src="../../assets/img/erweima.png" alt=""> -->
                  <div id='qrcode'></div>
                </div>
                <div class="su26">
                  <button @click="success()">若已完成支付，请点击</button>
                </div>
              </div>
            </div>
          </div>
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
              @click="weixin()"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Header from "../../components/Header";
export default {
  components: {
    Header,
    QRCode
  },
  data() {
    return {
      isActive: "",
      minutes:29,
      seconds: 59,
      flag: false
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    change(isActive) {
      this.isActive = isActive;
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
          this.$router.push("./mine");
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },

    weixin() {
      console.log(0);
      //   微信支付
      if (this.isActive == 1) {
        this.flag = true;
        let data = {
          out_trade_no: this.$route.query.orderId
        };
        this.$post(
          "http://payment.mayou365.com/payment-aggregate/scanpay?out_trade_no=" +
            this.$route.query.orderId,
          data,
          { headers: { "Content-Type": "application/json;charset=UTF-8" } }
        ).then(res => {
          console.log(res);
          this.qrcode(res.data);
        });
      } else if (this.isActive == 0) {
        // 支付宝支付
        let data = {
          out_trade_no: this.$route.query.orderId
        };
        this.$post(
          "http://payment.mayou365.com/payment-aggregate/aliToPay?out_trade_no=" +
            this.$route.query.orderId,
          data,
          {
            headers: { "Content-Type": "application/json;charset=UTF-8" }
          }
        )
          .then(res => {
            console.log(res);
            const div = document.createElement("div");
            div.innerHTML = res.data;
            document.body.appendChild(div);
            document.forms[0].submit();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    success() {
      // 判断回调是否有值，跳转支付成功页面
      this.times = setInterval(() => {
       let data ={
          guid : this.$route.query.orderId
        }
        this.$fetch("http://101.201.101.138:6110/callBack-mucon/getPay",data).then((res) => {
            console.log(res)
        if (res.code === 200) {
          window.clearInterval(this.times);
          this.$router.push("./ok");
           
        }else if(res.code === 400){
          
          this.$router.push("./error1");
        }
      });
      },6000);
       
    },
    
   
    qrcode(aaa) {
      let qrcode = new QRCode("qrcode", {
        width: 200,
        height: 200, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
        text: aaa, // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: "#f0f" // foreground: '#ff0'
      });
      // console.log(qrcode)
    }
  },
   beforeDestroy() {
    window.clearInterval(this.times);
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
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
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
      // 遮罩层
      .su21 {
        height: 100%;
        // 遮罩层
        .bg {
          display: block;
          position: fixed;
          top: 0%;
          left: 0%;
          width: 100%;
          height: 100%;
          background-color: black;
          z-index: 1001;
          opacity: 0.3;
        }
        .show {
          display: block;
          position: fixed;
          top: 25%;
          left: 33%;
          width: 648px;
          height: 510px;
          padding: 8px;
          border: 1px solid #e8e9f7;
          background-color: #fff;
          z-index: 1002;
        }
      }
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
          .scc {
            color: #e3574c;
            font-size: 12px;
            margin-left: 456px;
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
      .su22 {
        color: #333333;
        font-weight: bold;
        margin-top: 42px;
        margin-left: 32px;
      }
      .su23 {
        margin: 0 auto;
        text-align: center;
        .su24 {
          p {
            font-size: 18px;
            font-weight: bold;
            span {
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
        .su25 {
          #qrcode {
            // img {
            //   display: inline-block;
            //   width: 164px;
            //   height: 165px;
            //   margin-top: 23px;
            //   margin-bottom: 47px;
            // }
            margin-left: 216px;
            margin-top: 23px;
            margin-bottom: 47px;
          }
        }
        .su26 {
          button {
            border: 1px solid #0764e9;
            background-color: #fff;
            border-radius: 15px;
            padding: 5px 25px;
            color: #0764e9;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
