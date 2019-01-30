<template>
  <div class="suborder">
    <Header></Header>
    <div class="su1">

      <!-- 订单详情 -->
      <div class="su2 clearDiv">
        <div class="su22">
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
              <tr>
                <!-- <tr v-for="item in list2" :key="item"> -->
                <td>{{productname}}
                  <p>{{$t('Suborder.Text8')}}：{{playtime}}</p>
                  <!-- <p>{{canDebook(saleType)}}</p> -->
                 <p class="type" v-show="flag2">
                    配送方式：
                    <span :class="{active:isactive ==2}" @click="toggle(2)">邮寄</span>
                    <span :class="{active:isactive ==1}" @click="toggle(1)">自提</span>
                  </p>

                </td>
                <td>¥{{price1}}{{$t('Yuan')}}</td>
                <td>×{{count}}</td>
                <td class="td">¥{{parseFloat(this.price1 * this.count).toFixed(2)}}{{$t('Yuan')}}</td>
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
              <div v-if="typeList.indexOf(0)>-1"><el-radio v-model="radio7" label="0" @change="youhui()" >满减</el-radio><span class="jian" v-if="radio7==0">-¥{{decimal}}</span></div>
              <div v-if="typeList.indexOf(1)>-1"><el-radio v-model="radio7" label="1" @change="youhui()">满赠</el-radio></div>
              <div class="su4" v-if="radio7==1">
                <table cellspacing="0" width="1078">
                  <tr>
                    <th>赠品名称</th>
                    <th>数量</th>
                    <th v-show="flag2">配送方式</th>
                  </tr>
                  <tr v-for="(product,key) in productList" :key="key">
                    <td>
                      {{product.productName}}
                      
                      </td>
                    <td>×{{product.productCount}}</td>
                    <td v-show="flag2">
                      <p class="type" >
                    配送方式：
                    <span :class="{active:isactive ==2}" @click="toggle(2)">邮寄</span>
                    <span :class="{active:isactive ==1}" @click="toggle(1)">自提</span>
                  </p>
                    </td>
                  </tr>
                </table>
              </div>
              <div v-if="typeList.indexOf(2)>-1"><el-radio v-model="radio7" label="2" @change="youhui()">折扣</el-radio></div>
              <!-- <el-form-item label="线路类型：" prop="isGive">
 <el-radio-group v-model="currentLine.isGive">
 <el-radio :label="item.id" :key="item.id" v-for="item in isGive" >{{item.name}}</el-radio>
 </el-radio-group>
</el-form-item> -->
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
                    <span class="su16">¥{{price2}}{{$t('Yuan')}}</span>
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
//       isGive:[
//   {
//   id : "n",
//   name : "购买"
//   },
//   {
//   id : "y",
//   name : "赠送"
//   }
//  ],
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
      pricezhe: "",
      productname: "",
      playtime: "",
      orderId: "",
      times: "",
      saleType: 2,
      sign: "",
      a1: this.$route.query.a,
      list2: [],
      name1: "",
      phone1: "",
      address1: "",
      receiveId: "",
      dis: true,
      isactive: 2,
      flag2: true,
      radio7: "1",
      id: "",
      list3:[],
      price:"",
      activityName:"",
      productList:[],
      activeTypeIDList: [],
      typeList: [],
      decimal: 0,
      productId: "",
      activeNameList: [],
      returnSignList: []
    };
  },
  mounted() {
    this.changeType();
    this.shopmsg();
    this.canDebook()
    // this.saleType = this.$route.query.saleType
    // 监听路由跳转路径，如果是购物车，标志为a1，直接接受上个页面的参数
    // if (this.a1 === 1) {

    //   let list1 = this.$route.query.list1;
    //   this.list2 = JSON.parse(list1);
    //   console.log(this.list2);
    //   this.productName =this.list2[0].product.productName;
    //   this.playtime = this.list2[0].product.dataBaseDate;
    //   this.price1 = this.list2[0].product.settlementPrice;
    //   this.count = this.list2[0].productCount;
    // }
  },
  // 监听路由跳转路径，如果是购物车，重新调用购物车接口
  // watch :{
  //   '$route' (to, from){
  //     console.log(to);

  //   }
  // },
  methods: {
    youhui() {
      if (this.radio7 == 0) {
        if(this.activeTypeIDList[0].activityId == ''){
          return;
        }
        this.$post("http://101.201.101.138:2060/activity/activityOperation", {
          activityId: this.activeTypeIDList[0].activityId,
          productList: [{}]
        }).then(res => {
          this.decimal = res.data.decimal;
        });
      } else if (this.radio7 == 1) {
        if(this.activeTypeIDList[1].activityId == ''){
          return;
        }
        this.$post("http://101.201.101.138:2060/activity/activityOperation", {
          activityId: this.activeTypeIDList[1].activityId,
          productList: [{}]
        }).then(res => {
          console.log(res);
          this.productList = res.data.productList;
        });
      } else if (this.radio7 == 2) {
        if(this.activeTypeIDList[2].activityId == ''){
          return;
        }
        let data = {
          activityId: this.activeTypeIDList[2].activityId,
          productList: [{
            productId: this.productId,
            cash: this.price1
          }]
        };
        this.$post(
          "http://101.201.101.138:2060/activity/activityOperation",
          data
        ).then(res => {
          console.log(res);
          this.pricezhe = res.data.productList[0].cash;
        });
      }
    },
    active() {
      this.$fetch("http://101.201.101.138:2060/activity/activityShow", {
        touristId: this.$store.getters.getUserData.userId,
        orderCash: this.price2
      }).then(res => {
        res.data.forEach((value,index)=>{
          console.log(value);
          if(value){
            this.activeTypeIDList.push({activityType: value.activityType,activityId: value.id});
            this.typeList.push(value.activityType);
            this.returnSignList.push(value.returnSign);
          }else{
            this.activeTypeIDList.push({activityType: '',activityId: ''});
            this.typeList.push('');
            this.returnSignList.push('');
          }
        });
        this.youhui();
      });
    },
     toggle(type) {
      this.isactive = type;
      if(type ==2){
        this.flag1 = true;
        this.saleType = 2;
      }else{
         this.flag1 = false;
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
      // console.log(999);
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
    },
    // 选择收货地址
    address() {
      this.$router.push("./shoppingadress");
    },
    //接受产品详情页面的产品ID，库存ID,数量，是否邮寄，调用接口，展示订单信息
    shopmsg() {
      console.log(111);
      let id = this.$route.query.id;
      // console.log(id);
      let stockId = this.$route.query.stockId;
      let num1 = this.$route.query.num;
      this.toggle(2);
      this.saleType = this.saleType;
      let typeId = this.$route.query.typeId; //是门票还是产品，0为门票，1为产品
      console.log(typeId)
      // let list1 = this.$route.query.list1;
      // let list2 = JSON.parse(list1)
      // console.log(list2);
      // console.log(this.saleType);
      // console.log(num1);
      this.count = num1;
      if (typeId != 1) {
        this.flag2 = false;
        this.flag1 = false;
      } else {
        this.flag2 = true;
        this.flag1 = true;
      }

      this.$fetch("http://101.201.101.138:5001/product-aggregate/find/" + id, {
        stockId: stockId,
        saleType: this.saleType,
        touristId: this.$store.getters.getUserData.userId
      }).then(res => {
        if (res.code === 200) {
          // console.log(111);
          this.productname = res.data.productName;
          // console.log(this.productname);
          this.playtime = res.data.dataBaseDate;
          this.price1 = res.data.settlementPrice;
          this.productId = res.data.id;
          this.active();
        }
      });
    },
    // 判断是邮寄或者自提，邮寄需要显示邮寄地址，传邮寄ID到李顺仪
     canDebook() {
          this.sign = "邮寄";
          this.isactive = 2;
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
      console.log(this.saleType);
      let data = {
        touristId: this.$store.getters.getUserData.userId,
        productFormList: [
          {
            productId: this.$route.query.id,
            num: this.$route.query.num,
            stockId: this.$route.query.stockId,
            saleType: parseInt(this.saleType),
           
          },
          // {
          //    productId:this.productList[0].productId,
          //    num:this.productList[0].productCount,
          //    saleType:1,
          //    stockId:this.productList[0].priceId,
          // }
        ],

        receiveId: this.receiveId, //邮寄ID
        receiveName: this.numberValidateForm.name1,
        receiveMobile: this.numberValidateForm.phone,
        receiveIdentityCode: this.numberValidateForm.name2,
        createCannel: 1, //官网下单为1,
        activitieId:this.activeTypeIDList[parseInt(this.radio7)].activityId,//优惠券活动ID
        activitieType: parseInt(this.radio7),//优惠券活动类型
        returnSign:this.returnSignList[parseInt(this.radio7)]//优惠券折扣
       
      };
      this.productList.forEach((value) => {
        data.productFormList.push({
          productId: value.productId,
          num: value.productCount,
          saleType: parseInt(this.saleType),
          stockId: value.priceId
        })
      });
      // 拿到guid以及订单号
      this.$post("http://101.201.101.138:5001/order-aggregate/save", data, {
        headers: { "Content-Type": "application/json;charset=UTF-8" }
      }).then(res => {
        if (res.code === 200) {
          console.log(res);
          this.orderId = res.data.orderId;
          this.price = res.data.price;
          // console.log(this.price)
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
                    price: this.price
                  }
                });
              } else if (res.code === 400) {
                this.open(); //订单占用失败调用提示信息方法
                this.$router.push("./mine");
              }
            });
          }, 3000);

          ///
        }
      });
    }
  },
  // 销毁定时器
  beforeDestroy() {
    clearInterval(this.times);
  },
  // 计算产品总价格
  computed: {
    price2() {
      console.log(parseFloat(this.price1 * this.count - this.decimal).toFixed(2));
      if(this.radio7 == 0){
        return parseFloat(this.price1 * this.count - this.decimal).toFixed(2);
      }else if(this.radio7 == 1){
        return parseFloat(this.price1 * this.count).toFixed(2);
      }else{
        return parseFloat(this.pricezhe * this.count).toFixed(2);
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
            .type {
              color: #333333;
              margin-right: 52px;
              span {
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
<style lang="" scoped>
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
