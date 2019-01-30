<!--  -->
<template>
  <div class="order-detail">
    <div class="box">
      <div class="content">
        <div class="one">
          <div class="one-left">{{$t('OrderDetail.Text1')}}</div>
          <div class="one-right" @click="goBack">{{$t('Return')}}</div>
        </div>
        <div class="two">
          <table class="two-table" cellspacing="0" cellpadding="0">
            <tr>
              <td class="td-1 td-title">{{$t('Order.orderTotalCash')}}</td>
              <td class="td-2 td-title">{{$t('OrderDetail.Text2')}}</td>
              <td rowspan="5" class="td-3 td-bottom">
                <template>
                  <div>
                    {{$t('Order.OrderStatus')}}：
                    <span>{{data.status|status}}</span>
                  </div>
                  <div
                    class="now-pay"
                    @click="pay(data.orderId,data.payTotalCash)"
                    v-if="data.status == 1"
                  >{{$t('Order.payOrder')}}</div>
                  <div
                    class="cancel-pay"
                    @click="delOrder(data.orderId)"
                    v-if="data.status == 1"
                  >{{$t('Order.exitOrder')}}</div>
                  <div
                    class="now-pay"
                    @click="refund()"
                   v-show="data.status == 3 && btnCanUse(data.orderDetailDTOList)"
                  >{{$t('Order.exit')}}</div>
                </template>
              </td>
            </tr>
            <tr>
              <td class="td-1">{{$t('OrderDetail.Text3')}}：{{data.orderTotalCash}}</td>
              <td class="td-2">{{$t('OrderDetail.Text4')}}：{{data.orderId}}</td>
            </tr>
            <tr>
              <td class="td-1">{{$t('OrderDetail.Text5')}}：{{data.couponCash}}</td>
              <td class="td-2">{{$t('OrderDetail.Text6')}}：{{data.createTime}}</td>
            </tr>
            <tr>
              <td class="td-1">{{$t('OrderDetail.Text7')}}：{{data.refundCash}}</td>
              <td class="td-2">{{$t('OrderDetail.Text8')}}：</td>
            </tr>
            <tr>
              <td class="td-1 td-bottom">
                {{$t('OrderDetail.Text9')}}：
                <span>￥{{data.payTotalCash}}</span>
              </td>
              <td class="td-1 td-2 td-bottom">
                {{$t('OrderDetail.Text10')}}：
                <span>{{data.createCannel|$createCannel}}</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="three">
          <table class="three-table" cellspacing="0" cellpadding="0">
            <tr class="title">
              <td class="td-1">{{$t('Order.date')}}</td>
              <td class="td-2">{{$t('Order.settlementPrice')}}</td>
              <td class="td-3">{{$t('Order.productCount')}}</td>
              <td class="td-4">{{$t('Order.smallTotalCash')}}</td>
              <td class="td-5">{{$t('Order.OrderStatus')}}</td>
              <td class="td-6">{{$t('Order.Operation')}}</td>
            </tr>
            <tbody>
              <template v-for="(item,k) in list">
                <tr>
                  <td colspan="6" class="td-7">{{$t('OrderDetail.Text11')}}：{{item.orderDetailId}}</td>
                </tr>
                <tr class="tr">
                  <td colspan="6" class="td-8">{{item.productName}}</td>
                </tr>
                <tr class="tr">
                  <td class="td-1">{{$t('Order.useBeginDateTime')}}：{{item.useBeginDateTime}}</td>
                  <td class="td-2">￥{{item.settlementPrice}}</td>
                  <td class="td-3">X{{item.productCount}}</td>
                  <td class="td-4">￥{{item.smallTotalCash}}</td>
                  <td class="td-5">{{item.singleTicketState|status}}</td>
                  <td
                    class="td-6"
                    v-if="status == 3 && item.returnSign == 1"
                    @click="refund(item)"
                  ><button>{{$t('Order.exit')}}</button></td>
                  <td class="td-6" v-else></td>
                </tr>
                <tr class="tr">
                  <td colspan="6">
                    {{$t('Order.ecode')}}：
                    <a @click="getCode()" href="javascript:;">{{item.ecode}}</a>
                    ({{$t('OrderDetail.Text12')}})
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <img v-if="url" class="code" :src="'data:image/jpeg;base64,'+url" alt>
        </div>
        <div class="four">
          <table class="four-table" cellspacing="0" cellpadding="0">
            <tr class="title">
              <td class="td-1">{{$t('OrderDetail.RecName1')}}</td>
              <td class="td-2" v-if="data.receiveId">{{$t('OrderDetail.RecName8')}}</td>
            </tr>
            <tr>
              <td class="td-1">{{$t('OrderDetail.RecName2')}}：{{data.receiveName}}</td>
              <td
                class="td-2"
                v-if="data.receiveId"
              >{{$t('OrderDetail.RecName2')}}：{{item.receivePersonName||'-'}}</td>
            </tr>
            <tr>
              <td class="td-1">{{$t('OrderDetail.RecName3')}}：{{data.receiveMobile}}</td>
              <td
                class="td-2"
                v-if="data.receiveId"
              >{{$t('OrderDetail.RecName3')}}：{{item.receivePersonMobile||'-'}}</td>
            </tr>
            <tr>
              <td class="td-1 td-bottom">{{$t('OrderDetail.RecName4')}}：{{data.receiveIdentityCode}}</td>
              <td
                class="td-2 td-bottom"
                v-if="data.receiveId"
              >{{$t('OrderDetail.RecName5')}}：{{item.receiveProvince||'-'}}{{item.receiveCity||'-'}}{{item.receiveArea||'-'}}{{item.receiveAddress}}</td>
            </tr>
          </table>
        </div>
        <div class="five">
          <div class="title clearDiv">
            <div
              :class="{active:type === 0}"
              @click="changeType(0)"
              v-if="item2.length>0"
            >{{$t('OrderDetail.RecName6')}}</div>
            <div
              :class="{active:type === 1}"
              @click="changeType(1)"
              v-if="data.status == 6"
            >{{$t('OrderDetail.RecName7')}}</div>
          </div>
          <div>
            <table
              cellspacing="0"
              cellpadding="0"
              class="five-table"
              v-show="type === 0"
              v-if="item2.length>0"
            >
              <tr class="titles">
                <td class="td-1">{{$t('OrderDetail.PayName1')}}</td>
                <td class="td-2">{{$t('OrderDetail.Text4')}}</td>
                <td class="td-3">{{$t('OrderDetail.PayName2')}}</td>
                <td class="td-4">{{$t('OrderDetail.PayName3')}}</td>
                <td class="td-5">{{$t('Order.Operation')}}</td>
                <td class="td-6">{{$t('OrderDetail.PayName4')}}</td>
              </tr>
              <tr class="bodys" v-for="(item,index) in item2">
                <td class="td-1">{{index+1}}</td>
                <td class="td-2">{{item.ordersubid}}</td>
                <td class="td-3">{{item.paycash}}</td>
                <td class="td-4">{{item.paycannel}}</td>
                <td class="td-5">支付</td>
                <td class="td-6">{{item.createtime}}</td>
              </tr>
              <tr>
                <td class="td-1 td-bottom" colspan="2">{{$t('OrderDetail.sum')}}</td>
                <td class="td-6 td-bottom" colspan="4">{{data.orderTotalCash}}</td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              class="five-table"
              v-show="type === 1 && data.status == 6"
            >
              <tr class="titles">
                <td class="td-1">{{$t('OrderDetail.PayName1')}}</td>
                <td class="td-2">{{$t('OrderDetail.Text4')}}</td>
                <td class="td-3">{{$t('OrderDetail.PayName5')}}</td>
                <td class="td-4">{{$t('OrderDetail.PayName6')}}</td>
                <td class="td-5">{{$t('OrderDetail.PayName7')}}</td>
                <td class="td-6">{{$t('OrderDetail.PayName8')}}</td>
              </tr>
              <tr class="bodys">
                <td class="td-1 td-bottom">1</td>
                <td class="td-2 td-bottom">A</td>
                <td class="td-3 td-bottom">2018/12/05 14:30:00</td>
                <td class="td-4 td-bottom">1</td>
                <td class="td-5 td-bottom">退款审核中</td>
                <td class="td-6 td-bottom">2018/12/05 14:30:00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0,
      orderId: this.$route.query.id,
      id: this.$store.getters.getUserData.userId,
      status: this.$route.query.status,
      data: [],
      list: [],
      item: [],
      item2: [],
      url: "",
      orderDetailList: []
    };
  },

  components: {},

  computed: {},

  methods: {
    //切换类型
    changeType(type) {
      this.type = type;
    },
    goBack() {
      //返回
      this.$router.go(-1);
    },
    PostFindOrderDetail() {
      //订单列表
      var data = {};
      if (this.status != "a") {
        data = {
          id: this.orderId,
          orderState: this.status
        };
      } else {
        data = {
          id: this.orderId
        };
      }

      this.$post(
        `${
          this.$url1
        }:5001/order-aggregate/findOrderDetail?pageNum=1&pageSize=10`,
        data
      )
        .then(res => {
          if (res.code === 200) {
            this.data = res.data.list[0];
            this.list = res.data.list[0].orderDetailDTOList || [];
            if (this.data.receiveId) {
              this.GetAdder();
            }
            this.GetfindPayMentreByOrderId();
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //再次下单
    pay(id, price) {
      this.$router.push({
        path: "./success",
        query: {
          orderId: id,
          price2: price
        }
      });
    },
    delOrder(id) {
      //取消订单
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$put(
            `${
              this.$url1
            }:5001/order-aggregate/canceOrder?orderId=${id}&status=-1`
          )
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  message: `取消订单成功`,
                  type: "success"
                });
                this.PostFindOrderDetail();
              } else {
                console.log(res.message);
              }
            })
            .catch(error => {
              this.$message.error(error.response.data.message);
            });
        })
        .catch(() => {});
    },
    GetAdder() {
      //收件人信息
      let id = this.data.receiveId;
      let data = {
        receiveId: id
      };
      this.$fetch(
        `${this.$url}:2060/user-aggregate/address/selectReceiveAddressById `,
        data
      )
        .then(res => {
          if (res.code == 200) {
            if (res.data) {
              this.item = res.data;
            }
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    GetfindPayMentreByOrderId() {
      //根据订单id查询订单流水
      let data = {
        orderSubId: this.orderId
      };
      this.$fetch(
        `${this.$url1}:2130/payment-aggregate/findPayMentreByOrderId`,
        data
      )
        .then(res => {
          if (res.code == 200) {
            if (res.data) {
              this.item2 = res.data;
            }
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCode() {
      this.$fetch(
        `${this.$url1}:5001/product-aggregate/findOrderByeCode?eCode=` +
          this.list[0].ecode
      )
        .then(res => {
          this.url = res.data;
        })
        .catch(error => {
          console.log(error);
        });
	},
	    //判断申请退款按钮是否可用
    btnCanUse(list) {
      return list.some(v => v.returnSign == 1);
    },
    //退票
    refund(item = "all") {
      //清空临时数组
      this.orderDetailList = [];
      //查看订单是单退还是多退
      if (item == "all") {
        console.log(this.data.orderDetailDTOList);
        this.data.orderDetailDTOList.forEach(val => {
          if (val.returnSign == 1) {
            console.log(val);
            this.orderDetailList.push(val);
          }
        });
      } else {
        this.orderDetailList.push(item);
      }
      //退票
      this.$prompt("请输入退票原因", "退票", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator: val => {
          if (val === null) {
            return true; //初始化的值为null，不做处理的话，刚打开MessageBox就会校验出错，影响用户体验
          }
          return !(val.length < 6 || val.length > 100);
        },
        inputErrorMessage: "退票原因长度必须在6~100位"
      })
        .then(val => {
          this.orderDetailList.forEach(vall => {
            let data = {
              touristId: this.id,
              linkName: this.data.receiveName,
              orderId: this.data.orderId,
              orderSubId: vall.orderDetailId,
              eCode: vall.ecode,
              returnCount: vall.productCount,
              returnContent: val.value
            };
            if (vall.typeId == 0) {
              //银科退票接口
              this.$post(
                `${this.$url1}:5080/returnCash-aggregate/refund/apply`,
                this.$tool.formatDatas(data)
              )
                .then(res => {
                  if (res.code == 0) {
                    That.num = num++;
                  } else {
                  }
                })
                .catch(error => {
                  this.$message.error(error.response.data.message);
                });
            } else {
              //其他退票接口
              this.$post(
                `${this.$url1}:5080/returnCash-aggregate/refund/applyPark`,
                this.$tool.formatDatas(data)
              )
                .then(res => {
                  if (res.code == 200) {
                    That.num = num++;
                    this.PostFindOrderDetail();
                  } else {
                  }
                })
                .catch(error => {
                  this.$message.error(error.response.data.message);
                });
            }
          });
          if (That.num > 0) {
            this.$message({
              type: "success",
              message: "退票发起成功"
            });
          } else {
            this.$message({
              type: "error",
              message: "退票发起失败"
            });
          }
          this.PostFindOrderDetail();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退票"
          });
        });
    }
  },
  mounted() {
    if (this.orderId) {
      //判断是否有订单ID
      this.PostFindOrderDetail();
    } else {
      this.goBack();
    }
  },
  filters: {
    status(value) {
      switch (value) {
        case 0:
          return "预下单";
          break;
        case 1:
          return "待支付";
          break;
        case 2:
          return "已支付";
          break;
        case 3:
          return "已完成";
          break;
        case 4:
          return "已核销";
          break;
        case 5:
          return "退票审核中";
          break;
        case 6:
          return "已退票";
          break;
        case -1:
          return "已取消";
          break;
        default:
          return "-";
          break;
      }
    },
    $createCannel(val) {
      switch (val) {
        case 0:
          return "未知";
          break;
        case 1:
          return "官网";
          break;
        case 2:
          return "微信";
          break;
        case 3:
          return "小程序";
          break;
        case 4:
          return "AndroId";
          break;
        case 5:
          return "IOS";
          break;
        case 6:
          return "客户端";
          break;
        default:
          return "未知";
          break;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.code {
  display: block;
  margin-left: 74px;
  width: 100px;
  height: 100px;
}
.order-detail {
  .nav {
    width: 100%;
    height: 63px;
    line-height: 63px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: url(../../../assets/img/mine-nav.png) no-repeat 0 0;
    background-size: 100% 100%;

    .nav-content {
      width: 1200px;
      margin: 0 auto;

      a {
        color: rgba(255, 255, 255, 1);
      }

      li {
        .phone-img {
          display: inline-block;
          width: 20px;
          height: 22px;
          background: url(../../../assets/img/mine-phone.png) no-repeat 0 0px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }

      .phon-type {
        margin-right: 20px;
      }
    }
  }

  .nav2 {
    width: 100%;
    height: 125px;
    line-height: 125px;
    background-color: #359af7;

    ul {
      width: 1200px;
      margin: 0 auto;
      height: 125px;
      line-height: 125px;

      li {
        font-weight: 400;
        color: rgba(255, 255, 255, 1);

        img {
          vertical-align: middle;
        }
      }

      .mine-center {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        margin-left: 22px;
        padding-left: 18px;
        border-left: 1px solid #ffffff;
        margin-top: 36px;
      }

      .mine-login {
        font-size: 14px;

        span {
          width: 19px;
          height: 21px;
          display: inline-block;
          vertical-align: middle;
          background: url(../../../assets/img/mine-login.png) no-repeat 0 0;
          margin-right: 5px;
        }
      }
    }
  }

  .box {
    width: 100%;
    height: 100%;
    background: #084c99 url(../../../assets/img/mine-bg.png) no-repeat;
    font-weight: 400;
    padding-top: 20px;

    .content {
      width: 1200px;
      margin: 0 auto;
      background-color: #ffffff;
      padding-left: 55px;
      padding-top: 43px;
      padding-bottom: 30px;

      .one {
        height: 34px;
        line-height: 34px;

        .one-left {
          float: left;
          font-size: 16px;
          color: rgba(51, 51, 51, 1);
        }

        .one-right {
          float: right;
          width: 69px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          border: 1px solid rgba(7, 100, 233, 1);
          font-size: 14px;
          color: rgba(7, 100, 233, 1);
          margin-right: 221px;
          cursor: pointer;
        }
      }

      .two {
        margin-top: 20px;

        .two-table {
          border: 1px solid rgba(191, 191, 191, 1);

          td {
            height: 60px;
            border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
          }

          .td-title {
            font-weight: bold;
          }

          .td-1 {
            width: 226px;
            padding-left: 20px;

            span {
              font-size: 16px;
              color: rgba(227, 87, 76, 1);
            }
          }

          .td-2 {
            width: 384px;
            padding-left: 20px;
          }

          .td-3 {
            width: 311px;
            text-align: center;
            border-right: 0;

            span {
              font-size: 18px;
              color: rgba(227, 87, 76, 1);
            }

            .now-pay {
              width: 90px;
              height: 36px;
              line-height: 36px;
              background: rgba(7, 100, 233, 1);
              color: rgba(255, 255, 255, 1);
              margin: 30px auto;
              cursor: pointer;
            }

            .cancel-pay {
              width: 90px;
              height: 36px;
              line-height: 36px;
              border: 1px solid rgba(191, 191, 191, 1);
              color: rgba(7, 100, 233, 1);
              margin: 0 auto;
              cursor: pointer;
            }
          }

          .td-bottom {
            border-bottom: 0;
          }
        }
      }

      .three {
        margin-top: 30px;

        .three-table {
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);

          .title {
            width: 921px;
            height: 57px;
            background: rgba(7, 100, 233, 1);
            font-size: 14px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }

          .tr td {
            padding-top: 5px;
            padding-bottom: 5px;
          }

          td {
            padding-left: 20px;
          }

          .td-1 {
            width: 300px;
          }

          .td-2 {
            width: 150px;
          }

          .td-3 {
            width: 100px;
          }

          .td-4 {
            width: 100px;
          }

          .td-5 {
            width: 100px;
          }

          .td-6 {
            width: 173px;
            button {
              width: 80px;
              height: 29px;
              line-height: 29px;
              text-align: center;
              background: #0764e9;
              color: white;
			  cursor: pointer;
            }
          }

          .td-7 {
            height: 41px;
            background: rgba(221, 232, 249, 1);
            padding-left: 20px;
          }

          .td-8 {
            font-weight: bold;
          }
        }
      }

      .four {
        margin-top: 30px;

        .four-table {
          border: 1px solid rgba(191, 191, 191, 1);

          .title {
            td {
              height: 56px;
              text-align: center;
              font-weight: bold;
            }
          }

          td {
            height: 43px;
            border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
            padding-left: 20px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }

          .td-1 {
            width: 431px;
          }

          .td-2 {
            border-right: 0;
            width: 490px;
          }

          .td-bottom {
            border-bottom: 0;
          }
        }
      }

      .five {
        margin-top: 80px;
        min-height: 215px;
        margin-bottom: 100px;

        .title {
          div {
            float: left;
            width: 462px;
            height: 52px;
            line-height: 52px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: rgba(7, 100, 233, 1);
            background: rgba(216, 232, 254, 1);

            &.active {
              position: relative;
              background: rgba(7, 100, 233, 1);
              color: rgba(255, 255, 255, 1);

              &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                border-bottom: 9px solid rgba(255, 255, 255, 1);
                /*此处将左右的边框设置为透明色*/
                border-right: 9px solid transparent;
                border-left: 9px solid transparent;
              }
            }
          }
        }

        .five-table {
          border: 1px solid rgba(191, 191, 191, 1);
          margin-top: 5px;

          .titles {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);

            td {
              background: #f0f2f5;
              border-bottom: none;
            }
          }

          .bodys {
            td {
              font-size: 14px;
            }
          }

          td {
            height: 52px;
            text-align: center;
            border-bottom: 1px solid rgba(191, 191, 191, 1);
            border-right: 1px solid rgba(191, 191, 191, 1);
          }

          .td-1 {
            width: 110px;
          }

          .td-2 {
            width: 150px;
            padding: 0 10px;
          }

          .td-3 {
            width: 100px;
          }

          .td-4 {
            width: 150px;
          }

          .td-5 {
            width: 150px;
          }

          .td-6 {
            width: 212px;
            border-right: 0;
          }

          .td-bottom {
            border-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
