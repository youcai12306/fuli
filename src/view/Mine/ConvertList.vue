<!--  -->
<template>
  <div class="main">
    <div class="title clearDiv">
      <div class="floatLeft left">{{$t('ConvertList.Text')}}</div>
      <div class="floatRight clearDiv right">
        <div class="floatLeft" @click="goback('myIntegral')">{{$t('Return')}}</div>
        <div class="floatLeft" @click="goback('orderWater')">{{$t('ConvertList.Text1')}}</div>
      </div>
    </div>
    <div class="box clearDiv">
      <div class="list floatLeft" v-for="(item,key) in data" :key="key">
        <img :src="item.pictureId" alt>
        <div class="t1">{{item.productName}}</div>
        <div class="c1 clearDiv">
          <div class="jifen floatLeft">{{item.settlementPrice}}{{$t('ConvertList.Text9')}}</div>
          <button
            class="btn floatRight"
            :class="{btnDisable:lv == 6|| integral<item.settlementPrice}"
            @click="mengShow(key)"
            :disabled="(lv == 6 || integral<item.settlementPrice)"
          >{{$t('ConvertList.Text2')}}</button>
        </div>
      </div>
    </div>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        @current-change="changePage"
      ></el-pagination>
    </div>
    <div class="t5">{{$t('ConvertList.Text3')}}</div>
    <div class="t6">
      <p class="p1">{{$t('ConvertList.Text4')}}</p>
      <p class="p2 p1">{{$t('ConvertList.Text5')}}</p>
    </div>
    <div class="meng" v-if="showMeng">
      <div class="m-box">
        <p class="m-t">{{$t('ConvertList.Text6')}}</p>
        <div class="m-num">
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="integral/data[key].settlementPrice"
            :step="1"
            @blur="isNull"
            :precision="0"
          ></el-input-number>
        </div>
        <div class="m-btn clearDiv">
          <button class="btn1" @click="mengClose()">{{$t('ConvertList.Text7')}}</button>
          <button @click="jumpCommit(data[key].id,data[key].stockId)">{{$t('ConvertList.Text8')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
      img: [],
      total: 0,
      lv: 0,
      integral: 0,
      num: 0,
      showMeng: false,
      key: 0
    };
  },

  components: {},
  mounted() {
    this.getConvert(this.pageNum);
    this.getUserInfo();
  },
  computed: {
    data() {
      let list = this.list;
      if (list.length) {
        //是否有图片
        list.forEach((val, key) => {
          this.img.forEach(res => {
            if (val.pictureId == res.id) {
              val.pictureId =
                "http://101.201.101.138:2600/file/" + res.fileName;
            }
          });
        });
      }
      return list;
    }
  },
  methods: {
    // 计数器不能输入为空
    isNull() {
      if (this.num == undefined) {
        this.$nextTick(function() {
          this.num = 1;
        });
      }
    },
    //得到产品列表
    getConvert(val) {
      this.$fetch(this.$url2 + "/api-bkf-product/product-aggregate/findProductByStock", {
        playDate: this.$tool.formatData(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        ),
        typeId: 21,
        pageNum: val,
        pageSize: this.pageSize
      }).then(res => {
        if (res.code == 200) {
          this.list = res.data.list;
          this.total = res.data.total;
          if (this.list.length != 0) {
            let xin = [];
            let xin2 = "";
            this.list.forEach(val => {
              if (val.pictureId) {
                xin.push(val.pictureId);
                xin2 = xin.join(",");
              }
            });
            this.GetSelectFiles(xin2);
          }
        }
      });
    },
    //获取图片
    GetSelectFiles(obj) {
      this.$fetch(`${this.$url2}/api-bkf-staticResource/staticResource-mucon/selectFiles`, {
        ids: obj
      }).then(res => {
        this.img = res.data;
      });
    },
    changePage(val) {
      this.getConvert(this.pageNum);
    },
    //获取用户积分
    getUserInfo() {
      let id = this.$store.getters.getUserData.userId;
      this.$fetch(
        this.$url2 + "/api-bkf-user/user-aggregate/selectTourist?touristId=" + id
      ).then(res => {
        if (res.code == 200) {
          console.log(res);
          this.integral = res.data.integration;
          this.lv = res.data.memberlevel;
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    mengShow(key) {
      this.key = key;
      this.showMeng = true;
    },
    mengClose() {
      this.showMeng = false;
    },
    jumpCommit(id, stockId) {
      this.$router.push({
        path: "commitConvert",
        query: {
          id: id,
          stockId: stockId,
          num: this.num
        }
      });
    },
    goback(type) {
      this.$router.push(type);
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  position: relative;
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
  .box {
    padding-top: 23px;
    .list {
      width: 175px;
      padding-bottom: 12px;
      border: 1px solid rgba(209, 209, 209, 1);
      margin-right: 70px;
      margin-bottom: 43px;
      img {
        width: 175px;
        height: 181px;
      }
      .t1 {
        margin-top: 16px;
        padding: 0 12px;
        overflow: hidden;
      }
      .c1 {
        padding: 0 12px;
        .jifen {
          font-size: 14px;
          height: 14px;
          line-height: 14px;
          font-weight: bold;
          color: rgba(227, 61, 68, 1);
          padding-top: 20px;
        }
        .btn {
          padding-left: 10px;
          padding-right: 10px;
          height: 30px;
          line-height: 30px;
          background: rgba(7, 100, 233, 1);
          border-radius: 15px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        .btnDisable {
          background: rgba(210, 210, 210, 1);
        }
      }
    }
    .list:nth-child(4n) {
      margin-right: 0;
    }
  }
  .pages {
    position: absolute;
    height: 32px;
    // margin-top: 60px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
  .t5 {
    font-size: 16px;
    font-weight: bold;
    color: rgba(236, 96, 64, 1);
    margin-top: 44px;
    margin-bottom: 17px;
  }
  .t6 {
    padding: 18px 14px 42px 14px;
    background: rgba(244, 244, 244, 1);
    .p1 {
      font-size: 14px;
      height: 14px;
      line-height: 14px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .p2 {
      color: rgba(102, 102, 102, 1);
      margin-top: 20px;
    }
  }
  .meng {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    .m-box {
      width: 309px;
      height: 208px;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .m-t {
        width: 100%;
        text-align: center;
        line-height: 16px;
        height: 16px;
        font-size: 16px;
        // font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .m-num {
        text-align: center;
        position: relative;
        p {
          font-size: 14px;
          color: red;
          position: absolute;
          top: 42px;
          left: 64px;
        }
      }
      .m-btn {
        // margin-top: 30px;
        padding: 30px 40px 0 40px;
        button {
          float: right;
          width: 102px;
          height: 36px;
          line-height: 36px;
          background: rgba(7, 100, 233, 1);
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
        .btn1 {
          float: left;
          background: rgba(225, 225, 225, 1);
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}
</style>