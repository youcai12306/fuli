<template>
	<section>
		<!-- 未支付 -->
		<section class="o_order">
			<el-table :data="tableData5" @row-click="clickTable" ref="refTable" :row-key="getRowKeys" :expand-row-keys="expands"
			 @expand-change="showDetail" style="width: 100%">
				<el-table-column type="expand" align="center">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="游玩时间">
								<span>{{ props.row.date }}</span>
							</el-form-item>
							<el-form-item label="订单状态">
								<span>{{ props.row.status }}</span>
							</el-form-item>
							<el-form-item align="right">
							</el-form-item>


							<el-form-item label="商品分类">
								<span>{{ props.row.po }}</span>
							</el-form-item>
							<el-form-item label="商品分类">
								<span>{{ props.row.shopfl }}</span>
							</el-form-item>
							<el-form-item></el-form-item>

							<el-form-item label="数量">
								<span>{{ props.row.count }}</span>
							</el-form-item>
							<el-form-item></el-form-item>
							<el-form-item></el-form-item>

							<el-form-item label="联系人">
								<span>{{ props.row.tel }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="订单号" prop="id" align="center" width="200">
				</el-table-column>
				<el-table-column label="商品名称" prop="name" align="center">
				</el-table-column>
				<el-table-column label="价格" prop="pice" align="center">
				</el-table-column>
				<el-table-column label="下单时间" prop="time" align="center">
				</el-table-column>
			</el-table>
		</section>
		<section class="page" id="page">
			<el-pagination background layout="prev, pager, next" :total="100">
			</el-pagination>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				tableData5: [{
					id: 'HQCT181024870766771',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}, {
					id: 'HQCT181024870766772',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}, {
					id: 'HQCT181024870766773',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}, {
					id: 'HQCT181024870766774',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}, {
					id: 'HQCT181024870766775',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}, {
					id: 'HQCT181024870766776',
					name: '富力海洋世界门票',
					pice: '199.00',
					time: '2018-11-02 15：59：06',
					date: '11月28日',
					status: '异常订单',
					po: '成人票',
					shopfl: 'XXXX',
					count: 'x1',
					tel: '王大锤 135010000000'
				}],
				page: 1,
				count: 0,
				// 获取row的key值
				getRowKeys(row) {
					return row.id;
				},
				// 要展开的行，数值的元素是row的key值
				expands: []
			};
		},
		mounted() {
			// 初始化展开哪一行
			this.expands.push(this.tableData5[0].id);
		},
		methods: {
			clickTable(row, index, e) {//点击一行展开
				this.$refs.refTable.toggleRowExpansion(row)
			},
			showDetail(data, expandedRows) {//控制只显示当前行
				if (expandedRows.length) {
					this.expands = [];
					if (data) {
						this.expands.push(data.id);
					}
				} else {
					this.expands = [];
				}

			}
		},
	}
</script>

<style lang="scss">
	.o_order {
		.demo-table-expand {
			font-size: 0;
		}

		.demo-table-expand label {
			width: 75px;
			padding-right: 20px;
			color: #538CDF;
			font-size: 12px;
			font-family: MicrosoftYaHei;
		}

		.demo-table-expand .el-form-item {
			margin-right: 0;
			margin-bottom: 0;

			width: 33.3%;

			.el-form-item__content {
				font-size: 12px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}

		.el-table thead {
			height: 67px;
			background: rgba(7, 100, 233, 1);
		}

		.el-table th,
		.el-table tr,
		.el-table--enable-row-hover .el-table__body tr:hover>td {
			background: transparent;
		}

		.el-table td,
		.el-table th {
			padding: 24px 0;
		}

		.el-table__expanded-cell[class*=cell] {
			padding: 15px 60px;
			background: rgba(243, 247, 253, 1);

			&:hover {
				background: rgba(243, 247, 253, 1) !important;
			}
		}

		.el-table td,
		.el-table th.is-leaf {
			border-bottom: 1px solid #C4DCFF;
		}

		.expanded td {
			border-bottom: none;
		}

		.el-table th>.cell {
			font-size: 16px;
			font-family: MicrosoftYaHei;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
		}
		.el-button{
			font-size:12px;
			font-family:MicrosoftYaHei;
			font-weight:bold;
			padding: 5px 10px;
		}
	}

	#page {
		text-align: center;
		margin-top: 50px;
		height: 32px;
	}
</style>
