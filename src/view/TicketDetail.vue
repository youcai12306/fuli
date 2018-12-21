<template>
  <div class="main">
    <div class="content">
      <div class="nav clearDiv">
        <div class="floatLeft">当前位置：网上订购>门票详情页</div>
        <div class="floatRight">我的订单</div>
        <div class="floatRight shopping-car" @click="jumpShoppingCar">
          <img src="../assets/img/shopping-car.png">购物车(
          <span>{{shopNum}}</span>)
        </div>
      </div>
      <div class="main-one clearDiv">
        <div class="one-left">
          <img :src="img" alt>
        </div>
        <div class="one-right">
          <div class="right-title">{{product.productName}}</div>
          <div class="right-pay clearDiv">
            <div class="title">{{canDebook(product.returnSign)}}</div>
            <div class="new-price">
              ￥{{product.settlementPrice}}
              <span class="old-price">原价￥{{product.originalPrice}}</span>
            </div>
            <div class="pay pay-time">游玩时间：{{product.useBeginTime}}-{{product.useEndTime}}</div>
            <div class="pay pay-num">
              <span>购买数量:</span>
              <el-input-number
                v-model="num1"
                :min="1"
                :max="product.commitCount"
                label="描述文字"
                class="num-change"
              ></el-input-number>
            </div>
            <p class="tip">注：一个手机号最多可购买{{product.commitCount}}张票</p>
            <img src="../assets/img/add-shoppingcar.png" alt class="img1" @click="addShoppingCar">
            <img src="../assets/img/nowbuy.png" alt class="img2" @click="jumpSubmitOrder()">
          </div>
        </div>
      </div>
      <div class="details">
        <ul>
          <li>商品详情</li>
        </ul>
        <div class="know">
          <div class="instructions">
            <h3>【使用说明】</h3>
            <!-- <p>
              <span>1</span>方特乐园门票一经预定成功后不可进行改期、退票等操作，请务必确认信息无误再进行购买。
            </p>
            <p>
              <span>2</span>方特乐园门票一经预定成功后不可进行改期、退票等操作，请务必确认信息无误再进行购买。
            </p>-->
          </div>
          <div class="instructions">
            <h3>【退款说明】</h3>
          </div>
          <div class="remark">
            <h3>【备注】</h3>
            <!-- <div class="remark-box">
              <div>一、适用范围:</div>
              <p>全价票：适用于成人及身高≥1.5米的儿童；儿童票：适用于1.2米≤身高＜1.5米的儿童；长者票：适用于65周岁≤年龄＜70周岁的长者，须出示本人有效身份证件</p>
            </div>
            <div class="remark-box">
              <div>一、适用范围:</div>
              <p>全价票：适用于成人及身高≥1.5米的儿童；儿童票：适用于1.2米≤身高＜1.5米的儿童；长者票：适用于65周岁≤年龄＜70周岁的长者，须出示本人有效身份证件</p>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_Url } from "../package/common.js";
export default {
  data() {
    return {
      num1: 1,
      time: "2018.12.09 08.00- 17.30",
      product: {},
      img: "",
      shopNum: 0
    };
  },
  methods: {
    //初始化数据，接受产品列表产品ID以及库存ID，调用陈鑫的产品日历库存接口以及周卓的图片接口
    init() {
      let id = this.$route.query.id;
      let stockId = this.$route.query.stockId;
      this.$fetch("http://192.168.2.38:5010/product/find/" + id, {
        stockId: stockId
      }).then(res => {
        if (res.code === 200) {
          console.log(res);
          this.product = res.data;
          //请求图片接口
          this.$fetch(
            "http://192.168.2.34:2600/staticResource/selectFileById",
            { id: this.product.pictureId }
          ).then(res => {
            this.img = IMG_Url + res.data.fileName;
          });
        }
      });
    },
    //是否可退订
    canDebook(type) {
      return type === 1 ? (this.sign = "可退订") : (this.sign = "不可退订");
    },
    //跳转提交订单页面
    jumpSubmitOrder() {
      this.$router.push({
        path: "/Suborder",
        query: {
          id: this.product.id,//产品ID
          stockId: this.$route.query.stockId,//库存
          num: this.num1 //数量
        }
      });
    },
    //加入购物车
    addShoppingCar() {
      let Uid = this.$store.getters.getUserData.userId;
      let createDateId = this.$route.query.stockId;
      let data = {
        touristId: Uid,
        productId: this.product.id,
        createDateId: createDateId,
        productCount: this.num1
      };
      this.$post(
        "http://192.168.2.34:6061/shopCart/addToshopCart",
        {
          touristId: Uid,
          productId: this.product.id,
          createDateId: createDateId,
          productCount: this.num1
        },
        { headers: { "Content-Type": "application/json;charset=UTF-8" } }
      ).then(res => {
        if (res.code === 200) {
          this.searchShoppingCar(Uid)
        }
      });
    },
    //查询购物车
    searchShoppingCar(Uid) {
      this.$fetch("http://192.168.2.34:6061/shopCart/selectShopCarts", {
        touristId: Uid
      }).then(res => {
        if (res.code === 200) {
          console.log(res.data);
          let list = res.data;
          let shopNum = 0;
          for(let item of list){
            shopNum += item.productCount;
          }
          this.shopNum = shopNum;
        }
      });
    },
    //跳转购物车页面
    jumpShoppingCar(){
      this.$router.push('/shoppingCar1')
    }
  },
  mounted() {
    let Uid = this.$store.getters.getUserData.userId;//获取登录后的游客ID
    this.init();
    this.searchShoppingCar(Uid)
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/img/pdDetail-bg.png) no-repeat 0 0;
  background-size: 1920px 100%;
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
          height: 395px;
          background: rgba(247, 247, 247, 1);
          padding: 12px 38px 0 13px;
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
          .pay-time {
            height: 17px;
            line-height: 17px;
            font-size: 16px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
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
      ul {
        li {
          width: 125px;
          height: 56px;
          line-height: 56px;
          text-align: center;
          background: rgba(227, 87, 76, 1);
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
      .know {
        padding: 0 140px 50px 32px;
        background: rgba(244, 244, 244, 1);
        .instructions {
          h3 {
            font-size: 16px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            padding-bottom: 33px;
            padding-top: 42px;
          }
          p {
            line-height: 28px;
            font-size: 14px;
            color: #333333;
            span {
              color: #e3574c;
              font-size: 18px;
              margin-right: 10px;
            }
          }
        }
        .remark {
          h3 {
            font-size: 16px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            padding-bottom: 33px;
            padding-top: 42px;
          }
          .remark-box {
            margin-bottom: 20px;
            div {
              font-size: 18px;
              font-weight: bold;
              color: #e3574c;
              padding: 5px 0;
            }
            p {
              font-size: 14px;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>