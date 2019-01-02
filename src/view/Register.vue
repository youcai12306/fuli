<template>
  <div>
    <div class="bac clearDiv">
      <div class="ban clearDiv">
        <div class="clearDiv ban1 ban3">
          <router-link to="/index">
            <img src="../assets/img/content-bg.png" alt>
          </router-link>
        </div>
        <div class="clearDiv ban1 ban2 ban4">
          <router-link to="/login">会员登录</router-link>
        </div>
        <div class="clearDiv ban1 ban2 ban5">
          <router-link to="/register">
            我不是会员？立即注册
            <img src="../assets/img/login.png" alt>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bac1">
      <div class="content">
        <div class="box">
          <h3>会员注册</h3>
          <div class="step1" v-if="step">
            <p class="clearDiv">
              <label for>手机号</label>
              <input type="text" v-model="phone" placeholder="请填写您的手机" @blur="checkPhone" >
              <span class="tip">{{phoneTip}}</span>
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
              <img :src="codeImg" alt @click="getCode">
              <span class="tip">{{codeTip}}</span>
            </p>
            <div class="deal">
              <input type="checkbox" v-model="agree">我已阅读并同意用户注册协议
            </div>
            <div class="btn">
              <button class="zhuce" @click="register">立即注册</button>
              <span class="msg">{{msg}}</span>
            </div>
          </div>
          <div class="step2" v-else>
            <h4 class="title1">填写短信验证码密码完成注册</h4>
            <h4 class="title2">短信验证码已发送至{{this.phone}}</h4>
            <p class="clearDiv">
              <label for>验证码</label>
              <input
                type="text"
                placeholder="请输入短信验证码"
                class="code-input"
                v-model="code1"
                @blur="checkCode1"
              >
              <button
                @click="getCode1"
                :disabled="isActive"
                :class="{colorActive:isActive}"
              >{{showPin}}</button>
              <span class="codeTip1">{{codeTip1}}</span>
            </p>
            <p class="clearDiv">
              <label for>密码</label>
              <input
                type="password"
                placeholder="6-16位密码，区分大小写，不能用空格"
                v-model="password"
                @blur="checkPwd"
              >
              <span class="pwdTip">{{pwdTip}}</span>
            </p>
            <moveBox></moveBox>
            <div class="btn">
              <button class="zhuce" @click="register2">完成</button>
              <span class="msg">{{msg1}}</span>
            </div>
            <div class="back" @click="back()">返回修改手机号</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { setCookie } from "../package/cookie";
import moveBox from "../components/movebox";
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      phoneTip: "",
      code: "",
      codeTip: "",
      codeImg: "",
      code1: "",
      codeTip1: "",
      password: "",
      pwdTip: "",
      msg: "",
      msg1: "",
      agree: true,
      times:"",
      isActive: false,
      showPin: "获取验证码",
      step: true
    };
  },
  components: {
    moveBox
  },
  mounted() {
    this.getCode();
  },
  methods: {
    //显示图形验证码
    getCode() {
      this.$fetch(this.$url+":2060/user-aggregate/getKaptcha").then(
        res => {
          this.codeImg = "data:image/png;base64," + res;
        }
      );
    },
    //判断手机号码
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isOk = false;
      } else {
        this.$fetch(
          this.$url+
          ":2060/user-aggregate/checkIsRegist",
          { mobile: this.phone }
        ).then(res => {
          if (res.code === 200) {
            this.phoneTip = "";
            this.isOk = true;
          } else {
            this.phoneTip = res.message;
            this.isOk = false;
          }
        });
      }
    },
    //返回上一步
    back(){
      clearInterval(this.times);
      this.step = ! this.step;
      this.phone = '';
      this.phoneTip = '';
      this.code = '';
      this.codeTip = '';
      this.msg = '';
      this.getCode();
    },
    //验证验证码是否正确
    checkCode() {
      if (!/^[a-zA-Z0-9]{4}$/.test(this.code)) {
        this.codeTip = "请输入正确的验证码";
        this.isOk1 = false;
        return false;
      } else {
        this.$fetch(this.$url+":2060/user-aggregate/checkKaptcha", {
          picCode: this.code
        }).then(res => {
          if (res.code === 200) {
            this.codeTip = "";
            this.isOk1 = true;
          } else {
            this.codeTip = res.message;
            this.isOk1 = false;
            return false;
          }
        });
      }
    },
    //注册第一步
    register() {
      if (!this.agree) {
        this.$message.error('"请同意用户注册协议');
        return false;
      }
      if(this.phone == ''){
        this.$message.error('"手机号不能为空');
        return false;
      }
      if(this.code == ''){
        this.$message.error('"验证码不能为空');
        return false;
      }
      if (!(this.isOk && this.isOk1)) {
        return false;
      } else {
        //验证通过发起请求
        this.step = !this.step;
        this.code1 = '';
        this.codeTip1 = '';
        this.password = '';
        this.pwdTip = '';
        this.msg1 = '';
        this.getCode1();
      }
    },
    //获取短信验证码
    getCode1() {
      clearInterval(this.times);
      this.isActive = true;
      this.$fetch(this.$url+":2060/user-aggregate/getSmsCode", {
        mobile: this.phone,
        smsFlag: "sms_code"
      }).then(res => {
        if (res.code === 200) { 
          let num = 59;
          this.times = setInterval(() => {
            this.showPin = num + "s后重新发送";
            num--;
            if (num < 0) {
              clearInterval(this.times);
              this.showPin = "重新获取";
              this.isActive = false;
            }
          }, 1000);
        } else {
          this.isActive = true;
          this.codeTip1 = res.message;
        }
      });
    },
    //检查验证码
    checkCode1() {
      //校验数位
      if (!/^\d{4}$/.test(this.code1)) {
        this.codeTip1 = "请输入正确的验证码";
        return false;
      } else {
        this.$fetch(this.$url+":2060/user-aggregate/checkSmsCode", {
          smsCode: this.code1,
          smsFlag: 'sms_code'
        }).then(res => {
          if (res.code === 200) {
            this.codeTip1 = "";
            this.isOk2 = true;
            return true;
          } else {
            this.codeTip1 = res.message;
            this.isOk2 = false;
            return false;
          }
        });
      }
    },
    //检查密码
    checkPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.password)) {
        this.pwdTip = "请填写6-10位数的英文或数字密码";
        this.isOk3 = false;
        return false;
      } else {
        this.pwdTip = "";
        this.isOk3 = true;
        return true;
      }
    },
    //注册第二步
    register2() {
      if (!sessionStorage.getItem("move")) {
        this.$message.error('请滑动滑块到最右侧');
        return;
      }
      if(this.code1 == ''){
        this.$message.error('验证码不能为空');
        return;
      }
      if(this.password == ''){
        this.$message.error('密码不能为空');
        return;
      }
      if (!(this.isOk2 && this.isOk3)) {
        return false;
      } else {
        //注册接口
        this.$post(this.$url+
          ":2060/user-aggregate/regist",
          { mobile: this.phone, passWord: this.password, smsCode: this.code1 },
          { headers: { "Content-Type": "application/json;charset=UTF-8" } }
        ).then(res => {
          if (res.code === 200) {
            this.$message({
              type: "success",
              message: "注册成功"
            });
            this.$router.push("/login");
          } else {
            this.$message.error(res.message);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pp {
  border: 1px solid #0764e9;
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
      .step1 {
        p {
          width: 379px;
          height: 42px;
          line-height: 42px;
          background: rgba(247, 247, 247, 1);
          margin-top: 40px;
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
          img {
            height: 100%;
            width: 28%;
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
            cursor: pointer;
            width: 379px;
            height: 47px;
            background: rgba(7, 100, 233, 1);
            margin-top: 60px;
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
      .step2 {
        margin-top: 35px;
        .title1 {
          width: 100%;
          font-size: 16px;
          color: #1c1f21;
          text-align: center;
          line-height: 24px;
        }
        .title2 {
          text-align: center;
          font-size: 14px;
          color: #545c63;
          line-height: 22px;
          margin-bottom: 20px;
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
          span {
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
          button {
            width: 28%;
            height: 100%;
            background: rgba(109, 196, 38, 1);
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
          .colorActive {
            background: #cbcbcb;
          }
        }
        .btn {
          position: relative;
          .zhuce {
            width: 379px;
            height: 47px;
            background: rgba(7, 100, 233, 1);
            margin-top: 30px;
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
        .back {
          width: 100%;
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          margin-top: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
