<template>
  <section>
    <!-- 全部 -->
    <section class="o_order">
      <el-collapse accordion>
        <el-collapse-item v-for="item in 10" :key="item">
          <template slot="title">
            <div>
              <div class="order-one clearDiv">
                <div class="floatLeft">订单号：235689462626546265959</div>
                <div class="creatTime floatLeft">创建时间：2018.12.09 16:23:56</div>
                <div class="par-type floatRight">待支付</div>
                <div class="residueTime floatRight">支付剩余时间：</div>
              </div>
              <div class="order-two">
                <div class="floatLeft">
                  订单金额：￥
                  <span>960</span>
                </div>
                <div class="coupon floatLeft">
                  优惠券：
                  <span>0</span>
                </div>
                <div class="realPay floatLeft">
                  实际支付金额：￥
                  <span>960</span>
                </div>
                <div class="lookOrder floatRight" @click="jumpDetail(235689462626546265959)">查看订单</div>
                <div class="cancelOrder floatRight">取消订单</div>
                <div class="pay floatRight" @click.stop="pay()">立即支付</div>
              </div>
            </div>
          </template>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="商品" width="180">
              <template slot-scope="scope">
                <div class="ticket-title">成人全日票</div>
                <div class="ticket-time">游玩日期：2018.05.06</div>
                <div class="ticket-code">核销码：666951</div>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="单价" width="180"></el-table-column>
            <el-table-column prop="num" label="数量"></el-table-column>
			<el-table-column prop="num" label="小计"></el-table-column>
			<el-table-column prop="type" label="订单状态"></el-table-column>
			<el-table-column label="操作"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </section>
    <section class="page" id="page">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      count: 0,
      tableData: [
        {
          date: "2016-05-02",
		  price: "100",
		  num:1,
		  type:"待支付",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
      ]
    };
  },
  methods: {
	//再次下单
    pay() {
      console.log(1111);
	},
	//跳转订单详情
	jumpDetail(id){
		this.$router.push({path:'orderDetail',query:{
			id:id
		}})
	}
  }
};
</script>

<style lang="scss" scoped>
.o_order {
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
  .ticket-title{
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
#page {
  text-align: center;
  margin-top: 50px;
  height: 32px;
}
</style>
