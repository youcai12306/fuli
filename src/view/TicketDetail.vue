<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <div class="nav clearDiv">
        <div class="floatLeft" @click="orderr" v-if="this.$route.query.typeId == 0">{{$t('TicketDetail.Text1')}}</div>
        <div class="floatLeft" @click="orderr" v-else-if="this.$route.query.typeId == 1">{{$t('TicketDetail.Text')}}</div>
        <div class="floatLeft" @click="orderr" v-else-if="this.$route.query.typeId == 2">{{$t('TicketDetail.Text0')}}</div>
        <div class="floatRight" @click="myorder">{{$t('TicketDetail.Text2')}}</div>
        <div class="floatRight shopping-car" @click="jumpShoppingCar">
          <img src="../assets/img/shopping-car.png">{{$t('TicketDetail.Text3')}}(
          <span>{{shopNum}}</span>)
        </div>
      </div>
      <div class="main-one clearDiv">
        <div class="one-left">
          <img :src="imgs2[index]" alt>
          <div class="swiper">
            <div class="swiper-contents">
              <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,key) in imgs2" :key="key">
                  <img :src="item" :class="{borderImg:key === index}" @click="jumpImg(key)">
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-prev" @click="prev"></div>
            <div class="swiper-next" @click="next"></div>
          </div>
        </div>
        <!-- {{data}} -->
        <div class="one-right">
          <div class="right-title">{{product.productName}}</div>
          <div class="right-pay clearDiv">
            <div class="title">{{canDebook(product.returnSign)}}</div>
            <div class="new-price">
              ￥{{product.settlementPrice}}
              <span class="old-price">{{$t('TicketDetail.Text4')}}¥{{product.originalPrice}}</span>
            </div>
            <div class="pay pay-num">
              <span>{{$t('TicketDetail.Text5')}}:</span>
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" :precision="0"
                :step="1" class="num-change" @blur="isNull">
              </el-input-number>
            </div>
            <!-- <p class="tip">注：一个手机号最多可购买{{product.commitCount}}张票</p> -->
            <!-- <div class="pay pay-type">
              <span>配送方式：</span>
              <button
                @click="changeGiveType(0)"
                :class="{btn:changeA === 0}"
              >邮寄</button>
              <button
                @click="changeGiveType(1)"
                :class="{btn:changeA === 1}"
              >自提</button>
            </div>
            <p class="tip">注：请选择邮寄方式</p> -->
            <img src="../assets/img/add-shoppingcar.png" alt class="img1" @click="addShoppingCar">
            <img src="../assets/img/nowbuy.png" alt class="img2" @click="jumpSubmitOrder()">
          </div>
        </div>
      </div>
      <div class="details">
        <ul class="clearDiv">
          <li :class="{li:changeB === 0}" @click="changeType(0)">{{$t('TicketDetail.Text6')}}

          </li>
          <li :class="{li:changeB === 1}" @click="changeType(1)">{{$t('TicketDetail.Text7')}}</li>
        </ul>
        <div v-show="changeB === 0">
          {{useContent}}
        </div>
        <div v-show="changeB === 1">
          {{returnContent}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_Url } from "../package/common.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "@/components/Header";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        notNextTick: true,
        slideToClickedSlide: true, //点击下面的小图片修改上面的大图
        preventClicks: false, //用于防止触摸时触发链接跳转
        preventLinksPropagation: false //阻止click冒泡。拖动Swiper时阻止click事件
      },
      index: 0,
      num1: 1,
      
      changeB: 0,
      imgs: [],
      imgs2: [],
      img3: "",
      time: "2018.12.09 08.00- 17.30",
      product: {},
      shopNum: 0,
      list: "",
      list2: [],
      touristId: "",
      dataBaseDate:"",
      parkId:"",
      useContent:"",
      returnContent:""
    };
  },
  components: {
    swiper,
    swiperSlide,
    Header
  },
  methods: {
    // 计数器不能输入为空
    isNull() {
      if (this.num1 == undefined) {
        this.$nextTick(function() {
          this.num1 = 1;
        });
      }
    },
    //初始化数据
    init() {
      let id = this.$route.query.id;
      let stockId = this.$route.query.stockId;
      let typeId = this.$route.query.typeId;
      let touristId = this.$store.getters.getUserData.userId;

      // console.log(id);
      // console.log(stockId);
      this.$fetch( this.$url2+"/api-bkf-product/product-aggregate/find/" + id, {
        stockId: stockId,
        touristId,
        typeId:typeId
      }).then(res => {
        console.log(res);
        console.log(res.data.dataBaseDate);
        this.dataBaseDate = res.data.dataBaseDate; //库存日期
        this.parkId = res.data.parkId;
       
        console.log(this.parkId)
        if (res.code === 200) {
          // console.log(111);
          this.product = res.data;
           this.useContent = res.data.useContent;
        this.returnContent = res.data.returnContent;
          let list = res.data.productPictureList;
          this.list2 = res.data.productPictureList;
          let xin = [];
          let xin2 = "";
          list.forEach((v, k) => { //拼接图片字符串
								xin.push(v.subPictureId);
								xin2 = xin.join(",");
					});
					this.GetSelectFiles(xin2);
        }
      });
    },
    GetSelectFiles(obj) { //批量获取图片
      this.$fetch(`${this.$url1}:2600/staticResource-mucon/selectFiles`, {
        ids: obj
      }).then(res => {
        this.imgs = res.data;
        this.list2.forEach((v, k) => {
          if (v.subPictureId) { //是否有图片
            this.imgs.forEach(res => {
              if (v.subPictureId == res.id) {
                console.log(IMG_Url + res.fileName);
                this.imgs2.push(IMG_Url + res.fileName);
              }
            })
					}else{
            this.imgs2.push(IMG_Url + this.imgs[0].fileName);
          }
        });
          console.log(this.imgs2);
      });
    },
    prev() {
      this.swiper.slidePrev();

      this.index--;

      this.imgs.index = this.img3;

      if (this.index <= 0) {
        this.index = 0;
      }
      console.log(this.index);
      this.img3 = this.imgs[this.index];
      // console.log(this.index);
    },
    next() {
      this.swiper.slideNext();
      this.index++;
      //  this.swiper.slideTo(this.index, 500, false);

      if (this.index >= this.imgs.length) {
        this.index = this.imgs.length - 1;
      }
      this.img3 = this.imgs[this.index];
    },

    handleChange(value) {
      // console.log(value)
      // console.log(typeof value);
      // if(typeof(value) == "undefined"){
      //     this.num1 == 1
      // }
    },
    //配送方式切换
    // changeGiveType(type) {
    //   this.changeA = type;
    // },
    //详情和须知切换
    changeType(type) {
      this.changeB = type;
    },
    // 查看我的订单
    myorder() {
      this.$router.push("./mine");
    },
    // 网上订购
    orderr() {
      this.$router.push("./tickets/1");
    },
    //是否可退订
    canDebook(type) {
      return type === 1 ? (this.sign = "可退订") : (this.sign = "不可退订");
    },
    //跳转提交订单页面
    jumpSubmitOrder(id, stockId) {
      let Uid = this.$store.getters.getUserData.userId;
      if (Uid == undefined) {
        //判断是否登录
        this.$router.push("/login");
        return;
      }
      // this.$router.push({
      //   path: "/Suborder",
      //   query: {
      //     id: this.product.id,
      //     stockId: this.$route.query.stockId,
      //     num: this.num1 //
      //   }
      // });
      // 判如果是邮寄，传stockId参数过去..
      let typeId = this.$route.query.typeId;
      if (typeId == 0 || typeId == 2) {
        this.$router.push({
          path: "/Suborder2",
          query: {
            saleType: 0,
            id: this.product.id,
            stockId: this.$route.query.stockId,
            num: this.num1,
            typeId:this.$route.query.typeId,
            returnSign: this.product.returnSign
          }
        });
      } else if (typeId == 1) {
        this.$router.push({
          path: "/Suborder2",
          query: {
            saleType: this.product.saleType,
            id: this.product.id,
            stockId: this.$route.query.stockId,
            num: this.num1 ,
            typeId:this.$route.query.typeId,
            returnSign: this.product.returnSign
          }
        });
      }
    },
    //加入购物车
    addShoppingCar() {
      let Uid = this.$store.getters.getUserData.userId;
      let createDateId = this.$route.query.stockId;
      if (Uid == undefined) {
        //判断是否登录
        this.$router.push("/login");
        return;
      }

      let data = {
        touristId: Uid,
        productId: this.product.id,
        createDateId: createDateId,
        productCount: this.num1,
        dataBaseDate:this.dataBaseDate
      };
      this.$post(
        this.$url2+"/api-bkf-user/user-aggregate/addToshopCart",
        {
          touristId: Uid,
          productId: this.product.id,
          createDateId: createDateId,
          productCount: this.num1,
          typeId:this.$route.query.typeId,
          dataBaseDate:this.product.dataBaseDate,
          parkId:this.product.parkId,
        },
        { headers: { "Content-Type": "application/json;charset=UTF-8" } }
      ).then(res => {
        if (res.code === 200) {
          this.searchShoppingCar(Uid);
        }
      });
    },
    //查询购物车
    searchShoppingCar(Uid) {
      this.$fetch(
        this.$url2+"/api-bkf-user/user-aggregate/selectShopCarts",
        {
          touristId: Uid
        }
      ).then(res => {
        if (res.code === 200) {
          // console.log(res.data);
          let list = res.data.list;
          let shopNum = 0;
          list.forEach((item)=>{
            shopNum += item.productCount;
          })
          this.shopNum = shopNum;
        }
      });
    },
    //跳转购物车页面
    jumpShoppingCar() {
      this.$router.push("/shoppingCar");
    },
    //跳转对应图片
    jumpImg(key){
      this.index = key;
    }
  },

  mounted() {
    let Uid = this.$store.getters.getUserData.userId;
    this.init();
    this.searchShoppingCar(Uid);
    this.img3 = this.imgs[0];
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    data() { //处理最新活动图片数据
        // console.log(this.list2);
				// this.list2.forEach((v, k) => {
				// 	if (v.subPictureId) { //是否有图片
				// 			this.imgs.forEach(res => {
				// 				if (v.subPictureId == res.id) {
        //           v.subPictureId = IMG_Url + res.fileName;
				// 				}
				// 			});
				// 	}
				// });
				// return list2;
		}
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/img/pdDetail-bg.png) no-repeat 0 0;
  background-size: 1920px 100%;
  .floatRight {
    cursor: pointer;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 1);
    padding: 50px 50px 0 40px;
    .nav {
      height: 23px;
      line-height: 23px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 38px;
      .floatLeft {
        cursor: pointer;
      }
      .shopping-car {
        height: 23px;
        line-height: 23px;
        margin-right: 23px;
        img {
          float: left;
          width: 23px;
          height: 23px;
        }
      }
    }
    .main-one {
      .one-left,
      .one-right {
        float: left;
      }
      .one-left {
        img {
          width: 450px;
          height: 450px;
        }
        .swiper {
          width: 450px;
          position: relative;
          height: 110px;
          .swiper-contents {
            margin-top: 27px;
            padding: 0 42px;
            img {
              width: 109px;
              height: 109px;
            }
            .borderImg {
              border: 1px solid red;
            }
          }
          .swiper-prev {
            position: absolute;
            left: 0;
            top: 50%;
            background: url(../assets/img/pdDetail-prev.png) no-repeat 0 0;
            width: 18px;
            height: 32px;
            margin-top: -16px;
          }
          .swiper-next {
            position: absolute;
            right: 0;
            top: 50%;
            background: url(../assets/img/pdDetail-next.png) no-repeat 0 0;
            width: 18px;
            height: 32px;
            margin-top: -16px;
          }
        }
      }
      .one-right {
        margin-left: 37px;
        position: relative;
        .right-title {
          margin-left: 8px;
          font-size: 18px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          padding-bottom: 34px;
        }
        .right-pay {
          width: 620px;
          min-height: 395px;
          background: rgba(247, 247, 247, 1);
          padding: 12px 38px 20px 13px;
          .title {
            width: 54px;
            height: 23px;
            line-height: 23px;
            text-align: center;
            border: 1px solid rgba(242, 115, 115, 1);
            border-radius: 5px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(242, 115, 115, 1);
          }
          .new-price {
            font-size: 22px;
            font-weight: bold;
            color: rgba(227, 87, 76, 1);
            margin-top: 31px;
            span {
              font-size: 14px;
              text-decoration: line-through;
              color: rgba(153, 153, 153, 1);
            }
          }
          .pay {
            font-size: 16px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-top: 30px;
            * {
              float: left;
            }
          }
          .pay-num {
            height: 40px;
            line-height: 40px;
            .num-change {
              margin-left: 10px;
              width: 129px;
            }
          }
          .pay-type {
            height: 30px;
            line-height: 30px;
            button {
              width: 69px;
              height: 30px;
              line-height: 30px;
              margin-left: 20px;
              background-color: rgba(255, 255, 255, 1);
              font-size: 16px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              border: 1px solid rgba(51, 51, 51, 1);
            }
            .btn {
              border: 1px solid rgba(227, 87, 76, 1);
              color: rgba(227, 87, 76, 1);
            }
          }
          .tip {
            font-size: 12px;
            font-weight: 400;
            color: rgba(227, 87, 76, 1);
            padding-top: 20px;
            padding-bottom: 28px;
            border-bottom: 1px solid rgba(228, 228, 228, 1);
          }
          img {
            margin-top: 34px;
            width: 146px;
            height: 43px;
            cursor: pointer;
          }
          .img1 {
            margin-left: 10px;
          }
          .img2 {
            margin-left: 18px;
          }
        }
      }
      .detail-tilte {
        margin-top: 64px;
        text-align: center;
      }
    }
    .details {
      padding-top: 120px;
          padding-bottom: 200px;
      ul {
        li {
          float: left;
          min-width: 125px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          background: rgba(244, 244, 244, 1);
          font-size: 16px;
          font-weight: 400;
          padding: 0 10px;
          color: rgba(51, 51, 51, 1);
        }
        .li {
          color: rgba(255, 255, 255, 1);
          background: rgba(227, 87, 76, 1);
        }
      }
    }
    .swiper-container-horizontal {
      cursor: pointer;
    }
  }
}
</style>
