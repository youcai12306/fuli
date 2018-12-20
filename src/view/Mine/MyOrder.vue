<template>
	<!--
		作者：lixiaoyi
		时间：2018-11-28
		描述：我的订单
	-->
	<div class="myOrder">
		<!-- 表头 -->
		<!-- <el-row class="m-table-header">
		  <el-col :span="4">商品</el-col>
		  <el-col :span="4">预定时间</el-col>
		  <el-col :span="4">联系人</el-col>
		  <el-col :span="4">总额</el-col>
		  <el-col :span="4">状态</el-col>
		  <el-col :span="4">操作</el-col>
		</el-row> -->
		
		<!-- 表格主体 -->
		<!-- <el-row class="m-table-body">
			<el-col :span="24" class="title"><span>订单号：HQCT18102487076677(门票订单)</span><span>2018-11-02 15：59：06</span></el-col>
			<el-col class="m-tr">
				<div class="m-td1">
					<img src="../../assets/img/index-hot-img1.png" alt="图片">
					<router-link :to="{path:''}">
						<span>富力海洋<br/>世界成人门票</span>
					</router-link>
					<div class="p-time">游玩时间：11月28日</div>
					<span class="count">x1</span>
				</div>
				<div class="m-td2">
					2018-11-02
				</div>
				<div class="m-td3">
					<span>王<br/>135****3041</span>
				</div>
				<div class="m-td4">
					199.00
				</div>
				<div class="m-td5">
					已核销
				</div>
				<div class="m-td6">
					<span>
						<router-link :to="{path:'/orderdetails'}">详情</router-link>
						<br />
						<router-link :to="{path:'/'}">开发票</router-link>
					</span>
				</div>
			</el-col>
		</el-row> -->
		
		<!-- <el-row class="m-table-body">
			<el-col :span="24" class="title"><span>订单号：HQCT18102487076677(门票订单)</span><span>2018-11-02 15：59：06</span></el-col>
			<el-col class="m-tr">
				<div class="m-td1">
					<img src="../../assets/img/index-hot-img1.png" alt="图片">
					<router-link :to="{path:''}">
						<span>富力海洋<br/>世界成人门票</span>
					</router-link>
					<div class="p-time">游玩时间：11月28日</div>
					<span class="count">x1</span>
				</div>
				<div class="m-td2">
					2018-11-02
				</div>
				<div class="m-td3">
					<span>王<br/>135****3041</span>
				</div>
				<div class="m-td4">
					199.00
				</div>
				<div class="m-td5">
					已核销
				</div>
				<div class="m-td6">
					<span>
						<router-link :to="{path:'/orderdetails'}">详情</router-link>
						<br />
						<router-link :to="{path:'/'}">开发票</router-link>
					</span>
				</div>
			</el-col>
		</el-row> -->
		
		
		<!-- 头部tab -->
		<section class="tabs">
			<ul>
				<li class="tabs-title">订单状态：</li>
				<li :class="{'active' : $route.path=='/unpaid' || $route.path=='/myorder'}">
					<router-link to="/unpaid">全部</router-link>
				</li>
				<li :class="{'active' : $route.path=='/prepaid'}">
					<router-link to="/prepaid">预下单</router-link>
				</li>
				<li :class="{'active' : $route.path=='/consumed'}">
					<router-link to="/consumed">待支付</router-link>
				</li>
				<li :class="{'active' : $route.path=='/refund'}">
					<router-link to="/refund">处理中</router-link>
				</li>
				<li :class="{'active' : $route.path=='/audit'}">
					<router-link to="/audit">下单成功</router-link>
				</li>
				<li :class="{'active' : $route.path=='/faudit'}">
					<router-link to="/faudit">退订</router-link>
				</li>
				<li :class="{'active' : $route.path=='/error'}">
					<router-link to="/error">已取消</router-link>
				</li>
			</ul>
		</section>
		
		<!-- 表格 -->
		<section>
			<router-view></router-view>
		</section>
		
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
