<template>
  <!-- 预下单 状态0 -->
  <section class="pt40">
    <!-- 头部tab -->
    <section class="tab-s">
      <ul>
        <li class="tabs-title">{{$t('Order.OrderStatus')}}：</li>
        <li :class="{'active' : tabs == 'a'}" @click="tabs = 'a'">
          <router-link to="/prepaid">{{$t('Order.Status1')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '0'}" @click="tabs = 0">
          <router-link to="/prepaid">{{$t('Order.Status2')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '1'}" @click="tabs = 1">
          <router-link to="/prepaid">{{$t('Order.Status3')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '2'}" @click="tabs = 2">
          <router-link to="/prepaid">{{$t('Order.Status4')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '3'}" @click="tabs = 3">
          <router-link to="/prepaid">{{$t('Order.Status5')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '4'}" @click="tabs = 4">
          <router-link to="/prepaid">{{$t('Order.Status6')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '5'}" @click="tabs = 5">
          <router-link to="/prepaid">{{$t('Order.Status7')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '6'}" @click="tabs = 6">
          <router-link to="/prepaid">{{$t('Order.Status8')}}</router-link>
        </li>
        <li :class="{'active' : tabs == '-1'}" @click="tabs = -1">
          <router-link to="/prepaid">{{$t('Order.Status9')}}</router-link>
        </li>
        <!-- <li :class="{'active' : tabs == '-1'}" @click="tabs = -1">
					<router-link to="/prepaid">已取消</router-link>
				</li>
				<li :class="{'active' : tabs == '-1'}" @click="tabs = -1">
					<router-link to="/prepaid">已取消</router-link>
        </li>-->
      </ul>
    </section>

    <!-- 全部 -->
    <section class="o_order">
      <template v-if="list.length > 0">
        <el-collapse
          accordion
          v-loading="loading"
          element-loading-text="加载中"
          element-loading-spinner="el-icon-loading"
        >
          <el-collapse-item v-for="(item,k) in list" :key="k">
            <template slot="title">
              <div class="w100">
                <div class="order-one clearDiv">
                  <div class="floatLeft">{{$t('Order.orderId')}}：{{item.orderId}}</div>
                  <div class="creatTime floatLeft">{{$t('Order.createTime')}}：{{item.createTime}}</div>
                  <div class="par-type floatRight red" v-if="tabs != 'a'">{{item.status|status}}</div>
                </div>
                <div class="order-two">
                  <div class="floatLeft">
                    {{$t('Order.orderTotalCash')}}：￥
                    <span>{{item.orderTotalCash}}</span>
                  </div>
                  <div class="coupon floatLeft">
                    {{$t('Order.couponCash')}}：
                    <span>{{item.couponCash}}</span>
                  </div>
                  <div class="realPay floatLeft">
                    {{$t('Order.payTotalCash')}}：￥
                    <span>{{item.payTotalCash}}</span>
                  </div>
                  <div
                    class="lookOrder floatRight"
                    @click.stop="jumpDetail(item.orderId)"
                  >{{$t('Order.selectOrder')}}</div>
                  <div
                    class="cancelOrder floatRight"
                    @click.stop="delOrder(item.orderId)"
                    v-if="tabs == 0"
                  >{{$t('Order.exitOrder')}}</div>
                  <div
                    class="pay floatRight"
                    @click.stop="pay(item.orderId,item.payTotalCash)"
                    v-if="tabs == 0"
                  >{{$t('Order.payOrder')}}</div>
                  <div
                    class="pay floatRight"
                    @click.stop="pay2(item.orderId,item.payTotalCash)"
                    v-if="tabs == 1"
                  >{{$t('Order.payOrder')}}</div>
                </div>
              </div>
            </template>
            <el-table :data="item.orderDetailDTOList" stripe style="width: 100%">
              <el-table-column prop="date" :label="$t('Order.date')" width="300">
                <template slot-scope="scope">
                  <div class="ticket-title">{{scope.row.productName}}</div>
                  <div
                    class="ticket-time"
                  >{{$t('Order.useBeginDateTime')}}：{{scope.row.useBeginDateTime}}</div>
                  <div
                    class="ticket-code"
                    @click="getCode(scope.row.ecode)"
                    v-if="scope.row.singleTicketState == 3 &&(scope.row.saleType == 0 || scope.row.saleType == 1)"
                  >
                    {{$t('Order.ecode')}}：
                    <span
                      style="color:#0066cc; cursor: pointer;"
                    >{{scope.row.ecode}}</span>
                  </div>
                  <p v-show="scope.row.ecode == ecode">
                    <img v-if="url" class="code" :src="'data:image/jpeg;base64,'+url" alt>
                  </p>
                </template>
              </el-table-column>
              <el-table-column
                prop="settlementPrice"
                :label="$t('Order.settlementPrice')"
                align="center"
              ></el-table-column>
              <el-table-column prop="productCount" :label="$t('Order.productCount')" align="center"></el-table-column>
              <el-table-column
                prop="smallTotalCash"
                :label="$t('Order.smallTotalCash')"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="singleTicketState"
                :label="$t('Order.OrderStatus')"
                align="center"
              >
                <template slot-scope="scope">{{scope.row.singleTicketState|status}}</template>
              </el-table-column>
              <el-table-column :label="$t('Order.Operation')">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    v-if="scope.row.singleTicketState == 3 && scope.row.returnSign == 1"
                    @click="refund(scope.row,item.orderId,item.receiveName)"
                  >{{$t('Order.exit')}}</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </template>
      <template v-else>
        <div class="false">
          <el-button class="el-icon-search" type="text" @click="tabs = 'a'">{{$t('Order.text')}}</el-button>
        </div>
      </template>
    </section>
    <section class="page" id="page">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="pageSize"
        background
        layout="prev, pager, next"
        :total="count"
        v-if="count>0"
      ></el-pagination>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: "a",
      page: 1,
      pageSize: 6,
      count: 0,
      id: this.$store.getters.getUserData.userId,
      list: [],
      loading: true,
      times: "",
      orderId: "",
      url: "",
      ecode: ""
    };
  },
  methods: {
    //获取核销二维码
    getCode(code) {
      this.ecode = code;
      this.$fetch(
        `${
          this.$url2
        }/api-bkf-product /product-aggregate/findOrderByeCode?eCode=` + code
      )
        .then(res => {
          this.url = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //再次下单
    pay(id, price) {
      // 拿到guid以及订单号
      this.$post(
        `${
          this.$url2
        }/api-bkf-product/order-aggregate/reSaveOrder?orderId=${id}`,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        }
      )
        .then(res => {
          if (res.code === 200) {
            this.orderId = res.data.orderId;
            let data1 = {
              guid: res.data.guid,
              userId: this.$store.getters.getUserData.userId
            };
            // console.log(111);
            // 读redis，成功创建订单后关闭遮罩层，跳转支付页面
            this.times = setInterval(() => {
              this.$fetch(
                `${
                  this.$url2
                }/api-nkf-callback/callBack-aggregate/getOccupation`,
                data1
              ).then(res => {
                if (res.code === 200) {
                  clearInterval(this.times);
                  this.$router.push({
                    path: "./success",
                    query: {
                      orderId: id,
                      price2: price
                    }
                  });
                } else if (res.code === 403) {
                  this.$router.push("/mine");
                  this.$message.error("下单失败");
                }
              });
            }, 3000);
          } else {
            this.$message.error(res.message);
          }
        })
        .catch(error => {
          this.$message.error(error.response.data.message);
        });
    },
    //待支付直接去支付页面
    pay2(id, price) {
      this.$router.push({
        path: "./success",
        query: {
          orderId: id,
          price: price
        }
      });
    },
    //跳转订单详情
    jumpDetail(id) {
      this.$router.push({
        path: "/orderDetail",
        query: {
          id: id,
          status: this.tabs,
          time: new Date()
        }
      });
    },
    //订单列表
    PostFindOrderDetail() {
      if (this.tabs != "a") {
        var data = {
          orderState: this.tabs,
          touristId: this.id
        };
      } else {
        var data = {
          touristId: this.id
        };
      }
      this.loading = true;
      this.$post(
        `${
          this.$url2
        }/api-bkf-product/order-aggregate/findOrderDetail?pageNum=${
          this.page
        }&pageSize=${this.pageSize}`,
        data
      )
        .then(res => {
          this.loading = false;
          if (res.code === 200) {
            this.list = res.data.list || [];
            this.count = res.data.total;
            // console.log(this.list.length)
          } else {
            console.log(res.message);
          }
        })
        .catch(error => {
          this.list = [];
          this.count = 0;
          this.loading = false;
          this.$message.error(error.response.data.message);
        });
    },
    //分页
    handleCurrentChange(val) {
      this.page = val;
      this.PostFindOrderDetail();
    },
    //取消订单
    delOrder(id) { 
      this.$confirm("此操作将取消订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$put(
            `${
              this.$url2
            }/api-bkf-product/order-aggregate/canceOrder?orderId=${id}&status=-1`
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
    //退票
    refund(obj, id, name) {
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
          let data = {
            touristId: this.id,
            linkName: name,
            orderId: id,
            orderSubId: obj.orderDetailId,
            eCode: obj.ecode,
            returnCount: obj.productCount,
            returnContent: val.value
          };
          if (obj.typeId == 0) {
            //银科退票接口
            this.$post(
              `${this.$url1}:5080/returnCash-aggregate/refund/apply`,
              this.$tool.formatDatas(data)
            )
              .then(res => {
                if (res.code == 200) {
                  console.log(res);
                  this.$message({
                    type: "success",
                    message: "申请成功"
                  });
                  this.PostFindOrderDetail();
                } else {
                  this.$message({
                    type: "error",
                    message: res.message
                  });
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
                console.log(res);
                if (res.code == 200) {
                  this.$message({
                    type: "success",
                    message: "申请成功"
                  });
                } else {
                  this.$message({
                    type: "error",
                    message: res.message
                  });
                }
              })
              .catch(error => {
                this.$message.error(error.response.data.message);
              });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退票"
          });
        });
      this.$nextTick(function() {
        this.PostFindOrderDetail();
      });
    }
  },
  mounted() {
    this.PostFindOrderDetail();
  },
  watch: {
    tabs(val) {
      //订单状态改变
      this.page = 1;
      this.PostFindOrderDetail();
    }
  },
  // 销毁定时器
  beforeDestroy() {
    clearInterval(this.times);
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
          return "下单成功";
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
          return "";
          break;
      }
    }
  }
};
</script>
<style scoped="scoped" lang="scss" src="../../../assets/scss/MyOrder.scss"></style>
<style lang="scss" scoped>
.pt40 {
  padding-top: 40px;
}
.code {
  display: block;
  margin-left: 50px;
  width: 100px;
  height: 100px;
}
.tab-s {
  width: 100%;
  // height: 40px;
  margin-bottom: 20px;
  overflow: hidden;
  color: #333333;

  .tabs-title {
    font-size: 16px;
  }

  li {
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    float: left;
    margin-right: 3px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;

    &.active {
      position: relative;
      border-bottom: 2px solid #0764e9;

      a {
        color: #0764e9;
      }
    }

    &.marl120 {
      margin-left: 120px;
    }

    a {
      color: #333333;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
}

.o_order {
  min-height: 710px;

  .false {
    border-top: 1px solid rgba(221, 221, 221, 1);
    padding: 20px 0;
    text-align: center;
  }

  .w100 {
    width: 100%;
    padding-right: 10px;
  }

  .order-one {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);

    .creatTime {
      margin-left: 56px;
    }

    .residueTime {
      margin-left: 196px;
    }

    .par-type {
      margin-left: 10px;

      &.red {
        color: red;
      }
    }
  }

  .order-two {
    font-size: 12px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    height: 29px;
    line-height: 29px;

    .coupon {
      margin-left: 56px;
    }

    .realPay {
      margin-left: 37px;
    }

    .pay {
      width: 80px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      background: rgba(7, 100, 233, 1);
      color: rgba(255, 255, 255, 1);
    }

    .cancelOrder {
      font-weight: 400;
      color: rgba(7, 100, 233, 1);
      margin-left: 27px;
    }

    .lookOrder {
      font-weight: 400;
      margin-left: 44px;
    }
  }

  .ticket-title {
    font-size: 14px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
<style lang="scss">
.o_order .el-collapse-item__header {
  height: 118px;
  line-height: 59px;
}

.o_order {
  .el-table th.is-leaf {
    background: #dddddd;
    color: #333333;
    font-size: 14px;
  }

  .el-collapse-item:nth-child(even) {
    .el-collapse-item__header {
      // background: #EEEEEE;
    }
  }
}

#page {
  text-align: center;
  margin-top: 50px;
  height: 32px;
}
</style>
