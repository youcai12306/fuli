<!-- 提交兑换 -->
<template>
  <div class="main">
    <div class="title clearDiv">
      <div class="floatLeft left">{{$t('commitConvert.Text')}}</div>
      <div class="floatRight clearDiv right">
        <div class="floatLeft" @click="goback('convertList')">{{$t('Return')}}</div>
        <div class="floatLeft" @click="goback('orderWater')">{{$t('commitConvert.Text1')}}</div>
      </div>
    </div>
    <div class="table">
      <ul class="clearDiv ul ul1">
        <li class="floatLeft li1">{{$t('commitConvert.Text2')}}</li>
        <li class="floatLeft li2">{{$t('commitConvert.Text3')}}</li>
        <li class="floatLeft li3">{{$t('commitConvert.Text4')}}</li>
        <li class="floatLeft li4">{{$t('commitConvert.Text5')}}</li>
      </ul>
      <ul class="clearDiv ul ul2">
        <li class="floatLeft li1">
          <p>{{data.parkName}}</p>
          <div class="clearDiv">
            <span class="floatleft">{{$t('commitConvert.Text6')}}</span>
            <button class="floatleft" @click="addressShow(1)" :class="{btn:delivery ==1}">{{$t('commitConvert.Text7')}}</button>
            <button class="floatleft" @click="addressShow(0)" :class="{btn:delivery ==0}">{{$t('commitConvert.Text8')}}</button>
          </div>
        </li>
        <li class="floatLeft li2">{{data.settlementPrice}}</li>
        <li class="floatLeft li3">x{{num}}</li>
        <li class="floatLeft li4">{{data.settlementPrice*num}}</li>
      </ul>
    </div>
    <p class="t-info">{{$t('commitConvert.Text9')}}</p>
    <p class="t-content clearDiv">
      <label for>{{$t('commitConvert.Text10')}}</label>
      <input type="text" v-model="name">
    </p>
    <p class="t-content clearDiv">
      <label for>{{$t('commitConvert.Text11')}}</label>
      <input type="text" v-model="phone">
    </p>
    <div class="mail-info" v-show="delivery == 1">
      <div class="m-title clearDiv">
        <div class="floatLeft t4">{{$t('commitConvert.Text12')}}</div>
        <div class="floatLeft t5" @click="openAddressMeng()">{{$t('commitConvert.Text13')}}</div>
      </div>
      <div class="p clearDiv">
        <label for>{{$t('commitConvert.Text14')}}</label>
        <div>{{addressInfo.receivePersonName}}</div>
      </div>
      <div class="p clearDiv">
        <label for>{{$t('commitConvert.Text15')}}</label>
        <div>{{addressInfo.receivePersonMobile}}</div>
      </div>
      <div class="p clearDiv">
        <label for>{{$t('commitConvert.Text16')}}</label>
        <div>{{addressInfo.receiveProvince + addressInfo.receiveCity + addressInfo.receiveArea + addressInfo.receiveAddress}}</div>
      </div>
    </div>
    <button class="btnn" @click="commitInfo()">{{$t('commitConvert.Text17')}}</button>
    <div class="meng" v-show="showAddressMent">
      <div class="tabless">
        <el-table :data="addressList" border style="100%">
          <el-table-column fixed prop="receivePersonName" label="收件人" width="150"></el-table-column>
          <el-table-column prop="receivePersonMobile" label="手机号" width="300"></el-table-column>
          <el-table-column prop="province" label="地址" width="300">
            <template slot-scope="scope">
              <span>{{scope.row.receiveProvince+scope.row.receiveCity+scope.row.receiveArea+scope.row.receiveAddress}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">{{$t('commitConvert.Text17')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; //引入状态管理
export default {
  data() {
    return {
      list: [],
      name: "",
      phone: "",
      data: {},
      num: this.$route.query.num,
      addressInfo: {},
      delivery: 1,
      addressList: [],
      showAddressMent: false
    };
  },

  components: {},

  computed: {},
  mounted() {
    this.getList();
    this.getAddress();
  },
  methods: {
    getList() {
      let id = this.$route.query.id;
      this.$fetch(this.$url2 + "/api-bkf-product/product-aggregate/find/" + id, {
        stockId: this.$route.query.stockId,
        touristId: ""
      }).then(res => {
        this.data = res.data;
        console.log(this.list);
      });
    },
    handleClick(row) {
      this.addressInfo = row;
      this.showAddressMent = false;
    },
    //邮寄地址显示
    addressShow(type) {
      this.delivery = type;
    },
    //获取邮寄信息
    getAddress() {
      this.$fetch(
        this.$url2 +
          "/api-bkf-user/user-aggregate/address/selectOneReceiveAddress?touristId=" +
          this.$store.getters.getUserData.userId
      ).then(res => {
        if (res.code == 200) {
          this.addressInfo = res.data;
          console.log(res);
          console.log(this.addressInfo);
        }
      });
    },
     ...mapActions(["updateUserData"]),
    //提交兑换信息
    commitInfo() {
      if (this.phone == "") {
        this.$message.error('"手机号不能为空');
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.$message.error("请输入正确的手机号码");
        return;
      }
      let receiveId = "";
      if (this.delivery == 1) {
        receiveId = this.addressInfo.id;
      } else {
        receiveId = "";
      }
      this.$post(this.$url2 + "/api-bkf-user/gift-exchange/addChange", {
        touristId: this.$store.getters.getUserData.userId,
        receiveName: this.name,
        mobile: this.phone,
        productId: this.$route.query.id,
        count: this.$route.query.num,
        priceId: this.$route.query.stockId,
        flag: this.delivery, //0自提 1邮寄
        receiveId: receiveId
      }).then(res => {
        if (res.code == 200) {
          this.$message({
            message: "兑换成功",
            type: "success"
          });
          this.$router.push("orderWater");
          let userData = this.$store.getters.getUserData;
          userData.integration -= res.data.totalIntegeral;
          this.updateUserData(userData);
        }
      });
    },
    //获取地址列表
    getAddressList() {
      this.$fetch(
        this.$url2 +
          "/api-bkf-user/user-aggregate/address/selectReceiveAddress?touristId=" +
          this.$store.getters.getUserData.userId
      ).then(res => {
        if (res.code == 200) {
          this.addressList = res.data;
        }
      });
    },
    //打开地址蒙板
    openAddressMeng() {
      this.getAddressList();
      this.showAddressMent = true;
    },
    //
    goback(type) {
      this.$router.push(type);
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .title {
    padding-bottom: 20px;
    padding-top: 60px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    .left {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      cursor: pointer;
    }
    .right {
      div {
        height: 30px;
        line-height: 30px;
        border: 1px solid #0764e9;
        border-radius: 5px;
        padding: 0 10px;
        margin-left: 25px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(7, 100, 233, 1);
        cursor: pointer;
      }
    }
  }
  .table {
    border: 1px solid rgba(232, 240, 252, 1);
    .ul {
      li {
        text-align: center;
      }
      .li1 {
        width: 300px;
      }
      .li2 {
        width: 200px;
      }
      .li3 {
        width: 200px;
      }
      .li4 {
        width: 200px;
      }
    }
    .ul1 {
      background: rgba(232, 240, 252, 1);
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .ul2 {
      height: 113px;
      .li1 {
        p {
          font-size: 16px;
          line-height: 16px;
          height: 16px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-top: 30px;
          margin-bottom: 13px;
        }
        button {
          width: 62px;
          height: 27px;
          line-height: 27px;
          border: 1px solid rgba(153, 153, 153, 1);
          font-size: 12px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          background: #fff;
          cursor: pointer;
          color: rgba(102, 102, 102, 1);
        }
        .btn {
          color: rgba(227, 87, 76, 1);
          border: 1px solid rgba(227, 87, 76, 1);
        }
      }
      .li2,
      .li3,
      .li4 {
        margin-top: 60px;
      }
    }
  }
  .t-info {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 17px;
    padding-top: 38px;
    border-bottom: 1px solid rgba(239, 239, 239, 1);
  }
  .t-content {
    margin: 20px 0;
    label {
      float: left;
      width: 80px;
      text-align: right;
    }
    input {
      float: left;
      width: 164px;
      height: 28px;
      border: 1px solid rgba(191, 191, 191, 1);
    }
  }
  .mail-info {
    .m-title {
      padding-top: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(239, 239, 239, 1);
      .t4 {
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .t5 {
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(7, 100, 233, 1);
        margin-left: 12px;
      }
    }
    .p {
      margin: 20px 0;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      label {
        float: left;
        width: 80px;
        text-align: right;
      }
      div {
        float: left;
      }
    }
  }
  .btnn {
    width: 66px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: rgba(7, 100, 233, 1);
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-left: 94px;
    cursor: pointer;
  }
  .meng {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    .tabless {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>