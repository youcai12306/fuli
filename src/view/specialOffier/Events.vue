<template>
  <!-- 精彩活动 -->
  <div class="r">
    <div class="title clearDiv">
      <div class="floatLeft">{{$t('specialOffier.navTitle1')}}</div>
      <div
        class="floatRight location"
      >{{$t('specialOffier.Position')}}>{{$t('specialOffier.navTitle1')}}</div>
    </div>

    <!-- 列表 -->
    <ul class="content clearDiv" v-if="this.status!='0'">
      <div v-for="(item,key) in data" :key="key">
        <router-link
          v-if="data.length > 0"
          tag="li"
          :to="{path:'/EventsDetail',query:{id: item.structureId,type: status}}"
        >
          <img :src="item.facePictureId[0]? item.facePictureId[0]: ''" alt>
          <div class="box">
            <h3 class="t">{{item.title}}</h3>
            <p>{{item.createTime}}</p>
          </div>
        </router-link>
      </div>
    </ul>
    <ul class="content clearDiv" v-else>
      <div v-for="(item,key) in data2" :key="key">
        <router-link
          v-if="data2.length > 0"
          tag="li"
          :to="{path:'/EventsDetail',query:{id: item.id,type: status}}"
        >
          <img :src="item.pictures[0].picid? item.pictures[0].picid : ''" alt>
          <div class="box">
            <h3 class="t">{{item.activityName}}</h3>
			<p>{{item.createTime}}</p>
          </div>
        </router-link>
      </div>
    </ul>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totle"
        :current-page.sync="pageIndex"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { IMG_Url } from "@/package/common";
export default {
  name: "News",
  data() {
    return {
      status: "",
      page: 1,
      id: "",
      list: [],
      list1: [],
      imgs: [],
      imgs1: [],
      totle: 0,
      pageSize: 4,
      pageIndex: 1
    };
  },
  computed: {
    data() {
      //处理精彩活动、优惠信息数据
      let list = this.list;
      list.forEach((v, k) => {
        if (v.facePictureId) {
          //是否有图片
          v.facePictureId.forEach((val, key) => {
            this.imgs.forEach(res => {
              if (val == res.id) {
                v.facePictureId[key] = IMG_Url + res.fileName;
              }
            });
          });
        }
      });
      return list;
    },
    data2() {
      let list = this.list1;
      list.forEach((v, k) => {
        if (v.pictures) {
          //是否有图片
          v.pictures.forEach((val, key) => {
            this.imgs1.forEach(res => {
              if (val.picid == res.id) {
                v.pictures[key].picid = IMG_Url + res.fileName;
              }
            });
          });
        }
      });
      return list;
    }
  },
  methods: {
    // 分页
    handleCurrentChange(val) {
      console.log(val);
      let id = this.$route.params.id;
      this.getSearch(id, this.pageSize, val, this.$isEnglish);
    },
    getSearch(type, pageSize, pageIndex, isEnglish) {
      //获取精彩活动后台ID=E 优惠信息后台ID=F  pageSize分页大小 pageIndex第几页 isEnglish中英文标识

      if (type != "0") {
        this.$fetch(
          `${
            this.$url2
          }/api-nkf-callback/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
        ).then(res => {
          if (res.code === 200) {
            let xin = [];
            let xin2 = "";
            let list = [];
            list = res.data.content || [];
            this.list = list;
            this.totle = res.data.content.length;
            list.forEach((v, k) => {
              //拼接图片字符串
              if (v.facePictureId) {
                //是否有图片
                v.facePictureId.forEach((val, key) => {
                  if (key == 0) {
                    //获取第一个图片
                    xin.push(val);
                    xin2 = xin.join(",");
                  }
                });
              }
            });
            this.GetSelectFiles(xin2);
          } else {
            console.log("读取失败");
          }
        });
      } else {
        this.$post(
          `${
            this.$url2
          }/api-nkf-callback/mongodb-mucon/activity/primary?pageSize=${pageSize}&pageNum=${pageIndex}`
        ).then(res => {
          if (res.code === 200) {
            let xin = [];
            let xin2 = "";
            let list = [];
            this.list1 = res.data.content || [];
            this.totle = res.data.content.length;
            list = this.list1;
            list.forEach((v, k) => {
              //拼接图片字符串
              if (v.pictures) {
                //是否有图片
                v.pictures.forEach((val, key) => {
                  if (key == 0) {
                    //获取第一个图片
                    xin.push(val.picid);
                    xin2 = xin.join(",");
                  }
                });
              }
            });
            this.GetSelectFiles(xin2);
          }
        });
      }
    },
    GetSelectFiles(obj) {
      //批量获取图片
      this.$fetch(`${this.$url2}/api-bkf-staticResource/staticResource-mucon/selectFiles`, {
        ids: obj
      }).then(res => {
        if (this.$route.query.id != "0") {
          this.imgs = res.data; //精彩活动
        } else {
          this.imgs1 = res.data;
        }
      });
    }
  },
  created() {
    document.title = "精彩活动";
  },
  mounted() {
    this.id = this.$route.query.id;
    this.status = this.id;
    this.getSearch(this.id, 6, this.page, this.$isEnglish);
  },
  watch: {
    $route() {
      let id = this.$route.query.id;
      this.status = id;
      this.getSearch(id, 6, this.page, this.$isEnglish);
    }
  }
};
</script>

<style scoped="" lang="scss">
// 主体
.r {
  position: relative;
  min-height: 1300px;
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
    padding: 10px 0 20px 20px;

    li {
      cursor: pointer;
      float: left;
      margin-left: 50px;
      margin-top: 30px;

      img {
        width: 339px;
        height: 214px;
        font-size: 0;
      }

      .box {
        width: 339px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
        border-top: 0;
        margin-top: -5px;
        padding-left: 20px;

        h3 {
			height: 90px;
          text-align: left;
          font-size: 18px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          // padding: 40px 0;
          padding-top: 40px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
          -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
          -webkit-line-clamp: 2; /** 显示的行数 **/
          overflow: hidden; /** 隐藏超出的内容 **/
        }
        p {
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          padding-bottom: 36px;
          padding-top: 10px;
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
    width: 100%;
    height: 32px;
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: center;
  }
}
</style>
