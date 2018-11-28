<template>
	<!--
		作者：黎孝义
		时间：2018-11-28
		描述：我的订单
	-->
	<div class="myOrder">
		<el-row class="m-title">
			<el-col :span="24">订单信息</el-col>
		</el-row>
		<el-row>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		
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
