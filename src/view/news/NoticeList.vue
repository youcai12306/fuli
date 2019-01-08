<template>
  <!-- 园区新闻 -->
  <div class="r">
    <div class="title clearDiv">
      <div class="floatLeft">{{$t('i18nView.navTitle1')}}</div>
      <div class="floatRight location">{{$t('i18nView.Position')}}：{{$t('i18nView.navTitle1')}}>{{$t('i18nView.navTitle3')}}</div>
    </div>

    <!-- 所有新闻 -->
    <div class="main-new">
      <!-- <div class="hea-img">
        <router-link :to="{path:'/'}">
          <img src="../../assets/img/new-1.png" alt="图片">
          <div class="bt">
            <p class="p1">关于“海洋露天剧场围蔽施工”暂停服务的公告</p>
            <p class="p2">来自长隆海洋王国 | 2018.08.09</p>
          </div>
          <div class="button"></div>
        </router-link>
      </div>-->
      <ul>
        <li v-for="(item,key) in list" :key="key" @click="jumpDetail(item.id)">
          <router-link :to="{path:'/'}">
            <i></i>
            <span class="li-itme">{{item.infoTitle}}</span>
            <span class="li-span">{{item.createTime}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totle"
        :current-page.sync="pageIndex"
        :page-size="pageSize"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      list: [],
      pageSize: 15,
      pageIndex: 1,
      totle: 0
    };
  },
  methods: {
    // 园区公告
    // 获取新闻數據
    GetList(type, pageSize, pageIndex) {
      this.$post(
        this.$url+
        ":6110/mongodb-mucon/info/primary/search?type=0&pageSize=" +
          pageSize +
          "&pageNum=" +
          pageIndex
      ).then(res => {
        if (res.code === 200) {
          this.list = res.data.content
          this.totle = res.data.totalElements;
        } else {
          this.$message.error("读取公告列表失败");
        }
      });
    },
    //分页
    changePage(val) {
      this.GetList(1, this.pageSize, val);
    },
    jumpDetail(id){
        this.$router.push({
        path: "/noticeDetail",
        query: {
          id: id
        }
      });
    }
  },
  created() {
    document.title = "新闻中心";
  },
  mounted() {
    this.GetList(1, this.pageSize, this.pageIndex);
  }
};
</script>

<style scoped="" lang="scss">
// 主体
.r {
  position: relative;
  height: 1200px;
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

  .main-new {
    padding: 31px 34px 0 37px;
    width: 100%;

    .hea-img {
      width: 100%;
      height: 406px;
      position: relative;
      margin-bottom: 5px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }

      .bt {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 70px;
        background: rgba(43, 43, 43, 0.82);
        padding-left: 21px;

        .p1 {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-top: 14px;
          height: 17px;
        }

        .p2 {
          height: 14px;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(157, 157, 157, 1);
          margin-top: 12px;
        }
      }

      .button {
        width: 19px;
        height: 33px;
        position: absolute;
        right: 36px;
        bottom: 20px;
        background: url(../../assets/img/new-7.png) no-repeat;
      }
    }

    ul {
      li {
        position: relative;
        width: 100%;
        height: 54px;
        line-height: 14px;
        padding: 20px 0;
        border-top: 1px solid #d7d7d7;
        padding-left: 20px;

        i {
          position: absolute;
          width: 5px;
          height: 5px;
          left: 5px;
          top: 24px;
          background: rgba(191, 191, 191, 1);
          border-radius: 50%;
        }

        &:nth-of-type(1) {
          border-top: none;
        }

        span {
          width: 600px;
          height: 14px;
          display: block;
          float: left;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &.li-span {
            width: 200px;
            float: right;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(157, 157, 157, 1);
            text-align: right;
          }
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
    bottom: 30px;
    transform: translateX(-50%);
  }
}
</style>
