<template>
  <section>
    <Header></Header>
    <div class="risk">
      <div class="title">
        <div class="risk-title">
          <p class="p1">{{$t('animal.title')}}</p>
          <p class="p2" v-html="$t('animal.description')"></p>
        </div>
        <div class="location">
          {{$t('Position')}}>
          <router-link to="/index" tag="span">{{$t('Home')}}></router-link>
          <router-link to="animal" tag="span">{{$t('animal.title')}}</router-link>
          <div class="ditu-img"></div>
        </div>
      </div>
      <div class="content clearDiv">
        <div class="left floatLeft">
          <ul class="ul">
            <li
              class="li"
              v-for="item in 7"
              :key="item"
              :class="{anActive:actives == item}"
              @click="changeType(item)"
            >
              <p>{{$t(`animal.navName${item}`)}}</p>
            </li>
          </ul>
        </div>
        <div class="right floatRight">
          <template v-if="actives != 6 && actives != 7">
            <div class="box111">
              <template v-for="item in data">
                <div class="ab-1 clearDiv">
                  <div class="ab-2 floatLeft">
                    <img :src="item.facePictureId[0] || img" :alt="item.infoTitle" class="ab-2-img">
                    <!-- <a :href="setViodeAddress(item.content1)" target="_blank" v-if = 'item.content1'> -->
                    <img
                      src="@/assets/img/bofang.png"
                      alt
                      class="bofang"
                      @click="handleOpen(item.title,item.content1)"
                      v-if="item.content1"
                    >
                    <!-- </a> -->
                  </div>
                  <div class="ab-3 floatLeft">
                    <h3>{{item.title}}</h3>
                    <div v-html="item.content0"></div>
                  </div>
                </div>
              </template>
              <div class="pages">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="totle1"
                  :current-page.sync="pageIndex3"
                  :page-size="pageSize"
                  @current-change="changePage3"
                ></el-pagination>
              </div>
            </div>
          </template>
          <template v-if="actives == 6">
            <div class="box2">
              <template v-for="item in data1">
                <router-link
                  tag="li"
                  :to="{name:'BaiDetails',params:{type:'2',id:item.structureId}}"
                >
                  <img :src="item.facePictureId[0] || img" :alt="item.infoTitle">
                  <div class="box3">
                    <h3 class="t">{{item.title}}</h3>
                    <p>{{item.createTime}}</p>
                  </div>
                </router-link>
              </template>
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
          <template v-if="actives == 7">
            <div class="box2 box-shadow">
              <template v-for="item in data2">
                <router-link
                  tag="li"
                  :to="{name:'BaiDetails',params:{type:'3',id:item.structureId}}"
                >
                  <img :src="item.facePictureId[0] || img" :alt="item.infoTitle">
                  <div class="box3">
                    <h3 class="t">{{item.title}}</h3>
                    <p>{{item.createTime}}</p>
                  </div>
                </router-link>
              </template>
              <div class="pages">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="count"
                  :current-page.sync="pageIndex2"
                  :page-size="pageSize"
                  @current-change="changePage2"
                ></el-pagination>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- 播放器 -->
    <el-dialog
      :title="title"
      :visible.sync="centerDialogVisible"
      width="40%"
      center
      class="videos"
      :before-close="handleClose"
    >
      <!-- <video ref="plays" :src="url" controls></video> -->
      <embed
        :src="url"
        allowfullscreen="true"
        quality="high"
        width="700"
        height="400"
        align="middle"
        allowScriptAccess="always"
        type="application/x-shockwave-flash"
        autostart="true"
      >
    </el-dialog>
  </section>
</template>

<script>
import Cookies from "js-cookie";
import { IMG_Url2 } from "@/package/common";
import Header from "@/components/Header"; //引入头部
export default {
  data() {
    return {
      actives: 1,
      pageSize: 4,
      pageIndex: 1,
      pageIndex2: 1,
      pageIndex3: 1,
      totle: 0,
      totle1: 0,
      centerDialogVisible: false,
      title: "提示",
      url: "",
      isEnglish: Cookies.get("language") == "en" ? 1 : 0,
      list1: [],
      list2: [],
      list: [],
      count: 0,
      img: require("../../assets/img/specialOffier-bg201.png"), //默认图片
      img2: require("../../assets/img/Moonify 1.0.png"),
      imgs: [], //科普活动图片集合
      imgs2: [], //保育救助图片集合
      imgs3: []
    };
  },
  computed: {
    data() {
      //处理动物课堂数据
      let list = this.list;
      let str = [];
      list.forEach((v, k) => {
        if (v.facePictureId) {
          //是否有图片
          v.facePictureId.forEach((val, key) => {
            this.imgs3.forEach(res => {
              if (val == res.id) {
                v.facePictureId[key] = IMG_Url2 + res.fileName;
              }
            });
          });
        }
        str.push(v);
      });
      return str.reverse();
    },
    data1() {
      //处理保育救助数据
      let list = this.list1;
      list.forEach(v => {
        if (v.facePictureId) {
          //是否有图片
          v.facePictureId.forEach((val, key) => {
            this.imgs2.forEach(res => {
              if (val == res.id) {
                v.facePictureId[key] = IMG_Url2 + res.fileName;
              }
            });
          });
        }
      });
      return list;
    },
    data2() {
      //处理科普活动数据
      let list = this.list2;
      list.forEach(v => {
        if (v.facePictureId) {
          //是否有图片
          v.facePictureId.forEach((val, key) => {
            this.imgs.forEach(res => {
              if (val == res.id) {
                v.facePictureId[key] = IMG_Url2 + res.fileName;
              }
            });
          });
        }
      });
      return list;
    }
  },
  components: {
    Header
  },
  methods: {
    //分页
    changePage(val) {
      this.getSearch("G2-1", this.pageSize, val, this.isEnglish);
    },
    //分页
    changePage2(val) {
      this.getSearch("G2-2", this.pageSize, val, this.isEnglish);
    },
    //前五个模块分页
    changePage3(val) {
      this.getSearch("G1-" + this.actives, this.pageSize, val, this.isEnglish);
    },
    //处理视频地址
    setViodeAddress(url) {
      let regx = /<[^>]*>|<\/[^>]*>/gm;
      url = url.replace(regx, "");
      return url;
    },
    handleClose(done) {
      //关闭播放器
      this.title = "提示";
      this.url = "";
      done();
    },
    handleOpen(title, url) {
      //打开播放器
      this.title = title;
      let regx = /<[^>]*>|<\/[^>]*>/gm;
      url = url.replace(regx, "");
      // console.log(url)
      // console.log(this.$refs.plays.src)
      this.url = url;
      this.centerDialogVisible = !this.centerDialogVisible;
    },
    getSearch(type, pageSize, pageIndex, isEnglish) {
      //获取保育救助列表 保育救助后台ID=4 pageSize分页大小 pageIndex第几页 isEnglish中英文标识
      this.$fetch(
        `${
          this.$url2
        }/api-nkf-callback/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
      ).then(res => {
        if (res.code === 200) {
          let xin = [];
          let xin2 = "";
          let list = [];
          if (type == "G2-1") {
            this.list1 = res.data.content || [];
            list = this.list1;
            this.totle = res.data.totalElements;
          } else if (type == "G2-2") {
            this.list2 = res.data.content || [];
            list = this.list2;
            this.count = res.data.totalElements;
          } else {
            this.list = res.data.content || [];
            list = this.list;
            this.totle1 = res.data.totalElements;
          }
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
          this.GetSelectFiles(xin2, type);
        } else {
          console.log("读取失败");
        }
      });
    },
    GetSelectFiles(obj, type) {
      //批量获取图片
      this.$fetch(
        `${this.$url2}/api-bkf-staticResource/staticResource-mucon/selectFiles`,
        {
          ids: obj
        }
      ).then(res => {
        if (type == "G2-1") this.imgs2 = res.data;
        else if (type == "G2-2") this.imgs = res.data;
        else this.imgs3 = res.data;
      });
    },
    //切换类型
    changeType(type) {
      this.actives = type;
      if (this.actives != 6 && this.actives != 7) {
        this.getSearch(
          "G1-" + this.actives,
          this.pageSize,
          this.pageIndex3,
          this.isEnglish
        );
      }
    }
  },
  mounted() {
    let id = this.$route.query.type;
    if (id != undefined) {
      this.actives = id;
    }
    //获取数据列表  （保育救助后台ID=4 科普活动后台ID=5 动物课堂后台ID=6）pageSize分页大小 pageIndex第几页 isEnglish中英文标识
    this.getSearch(
      "G1-" + this.actives,
      this.pageSize,
      this.pageIndex3,
      this.isEnglish
    );
    this.getSearch("G2-1", this.pageSize, this.pageIndex, this.isEnglish);
    this.getSearch("G2-2", this.pageSize, this.pageIndex2, this.isEnglish);
    // this.getSearch('G1-1', 11, 1, this.isEnglish);
  }
  //   watch: {
  //     $route() {
  //       this.actives = this.$route.query.type;
  //     }
  //   }
};
</script>
<style lang='scss' scoped>
.risk {
  background: #fff url(../../assets/img/theme-animal-bg.jpg) no-repeat top
    center;
  padding-top: 438px;
  padding-bottom: 50px;

  .title {
    width: 1200px;
    margin: 0 auto;
    height: 66px;
    background: linear-gradient(
      180deg,
      rgba(15, 107, 234, 1),
      rgba(52, 142, 240, 1)
    );
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);
    position: relative;

    .risk-title {
      position: absolute;
      top: -330px;
      right: 215px;
      width: 350px;
      color: #fff;

      .p1 {
        font-size: 48px;
        font-family: FZZZHONGJW--GB1-0;
        font-weight: 400;
        margin-bottom: 30px;
        line-height: 48px;
      }

      .p2 {
        font-size: 20px;
        font-family: FZZZHONGJW--GB1-0;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
    }

    .location {
      //   height: 22px;
      height: 66px;
      line-height: 66px;
      font-size: 14px;
      font-family: FZZZHONGJW--GB1-0;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding-left: 34px;
      background: url(../../assets/img/new-4.png) no-repeat 15px center;
      /* cursor: pointer; */
      position: relative;

      .ditu-img {
        position: absolute;
        top: -227px;
        left: -130px;
        background: url(../../assets/img/ditu-qq.png) no-repeat;
        width: 527px;
        height: 227px;
      }
    }
  }

  .content {
    width: 1200px;
    margin: 0 auto;

    .left {
      width: 250px;
      background: rgba(255, 255, 255, 0.2);
      padding-bottom: 30px;
      border-radius: 0 0 10px 10px;

      .ul {
        width: 213px;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 1);
        padding-top: 30px;

        .li {
          position: relative;
          height: 70px;
          //line-height: 70px;
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          cursor: pointer;
          p {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 100%;
          }
          img {
            position: absolute;
            width: 8px;
            height: 14px;
            margin-left: 10px;
            top: 50%;
            margin-top: -7px;
            right: 30px;
          }

          &:hover div {
            display: block;
          }

          div {
            display: none;
            left: 222px;
            top: 0;
            width: 370px;
            height: 114px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
            position: absolute;
            z-index: 10;
            padding: 25px;

            &:after {
              content: "";
              position: absolute;
              top: 50%;
              left: -4px;
              transform: translate(-50%, 0);
              border-right: 9px solid rgba(255, 255, 255, 1);
              /*此处将左右的边框设置为透明色*/
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
              margin-top: -32px;
            }

            ul {
              li {
                float: left;
                height: 28px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 28px;
                padding: 0 10px;
              }

              .liActive {
                color: rgba(249, 126, 47, 1);
              }
            }
          }
        }

        .anActive {
          background: rgba(249, 126, 47, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }

    .right {
      width: 908px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.08);
      border-radius: 0px 0px 10px 10px;
      padding-bottom: 44px;
      background: #fff;
      .box {
        width: 863px;
        min-height: 800px;
        background: rgba(255, 255, 255, 1);
        margin: 0 auto;
        padding-top: 50px;

        &.box-shadow {
          box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
        }

        .ani-title {
          font-size: 24px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          padding-left: 50px;
          position: relative;

          &:before {
            content: "";
            display: block;
            position: absolute;
            left: 30px;
            top: 4px;
            width: 12px;
            height: 26px;
            background: rgba(7, 100, 233, 1);
          }
        }

        .box-top {
          position: relative;

          .img {
            width: 863px;
            height: 400px;
          }

          .top {
            position: absolute;
            top: 118px;
            left: 0;
            width: 422px;
            height: 184px;
            background: rgba(0, 0, 0, 0.8);
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            padding-left: 17px;

            .a-t {
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            .a-c {
              font-size: 14px;
              height: 89px;
              width: 386px;
              overflow: hidden;
            }
          }
        }

        .list {
          margin: 0 30px;
          padding: 30px 0;
          width: 800px;

          &.mb0 {
            margin-bottom: 0;
            padding-bottom: 0;
            padding-top: 0;
            margin-top: 74px;
          }

          .video {
            width: 254px;
            height: 142px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              cursor: pointer;
            }
          }

          .video-a {
            width: 100%;
            height: 14px;
            line-height: 14px;
            margin-top: 22px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            a {
              color: rgba(102, 102, 102, 1);
            }
          }
        }
      }
      .box111 {
        min-height: 1000px;
        position: relative;
        .ab-1 {
          margin-top: 40px;
          padding-left: 48px;
          padding-bottom: 37px;
          border-bottom: 1px solid rgba(229, 229, 229, 1);
          .ab-2 {
            width: 290px;
            height: 162px;
            margin-right: 30px;
            position: relative;
            .ab-2-img {
              width: 100%;
              height: 100%;
            }
            .bofang {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              cursor: pointer;
            }
          }
          .ab-3 {
            width: 428px;
            h3 {
              line-height: 18px;
              font-size: 18px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              margin-bottom: 28px;
            }
            div {
              width: 428px;
              height: 115px;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
              overflow: hidden;
            }
          }
        }
        .pages {
          width: 100%;
          height: 32px;
          margin-top: 90px;
          margin-bottom: 60px;
          text-align: center;
        }
      }

      .box2 {
        width: 863px;
        min-height: 1000px;
        /* padding: 50px 0; */
        background: #fff;
        margin: 0 auto;
        position: relative;

        li {
          cursor: pointer;
          float: left;
          margin-left: 52px;
          margin-top: 60px;
          list-style: none;

          img {
            width: 339px;
            height: 214px;
            font-size: 0;
            box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.16);
          }

          .box3 {
            width: 339px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.16);
            border-top: 0;
            margin-top: -5px;
            padding-left: 20px;

            h3 {
              height: 80px;
              // line-height: 18px;
              font-size: 18px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              padding: 30px 20px 20px 0;
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

        // ul {
        //   li {
        //     position: relative;
        //     font-size: 14px;
        //     font-family: MicrosoftYaHei;
        //     font-weight: 400;
        //     color: rgba(51, 51, 51, 1);
        //     width: 100%;
        //     height: 70px;
        //     line-height: 70px;
        //     padding: 0 40px 0 60px;
        //     border-bottom: 1px solid #d7d7d7;

        //     &:hover {
        //       background: #d5f1ff;
        //     }

        //     a {
        //       color: #333333;
        //     }

        //     i {
        //       display: block;
        //       position: absolute;
        //       top: 50%;
        //       left: 40px;
        //       transform: translateY(-50%);
        //       border-radius: 100%;
        //       background: #000;
        //       margin-right: 10px;
        //       width: 5px;
        //       height: 5px;
        //     }

        //     .p1 {
        //       display: inline-block;
        //       width: 550px;
        //       height: 100%;
        //       overflow: hidden;
        //       text-overflow: ellipsis;
        //       white-space: nowrap;
        //     }

        //     .p2 {
        //       display: inline-block;
        //       text-align: right;
        //       position: absolute;
        //       top: 0;
        //       right: 40px;
        //       width: 250px;
        //       height: 70px;
        //     }
        //   }
        // }

        .pages {
          width: 100%;
          height: 32px;
          margin-top: 90px;
          margin-bottom: 60px;
          text-align: center;
        }
      }
    }
  }
}

.mt74 {
  margin-top: 74px;
}

.risk .content .right .box .list.mt74 {
  .ani-title {
    padding-left: 20px;

    &:before {
      left: 0;
    }
  }
}

.videos {
  video {
    width: 100%;
    height: 100%;
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
</style>
