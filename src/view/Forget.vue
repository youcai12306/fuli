<template>
  <div class="body">
    <!-- 头部 -->
    <div class="bac clearDiv">
      <div class="ban clearDiv">
        <div class="clearDiv ban1 ban3">
          <img src="../assets/img/logo.png" alt>
        </div>
        <div class="clearDiv ban1 ban2 ban4">
          <a href>忘记密码</a>
        </div>
        <div class="clearDiv ban1 ban2 ban5">
          <a href>
            我不是会员？立即注册
            <img src="../assets/img/login.png" alt>
          </a>
        </div>
      </div>
    </div>
    <!-- 忘记密码页面 -->
    <div class="fo1">
      <div class="fo3">
        <el-steps :active="active" finish-status="success">
          <el-step title="填写账户名"></el-step>
          <el-step title="设置新密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <!-- 填写用户名 -->
        <div class="fo2" v-if="0===flag">
          <div class="fo4">
            <input type="text" placeholder="手机号" v-model="phone" @blur="checkPhone" :change="can">
            <span>{{phoneTip}}</span>
          </div>
          <div class="fo5">
            <input type="text" placeholder="请输入验证码" @blur="checkCode" v-model="code">
            <button
              class="bac8"
              @click="getCode"
              :disabled="isActive"
              :class="{colorActive:isActive}"
            >{{showPin}}</button>
            <span>{{codeTip}}</span>
          </div>
          <el-button style="margin-top: 34px;" @click="next">下一步</el-button>
        </div>
        <!-- 设置新密码 -->
        <div class="fo2" v-else-if="1===flag">
          <div class="fo4">
            <input type="text" placeholder="请输入新密码">
          </div>
          <div class="fo7">
            <input type="text" placeholder="请再次输入新密码">
          </div>
          <el-button style="margin-top: 34px;" @click="next">下一步</el-button>
        </div>
        <!-- 确认 -->
        <div v-else class="fo6">
          <el-row>
            <el-button type="success" icon="el-icon-check" circle></el-button>
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
      active: 0,
      flag: 0,
      showPin: "获取验证码",
      isActive: true,
      codeTip: "",
      code: "",
      phone: "",
      phoneTip: ""
    };
  },
  computed:{
    can(){
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      return this.isActive;
    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      if(this.flag === 0){
        // this.
      }
      this.flag++;
    },
    //判断手机号
    checkPhone() {
      console.log(111)
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isActive = true;
        this.isOk = false;
        return false;
      } else {
        this.phoneTip = "";
        this.isActive = false;
        this.isOk = true;
      }
    },
    //获取验证码
    getCode() {
      let that = this;
      clearInterval(that.setsund);
      this.$fetch("http://192.168.2.34:5050/tourist/getSmsCode", { mobile: this.phone,smsFlag:'sms_back'}).then(res => {
        if (res.code === 200) {
          this.isActive = true;
          let num = 59;
          that.setsund = setInterval(() => {
            this.showPin = num + "s后重新发送";
            num--;
            if (num < 0) {
              clearInterval(that.setsund);
              this.showPin = "获取验证码";
              this.isActive = false;
            }
          }, 1000);
        } else {
          //this.isActive = false;
          this.codeTip1 = res.message;
        }
      });
    },
    //判断验证码
    checkCode() {
      if (!/^\d{4}$/.test(this.code)) {
        this.codeTip = "请输入正确的验证码";
      } else {
        this.codeTip = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.body {
  background-color: #e3e3e3;
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
    input {
      //   float:left;
      width: 272px;
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
    input {
      width: 272px;
    }
    span {
      color: red;
      font-size: 12px;
    }
  }
  .fo5 {
    margin-top: 35px;
    span {
      color: red;
      font-size: 12px;
    }
    input {
      width: 167px;
      float: left;
    }
    button {
      background-color: #6dc426;
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
  overflow: hidden;
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

.el-button > span {
  color: #fff;
}
</style>
