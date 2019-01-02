<template>
  <div class="body">
    <!-- 头部 -->
    <div class="bac clearDiv">
      <div class="ban clearDiv">
        <div class="clearDiv ban1 ban3">
          <router-link to="/index">
            <img src="../assets/img/logo.png" alt>
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
    <!-- 忘记密码页面 -->
    <div class="fo1">
      <div class="fo3">
        <!-- <el-steps :active="active" finish-status="success">
          <el-step title="填写账户名"></el-step>
          <el-step title="设置新密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>-->
        <div class="for-liucheng">
          <div class="liulist forcur1"></div>
          <div class="liulist" :class="{forcur1:step2}"></div>
          <div class="liulist" :class="{forcur1:step3}"></div>
          <div class="liutextbox">
            <div class="liutext forcur">
                <em>1</em>
                <br>
                <strong>填写账户名</strong> 
            </div>
            <div class="liutext" :class="{forcur:step2}">
                <em>2</em>
                <br>
                <strong>设置新密码</strong>
            </div>
            <div class="liutext" :class="{forcur:step3}">
                <em>3</em>
                <br>
                <strong>完成</strong>
            </div>
          </div>
        </div>
        <!-- 填写用户名 -->
        <div class="fo2" v-if="1===this.active">
          <div class="fo4">
            <input type="text" placeholder="手机号" v-model="phone" @blur="checkPhone">
            <span>{{phoneTip}}</span>
          </div>
          <div class="fo5">
            <input type="text" placeholder="请输入验证码" @blur="checkCode" v-model="code">
            <button
              class="bac8"
              @click="getCode"
              :disabled="can"
              :class="{colorActive:can}"
            >{{showPin}}</button>
            <span>{{codeTip}}</span>
          </div>
          <el-button style="margin-top: 34px;" @click="next1">下一步</el-button>
        </div>
        <!-- 设置新密码 -->
        <div class="fo2" v-else-if="2===this.active">
          <div class="fo4">
            <input type="password" placeholder="请输入新密码" v-model="password" @blur="checkPwd">
            <span>{{pwdTip}}</span>
          </div>
          <div class="fo7">
            <input
              type="password"
              placeholder="请再次输入新密码"
              v-model="confirmPassword"
              @blur="checkConfirmPwd"
            >
            <span>{{confirmPwdTip}}</span>
          </div>
          <el-button style="margin-top: 34px;" @click="next2">下一步</el-button>
        </div>
        <!-- 确认 -->
        <div v-else class="fo6">
          <el-row>
            <el-button type="success" icon="el-icon-check" circle @click="jumpLogin"></el-button>
          </el-row>确认
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      flag: 0,
      showPin: "获取验证码",
      isActive: true,
      codeTip: "",
      code: "",
      phone: "",
      phoneTip: "",
      password: "",
      pwdTip: "",
      confirmPassword: "",
      confirmPwdTip: "",
      step2:false,
      step3:false
    };
  },
  computed: {
    can() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        return true;
      } else {
        this.phoneTip = "";
        if (this.isActive) {
          return false;
        } else {
          return true;
        }
      }
      return this.isActive;
    }
  },
  methods: {
    //判断手机号
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isOk = false;
        return false;
      } else {
        this.phoneTip = "";
        this.isOk = true;
        return true;
      }
    },
    //获取验证码
    getCode() {
      let that = this;
      clearInterval(that.setsund);
      this.$fetch(this.$url+":2060/user-aggregate/getSmsCode", {
        mobile: this.phone,
        smsFlag: "sms_passWord_back"
      }).then(res => {
        if (res.code === 200) {
          this.isActive = false;
          let num = 59;
          that.setsund = setInterval(() => {
            this.showPin = num + "s后重新发送";
            num--;
            if (num < 0) {
              clearInterval(that.setsund);
              this.showPin = "获取验证码";
              this.isActive = true;
            }
          }, 1000);
        } else {
          this.codeTip1 = res.message;
        }
      });
    },
    //判断验证码
    checkCode() {
      if (!/^\d{4}$/.test(this.code)) {
        this.codeTip = "请输入正确的验证码";
        return false;
      } else {
        this.codeTip = "";
        return true;
      }
    },
    //第一步
    next1() {
      if(this.phone == ''){
        this.$message.error('手机号不能为空');
        return;
      }
      if(this.code == ''){
        this.$message.error('验证码不能为空');
        return;
      }
      if (!this.checkPhone()) {
        return;
      }
      if (!this.checkCode()) {
        return;
      }
      this.$fetch(this.$url+":2060/user-aggregate/checkSmsCode", {
        smsCode: this.code,
        smsFlag:'sms_passWord_back'
      }).then(res => {
        if (res.code === 200) {
          this.active ++;
          this.step2 = true;
        } else {
          this.codeTip = res.message;
        }
      });
    },
    //检查密码
    checkPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.password)) {
        this.pwdTip = "请填写6-10位数的英文或数字密码";
        return false;
      } else {
        this.pwdTip = "";
        return true;
      }
    },
    //检查确认密码
    checkConfirmPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.confirmPassword)) {
        this.confirmPwdTip = "请填写6-10位数的英文或数字密码";
        return false;
      } else if (this.password !== this.confirmPassword) {
        this.confirmPwdTip = "两次填写的密码不正确";
        return false;
      } else {
        this.pwdTip = "";
        return true;
      }
    },
    //第二步
    next2() {
      if(this.password == '' || this.confirmPassword == ''){
        this.$message.error('密码不能为空');
        return;
      }
      if (!this.checkPwd()) {
        return;
      }
      if (!this.checkConfirmPwd()) {
        return;
      }
      this.$post(
        this.$url+
        ":2060/user-aggregate/getBackTouristPassWord",
        { mobile: this.phone, passWord: this.password, smsCode: this.code },
        { headers: { "Content-Type": "application/json;charset=UTF-8" } }
      ).then(res => {
        if (res.code === 200) {
          this.active++;
          this.step3 = true;
        }else{
           this.$message.error(res.message);
        }
      });
    },
    //跳转登录页面
    jumpLogin() {
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.body {
  background-color: #e3e3e3;
  padding-bottom: 170px;
}
input {
  border: 1px solid #d1d1d1;
  height: 36px;
  vertical-align: middle;
  text-indent: 10px;
}

// 头部样式
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
    // margin-left: 1056px;
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

    .inp {
      width: 379px;
      height: 42px;
      border: none;
      background-color: #f7f7f7;
      text-indent: 10px;
    }
    .inp2 {
      width: 275px;
      height: 42px;
      border: none;
      background-color: #f7f7f7;
      vertical-align: middle;
      text-indent: 10px;
    }
  }
}
// 忘记密码样式
.fo1 {
  background-color: #fff;
  width: 800px;
  height: 514px;
  margin: 0 auto;
  margin-top: 63px;
}
.fo2 {
  margin-top: 103px;
  margin-left: 263px;
  margin-right: 265px;
  .fo7 {
    margin-top: 35px;
    position: relative;
    input {
      width: 272px;
    }
    span {
      position: absolute;
      left: 10px;
      bottom: -18px;
      color: red;
      font-size: 12px;
    }
  }
  button {
    &:hover {
      background-color: #0764e9;
    }

    &:focus {
      background-color: #0764e9;
    }
  }
  .fo4 {
    position: relative;
    input {
      width: 272px;
    }
    span {
      position: absolute;
      left: 10px;
      bottom: -18px;
      color: red;
      font-size: 12px;
    }
  }
  .fo5 {
    position: relative;
    margin-top: 35px;
    span {
      position: absolute;
      left: 10px;
      bottom: -18px;
      color: red;
      font-size: 12px;
    }
    input {
      width: 167px;
      float: left;
    }
    button {
      background: #6dc426;
      color: #fff;
      width: 105px;
      height: 36px;
      border: none;
      vertical-align: middle;
      cursor: pointer;
      font-size: 14px;
    }
    .colorActive {
      background: #cbcbcb;
    }
  }
}
.fo3 {
  .for-liucheng {
    width: 440px;
    margin: 30px auto;
    height: 50px;
    padding: 50px 0 0 0;
    position: relative;
    .liulist {
      float: left;
      width: 33.3%;
      height: 7px;
      background: #ccc;
    }
    .forcur1{
      background: #77b852;
    }
    .liutextbox {
      position: absolute;
      width: 100%;
      left: 0;
      top: 10px;
      .liutext {
        float: left;
        width: 33.3%;
        text-align: center;
        margin-top: 30px;
        em {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 24px;
          background: #ccc;
          text-align: center;
          font-size: 14px;
          line-height: 24px;
          font-style: normal;
          font-weight: bold;
          color: #fff;
        }
        strong {
          display: inline-block;
          height: 26px;
          line-height: 26px;
          font-weight: 400;
        }
      }
      .forcur {
        em {
          background: #77b852;
        }
        .strong {
          color: #77b852;
        }
      }
    }
  }
}
.fo6 {
  text-align: center;
  margin-top: 105px;
}
</style>
<style lang="scss">
.el-step__title.is-process {
  color: #666666;
  font-weight: 400;
}
.el-steps--horizontal {
  width: 400px;
  margin-top: 58px;
  margin-left: 209px;
  margin-right: 212px;
}
.fo2 > .el-button {
  width: 272px;
  background-color: #0764e9;
}
.fo6 > .el-button.is-circle {
  padding: 20px;
}
.fo6 > .el-row {
  margin-bottom: 8px;
}
.fo2 > .el-button:hover {
  color: #0764e9 !important;
}

.body .el-button > span {
  color: #fff;
}
.el-step__title.is-success,
.el-step__title.is-process {
  text-align: center;
}
.el-step__icon {
  margin-left: 62px;
}
</style>
