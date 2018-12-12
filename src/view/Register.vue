<template>
  <div>
    <div class="bac clearDiv">
      <div class="ban clearDiv">
        <div class="clearDiv ban1 ban3">
          <img
            src="../assets/img/logo.png"
            alt
          >
        </div>
        <div class="clearDiv ban1 ban2 ban4">
          <a href>会员登录</a>
        </div>
        <div class="clearDiv ban1 ban2 ban5">
          <a href>
            我不是会员？立即注册
            <img
              src="../assets/img/login.png"
              alt
            >
          </a>
        </div>
      </div>
    </div>
    <div class="bac1">
      <div class="content">
        <div class="box">
          <h3>会员注册</h3>
          <p class="clearDiv">
            <label for>手机号</label>
            <input
              type="text"
              v-model="phone"
              placeholder="请填写您的手机"
              @blur="checkPhone"
            >
            <span class="tip">{{phoneTip}}</span>
          </p>
          <p class="clearDiv">
            <label for>设置密码</label>
            <input
              type="text"
              v-model="password"
              placeholder="建议使用至少两种字符组合"
              @blur="checkPwd"
            >
            <span class="tip">{{pwdTip}}</span>
          </p>
          <p class="clearDiv">
            <label for>验证码</label>
            <input
              type="text"
              v-model="code"
              placeholder="请输入验证码"
              class="code-input"
              @blur="checkCode"
            >
            <button
              class="code-btn"
              @click="getCode"
              :disabled="isActive"
              :class="{colorActive:isActive}"
            >{{showPin}}</button>
            <span class="tip">{{codeTip}}</span>
          </p>
          <div class="deal">
            <input
              type="checkbox"
              v-model="agree"
            >我已阅读并同意用户注册协议
          </div>
          <div class="btn">
            <button
              class="zhuce"
              @click="register"
            >立即注册</button>
            <span class="msg">{{msg}}</span>
          </div>
          <button @click="getaa">dsds</button>
          <img :src="imgs" alt="">
          <input type="text" v-model="abc"  class="pp">
          <input type="button" @click="yanzheng" value="验证">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      phone: "",
      phoneTip: "",
      code: "",
      codeTip: "",
      password: "",
      pwdTip: "",
      showPin: "获取验证码",
      isActive: false,
      msg: "",
      agree: true,
      imgs:'',
      abc:''
    };
  },
  methods: {
    //判断手机号码
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        return false;
      } else {
        this.phoneTip = "";
        return true;
      }
    },
    //判断验证码
    checkCode() {
      if (!/^\d{6}$/.test(this.code)) {
        this.codeTip = "请输入正确的验证码";
      } else {
        this.codeTip = "";
      }
    },
    //判断密码
    checkPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.password)) {
        this.pwdTip = "密码不正确";
        return false;
      } else {
        this.pwdTip = "";
        return true;
      }
    },
    //获取验证码
    getCode() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.isActive = false;
      } else {
        clearInterval(setsund);
        let num = 59;
        let setsund = setInterval(() => {
          this.showPin = num + "s后重新发送";
          this.isActive = true;
          num--;
          if (num < 0) {
            clearInterval(setsund);
            this.showPin = "获取验证码";
            this.isActive = false;
          }
        }, 1000);
      }
    },
    ...mapActions(["setUserData", "setUserInfo"]),
    //登录
    register() {
      if (this.agree) {
        this.msg = "请同意用户注册协议";
        return false;
      }
      if (!(this.checkPhone() && this.checkPwd()) && this.checkCode()) {
        this.msg = "请正确填写信息";
        return false;
      }
      //验证通过发起请求
      // let data = {
      //   userName: this.phone,
      //   userPwd: this.password
      // };
      let data = {
        userName: "admin1",
        userPwd: "admin"
      };
      let datas = this.$tool.formatDatas(data);
      //请求注册接口
      // let data1 = {
      //   phone:'',
      //   password:'',
        

      // }
      // console.log(0)
      // this.$post('/tourist/regist',data1).then((res) =>{
      //   console.log(res);
      //   // this.phone=res.
      // })
    },
    getaa(){
      this.$fetch('/tourist/getKaptcha',{params:{}}).then((res)=>{
        
        this.imgs = 'data:image/png;base64,'+res;
      })
     
    },
    yanzheng(){
      this.$fetch('/tourist/checkKaptcha',{picCode:this.abc}).then((res)=>{
        console.log(res);
        // this.abc=res.data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.pp{
  border: 1px solid  #0764e9;
}
.bac {
  background-color: #0764e9;
  height: 106px;
  .ban {
    width: 1200px;
    margin: 0 auto;
    div {
      img {
        float: left;
      }
      a {
        float: left;
        color: #fff;
      }
    }
    .ban1 {
      float: left;
    }
    .ban2 {
      margin-top: 41px;
    }
    .ban3 {
      img {
        margin-top: 24px;
      }
    }
    .ban4 {
      margin-left: 40px;
      a {
        border-left: 1px solid #fff;
        padding-left: 22px;
      }
    }
    .ban5 {
      float: right;
      position: relative;
      a {
        font-size: 14px;
      }
      img {
        float: right;
        margin-left: 10px;
      }
    }
  }
}
.bac1 {
  background-image: url(../assets/img/login-bg.png);
  background-size: 1920px 100%;
  height: 768px;
  overflow: hidden;
  .content {
    width: 1200px;
    margin: 115px auto;
    clear: both;
    .box {
      float: right;
      width: 504px;
      height: 497px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 7px 0px rgba(99, 99, 99, 0.32);
      padding: 43px 60px 0 60px;
      h3 {
        font-size: 18px;
        color: rgba(7, 100, 233, 1);
        padding-bottom: 5px;
        border-bottom: 2px solid rgba(7, 100, 233, 1);
        width: 75px;
      }
      p {
        width: 379px;
        height: 42px;
        line-height: 42px;
        background: rgba(247, 247, 247, 1);
        margin-top: 30px;
        position: relative;
        * {
          float: left;
        }
        label {
          height: 100%;
          text-indent: 10px;
          width: 20%;
        }
        input {
          background: rgba(247, 247, 247, 1);
          width: 80%;
          height: 100%;
          text-indent: 10px;
        }
        .tip {
          position: absolute;
          color: red;
          font-size: 12px;
          left: 10px;
          bottom: -30px;
        }
        input::-webkit-input-placeholder {
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: rgba(153, 153, 153, 1);
          font-size: 12px;
        }
        .code-input {
          width: 52%;
        }
        .code-btn {
          height: 100%;
          width: 28%;
          background: rgba(109, 196, 38, 1);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .colorActive {
          background: #cbcbcb;
        }
      }
      .deal {
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        clear: both;
        margin-top: 23px;
        input {
          height: 12px;
          float: left;
        }
      }
      .btn {
        position: relative;
        .zhuce {
          width: 379px;
          height: 47px;
          background: rgba(7, 100, 233, 1);
          margin-top: 44px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        .msg {
          position: absolute;
          color: red;
          font-size: 12px;
          left: 10px;
          bottom: -18px;
        }
      }
    }
  }
}
</style>
