<template>
  <div>
    <Header1></Header1>
    <div class="su1">

      <!-- 订单详情 -->
      <div class="su2 clearDiv">
        <div class="su22">
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
              <p class="su24">预计等待时间为5秒</p>
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
              <tr>
                <td>富力成人全日票
                  <p>游玩时间：2018.11.23</p>

                </td>
                <td>¥{{price1}}元</td>
                <td>×{{count}}</td>
                <td class="td">¥{{price2}}元</td>
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
              <div class="su11">
                <el-form
                  ref="form"
                  :model="form"
                  label-width="85px"
                >
                  <span>*</span>
                  <el-form-item label="姓名 ：" class="el1">
                    
                    <el-input v-model="form.name">

                    </el-input>
                    <span v-show="flag">请填写姓名</span>
                  </el-form-item>
                  <span>*</span>
                  <el-form-item label="手机号 ：" class="el2">
                    <el-input v-model="form.name">

                    </el-input>
                    <span v-show="flag">请填写手机号</span>
                    <p>此手机号用于接受入园短信</p>
                  </el-form-item>
                  
                  <el-form-item label="身份证 ：" class="el3">
                    <el-input v-model="form.name">

                    </el-input>
                    <span>(非必填项)</span>
                  </el-form-item>
                </el-form>
              </div>
              

            </div>
            <div class="su11">
              <el-checkbox v-model="checked">同意《购买协议》</el-checkbox>
            </div>
            <div class="su14">
              <span class="su15">总计金额：</span>
              <span class="su16">¥{{price2}}元</span>
              <img
                src="../../assets/img/but1.png"
                alt=""
                @click="onSubmit"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header1 from "../../components/Header1";
export default {
  components: {
    Header1
  },
  data() {
    return {
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
      count:2,
      price1:120.00,
    };
  },
  mounted(){
      shopmsg()
  },
  methods: {
    //   提交
    onSubmit() {
      this.flag = true;
    },
    // 姓名以及手机号是否为空验证
    yanzheng(){
      if(form.name==''){
        this.flag = true;
      }
    },
    shopmsg(){
      this.$fetch('http://192.168.2.38:5010/product/findProductByStock').then((res) =>{

      })
    }
  },
  computed:{
    price2(){
      return this.price1*this.count
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
    .su22{
      font-size: 12px;
      margin-top:33px;
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
            margin-left:108px;
          }
          
            
          
          .su23 {
            color: #333333;
            font-size: 24px;
            font-weight: bold;
            line-height: 28px;
            margin-bottom: 19px;
            margin-left:44px;
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
        &:before {
          content: "";
          width: 9px;
          height: 18px;
          background: #2d7ae4;
          position: absolute;
          left: 412px;
          top: 239px;
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
        &:before {
          content: "";
          width: 9px;
          height: 18px;
          background: #2d7ae4;
          position: absolute;
          left: 412px;
          top: 711px;
        }
      }
      .su7 {
        font-size: 14px;
        color: #333333;
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
          &:before {
            content: "";
            width: 9px;
            height: 18px;
            background: #2d7ae4;
            position: absolute;
            left: 412px;
            top: 805px;
          }
        }
        .su92 {
          font-size: 14px;
          color: #e9827a;
        }
      }
      .su10 {
        border-bottom: 1px solid #d8d8d8;
        padding-bottom: 65px;
        margin-bottom: 24px;
        .su11 {
          float: left;
        }
        
      }
      .su14 {
        margin-left: 789px;
        margin-top: 70px;
        margin-bottom: 410px;
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
.el-input {
  width: 340px;
}
.el1{
  margin-bottom: 18px;
}

.el-form-item__content>span{
 color:red;
 margin-left: 5px;
 
}
.el-form-item__content>p{
   
    color:#999999;
    font-size: 12px;
  
}
.el-form>span{
  position: relative;
  top:32px;
  left:0px;
  color:red;
}
</style>
