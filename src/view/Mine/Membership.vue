<template>
  <div class="main">
    <div class="member-info">
      <p class="change-title clearDiv">会员资料
        <span class="know floatRight">会员须知</span>
      </p>
      <div class="change-content">
        <p>
          <label for>姓名：</label>
          <input type="text" value="yyyyyyyy">
        </p>
        <p>
          <label for>手机号码：</label>
          <span class="phone">13811111111</span>
          <span class="phone-change">[修改]</span>
        </p>
        <p>
          <label for>身份证号：</label>
          <input type="text" placeholder="请填写身份证号">
        </p>
        <p>
          <label for>联系邮箱：</label>
          <input type="text" placeholder="请填写邮箱">
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
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {};
  },
  components: {
    VDistpicker
  },
  methods:{
    selected(val){
      console.log(val)
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
        select {
          width: 110px;
          height: 40px;
          border: solid 1px #c5c5c5;
          margin-right: 10px;
        }
        .phone {
          font-size: 14px;
          color: #333333;
        }
        .phone-change {
          font-size: 14px;
          color: #e3574c;
          margin-left: 5px;
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
  font-size:14px;
  border-radius: 0;
}
</style>
