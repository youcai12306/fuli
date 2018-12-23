<template>
	<!--
		作者：lixiaoyi
		时间：2018-11-28
		描述：我的订单
	-->
	<div class="myOrder">
		<!-- 头部tab -->
		<!-- <section class="tabs">
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
				<li :class="{'active' : $route.path=='/audit'}">
					<router-link to="/audit">已支付</router-link>
				</li>
				<li :class="{'active' : $route.path=='/refund'}">
					<router-link to="/refund">已完成</router-link>
				</li>
				
				<li :class="{'active' : $route.path=='/faudit'}">
					<router-link to="/faudit">退订</router-link>
				</li>
				<li :class="{'active' : $route.path=='/error'}">
					<router-link to="/error">已取消</router-link>
				</li>
			</ul>
		</section> -->
		
		<!-- 表格 -->
		<section>
			<router-view/>
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
