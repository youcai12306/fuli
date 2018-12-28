<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-28
		描述：反馈
	-->
	<div class="feedback">
		<div class="box-titles">我要反馈 <span>我要反馈</span></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		computed: {

		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped="scoped">
	.box-titles {
		width: 100%;
		height: 58px;
		line-height: 38px;
		padding: 10px 0;
		border-bottom: 1px solid #EEEEEE;
		margin-top: 20px;
		position: relative;
		font-size: 16px;
		font-family: MicrosoftYaHei;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		
		span{
			display: block;
			position: absolute;
			top: 10px;
			right: 0;
			width: 90px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			background: #0764E9;
			color: #fff;
			font-size: 14px;
			cursor: pointer;
		}
	}
</style>
