<template>
  <div>
    <div class="bac clearDiv">
    	<div class="ban clearDiv">
    		<div class="clearDiv ban1 ban3">
    			<router-link to="/index">
    				<img src="../assets/img/logo.png" alt>
    			</router-link>
    		</div>
    		<div class="clearDiv ban1 ban2 ban4">
    			<router-link to="/login">
    				会员登录
    			</router-link>
    		</div>
    		<div class="clearDiv ban1 ban2 ban5">
    			<router-link to='/register'>
    				我不是会员？立即注册
    				<img src="../assets/img/login.png" alt>
    			</router-link>
    		</div>
    	</div>
    </div>
    <div class="bac1">
      <div class="bac1-content clearDiv">
        <div class="bac2">
          <div class="bac3 clearDiv">
            <a href class="bac4" @click.prevent="changeLoginType(0)">手机号登录</a>
            <a href @click.prevent="changeLoginType(1)">账号密码登录</a>
          </div>
          <div class="bac5">
            <div class="phone">
              <input type="text" placeholder="手机号" class="inp" v-model="phone" @blur="checkPhone">
              <span>{{phoneTip}}</span>
            </div>
            <div class="bac66">
              <div v-show="showLogin === 0" class="code">
                <input
                  type="text"
                  placeholder="短信验证码"
                  class="inp2"
                  v-model="code"
                  @blur="checkCode"
                >
                <button class="bac8" @click="getCode" :disabled="isActive">{{showPin}}</button>
                <span>{{codeTip}}</span>
              </div>
              <div v-show="showLogin === 1" class="password">
                <input
                  type="password"
                  placeholder="请输入密码"
                  class="inp"
                  v-model="password"
                  @blur="checkPwd"
                >
                <span>{{pwdTip}}</span>
              </div>
            </div>
            <div class="bac7">
              <a href="javascript:;" @click="jumpForget">忘记密码?</a>
            </div>
            <div class="bac6 login">
              <button class="bac9" @click="login">登录</button>
              <span>{{msg}}</span>
            </div>
            <div>
              <img src="../assets/img/qita.png" alt>
            </div>
          </div>
          <div class="bac10 clearDiv">
            <div class="bac11">
              <a href>
                <img src="../assets/img/login-wexin.png" alt>
                <p>微信登录</p>
              </a>
            </div>
            <div class="bac12">
              <a href>
                <img src="../assets/img/login-qq.png" alt>
                <p>QQ登录</p>
              </a>
            </div>
          </div>
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
      showLogin: 1,
      phone: '',
      phoneTip: '',
      code: '',
      codeTip: '',
      password: '',
      pwdTip: '',
      showPin: '获取验证码',
      isActive: false,
      msg: '',
      img:''
    };
  },
  methods: {
    //判断手机号码
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isOk = false
        return false;
      } else {
        this.phoneTip = "";
        this.isOk = true
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
        this.isOk1 = false
        return false;
      } else {
        this.pwdTip = "";
        this.isOk1 = true
        return true;
      }
    },
    //清空提示信息
    changeLoginType(type) {
      this.showLogin = type;
      this.phoneTip = "";
      this.codeTip = "";
      this.pwdTip = "";
    },
    //获取验证码
    getCode() {
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
    },
    //跳转忘记密码
    jumpForget() {
      this.$router.push("/forget");
    },
    ...mapActions(["setUserData", "setUserInfo"]),
    //登录
    login() {
      if (this.showLogin === 0) {
        // if (!(this.isOk && this.isOk1)) {
        //   this.msg = "手机号或者密码不正确"
        //   return false;
        // }
      } else {
        if (!(this.isOk && this.isOk1)) {
          this.msg = "手机号或者密码不正确"
          return false;
        }
        //验证通过发起请求
        let data = {
          mobile: this.phone,
          passWord: this.password
        };
        this.$post("http://192.168.2.50:5010/tourist-aggregate/login",data,{headers:{'Content-Type':'application/json;charset=UTF-8'}}).then(res => {
          if (res.code === 200) {
            console.log(res)
            this.setUserInfo(data);
            this.setUserData(res.data);
            this.$router.replace("/index");
          } else {
             this.msg = res.message;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #333;
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
  height: 768px;
  overflow: hidden;
  .bac1-content {
    width: 1200px;
    margin: 0 auto;
  }
  .bac2 {
    float: right;
    background-color: #fff;
    margin-top: 100px;
    width: 504px;
    height: 497px;
    .bac3 {
      padding-top: 43px;
      margin-left: 112px;
      padding-bottom: 23px;
      a {
        float: left;
        padding: 0 18px;
      }
      .bac4 {
        border-right: 1px solid #c3c3c3;
      }
    }
  }
  input::-ms-input-placeholder {
    // padding-left: 12px;
    font-size: 14px;
  }
  input::-webkit-input-placeholder {
    // padding-left: 12px;
    font-size: 14px;
  }
  .bac5 {
    margin: 0 62px;
    .phone {
      position: relative;
      input {
        width: 379px;
        height: 42px;
        border: none;
        background-color: #f7f7f7;
        text-indent: 10px;
      }
      span {
        position: absolute;
        left: 10px;
        bottom: -20px;
        color: red;
        font-size: 12px;
      }
    }
    .bac66 {
      height: 42px;
      line-height: 42px;
      margin-top: 31px;
      .code,
      .password {
        height: 100%;
        position: relative;
        color: red;
        font-size: 12px;
        span {
          padding-left: 10px;
          position: absolute;
          bottom: -32px;
        }
        input {
          width: 379px;
          height: 42px;
          border: none;
          background-color: #f7f7f7;
          text-indent: 10px;
        }
      }
      .code {
        position: relative;
        input {
          width: 274px;
        }
        input,
        button {
          float: left;
        }
        .bac8 {
          width: 105px;
          height: 42px;
          background-color: #6dc426;
          color: #fff;
          border: none;
          vertical-align: middle;
        }
        span {
          position: absolute;
          left: 0;
          bottom: -35px;
        }
      }
    }
    .bac7 {
      margin-top: 16px;
      clear: both;
      height: 14px;
      a {
        float: right;
        font-size: 14px;
        height: 14px;
        line-height: 14px;
      }
    }
    .bac6 {
      margin-top: 25px;
      margin-bottom: 50px;
      .bac9 {
        width: 379px;
        height: 47px;
        border: none;
        color: #fff;
        background-color: #0764e9;
      }
    }
    .login {
      position: relative;
      height: 47px;
      span {
        position: absolute;
        color: red;
        font-size: 12px;
        padding-left: 10px;
        top: 50px;
      }
    }
  }
  .bac10 {
    margin-left: 117px;
    margin-top: 30px;
    .bac11 {
      a {
        float: left;
        img {
          float: left;
        }
        p {
          float: left;
          margin-top: 6px;
          margin-left: 6px;
          color: #999;
        }
      }
      float: left;
      margin-right: 76px;
    }
    .bac12 {
      a {
        float: left;
        img {
          float: left;
        }
        p {
          float: left;
          margin-top: 6px;
          margin-left: 6px;
          color: #999;
        }
      }
      float: left;
    }
  }
}
.fot {
  height: 264px;
}
</style>
