<template>
  <div class="suborder">
    <Header></Header>
    <div class="su1">

      <!-- 订单详情 -->
      <div class="su2 clearDiv">
        <div class="su22" @click="jumpdetail">
          {{$t('Suborder.Text')}}
        </div>
        <!-- 弹出框遮罩内容 -->
        <div class="su21 clearDiv" v-show="flag">
          <div class="bg clearDiv"></div>
          <div class="show clearDiv">
            <div class="su22">
              <img src="../../assets/img/dengdai.png" alt="">
              <p class="su23">{{$t('Suborder.Text1')}}</p>
              <p class="su24">{{$t('Suborder.Text2')}}</p>
            </div>
          </div>
        </div>
        <div class="suu">
          <div class="su3">
            <span>{{$t('Suborder.Text3')}}</span>
          </div>
          <div class="su4">
            <table cellspacing="0" width="1078" height="353">
              <tr>
                <th>{{$t('Suborder.Text4')}}</th>
                <th>{{$t('Suborder.Text5')}}</th>
                <th>{{$t('Suborder.Text6')}}</th>
                <th>{{$t('Suborder.Text7')}}</th>
              </tr>
              <tr v-for="item in list2" :key="item.id">
                <!-- <tr v-for="item in list2" :key="item"> -->
                <td>{{item.product.productName}}
                  <p>{{$t('Suborder.Text8')}}：{{item.product.dataBaseDate}}</p>
                  <!-- <p>{{canDebook(item.product.saleType)}}</p> -->
                  <div v-if="item.product.typeId == 1">
                    <p class="type">
                    配送方式：
                    
                      <span :class="{active:isactive == 0}" @click="toggle(0)">邮寄</span>
                      <span :class="{active:isactive == 1}" @click="toggle(1)">自提</span>
                    </p>
                  </div>
                </td>
                <td>¥{{item.settlementPrice}}{{$t('Yuan')}}</td>
                <td>×{{item.productCount}}</td>
                <td class="td">¥{{item.cash ? (item.cash * item.productCount) : (item.settlementPrice * item.productCount)}}{{$t('Yuan')}}</td>
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

            <span class="su6">{{$t('Suborder.Text9')}}</span>
            <!-- <span class="su7">{{$t('Suborder.Text10')}}</span> -->

          </div>
          <div class="jian1">
            <div>
              <div v-if="0 in activeTypeList"><el-radio v-model="radio7" label="1" @change="youhui()">{{activityName1}}</el-radio><span class="jian" v-if="radio7==1">-¥{{decimal}}</span></div>
              <div v-if="1 in activeTypeList"><el-radio v-model="radio7" label="2" @change="youhui()">{{activityName2}}</el-radio></div>
              <div class="su4" v-if="radio7==2">
                <table cellspacing="0" width="1078">
                  <tr>
                    <th>赠品名称</th>
                    <th>数量</th>
                  </tr>
                  <tr v-for="(product,key) in productList" :key="key">
                    <td>{{product.productName}}</td>
                    <td>×{{product.productCount}}</td>
                  </tr>
                </table>
              </div>
              <div v-if="2 in activeTypeList"><el-radio v-model="radio7" label="3" @change="youhui()">{{activityName3}}</el-radio></div>
            </div>
          </div>
          <!-- 游客信息 -->
          <div class="su8">
            <div class="su9">
              <span class="su91">{{$t('Suborder.Text11')}}</span>
              <span class="su92">{{$t('Suborder.Text12')}}</span>
            </div>
            <div class="su10 clearDiv">
              <div>
                <el-form ref="numberValidateForm" :model="numberValidateForm" label-width="85px">

                  <el-form-item :label="$t('Suborder.Text13')" class="el1" prop="name1" :rules="[
                          { required: true, message: '姓名不能为空'},
                          { type: 'string', message: '姓名必须为中文'},
                          {
                            pattern:/^[\u4E00-\u9FA5]+$/,
                            message: '用户名只能为中文'
                          }
                      ]">

                    <el-input type="name1" v-model.number="numberValidateForm.name1" autocomplete="off">

                    </el-input>

                  </el-form-item>

                  <el-form-item :label="$t('Suborder.Text14')" class="el2" prop="phone" :rules="[
                          { required: true, message: '手机号不能为空',trigger:'blur'},
                          { 
            validator: (rule, value, callback)=>{validateSku(rule, value, callback)}, 
            trigger: ['blur', 'change'] 
        }
                      ]">
                    <el-input type="phone" v-model.number="numberValidateForm.phone" autocomplete="off">

                    </el-input>

                    <p>{{$t('Suborder.Text15')}}</p>
                  </el-form-item>

                  <el-form-item :label="$t('Suborder.Text16')" class="el1" prop="name2" :rules="[
                          { required: true, message: '身份证不能为空'},
                          
                          {
                            pattern:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                            message: '身份证号码不正确'
                            },
                      ]">

                    <el-input type="name2" v-model.text="numberValidateForm.name2" autocomplete="off">

                    </el-input>

                  </el-form-item>
                  <!-- 邮寄地址 -->
                  <div class="su5" v-show="flag1">

                    <span class="su6">{{$t('Suborder.Text17')}}</span>
                    <span class="su7" @click="address()">{{$t('Suborder.Text18')}}</span>

                  </div>
                  <div class="q1" v-show="flag1">
                    <div class="q2">
                      <p>{{$t('Suborder.Text19')}}：<span>{{name1}}</span></p>
                      <p class="q3">{{$t('Suborder.Text14')}}：<span>{{phone1}}</span></p>
                      <p>{{$t('Suborder.Text20')}}：<span>{{address1}}</span></p>
                    </div>
                  </div>
                  <div class="su11">
                    <el-checkbox v-model="checked" @change="changeType">{{$t('Suborder.Text21')}}</el-checkbox>
                  </div>

                  <div class="su14">
                    <span class="su15">{{$t('Suborder.Text22')}}：</span>
                    <span class="su16">¥{{price3}}{{$t('Yuan')}}</span>
                  </div>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')" :plain="true" :disabled="dis"></el-button>

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
        phone: "",
        text: ""
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
      name1: "",
      phone1: "",
      address1: "",
      receiveId: "",
      arr2: [],
      arr3: [],
      ids: "",
      dis: true,
      radio7: "1",
      id: "",
      list3:[],
      price:"",
      activityName:"",
      productList:[],
      activeTypeList: [],
      idList: [],
      decimal: 0,
      productId: "",
      activityName1:"",
      activityName2:"",
      activityName3:""
    };
  },
  mounted() {
    this.changeType();
    this.shopmsg();
    this.canDebook()
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
        this.typeId = item.product.typeId;
        console.log(this.typeId);
        this.pricetotal = this.price * this.count;
        // console.log(typeOf()this.pricetotal)
        this.price2 += this.pricetotal;
        // 判断产品是门票还是零售，门票typeId为0 零售typeId为1..
        // if(this.typeId == 1){
        //   this.flag2 = true
        // }else if(this.typeId == 0){
        //   this.flag2 = false
        // }
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
    youhui() {
      // console.log('this.radio7:'+this.radio7);
      // for (var i = 0; i < this.idList.length; i++){
      //   if(this.idList[i] != ''){
      //     this.radio7 = this.idList[i];
      //     break;
      //   }
      // }
      if (this.radio7 == 1) {
        if(this.idList[0] == ''){
          return;
        }
        console.log('this.idList[0]:'+this.idList[0]);
        this.$post("http://101.201.101.138:2060/activity/activityOperation", {
          activityId: this.idList[0],
          productList: [{}]
        }).then(res => {
          this.decimal = res.data.decimal;
        });
      } else if (this.radio7 == 2) {
        if(this.idList[1] == ''){
          return;
        }
        this.$post("http://101.201.101.138:2060/activity/activityOperation", {
          activityId: this.idList[1],
          productList: [{}]
        }).then(res => {
          console.log(res);
          this.productList = res.data.productList;
        });
      } else if (this.radio7 == 3) {
        if(this.idList[2] == ''){
          return;
        }
        let arr = this.$route.query.arr;
        let prodata = [];
        arr.forEach((value) => {
          prodata.push({productId: value.productId});
        });
        this.list2.forEach((value,index) => {
          prodata[index].cash = value.settlementPrice;
        })
        let data = {
          activityId: this.idList[2],
          productList: prodata
        };
        this.$post(
          "http://101.201.101.138:2060/activity/activityOperation",
          data
        ).then(res => {
          console.log(res);
          // this.price1 = res.data.productList[0].cash;
          let clist = res.data.productList;
          this.list2.forEach((value,index) => {
            clist.forEach((c) => {
              if(value.productId == c.productId){
                value.cash = c.cash;
              }
            });
          })
          console.log(this.list2);
        });
      }
    },
    active() {
      this.$fetch("http://101.201.101.138:2060/activity/activityShow", {
        touristId: this.$store.getters.getUserData.userId,
        orderCash: this.price2
      }).then(res => {
        // console.log(res);
        // console.log(res.data[0].activityType);
        // this.activityName = res.data[0].activityName
        // console.log(this.activityName)
        console.log(res.data)
        res.data.forEach((value,index)=>{
          console.log(value);
          if(value){
            this.activeTypeList.push(value.activityType);
            this.idList.push(value.id);
             this.activityName1 = res.data[0].activityName
            this.activityName2 = res.data[1].activityName
            this.activityName3 = res.data[2].activityName
          }else{
            this.activeTypeList.push('');
            this.idList.push('');
          }
        });
        console.log('this.activeTypeList:'+this.activeTypeList);
        console.log('this.idList:'+this.idList);
        this.youhui();
      });
    },
    toggle(type) {
      this.isactive = type;
      if(type ==1){
        this.flag1 = false
        this.saleType = 2
      }else{
         this.flag1 = true
         this.saleType = 1
      }
    },
    changeType() {
      console.log(this.checked);
      if (this.checked == true) {
        this.dis = false;
      } else {
        this.dis = true;
      }
    },
    // 提示信息
    open() {
      this.$message("网络异常，下单失败");
    },
    validateSku: function(rule, value, callback) {
      if (/^1[34578]\d{9}$/.test(value) == false) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    },

    // 验证信息
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
        `${this.$url1}:2060/user-aggregate/bathDeleteShopCarts?ids=` + this.ids
      ).then(res => {
        // console.log(11);
        if (res.code === 200) {
          this.good_list = {};
          this.flag = true;
        }
      });
    },
    jumpdetail() {
      this.$router.push("./productdetail");
    },
    // 选择收货地址
    address() {
      this.$router.push("./shoppingadress");
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
      // let typeId = this.$route.query.typeId;
      list2.forEach((v, i) => {
        this.arr2[i] = {};
        this.arr2[i]["id"] = v.id;
        console.log(this.arr2[i]["id"]);
        this.arr3.push(this.arr2[i]["id"]);
        console.log(this.arr3);
      });

      this.ids = this.arr3.join(",");
      console.log(this.ids);
      // console.log(this.saleType);
      // console.log(num1);
      this.count = num1;

      this.$fetch("http://101.201.101.138:5001/product-aggregate/find/" + id, {
        stockId: stockId,
        saleType: this.saleType,
        touristId: this.$store.getters.getUserData.userId
      }).then(res => {
        if (res.code === 200) {
          console.log(res.data);
          this.productname = res.data.productName;
          this.playtime = res.data.dataBaseDate;
          this.price1 = res.data.settlementPrice;
          this.active();
        }
      });
    },
    // 判断是邮寄或者自提，邮寄需要显示邮寄地址，传邮寄ID到李顺仪
    canDebook() {
          this.sign = "邮寄";
          this.isactive = 0;
      let data2 = {
        touristId: this.$store.getters.getUserData.userId
      };
      // 调用邮寄接口
      this.$fetch(
        "http://101.201.101.138:2060/user-aggregate/address/selectOneReceiveAddress",
        data2
      ).then(res => {
        // console.log(res);
        this.name1 = res.data.receivePersonName;
        this.phone1 = res.data.receivePersonMobile;
        this.address1 =
          res.data.receiveProvince +
          res.data.receiveCity +
          res.data.receiveArea;
        this.receiveId = res.data.id;
      });
       
      return this.sign;
    },
    //   提交
    onSubmit() {
      // if(this.checked === true){
      //       this.dis = false
      //     }
      
      let data = {
        touristId: this.$store.getters.getUserData.userId,
        productFormList: this.$route.query.arr,
        receiveId: this.receiveId, //邮寄ID
        receiveName: this.numberValidateForm.name1,
        receiveMobile: this.numberValidateForm.phone,
        receiveIdentityCode: this.numberValidateForm.name2,
        createCannel:1   //官网下单为1
      };
      console.log(this.$route.query.arr);
      // 拿到guid以及订单号
      this.$post("http://101.201.101.138:5001/order-aggregate/save", data, {
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      }).then(res => {
        console.log(res.data.createCannel);
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
              "http://101.201.101.138:6110/callBack-mucon/getOccupation",
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
              } else if (res.code === 403 && res.code === 400) {
                this.open(); //订单占用失败调用提示信息方法
                this.$router.push("./mine");
              }
            });
          }, 3000);

          ///
        } else if (res.code === 403 && res.code === 400) {
          this.$router.push("./mine");
          console.log(res);
        }
      });
    }
  },
  // 销毁定时器
  beforeDestroy() {
    clearInterval(this.times);
  },
  //计算产品总价格
  computed: {
    price3() {
      if(this.radio7 == 1){
        return this.price2 - this.decimal;
      }else{
        return this.price2;
      }
    }
  }
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
            .type{
              span{
                border: 1px solid #999999;
                padding: 5px 14px;
                cursor: pointer;
              }
                .active {
                color: #e3574c;
                border-color: #e3574c;
              }
            }
            p {
             
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
      margin-bottom: 20px;
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
    .q1 {
      border: 1px solid #e3e3e3;
      width: 377px;
      height: 175px;
      .q2 {
        margin-top: 28px;
        margin-left: 30px;
        p {
          color: #333333;
        }
        span {
          color: #333333;
        }
        .q3 {
          margin: 27px 0;
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
  /* 改变提交订单悬浮样式 */
  background-image: url(../../assets/img/but1.png);
}
.el-form > span {
  position: relative;
  top: 32px;
  left: 0px;
  color: red;
}
.el-radio {
  font-size: 42px;
  margin-right: 200px;
}
.jian1 .jian {
  color: #f16b11;
}
</style>
