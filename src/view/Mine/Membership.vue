<template>
  <div class="main">
    <div class="member-info">
      <p class="change-title clearDiv">
        会员资料
        <span class="know floatRight">会员须知</span>
      </p>
      <div class="change-content">
        <p>
          <label for>姓名：</label>
          <input type="text" @blur="testName" v-model="name" placeholder="请输入您的姓名">
          <span class="tip" ref="nameTip">{{nameTip}}</span>
        </p>
        <p>
          <label for>姓别：</label>
          <input type="radio" value class="sex" name="sex">
          <span>男</span>
          <input type="radio" value class="sex sex1" name="sex">
          <span>女</span>
        </p>
        <p>
          <label for>手机号码：</label>
          <input type="text"  class="phone" v-model="phone" maxlength="11" @blur="testPhone" placeholder="请输入11位手机号码">
          <span class="tip" ref="phoneTip">{{phoneTip}}</span>
        </p>
        <p class="code">
          <label for>验证码：</label>
          <input type="text" class="code" v-model="code" placeholder="请输入验证码">
          <button @click="setCode">{{showPin}}</button>
        </p>
        <p>
          <label for>身份证号：</label>
          <input type="text" placeholder="请填写身份证号" v-model="IdCard" @blur="testIdCard">
          <span class="tip" ref="IdCardTip">{{IdCardTip}}</span>
        </p>
        <p>
          <label for>联系邮箱：</label>
          <input type="text" placeholder="请填写邮箱" v-model="email" @blur="testEmail">
          <span class="tip" ref="emailTip">{{emailTip}}</span>
        </p>
        <p class="address">
          <label for class="floatLeft">所在地区：</label>
          <v-distpicker
            :placeholders="{province: '请选择', city: '请选择', area: '请选择'}"
            @selected="selected"
            class="floatLeft"
          ></v-distpicker>
        </p>
        <p>
          <label for>具体地址：</label>
          <input type="text" placeholder="请填写具体地址">
        </p>
        <p class="bing-type">
          <label for>绑定方式：</label>
          <img src="../../assets/img/mine-weixin.png" :class="{imgType1:bingType === 0}" alt @click="chooseBindType(0)">
          <img src="../../assets/img/mine-zhifubao.png" :class="{imgType1:bingType === 1}" alt @click="chooseBindType(1)">
        </p>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      name:'',
      nameTip:'',
      phone:'',
      phoneTip:'',
      IdCard:'',
      IdCardTip:'',
      email:'',
      emailTip:'',
      code:'',
      showPin: "获取验证码",
      bingType:0
    };
  },
  components: {
    VDistpicker
  },
  methods: {
    //检测用户名合法性
    testName(){
      if(this.name.replace(/(^\s*)|(\s*)$/g,"").length>0){
        this.nameTip = "√"
        this.$refs.nameTip.style.color = "green"
      }else{
        this.$refs.nameTip.style.color = "red"
        this.nameTip = "请输入您的姓名"
      }
    },
    //检测手机号码合法性
    testPhone(){
      if(/^1[34578]\d{9}$/.test(this.phone)){
        this.phoneTip = "√"
        this.$refs.phoneTip.style.color = "green"
      }else{
        this.phoneTip = "请输入正确的手机号码"
        this.$refs.phoneTip.style.color = "red"
      }
    },
    
    //检测身份证的合法性
    testIdCard(){
      const Reg18 = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)[\dxX]$/i;
      const Reg15 = /^(\d{6})(\d{2})(\d{2})(\d{2})\d{2}(\d)$/i;
      if(Reg18.test(this.IdCard)||Reg15.test(this.IdCard)){
        this.IdCardTip = "√"
        this.$refs.IdCardTip.style.color = "green"
      }else{
        this.IdCardTip = "请输入正确的身份证号码"
        this.$refs.IdCardTip.style.color = "red"
      }
    },
    //检测邮箱合法性
    testEmail(){
      const Reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      console.log(this.email)
      if(Reg.test(this.email)){
        this.emailTip = "√"
        this.$refs.emailTip.style.color = "green"
      }else{
        this.emailTip = "请输入正确的邮箱地址"
        this.$refs.emailTip.style.color = "red"
      }
    },
    selected(val) {
      console.log(val);
    },
    setCode() {
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
    chooseBindType(type){
      this.bingType = type;
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .member-info {
    .change-title {
      font-size: 16px;
      color: #333333;
      padding-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
      .know {
        font-size: 12px;
        width: 68px;
        height: 27px;
        line-height: 27px;
        border-radius: 5px;
        border: 1px solid #7ea9ff;
        text-align: center;
        color: #7ea9ff;
      }
    }
    .change-content {
      padding-top: 47px;
      p {
        height: 40px;
        line-height: 40px;
        margin-bottom: 30px;
        font-size: 14px;
        label {
          text-align: left;
          width: 10%;
          display: inline-block;
        }
        input {
          width: 360px;
          height: 40px;
          border: solid 1px #c5c5c5;
          text-indent: 14px;
        }
        .sex {
          width: 10px;
          height: 10px;
          background: rgba(112, 112, 112, 1);
          margin-right: 10px;
        }
        .sex1 {
          margin-left: 34px;
        }
        select {
          width: 110px;
          height: 40px;
          border: solid 1px #c5c5c5;
          margin-right: 10px;
        }
        .tip {
          display: inline-block;
          padding-left: 20px;
          color: #999;
        }
        .tipSelected{
          color: green;
        }
      }
      .code {
        margin-left: 2px;
        * {
          float: left;
        }
        input {
          width: 260px;
        }
        button {
          width: 103px;
          margin-left: 0;
        }
      }
      .bing-type {
        height: 53px;
        line-height: 53px;
        margin-left: 2px;
        * {
          float: left;
        }
        img {
          width: 143px;
          height: 53px;
          margin-right: 31px;
        }
        .imgType1 {
          border: 1px solid rgba(102, 102, 102, 1);
        }
      }
      button {
        width: 293px;
        height: 40px;
        background-color: #0764e9;
        font-size: 14px;
        color: #ffffff;
        margin-left: 87px;
      }
    }
  }
}
</style>
<style scoped>
.address >>> select {
  width: 110px;
  height: 40px;
  border: solid 1px #c5c5c5;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 0;
  margin-left: 3px;
}
</style>
