<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-24
		描述：活动详情页面
	-->
	<div>
		<div class="even" id="even">
			<div class="r">
				<div class="title clearDiv">
					<div class="floatLeft">{{$t('specialOffier.navTitle1')}}</div>
					<div class="floatRight location">{{$t('specialOffier.Position')}}>{{$t('specialOffier.navTitle1')}}</div>
				</div>

				<!-- 所有新闻 -->
				<div class="main-new">
					<div class="titles clearDiv">
						<div class="title-left floatLeft">
							<!-- <div class="one">{{data.infoTitle}}</div>
							<div class="two">{{data.createTime}}&nbsp;&nbsp; 来源：海洋欢乐世界</div> -->
							<div class="one" v-if="this.type!='0'">{{data.title}}</div>
							<div class="one" v-else>{{data.activityName}}</div>
							<div class="two">{{data.createTime}}</div>
						</div>
						<div @click="back" class="title-right floatRight">返回</div>
						<div v-if="this.type=='0'" @click="mengActive = !mengActive" class="title-right floatRight blue" style="margin-right: 5px;">立即报名</div>
					</div>
					<!-- <div class="content">
						<img src="../../assets/img/new-bg2.png">
					</div> -->
					<div class="content-main">
						<div v-html="data.content0"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="meng" v-show="mengActive">
			<div class="b-box">
				<img @click="mengActive = !mengActive" src="../../assets/img/cancel.jpg" alt="">
				<p>{{$t('specialOffier.text1')}}</p>
				<el-form ref="numberValidateForm" :model="numberValidateForm" label-width="85px">
                  <el-form-item :label="$t('Suborder.Text13')" class="el1" prop="name1" :rules="[
                          { required: true, message: '请输入姓名'},
                          { type: 'string', message: '姓名必须为中文'}
                      ]">

                    <el-input type="name1" v-model.trim="numberValidateForm.name1" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('Suborder.Text14')" class="el2" prop="phone" :rules="[
                          { required: true, message: '请输入手机号',trigger:'blur'},
                          { 
														validator: (rule, value, callback)=>{validateSku(rule, value, callback)}, 
														trigger: ['blur', 'change'] 
													}
                      ]">
                    <el-input type="phone" v-model.number="numberValidateForm.phone" autocomplete="off"></el-input>
                  </el-form-item>
				  <el-form-item :label="$t('Suborder.Text23')" class="el2" prop="number" :rules="[
                          { required: true, message: '请输入报名人数',trigger:'blur'},
													{ 
														validator: (rule, value, callback)=>{validateNum(rule, value, callback)}, 
														trigger: ['blur', 'change'] 
													}
                      ]">
                    <el-input type="number" v-model.number="numberValidateForm.number" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <button @click="submitForm('numberValidateForm')" :plain="true">提交报名</button>
                  </el-form-item>
                </el-form>
			</div>
		</div>
	</div>
</template>

<script>
import { Message } from 'element-ui';
	export default {
		data() {
			return {
				data: {},
				numberValidateForm: {
					name1: "",
					phone: "",
					number: ""
				},
				mengActive: false,
				type:  this.$route.query.type
			}
		},
		components: {

		},
		created() {
			document.title = "活动详情";
		},
		mounted() {
			this.id = this.$route.query.id;
			this.GetList();
		},
		methods: {
			open() {
				this.$message({
					message: '恭喜你，报名成功',
					type: 'success'
				});
			},
			GetList() {
				if(this.type!='0'){
					this.$fetch('http://101.201.101.138:6110/mongodb-mucon/structure/primary/get?structureId=' + this.$route.query.id + '&isEnglish='+ this.$isEnglish).then((res) => {
						this.data = res.data;
					})
				}else{
					this.$fetch('http://101.201.101.138:6110/mongodb-mucon/activity/primary?id=' + this.id).then((res) => {
						console.log(res.data);
						this.data = res.data;
					})
				}
				
			},
			back(){
				this.$router.go(-1);
			},
			isInteger(obj) {
				return obj%1 === 0
			},
			validateSku: function(rule, value, callback) {
				if (/^1[34578]\d{9}$/.test(value) == false) {
					callback(new Error("请输入正确的手机号"));
				} else {
					callback();
				}
			},
			validateNum: function(rule, value, callback) {
				if (value == 0) {
					callback(new Error("人数不能为零"));
				}else if(value > 100){
					callback(new Error("人数不能大于100"));
				}else if(!this.isInteger(value)){
					callback(new Error("人数必须为整数"));
				} else {
					callback();
				}
			},
			// 验证信息
			submitForm(formName) {
			// console.log(999);
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.flag = true;
						// alert("submit!");
						this.onSubmit();
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			onSubmit() {
				console.log(999);
				this.$post('http://101.201.101.138:6110//mongodb-mucon/participant/primary/insert',{
						count: this.numberValidateForm.number,
						createTime: this.data.createTime,
						mainId: this.id,
						name: this.numberValidateForm.name1,
						phone: this.numberValidateForm.phone
					}).then((res) => {
						console.log(res.data);
						this.data = res.data;
						if(res.code == 200){
							this.mengActive = !this.mengActive;
							this.open();
							setTimeout(()=>{
								this.$router.push("/events?id=0");
							},2000)
						}else{
							this.$message.error('报名失败');
						}
						// this.getPic(res.data.pictures);
					})
			}
		}
	}
</script>

<style scoped="" lang="scss">
	.meng{
		background: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		.b-box{
			position: absolute;
			top: 20%;
			left: 36%;
			width:482px;
			height:420px;
			background:rgba(255,255,255,1);
			padding: 26px 80px;

			img{
				position: absolute;
				right: 12px;
				top: 12px;
				cursor: pointer;
			}

			p{
				font-size:18px;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:27px;
				text-align: center;
				margin-bottom: 43px;
			}

			button {
				width:169px;
				height:45px;
				background:rgba(7,100,233,1);
				border-radius:6px;
				font-size:15px;
				font-weight:bold;
				color:rgba(255,255,255,1);
				line-height:27px;
				font-family:MicrosoftYaHei-Bold;
				margin-top: 41px;
				cursor: pointer;
			}
		}
	}
	// 主体
	.r {
		position: relative;
		height: 1200px;
		width: 920px;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
		margin-top: 20px;

		.title {
			text-align: center;
			font-size: 35px;
			font-weight: bold;
			color: rgba(238, 238, 238, 1);
			width: 100%;
			height: 91px;
			line-height: 91px;
			background: rgba(77, 175, 236, 1);
			padding-left: 37px;
			border-radius: 10px 10px 0 0;

			.location {
				height: 22px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 22px;
				padding-left: 40px;
				background: url(../../assets/img/new-4.png) no-repeat 15px 0;
				margin-top: 50px;
				margin-right: 34px;
			}
		}

		.main-new {
			padding: 31px 34px 0 37px;
			width: 100%;

			.titles {
				padding-bottom: 10px;
				border-bottom: 1px solid rgba(153, 153, 153, 1);

				.title-left {
					.one {
						font-size: 16px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					.two {
						font-size: 12px;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						margin-top: 30px;
					}
				}

				.title-right {
					width: 76px;
					height: 35px;
					background: rgba(235, 235, 235, 1);
					border: 1px solid rgba(210, 210, 210, 1);
					text-align: center;
					line-height: 35px;
					font-size: 14px;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
					margin-top: 18px;
					cursor: pointer;
				}
				.blue {
					background:rgba(7,100,233,1);
					color: #fff;
				}
			}

			.content {
				margin: 30px auto;
				position: relative;
				width: 681px;
				height: 315px;

				img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			.content-main {
				height: 900px;
				overflow-y: auto;
				text-indent: 2em;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 24px;
				margin-top: 20px;

				&::-webkit-scrollbar {
					/*滚动条整体样式*/
					width: 10px;
					/*高宽分别对应横竖滚动条的尺寸*/
					height: 1px;
				}

				&::-webkit-scrollbar-thumb {
					/*滚动条里面小方块*/
					border-radius: 10px;
					background-color: #F90;
					background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
				}

				&::-webkit-scrollbar-track {
					/*滚动条里面轨道*/
					-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
					/* border-radius: 10px; */
					background: #EDEDED;
				}
				p,img{
					margin-bottom: 20px;
				}
				img{
					width: 100%;
				}
				span{
					width: 100%;
					text-align: center;
					font-size: 12px;
					color: #666;
					display: block;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
