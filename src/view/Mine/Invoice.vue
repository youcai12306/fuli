<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-04
		描述：我的订单>开发票
	-->
	<div class="myOrder">
		<el-row class="m-title m-buottom">
			<el-col :span="24">我的订单>开发票</el-col>
		</el-row>
		<div class="m-bottom">
			<router-link to="/consumed">返回</router-link>
		</div>
		
		<div class="lable">
			订单号：111111111111111
		</div>
		<div class="lable">
			支付金额：199.00元
		</div>
		
		<div class="i-title">
			确认发票信息
		</div>
		
		<div class="i-checkbox">
			发票类型：<el-radio v-model="radio" label="1">电子增值税普通发票</el-radio>
		</div>
		
		<div class="i-input">
			填写发票抬头：<el-input v-model="input" placeholder="请输入内容"></el-input>
		</div>
		
		<div class="i-checkbox">
			发票抬头类型：<el-radio v-model="radio2" label="1">企业</el-radio><el-radio v-model="radio2" label="2">个人</el-radio>
		</div>
		
		<div class="i-input">
			企业税号：<el-input v-model="input" placeholder="请输入内容"></el-input>
		</div>
		
		<el-button type="primary" class="i-button">提交申请</el-button>
		
		<!-- 弹出框 -->
		<div id="bg" v-if="status" @click="status = !status"></div>
		<div id="bg_text" v-if="status">
			<span class="text">发票提交成功！</span>
			<el-button type="primary" class="i-button" @click="status = !status">确 认</el-button>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: '1',
				radio2: '1',
				input: '',
				status:true
			};
		}
	}
</script>

<style scoped="scoped" lang="scss" src="../../assets/scss/MyOrder.scss"></style>
<style lang="scss">
	.i-input{
		.el-input{
			float: right;
			width: 162px;
			.el-input__inner{
				height: 30px;
				line-height: 30px;
				border-radius: 0;
			}
		}
	}
	.i-button{
		margin-top: 56px;
		background: #0764E9;
		width: 130px;
		font-size:14px;
		font-family:MicrosoftYaHei;
		font-weight:400;
		color:rgba(255,255,255,1);
	}
	#bg{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: transparent;
		z-index: 1000;
	}
	#bg_text{
		width: 322px;
		height: 197px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background:rgba(255,255,255,1);
		border:1px solid rgba(210,210,210,1);
		box-shadow:0px 1px 8px 0px rgba(1,12,24,0.14);
		z-index: 1001;
		span.text{
			display: block;
			width: 100%;
			text-align: center;
			height:14px;
			font-size:14px;
			font-family:MicrosoftYaHei;
			font-weight:400;
			color:rgba(51,51,51,1);
			line-height: 14px;
			margin: 50px 0 56px 0;
		}
		.i-button{
			display: block;
			margin:0 auto;
			
		}
	}
</style>