<template>
	<!--
		作者：lixiaoyi
		时间：2018-11-28
		描述：我的订单
	-->
	<div class="myOrder orderdetails">
		<el-row class="m-title">
			<el-col :span="24">订单信息</el-col>
		</el-row>
		<!-- 表头 -->
		<el-row class="m-table-header">
			<el-col :span="4">商品</el-col>
			<el-col :span="4">游玩日期</el-col>
			<el-col :span="4">价格</el-col>
			<el-col :span="4">状态</el-col>
			<el-col :span="4">数量</el-col>
			<el-col :span="4">小计</el-col>
		</el-row>
		<!-- 表格主体 -->
		<el-row class="m-table-body">
			<el-col class="m-tr">
				<div class="m-td1">
					<img src="../../assets/img/index-hot-img1.png" alt="图片">
					<span>富力海洋世界<br/>成人门票</span>
					<div class="p-time">游玩时间：11月28日</div>
					<div class="ioce">不可退订</div>
				</div>
				<div class="m-td2">
					2018-11-02
				</div>
				<div class="m-td3">
					￥79.00
				</div>
				<div class="m-td4">
					未支付
				</div>
				<div class="m-td5">
					x1
				</div>
				<div class="m-td6">
					￥79.00
				</div>
			</el-col>
		</el-row>
		<el-row class="m-lxr">
			联系人信息<span>联系人姓名： 王</span><span>联系人手机：135****3041</span><span>身份证号码：4205--------1356</span>
		</el-row>
		<el-row class="m-count">
			合计：<span>￥79.00</span> = 订单金额：79.00 - 优惠金额：￥0.00
		</el-row>
		
		<div class="m-button">
			<router-link :to="{path:'/myorder'}">返回</router-link>
			<router-link :to="{path:'/myorder'}">去支付</router-link>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="scoped" lang="scss" src="../../assets/scss/MyOrder.scss"></style>
