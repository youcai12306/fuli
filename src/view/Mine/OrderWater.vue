<!--  -->
<template>
  <div class="main">
    <div class="title clearDiv">
      <div class="floatLeft left">{{$t('orderWater.Text')}}</div>
      <div class="floatRight right" @click="goback()">{{$t('Return')}}</div>
    </div>
    <div class="box">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;"
        :header-cell-style="{background:'#E4E4E4'}"
      >
        <el-table-column prop="receiveName" :label="$t('orderWater.Text4')" width="160" align="center"></el-table-column>
        <el-table-column prop="count" :label="$t('orderWater.Text5')" width="120" align="center"></el-table-column>
        <el-table-column prop="totalIntegral" :label="$t('orderWater.Text6')" width="140" align="center"></el-table-column>
        <el-table-column prop="name" :label="$t('orderWater.Text7')" width="140" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.receiveId != null && scope.row.sendOutSign == 0 && scope.row.receiveId != ''">未寄出</span>
            <span v-else-if="scope.row.receiveId != null && scope.row.sendOutSign == 1 && scope.row.receiveId != ''">已寄出</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('orderWater.Text8')" width="140" align="center"></el-table-column>
        <el-table-column prop="mobile" :label="$t('orderWater.Text9')" align="center"></el-table-column>
      </el-table>
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
    <div class="t5">{{$t('orderWater.Text1')}}</div>
    <div class="t6">
      <p class="p1">{{$t('orderWater.Text2')}}</p>
      <p class="p2 p1">{{$t('orderWater.Text3')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 15
    };
  },

  components: {},

  computed: {},
  mounted() {
    this.getList(this.pageNum);
  },
  methods: {
    getList(val) {
      this.$fetch(this.$url2 + "/api-bkf-user/gift-exchange/queryByPage", {
        touristId: this.$store.getters.getUserData.userId,
        pageNum: val,
        pageSize: this.pageSize
      }).then(res => {
        if (res.code == 200) {
          console.log(res.data.list);
          this.tableData = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    //分页
    changePage(val) {
      this.getList(this.pageNum);
    },
    //返回上一页
    goback(){
        this.$router.push('convertList')
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
    }
    .right {
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
  .box {
    margin-top: 35px;
    position: relative;
    .pages {
      position: absolute;
      height: 32px;
      margin-top: 60px;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .t5 {
    font-size: 16px;
    font-weight: bold;
    color: rgba(236, 96, 64, 1);
    margin-top: 104px;
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
}
</style>