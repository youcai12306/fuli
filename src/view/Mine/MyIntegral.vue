<template>
  <div class="main">
    <div class="integration">
      <div class="title clearDiv">
        <p class="change-title floatLeft">{{$t('Integral.Text')}}：<span>666</span></p>
        <img
          src="../../assets/img/mine-duihuan1.png"
          alt=""
          class="floatLeft"
        >
      </div>

      <div class="change-content">
        <el-table
          :data="tableDate1"
          border
          style="width: 100%"
          :header-cell-style="{background:'#CDE2FF'}"
        >
          <el-table-column
            prop="in"
            :label="$t('Integral.Text1')"
            width="200"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="change"
            :label="$t('Integral.Text2')"
            width="200"
            align="center"
          >
            <template slot-scope="scope">
              <span
                v-if="scope.row.change>=0"
                style="color:#EE3223"
              >+{{scope.row.change}}</span>
              <span
                v-else
                style="color:#FFAA17"
              >{{scope.row.change}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            :label="$t('Integral.Text3')"
            width="140"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="tip"
            :label="$t('Integral.Text4')"
            align="center"
            fixed="right"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDate1: [
        {
          id: "1",
          in: "富力玩偶",
          change: 15,
          time: "2018-11-11",
          tip: "交易获得"
        },
        {
          id: "2",
          in: "富力玩偶",
          change: "-15",
          time: "2018-11-11",
          tip: "交易获得"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.main {
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
      }
    }
    .change-content {
      margin-top: 21px;
    }
  }
}
</style>