<template>
	<!-- 已支付页面 状态2 -->
	<section>
		<!-- 全部 -->
		<section class="o_order">
			<el-collapse accordion>
				<el-collapse-item v-for="(item,k) in list" :key="k">
					<template slot="title">
						<div class="w100">
							<div class="order-one clearDiv">
								<div class="floatLeft">订单号：{{item.orderId}}</div>
								<div class="creatTime floatLeft">创建时间：{{item.createTime}}</div>
								<div class="par-type floatRight red">待支付</div>
							</div>
							<div class="order-two">
								<div class="floatLeft">
									订单金额：￥
									<span>{{item.orderTotalCash}}</span>
								</div>
								<div class="coupon floatLeft">
									优惠金额：
									<span>{{item.couponCash}}</span>
								</div>
								<div class="realPay floatLeft">
									实际支付金额：￥
									<span>{{item.payTotalCash}}</span>
								</div>
								<div class="lookOrder floatRight" @click.stop="jumpDetail(item.orderId)">查看订单</div>
								<div class="cancelOrder floatRight" @click.stop="delOrder(item.orderId)">取消订单</div>
								<div class="pay floatRight" @click.stop="pay(item.orderId)">立即支付</div>
							</div>
						</div>
					</template>
					<el-table :data="item.orderDetailDTOList" stripe style="width: 100%">
						<el-table-column prop="date" label="商品" width="300">
							<template slot-scope="scope">
								<div class="ticket-title">{{scope.row.productName}}</div>
								<div class="ticket-time">游玩日期：{{scope.row.useBeginDateTime}}</div>
								<div class="ticket-code">核销码：{{scope.row.ecode || '无'}}</div>
							</template>
						</el-table-column>
						<el-table-column prop="settlementPrice" label="单价" align="center"></el-table-column>
						<el-table-column prop="productCount" label="数量" align="center"></el-table-column>
						<el-table-column prop="smallTotalCash" label="小计" align="center"></el-table-column>
						<el-table-column prop="singleTicketState" label="订单状态" align="center"></el-table-column>
						<el-table-column label="操作">
							<!-- <template slot-scope="scope">
								{{scope.row.orderDetailId}}
							</template> -->
						</el-table-column>
					</el-table>
				</el-collapse-item>
			</el-collapse>
		</section>
		<section class="page" id="page">
			<el-pagination @current-change="handleCurrentChange" :current-page="page" :page-size="pageSize" background layout="prev, pager, next"
			:total="count" v-if="count>0"></el-pagination>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				pageSize: 6,
				count: 0,
				id: this.$store.getters.getUserData.userId,
				list: []
			};
		},
		methods: {
			//跳转订单详情
			jumpDetail(id) {
				this.$router.push({
					name: 'OrderDetail',
					params: {
						id: id
					}
				})
			},
			PostFindOrderDetail() { //订单列表
				let data = {
					orderState: 2,
					touristId: this.id
				}
				this.$post(`http://192.168.2.38:5041/orderDetail/findOrderDetail?pageNum=${this.page}&pageSize=${this.pageSize}`,
					data).then(res => {
					if (res.code === 200) {
						this.list = res.data.list || [];
						this.count = res.data.total;
					} else {
						console.log(res.message);
					}
				}).catch(error => {
					this.list = [];
					this.count = 0;
					console.log(error)
				})
			},
			handleCurrentChange(val) { //分页
				this.page = val;
				this.PostFindOrderDetail();
			},
			delOrder(id) { //取消订单
				this.$confirm('此操作将取消订单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$put(`http://192.168.2.38:5041/orderDetail/canceOrder?orderId=${id}&status=-1`).then(res => {
						if (res.code === 200) {
							this.$message({
								message: `取消订单成功`,
								type: 'success'
							});
							this.PostFindOrderDetail();
						} else {
							console.log(res.message);
						}
					}).catch(error => {
						console.log(error)
					})
				}).catch(() => {

				});
			}
		},
		mounted() {
			this.PostFindOrderDetail();
		}
	};
</script>

<style lang="scss" scoped>
	.o_order {
		min-height: 710px;
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

	#page {
		text-align: center;
		margin-top: 50px;
		height: 32px;
	}
</style>
