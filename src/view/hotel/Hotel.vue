<!-- 度假酒店 -->
<template>
  <div class="hotel">
    <Header></Header>
    <div class="top">
      <img src="../../assets/img/hotel-img1.jpg" alt>
      <div class="top-box">
        <h3 v-html="$t('Hotel.Text1')"></h3>
        <p>{{$t('Hotel.Text2')}}</p>
      </div>
    </div>
    <div class="bottom">
      <h3>度假酒店/Resort Hotel</h3>
      <ul class="clearDiv">
        <li @click="jumpDetail(item.structureId,item.facePictureId)" v-for="(item,index) in data" :key="index">
          <img :src="item.facePictureId[0]" alt>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"; //引入头部
import Cookies from 'js-cookie';
import {
		IMG_Url
	} from "@/package/common";
export default {
  data() {
    return {
      pageSize: 4,
      pageIndex: 1,
      imgs: [],
      list: [],
      isEnglish: Cookies.get('language') == 'en' ? 1 : 0
    };
  },
  components: {
    Header
  },
  computed: {
    data() { //处理度假酒店图片数据
				let list = this.list;
				list.forEach((v, k) => {
					if (v.facePictureId) { //是否有图片
						v.facePictureId.forEach((val, key) => {
							this.imgs.forEach(res => {
								if (val == res.id) {
                  v.facePictureId[key] = IMG_Url + res.fileName;
								}
							});
						})
					}
				});
				return list;
			}
  },
  methods: {
    getSearch(type, pageSize, pageIndex, isEnglish) { //获取度假酒店列表 度假酒店后台ID=4 pageSize分页大小 pageIndex第几页 isEnglish中英文标识
      this.$fetch(
        `${this.$url1}:6110/mongodb-mucon/structure/primary/searchLinkIndex?linkIndex=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
      ).then(res => {
        if (res.code === 200) {
          let xin = [];
          let xin2 = "";
          let list = [];
          if (type == 'C') {
            this.list = res.data.content || [];
            list = this.list;
            this.totle = res.data.totalElements;
          }
          list.forEach((v, k) => { //拼接图片字符串
            if (v.facePictureId) { //是否有图片
              v.facePictureId.forEach((val, key) => {
                // if (key == 0) { //获取第一个图片
                  xin.push(val);
                  xin2 = xin.join(",");
                // }
              })
            }
          });
          this.GetSelectFiles(xin2, type);
        } else {
          console.log("读取失败");
        }
      });
    },
    GetSelectFiles(obj, type) { //批量获取图片
      this.$fetch(`${this.$url1}:2600/staticResource-mucon/selectFiles`, {
        ids: obj
      }).then(res => {
        this.imgs = res.data;
      });
		},
    jumpDetail(id,swiperImg) {
      this.$router.push({
        path: "/hotelDetail",
        query: {
          id: id,
          swiperImg: swiperImg
        }
      });
    }
  },
  mounted() {
    this.getSearch('C', this.pageSize, this.pageIndex, this.isEnglish);
  }
};
</script>
<style lang='scss' scoped>
.hotel {
  .top {
    position: relative;
    padding-top: 47%;
    height: 0;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .top-box {
      /* width: 411px; */
      height: 171px;
      background: rgba(10, 10, 10, 0.78);
      position: absolute;
      left: 19%;
      top: 15%;
      padding-top: 25px;
      padding-left: 30px;
			padding-right: 100px;
      h3 {
        font-size: 30px;
        font-weight: bold;
        color: rgba(249, 186, 17, 1);
        line-height: 44px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 48px;
      }
    }
  }
  .bottom {
    width: 1200px;
    margin: 0 auto;
    h3 {
      //   height: 26px;
      line-height: 26px;
      font-size: 26px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      padding-bottom: 14px;
      padding-top: 78px;
      border-bottom: 2px solid rgba(191, 191, 191, 1);
    }
    ul {
      padding-bottom: 195px;
      li {
        float: left;
        margin-top: 80px;
        width: 378px;
        height: 231px;
        position: relative;
        margin-right: 33px;
        cursor: pointer;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        img {
          width: 378px;
          height: 231px;
        }
        p {
          padding-left: 20px;
          bottom: 0;
          left: 0;
          position: absolute;
          width: 100%;
          height: 58px;
          line-height: 58px;
          background: rgba(0, 0, 0, 0.77);
          font-size: 16px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>