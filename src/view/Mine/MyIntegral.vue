<template>
  <div class="main">
    <div class="integration">
      <div class="title clearDiv">
        <p class="change-title floatLeft">
          {{$t('Integral.Text')}}：
          <span>{{integral}}</span>
        </p>
        <img src="../../assets/img/mine-duihuan1.png" alt class="floatRight" @click="jumpConvert()">
      </div>
      <p class="t1">{{$t('Integral.Text5')}}</p>
      <p class="t3">{{$t('Integral.Text6')}}</p>
      <p class="t1 t2">{{$t('Integral.Text7')}}</p>
      <p class="t3">{{$t('Integral.Text8')}}</p>
      <p class="t3">{{$t('Integral.Text9')}}</p>
      <div class="change-content">
        <ul class="clearDiv typess">
          <li class="floatLeft" :class="{li:type == 0}" @click="chooseType(0)">{{$t('Integral.Text10')}}</li>
          <li class="floatLeft" :class="{li:type == 1}" @click="chooseType(1)">{{$t('Integral.Text11')}}</li>
          <li class="floatLeft" :class="{li:type == 2}" @click="chooseType(2)">{{$t('Integral.Text12')}}</li>
        </ul>
        <el-table
          :data="tableDate1"
          border
          style="width: 723px"
          :header-cell-style="{background:'#CDE2FF'}"
        >
          <el-table-column prop="useType" :label="$t('Integral.Text1')" width="200" align="center"></el-table-column>
          <el-table-column
            prop="integrationcount"
            :label="$t('Integral.Text2')"
            width="200"
            align="center"
          >
            <!-- <template slot-scope="scope">
              <span v-if="scope.row.change>=0" style="color:#EE3223">+{{scope.row.change}}</span>
              <span v-else style="color:#FFAA17">{{scope.row.change}}</span>
            </template>-->
          </el-table-column>
          <el-table-column
            prop="createdate"
            :label="$t('Integral.Text3')"
            fixed="right"
            align="center"
          ></el-table-column>
          <!-- <el-table-column prop="tip" :label="$t('Integral.Text4')" align="center" fixed="right"></el-table-column> -->
        </el-table>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDate1: [],
      type: 0,
      integral: 0,
      pageNum: 1,
      pageSize: 20,
      total: 0
    };
  },
  mounted() {
    this.getUserInfo();
    this.getConvertList();
  },
  methods: {
    //选择类型
    chooseType(type) {
      this.type = type;
      this.pageNum = 1;
      this.getConvertList();
    },
    //获取用户积分
    getUserInfo() {
      let id = this.$store.getters.getUserData.userId;
      this.$fetch(
        this.$url + ":2060/user-aggregate/selectTourist?touristId=" + id
      ).then(res => {
        if (res.code == 200) {
          this.integral = res.data.integration;
        }
      });
    },
    //获取用户兑换记录
    getConvertList(val) {
      let useType = "";
      if (this.type == 0) {
        useType = "";
      } else if (this.type == 1) {
        useType = 0;
      } else {
        useType = 1;
      }
      this.$fetch(
        this.$url + ":2060/memberinte-aggregate/getIntegralAndWaterInfo",
        {
          touristId: this.$store.getters.getUserData.userId,
          pageNum: val,
          pageSize: this.pageSize,
          useType: useType
        }
      ).then(res => {
        if (res.code == 200) {
          this.tableDate1 = res.data.IntegrationList.list;
          this.total = res.data.IntegrationList.total;
          // console.log(res.data.IntegrationList.total);
        }
      });
    },
    changePage(val) {
      this.getConvertList(this.pageNum);
    },
    //跳转兑换页面
    jumpConvert(){
      this.$router.push('convertList')
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  position: relative;
  .integration {
    .title {
      margin-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
      .change-title {
        height: 41px;
        line-height: 41px;
        font-size: 16px;
        color: #333333;
        span {
          display: inline-block;
          font-size: 26px;
          color: #ee3223;
        }
      }
      img {
        width: 93px;
        height: 41px;
        vertical-align: middle;
        margin-left: 63px;
        cursor: pointer;
      }
    }
    .t1 {
      font-size: 16px;
      line-height: 16px;
      height: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      margin-top: 45px;
      margin-bottom: 20px;
    }
    .t2 {
      margin-top: 30px;
    }
    .t3 {
      // height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 28px;
    }
    .change-content {
      margin-top: 21px;
      .typess {
        li {
          padding-left: 10px;
          padding-right: 10px;
          height: 30px;
          line-height: 30px;
          background: rgba(232, 242, 255, 1);
          font-size: 14px;
          font-weight: 400;
          color: rgba(81, 151, 248, 1);
          text-align: center;
          margin-right: 5px;
          cursor: pointer;
        }
        .li {
          background: rgba(7, 100, 233, 1);
          color: #fff;
        }
      }
    }
  }
  .pages {
    position: absolute;
    height: 32px;
    margin-top: 60px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>