<template>
  <!-- 精彩活动 -->
  <div class="r">
    <div class="title clearDiv">
      <div class="floatLeft">精彩活动</div>
      <div class="floatRight location">当前位置>优惠活动</div>
    </div>

    <!-- 列表 -->
    <ul class="content clearDiv">
      <li v-for="item in 4" :key="item">
        <img src="../../assets/img/specialOffier-bg1.png" alt>
        <div class="box">
          <h3 class="t">富力 · 百变万圣节</h3>
          <hr>
          <div>
            活动时间：
            <span>2018年10月22 - 2018年11月10日</span>
          </div>
          <div>
            活动主题：
            <span>万圣节 ，化妆舞会</span>
          </div>
          <div>
            活动地址：
            <span>麦迪卡斯水乐园</span>
          </div>
          <button @click="jumpDetail('5c1f5349f8dac609dd5cd6b7')">进入活动</button>
        </div>
      </li>
    </ul>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-size="7"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      page: 1
    };
  },
  methods: {
    // 分页
    handleCurrentChange(val) {
      console.log(val);
    },
    jumpDetail(id) {
      this.$router.push({
        path: "/EventsDetail",
        query: {
          id: id
        }
      });
    }
  },
  created() {
    document.title = "精彩活动";
  },
  mounted() {}
};
</script>

<style scoped="" lang="scss">
// 主体
.r {
  position: relative;
  height: 1300px;
  width: 920px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
  margin-top: 20px;
  .title {
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    color: rgba(238, 238, 238, 1);
    width: 100%;
    height: 91px;
    line-height: 91px;
    background: rgba(77, 175, 236, 1);
    padding-left: 37px;
    border-radius: 10px 10px 0 0;
    .location {
      height: 22px;
      font-size: 14px;
      font-family: FZZZHONGJW--GB1-0;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      padding-left: 40px;
      background: url(../../assets/img/new-4.png) no-repeat 15px 0;
      margin-top: 50px;
      margin-right: 34px;
    }
  }
  .content {
    padding: 0 0 20px 20px;
    li {
      float: left;
      margin-left: 50px;
      margin-top: 40px;
      img {
        width: 339px;
        height: 214px;
        font-size: 0;
      }
      .box {
        width: 339px;
        border: 2px solid rgba(238, 238, 238, 1);
        border-top: 0;
        margin-top: -5px;
        h3 {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 11px;
          padding-top: 34px;
        }
        hr {
          margin: 0 auto;
          width: 71px;
          height: 1px;
          background: rgba(0, 0, 0, 1);
          opacity: 0.3;
          margin-bottom: 24px;
        }
        div {
          font-size: 13px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-left: 34px;
          margin-bottom: 10px;
          span {
            color: rgba(153, 153, 153, 1);
          }
        }
        button {
          margin-left: 81px;
          width: 178px;
          height: 57px;
          background: rgba(248, 160, 75, 1);
          box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.15);
          text-align: center;
          margin-bottom: 22px;
          font-size: 17px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
					cursor: pointer;
					margin-top: 10px;
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
    bottom: 100px;
    transform: translateX(-50%);
  }
}
</style>
