<template>
  <div class="suborder">
    <Header></Header>
    <div class="su1">

      <!-- 订单详情 -->
      <div class="su2 clearDiv">
        <div class="su22" @click="jumpdetail">
          当前位置：网上订购>详情页>提交订单
        </div>
        <!-- 弹出框遮罩内容 -->
        <div
          class="su21 clearDiv"
          v-show="flag"
        >
          <div class="bg clearDiv"></div>
          <div class="show clearDiv">
            <div class="su22">
              <img
                src="../../assets/img/dengdai.png"
                alt=""
              >
              <p class="su23">订单创建中，请稍后...</p>
              <p class="su24">预计等待时间为3秒</p>
            </div>
          </div>
        </div>
        <div class="suu">
          <div class="su3">
            <span>订单详情</span>
          </div>
          <div class="su4">
            <table
              cellspacing="0"
              width="1078"
              height="353"
            >
              <tr>
                <th>商品信息</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
              </tr>
              <tr v-for="item in list2" :key="item.id">
                <!-- <tr v-for="item in list2" :key="item"> -->
                <td>{{item.product.productName}}
                  <p>游玩时间：{{item.product.dataBaseDate}}</p>
                  <!-- <p>{{canDebook(item.product.saleType)}}</p> -->
                </td>
                <td>¥{{item.settlementPrice}}元</td>
                <td>×{{item.productCount}}</td>
                <td class="td">¥{{item.settlementPrice*item.productCount}}元</td>
              </tr>
              <!-- <tr>
                <td>富力成人全日票
                  <p>游玩时间：2018.11.23</p>

                </td>
                <td>¥199.00元</td>
                <td>×2</td>
                <td class="td">¥199.00元</td>
              </tr> -->

              <!-- <tr>
              <td>
                富力成人全日票
                <p>游玩时间：2018.11.23</p>

              </td>
              <td>¥199.00元</td>
              <td>×2</td>
              <td>¥199.00元</td>
            </tr> -->

            </table>
          </div>
          <!-- 优惠券信息 -->
          <div class="su5">

            <span class="su6">优惠券信息</span>
            <span class="su7">暂无优惠券</span>

          </div>
          <!-- 游客信息 -->
          <div class="su8">
            <div class="su9">
              <span class="su91">游客信息</span>
              <span class="su92">游客信息：您需要填写1位游客信息</span>
            </div>
            <div class="su10 clearDiv">
              <div>
                <el-form
                  ref="numberValidateForm"
                  :model="numberValidateForm"
                  label-width="85px"
                >

                  <el-form-item
                    label="姓名 ："
                    class="el1"
                    prop="name1"
                    :rules="[
                          { required: true, message: '姓名不能为空'},
                          { type: 'string', message: '姓名必须为中文'},
                          {
                            pattern:/^[\u4E00-\u9FA5]+$/,
                            message: '用户名只能为中文'
                          }
                      ]"
                  >

                    <el-input
                      type="name1"
                      v-model.number="numberValidateForm.name1"
                      autocomplete="off"
                    >

                    </el-input>

                  </el-form-item>

                  <el-form-item
                    label="手机号 ："
                    class="el2"
                    prop="phone"
                    :rules="[
                          { required: true, message: '手机号不能为空',trigger:'blur'},
                          { type: 'number', message: '手机号必须为数字'}
                      ]"
                  >
                    <el-input
                      type="phone"
                      v-model.number="numberValidateForm.phone"
                      autocomplete="off"
                    >

                    </el-input>

                    <p>此手机号用于接受入园短信</p>
                  </el-form-item>

                  <el-form-item
                    label="身份证 ："
                    class="el1"
                    prop="name2"
                    :rules="[
                          { required: true, message: '身份证不能为空'},
                          { type: 'number', message: '身份证必须为数字'}
                      ]"
                  >

                    <el-input
                      type="name2"
                      v-model.number="numberValidateForm.name2"
                      autocomplete="off"
                    >

                    </el-input>

                  </el-form-item>
                  <!-- 邮寄地址 -->
                  <div class="su5" v-show="flag1">

                    <span class="su6">邮寄地址</span>
                    <span class="su7" @click="address()">选择收件地址</span>
                    

                  </div>
                  <div class="q1" v-show="flag1">
                      <div class="q2">
                        <p>收件人：<span>{{name1}}</span></p>
                        <p class="q3">手机号：<span>{{phone1}}</span></p>
                        <p>地址：<span>{{address1}}</span></p>
                      </div>
                    </div>
                  <div class="su11">
                    <el-checkbox v-model="checked">同意《购买协议》</el-checkbox>
                  </div>

                  <div class="su14">
                    <span class="su15">总计金额：</span>
                    <span class="su16">¥{{price2}}元</span>
                  </div>

                  <el-form-item>
                    <el-button
                      type="primary"
                      @click="submitForm('numberValidateForm')"
                      :plain="true"
                    ></el-button>

                  </el-form-item>
                </el-form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      numberValidateForm: {
        name1: "",
        name2: "",
        phone: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      checked: true,
      flag: false,
      flag1: false,
      count: 0,
      price1: "",
      productname: "",
      playtime: "",
      orderId: "",
      times: "",
      saleType: "",
      sign: "",
      a1: this.$route.query.a,
      list2: [],
      price2: 0,
      name1:"",
      phone1:"",
      address1:"",
      receiveId:"",
      arr2:[],
      arr3:[],
      ids:""
    };
  },
  mounted() {
    this.shopmsg();
    // this.saleType = this.$route.query.saleType
    // 监听路由跳转路径，如果是购物车，标志为a1，直接接受上个页面的参数
    if (this.a1 == 1) {
      let list1 = this.$route.query.list1;
      this.list2 = JSON.parse(list1);
      console.log(this.list2);
      // this.productName =this.product.productName;
      // this.playtime = this.product.dataBaseDate;
      // this.price1 = this.product.settlementPrice;
      // console.log(this.price1);
      // this.count = this.productCount;
      for (let item of this.list2) {
        this.price = item.settlementPrice;
        // console.log(this.price)
        this.count = item.productCount;
        this.pricetotal = this.price * this.count;
        // console.log(typeOf()this.pricetotal)
        this.price2 += this.pricetotal;
      }
    }
  },
  // 监听路由跳转路径，如果是购物车，重新调用购物车接口
  // watch :{
  //   '$route' (to, from){
  //     console.log(to);

  //   }
  // },
  methods: {
    // 验证信息
    open(){
      this.$message('网络异常，下单失败')
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.flag = true;
          // alert("submit!");
          this.onSubmit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    //  将购物车 已提交的订单清空，
      this.$fetch(
        "http://192.168.2.61:6061/shoppingCart-aggregate/bathDeleteShopCarts?ids=" +
          this.ids
      ).then(res => {
        // console.log(11);
        if (res.code === 200) {
          this.good_list = {};
          this.flag = true;
        }
      });
    },
    jumpdetail(){
      this.$router.push("./productdetail")
    },
    // 选择收货地址
    address(){
      this.$router.push("./shoppingadress")
    },
    //接受产品详情页面的产品ID，库存ID,数量，是否邮寄，调用接口，展示订单信息
    shopmsg() {
      let id = this.$route.query.id2;
      let stockId = this.$route.query.stockId;
      // console.log(id);
      // console.log(stockId)
      let num1 = this.$route.query.num;
      this.saleType = this.$route.query.saleType;
      let list1 = this.$route.query.list1;
      let list2 = JSON.parse(list1);
      list2.forEach((v,i) =>{
         this.arr2[i] = {};
         this.arr2[i]["id"] = v.id;
         console.log(this.arr2[i]["id"]);
         this.arr3.push(this.arr2[i]["id"]);
         console.log(this.arr3)
      })
      
      this.ids = this.arr3.join(",");
      console.log(this.ids)
      // console.log(this.saleType);
      // console.log(num1);
      this.count = num1;

      this.$fetch("http://192.168.2.61:5001/product-aggregate/find/" + id, {
        stockId: stockId,
        saleType: this.saleType
      }).then(res => {
        if (res.code === 200) {
          // console.log(res);
          this.productname = res.data.productName;
          this.playtime = res.data.dataBaseDate;
          this.price1 = res.data.settlementPrice;
        }
      });
    },
    // 判断是邮寄或者自提，邮寄需要显示邮寄地址，传邮寄ID到李顺仪
    canDebook(type) {
      // return type === 1 ? (this.sign = "邮寄") : (this.sign = "自提");
      if (type == true) {
        this.sign = "邮寄";
        this.flag1 = true;
        let data2 = {
           touristId: this.$store.getters.getUserData.userId
        }
        // 调用邮寄接口
        this.$fetch('http://192.168.2.50:5010/tourist-aggregate/address/selectOneReceiveAddress',data2).then((res) =>{
          // console.log(res);
          this.name1 = res.data.receivePersonName;
          this.phone1 = res.data.receivePersonMobile;
          this.address1 = res.data.receiveProvince + res.data.receiveCity + res.data.receiveArea;
          this.receiveId = res.data.id
        })
      } else if (type == false) {
        this.sign = "自提";
        
      }
      return this.sign;
    },
    //   提交
    onSubmit() {
      console.log(this.$route.query.arr);
      let data = {
        touristId: this.$store.getters.getUserData.userId,
        productFormList: this.$route.query.arr,
        receiveId: 1111111111, //邮寄ID
        receiveName: this.numberValidateForm.name1,
        receiveMobile: this.numberValidateForm.phone,
        receiveIdentityCode: this.numberValidateForm.name2
      };
      // 拿到guid以及订单号
      this.$post("http://192.168.2.61:5041/order-aggregate/save", data, {
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          // console.log(res);
          this.orderId = res.data.orderId;
          let data1 = {
            guid: res.data.guid,
            userId: this.$store.getters.getUserData.userId
          };
          // console.log(111);
          // 读redis，成功创建订单后关闭遮罩层，跳转支付页面
          this.times = setInterval(() => {
            this.$fetch(
              "http://192.168.2.55:5100/callBack-aggregate/getOccupation",
              data1
            ).then(res => {
              console.log(res);
              if (res.code === 200) {
                clearInterval(this.times);
                this.flag = false;
                this.$router.push({
                  path: "./success",
                  query: {
                    orderId: this.orderId,  
                    price2: this.price2
                  }
                });
              } else if (res.code === 403) {
                this.open();
                this.$router.push("./mine")
               
              }
            });
          }, 3000);

          ///
        }else if(res.code === 400){
          this.$router.push("/mine")
           console.log(res);
           alert("下单失败");
        }
      }).catch((error)=>{
        console.log(error)
      })
      
    }
  },
  // 销毁定时器
  beforeDestroy() {
    clearInterval(this.times);
  }
  // 计算产品总价格
  // computed: {
  //   price2() {
  //     return this.pricetotal++;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.su1 {
  background-image: url(../../assets/img/bacdd.png);
  .su2 {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    .su22 {
      font-size: 12px;
      margin-top: 33px;
      margin-left: 48px;
      cursor: pointer;
    }
    .su21 {
      height: 100%;
      // 遮罩层
      .bg {
        display: block;
        position: fixed;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1001;
        opacity: 0.3;
      }
      .show {
        display: block;
        position: fixed;
        top: 25%;
        left: 39%;
        width: 415px;
        height: 299px;
        padding: 8px;
        border: 1px solid #e8e9f7;
        background-color: #fff;
        z-index: 1002;
        .su22 {
          margin-top: 49px;
          img {
            margin-bottom: 27px;
            margin-left: 108px;
          }

          .su23 {
            color: #333333;
            font-size: 24px;
            font-weight: bold;
            line-height: 28px;
            margin-bottom: 19px;
            margin-left: 44px;
          }
          .su24 {
            color: #0764e9;
            font-size: 14px;
            margin-left: 90px;
          }
        }
      }
    }
    .suu {
      margin-left: 59px;
      margin-right: 63px;
    }
    .su3 {
      margin-top: 95px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 31px;
      padding-bottom: 24px;
      span {
        margin-left: 18px;
        color: #333333;
        font-weight: bold;
        position: relative;
        &:before {
          content: "";
          width: 9px;
          height: 18px;
          background: #2d7ae4;
          position: absolute;
          left: -16px;
          top: 0;
        }
      }
    }
    .su4 {
      table {
        border: 1px solid #e8f0fc;
        tr {
          border-bottom: 1px solid #e8f0fc;
          td {
            text-align: center;
            border-bottom: 1px solid #e8f0fc;
            height: 122px;
            p {
              color: #fd7100;
              margin-top: 22px;
              font-size: 12px;
            }
          }
          .td {
            color: #e3574c;
          }
          th {
            border-bottom: 1px solid #e8f0fc;
            background-color: #e8f0fc;
            height: 56px;
          }
        }
      }
    }
    .su5 {
      border-bottom: 1px solid #d8d8d8;
      margin-top: 42px;
      margin-bottom: 59px;
      padding-bottom: 14px;

      .su6 {
        font-weight: bold;
        margin-right: 913px;
        margin-left: 18px;
        position: relative;

        &:before {
          content: "";
          width: 9px;
          height: 18px;
          background: #2d7ae4;
          position: absolute;
          left: -16px;
          top: 0;
        }
      }
      .su7 {
        font-size: 14px;
        color: #333333;
        cursor: pointer;
      }
    }
    .q1{
      border:1px solid #E3E3E3;
      width: 377px;
      height: 175px;
      .q2{
        margin-top:28px;
        margin-left:30px;
        p{
          color:#333333
        }
        span{
          color:#333333
        }
        .q3{
          margin:27px 0;
        }
      }
    }
    .su8 {
      .su9 {
        margin-top: 42px;
        margin-bottom: 59px;
        padding-bottom: 14px;
        border-bottom: 1px solid #d8d8d8;
        .su91 {
          font-weight: bold;
          margin-left: 18px;
          margin-right: 22px;
          position: relative;

          &:before {
            content: "";
            width: 9px;
            height: 18px;
            background: #2d7ae4;
            position: absolute;
            left: -16px;
            top: 0;
          }
        }
        .su92 {
          font-size: 14px;
          color: #e9827a;
        }
      }
      .su10 {
        // border-bottom: 1px solid #d8d8d8;
        padding-bottom: 65px;
        margin-bottom: 24px;
        .su11 {
          border-top: 1px solid #d8d8d8;
          padding-top: 24px;
          margin-top: 65px;
        }
      }
      .su14 {
        margin-left: 789px;
        margin-top: 70px;

        .su15 {
          font-size: 20px;
          color: #333333;
          margin-left: 24px;
        }
        .su16 {
          font-size: 30px;
          color: #f24747;
        }
        img {
          margin-top: 31px;
          margin-left: 48px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<style lang="">
.suborder .el-input {
  width: 340px;
}
.el1 {
  margin-bottom: 18px;
}

.el-form-item__content > span {
  color: red;
  margin-left: 5px;
}
.el-form-item__content > p {
  color: #999999;
  font-size: 12px;
}
.suborder .el-form-item__content > button {
  margin-left: 716px;
  margin-top: 31px;
  background-color: #fff;
  outline: none;
  border-color: #fff;
  background-image: url(../../assets/img/but1.png);
  padding: 32px 109px;
}
.suborder .el-button--primary:focus,
.suborder .el-button--primary:hover {
  background-color: transparent;
}
.suborder .el-button--primary:focus,
.suborder .el-button--primary:hover {
  background-color: transparent;
  border-color: transparent;
  color: transparent;
}
.suborder .el-button--primary.is-active,
.suborder .el-button--primary:active {
  background-color: transparent;
  border-color: transparent;
  color: transparent;
}
.suborder .el-button--primary:focus,
.suborder .el-button--primary:hover {
  background-color: transparent !important;
  border-color: transparent;
  color: transparent;
}
.suborder .el-button--primary.is-active,
.suborder .el-button--primary:active {
  background-color: transparent;
  border-color: transparent;
  color: transparent;
}
.suborder .el-button--primary:hover {
  background-color: #fff;
  border-color: transparent;
  color: transparent;
}
.el-form > span {
  position: relative;
  top: 32px;
  left: 0px;
  color: red;
}
</style>
