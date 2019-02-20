<template>
  <div class="main">
    <div class="member-info">
      <p class="change-title clearDiv">{{$t('Personal.Text')}}</p>
      <div class="change-content">
        <!-- <p>
          <label for>{{$t('Personal.Text1')}}：</label>
          <input type="text" v-model="name" :placeholder="$t('Personal.Text2')" :disabled="showBtn1">
          <span class="change" @click="chang(0)" v-show="showBtn1">{{$t('Personal.Text3')}}</span>
          <button class="btn" v-show="!showBtn1" @click="revision(1)">{{$t('Personal.Text4')}}</button>
          <span class="tip">{{nameTip}}</span>
        </p> -->
        <!-- <p>
          <label for>{{$t('Personal.Text5')}}：</label>
          <input type="radio" value="0" class="sex" v-model="sex" @click="chooseSex(0)">
          <span class="men">{{$t('Personal.Text6')}}</span>
          <input type="radio" value="1" class="sex sex1" v-model="sex" @click="chooseSex(1)">
          <span class="men">{{$t('Personal.Text7')}}</span>
        </p> -->
        <!-- <p>
          <label for>{{$t('Personal.Text8')}}：</label>
          <input
            type="text"
            class="phone"
            v-model="phone"
            maxlength="11"
            :placeholder="$t('Personal.Text9')"
            :disabled="showBtn2"
          >
          <span class="change" @click="chang(1)" v-show="showBtn2">{{$t('Personal.Text10')}}</span>
          <button
            @click="setCode"
            class="getcode"
            v-show="!showBtn2"
            :disabled="can"
            :class="{colorActive:can}"
          >{{showPin}}</button>
          <span class="tip">{{phoneTip}}</span>
        </p> -->
        <!-- <p class="code" v-show="!showBtn2">
          <label for>&nbsp;</label>
          <input type="text" class="codes" v-model="code" :placeholder="$t('Personal.Text11')">
          <button class="btn" @click="changePhone">{{$t('Personal.Text4')}}</button>
          <span class="tip">{{codeTip}}</span>
        </p> -->
        <!-- <p>
          <label for>{{$t('Personal.Text13')}}：</label>
          <input type="text" :placeholder="$t('Personal.Text14')" v-model="IdCard" :disabled="showBtn3">
          <span class="change" @click="chang(2)" v-show="showBtn3">{{$t('Personal.Text15')}}</span>
          <button class="btn" v-show="!showBtn3" @click="revision(3)">{{$t('Personal.Text4')}}</button>
          <span class="tip" ref="IdCardTip">{{IdCardTip}}</span>
        </p> -->
        <!-- <p>
          <label for>{{$t('Personal.Text16')}}：</label>
          <input type="text" :placeholder="$t('Personal.Text17')" v-model="email" :disabled="showBtn4">
          <span class="change" @click="chang(3)" v-show="showBtn4">{{$t('Personal.Text15')}}</span>
          <button class="btn" v-show="!showBtn4" @click="revision(4)">{{$t('Personal.Text4')}}</button>
          <span class="tip" ref="emailTip">{{emailTip}}</span>
        </p> -->
        <p>
          <label for>{{$t('Personal.Text18')}}：</label>
          <input
            type="password"
            :placeholder="dateinit"
            v-model="oldPwd"
            :disabled="showBtn5"
            @blur="checkPwd()"
          >
          <span class="change" @click="chang(4)" v-show="showBtn5">{{$t('Personal.Text19')}}</span>
          <span class="tip">{{oldPwdTip}}</span>
        </p>
        <p v-show="!showBtn5">
          <label for>&nbsp;</label>
          <input type="password" :placeholder="$t('Personal.Text20')" v-model="password" @blur="checkPwd1()">
          <span class="tip">{{pwdTip}}</span>
        </p>
        <p v-show="!showBtn5">
          <label for>&nbsp;</label>
          <input
            type="password"
            :placeholder="$t('Personal.Text21')"
            v-model="rePassword"
            @blur="checkConfirmPwd()"
          >
          <button class="btn" v-show="!showBtn5" @click="changePwd">{{$t('Personal.Text4')}}</button>
          <span class="tip">{{rePwdTip}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      name: "",
      nameTip: "",
      sex: 0,
      phone: "",
      phoneTip: "",
      IdCard: "",
      IdCardTip: "",
      email: "",
      emailTip: "",
      code: "",
      codeTip: "",
      oldPwd: "",
      oldPwdTip: "",
      password: "",
      pwdTip: "",
      rePassword: "",
      rePwdTip: "",
      showPin: "获取验证码",
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
      showBtn5: true,
      isActive: true,
      isOk: false,
      isOk1: false,
      isOk2: false,
      dateinit: "******"
    };
  },
  mounted() {
    this.init()
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
    //选择性别
    chooseSex(sex) {
      this.sex = sex;
      this.changeInfo();
    },
    //显示修改框
    chang(id) {
      switch (id) {
        case 0: {
          this.showBtn1 = !this.showBtn1;
          break;
        }
        case 1: {
          this.showBtn2 = !this.showBtn2;
          break;
        }
        case 2: {
          this.showBtn3 = !this.showBtn3;
          break;
        }
        case 3: {
          this.showBtn4 = !this.showBtn4;
          break;
        }
        case 4: {
          this.showBtn5 = !this.showBtn5;
          this.dateinit = "请填写旧密码";
          break;
        }
      }
    },
    //修改信息
    revision(type) {
      //检测用户名合法性
      if (type === 1) {
        if (this.name.replace(/(^\s*)|(\s*)$/g, "").length > 0) {
          this.nameTip = "";
        } else {
          this.$refs.nameTip.style.color = "red";
          this.nameTip = "请输入正确的昵称";
          return;
        }
      } else if (type === 3) {
        //检测身份证的合法性
        const Reg18 = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)[\dxX]$/i;
        const Reg15 = /^(\d{6})(\d{2})(\d{2})(\d{2})\d{2}(\d)$/i;
        if (Reg18.test(this.IdCard) || Reg15.test(this.IdCard)) {
          this.IdCardTip = "";
        } else {
          this.IdCardTip = "请输入正确的身份证号码";
          return;
        }
      } else if (type === 4) {
        //检测邮箱合法性
        const Reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if (Reg.test(this.email)) {
          this.emailTip = "";
        } else {
          this.emailTip = "请输入正确的邮箱地址";
          return;
        }
      }
      this.changeInfo(type);
    },
    //修改信息
    changeInfo(type) {
      let data = {
        nickName: this.name,
        id: this.$store.getters.getUserData.userId,
        sex: parseInt(this.sex),
        email: this.email,
        idCard: this.IdCard
      };
      this.$post(
        `${this.$url}:2060/user-aggregate/updateTourist`,
        data
      ).then(res => {
        if (res.code === 200) {
          this.$message({
            message: "修改成功",
            type: "success"
          });
          switch (type) {
            case 1:
              this.showBtn1 = !this.showBtn1;
              break;
            case 2:
              this.showBtn2 = !this.showBtn2;
              break;
            case 3:
              this.showBtn3 = !this.showBtn3;
              break;
            case 4:
              this.showBtn4 = !this.showBtn4;
              break;
          }
        } else {
          this.$message({
            message: res.message,
            type: "error"
          });
        }
      });
    },
    //修改手机号
    changePhone() {
      if (!/^\d{4}$/.test(this.code)) {
        this.codeTip = "请输入正确的验证码";
        return;
      } else {
        this.codeTip = "";
      }
      this.$post(
        `${this.$url}:2060/user-aggregate/updateTouristMobile`,
        {
          id: this.$store.getters.getUserData.userId,
          mobile: this.phone,
          smsCode: this.code
        }
      ).then(res => {
        if (res.code === 200) {
          this.showBtn2 = !this.showBtn2;
          this.$message({
            message: "修改成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.message,
            type: "error"
          });
        }
      });
    },
    //检查老密码
    checkPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.oldPwd)) {
        this.oldPwdTip = "请填写6-10位数的英文或数字密码";
        this.isOk = false;
      } else {
        this.oldPwdTip = "";
        this.isOk = true;
      }
    },
    //检查密码
    checkPwd1() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.password)) {
        this.pwdTip = "请填写6-10位数的英文或数字密码";
        this.isOk1 = false;
      } else {
        this.pwdTip = "";
        this.isOk1 = true;
      }
    },
    //检查确认密码
    checkConfirmPwd() {
      if (!/^[a-zA-Z0-9]{6,10}$/.test(this.rePassword)) {
        this.rePwdTip = "请填写6-10位数的英文或数字密码";
        this.isOk2 = false;
      } else if (this.password !== this.rePassword) {
        this.rePwdTip = "两次填写的密码不正确";
        this.isOk2 = false;
      } else {
        this.rePwdTip = "";
        this.isOk2 = true;
      }
    },
    //修改密码
    changePwd() {
      if (this.isOk && this.isOk1 && this.isOk2) {
        this.$post(
          `${this.$url2}/api-bkf-user/user-aggregate/updateTouristPassword`,
          {
            id: this.$store.getters.getUserData.userId,
            passWord: this.password,
            oldPassWord: this.oldPwd
          }
        ).then(res => {
          if (res.code === 200) {
            this.showBtn5 = !this.showBtn5;
            this.oldPwd = "";
            this.dateinit = "******";
            this.$message({
              message: "修改成功",
              type: "success"
            });
          } else {
            this.$message({
              message: res.message,
              type: "error"
            });
          }
        });
      } else {
        return;
      }
    },
    setCode() {
      //检测手机号码合法性
      if (/^1[34578]\d{9}$/.test(this.phone)) {
        this.phoneTip = "";
      } else {
        this.phoneTip = "请输入正确的手机号码";
        return;
      }
      let that = this;
      clearInterval(that.setsund);
      this.$fetch(`${this.$url}:2060/user-aggregate/getSmsCode`, {
        mobile: this.phone,
        smsFlag: "sms_change_mobile"
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
    //获取数据
    init(){
      this.$fetch(`${this.$url}:2060/user-aggregate/selectTourist`,{touristId:this.$store.getters.getUserData.userId}).then((res) =>{
          if(res.code === 200){
            this.name = res.data.nickName;
            if(res.data.sex === false) this.sex = 0;
            this.phone = res.data.mobile;
            this.idCard = res.data.idCard;
            this.email = res.data.email;
          }
      })
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
    }
    .change-content {
      padding-top: 47px;
      p {
        height: 40px;
        line-height: 40px;
        margin-bottom: 30px;
        font-size: 14px;
        position: relative;
        label {
          text-align: left;
          width: 10%;
          display: inline-block;
        }
        input {
          width: 360px;
          height: 40px;
          text-indent: 14px;
          border: solid 1px #c5c5c5;
          font-size: 12px;
          font-weight: 400;
          color: rgba(84, 84, 84, 1);
          &:disabled {
            background-color: rgba(255, 255, 255, 1);
            border: 0;
          }
        }
        .change {
          margin-left: 10px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(7, 100, 233, 1);
          cursor: pointer;
        }
        .btn {
          width: 63px;
          height: 34px;
          background: rgba(7, 100, 233, 1);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        .getcode {
          width: 100px;
          height: 34px;
          background: rgba(7, 100, 233, 1);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        .colorActive {
          background: #cbcbcb;
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
        .men {
          font-size: 12px;
          font-weight: 400;
          color: rgba(84, 84, 84, 1);
        }
        select {
          width: 110px;
          height: 40px;
          border: solid 1px #c5c5c5;
          margin-right: 10px;
        }
        .tip {
          text-indent: 14px;
          position: absolute;
          left: 94px;
          top: 30px;
          color: red;
        }
        .tipSelected {
          color: green;
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
