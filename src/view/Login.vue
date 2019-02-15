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
          <router-link to="/login">{{$t('Login.Text')}}</router-link>
        </div>
        <div class="clearDiv ban1 ban2 ban5">
          <router-link to="/register">
            {{$t('Login.Text1')}}
            <img src="../assets/img/login.png" alt>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bac1">
      <div class="bac1-content clearDiv">
        <div class="bac2">
          <div class="bac3 clearDiv">
            <!-- <a href="javascript:;" class="bac4">{{$t('Login.Text2')}}</a> -->
            <a href @click.prevent="changeLoginType(1)" class="a">{{$t('Login.Text3')}}</a>
          </div>
          <div class="bac5">
            <div class="phone">
              <input type="text" :placeholder="$t('Login.Text4')" class="inp" v-model="phone" @blur="checkPhone">
              <span>{{phoneTip}}</span>
            </div>
            <div class="bac66">
              <div v-show="showLogin === 0" class="code">
                <input
                  type="text"
                  :placeholder="$t('Login.Text5')"
                  class="inp2"
                  v-model="code"
                  @blur="checkCode"
                >
                <button class="bac8" @click="getCode" :disabled="isActive">{{showPin}}</button>
                <span>{{codeTip}}</span>
              </div>
              <div v-show="showLogin === 1" class="password">
                <input type="password" :placeholder="$t('Login.Text6')" class="inp" v-model="password" @keyup.enter="login">
              </div>
            </div>
            <div class="bac7">
              <a href="javascript:;" @click="jumpForget">{{$t('Login.Text7')}}</a>
            </div>
            <div class="bac6 login">
              <button class="bac9" @click="login">{{$t('Login.Text8')}}</button>
              <span>{{msg}}</span>
            </div>
            <!-- <div>
              <img src="../assets/img/qita.png" alt>
            </div> -->
          </div>
          <!-- <div class="bac10 clearDiv">
            <div class="bac11">
              <a href>
                <img src="../assets/img/login-wexin.png" alt>
                <p>{{$t('Login.Text9')}}</p>
              </a>
            </div>
            <div class="bac12">
              <a href>
                <img src="../assets/img/login-qq.png" alt>
                <p>{{$t('Login.Text10')}}</p>
              </a>
            </div>
          </div> -->
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
      phone: "",
      phoneTip: "",
      code: "",
      codeTip: "",
      password: "",
      showPin: "获取验证码",
      isActive: false,
      msg: ""
    };
  },
  methods: {
    //判断手机号码
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isOk = false;
      } else {
        this.phoneTip = "";
        this.isOk = true;
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
    //清空提示信息
    changeLoginType(type) {
      this.showLogin = type;
      this.phoneTip = "";
      this.codeTip = "";
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
        if (this.phone == "") {
          this.$message.error('"手机号不能为空');
          return;
        }
        if (this.password == "") {
          this.$message.error('"密码不能为空');
          return;
        }
        if (!this.isOk) {
          return;
        }
        //验证通过发起请求
        let data = {
          mobile: this.phone,
          passWord: this.password
        };
        this.$post(this.$url+":2060/user-aggregate/login", data, 
        {                                                                                                                              
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        }).then(res => {
          if (res.code === 200) {
            this.setUserInfo({mobile: this.phone});
            this.setUserData(res.data);
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$router.replace("/index");
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
      // margin-left: 112px;
      margin-left:186px;
      padding-bottom: 23px;
      a {
        float: left;
        padding: 0 18px;
         font-weight: bold;
        position: relative;
      }
      .a {
        color: #0764e9;
        &::after {
          position: absolute;
          content: "";
          width: 60px;
          height: 4px;
          background: #0764e9;
          position: absolute;
          left: 38px;
          top: 27px;
        }
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
          left: 10px;
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
        cursor: pointer;
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
