<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-28
		描述：反馈详情
	-->
	<div class="feedback">
		<div class="box-titles">我要反馈 <span>返回</span></div>
		<el-form ref="formRules" :model="form" label-width="100px" class="form">
			<el-form-item label="反馈类型：" prop="region" :rules="[{ required: true, message: '反馈类型不能为空'}]">
				<el-select v-model="form.region" placeholder="请选择反馈类型">
					<el-option label="门票" value="shanghai"></el-option>
					<el-option label="礼品" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="反馈内容：" prop="desc" :rules="[{ required: true, message: '反馈内容不能为空'}]">
				<el-input type="textarea" v-model="form.desc" placeholder="最多输入500字"></el-input>
			</el-form-item>
			<el-form-item label="上传图片：">
				<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
				 :on-remove="handleRemove" :multiple="true" :limit='3' :on-exceed="exceed">
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item label="姓名：" prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
				<el-input v-model="form.name" placeholder="请输入姓名"></el-input>
			</el-form-item>
			<el-form-item label="手机：" prop="iPhone" :rules="[{ required: true, message: '手机号不能为空',trigger:'blur'}]">
				<el-input v-model="form.iPhone" placeholder="请输入手机号码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" class="submit">提 交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					region: '',
					desc: '',
					name: '',
					iPhone: ''
				},
				formRules:{
					region: '',
					desc: '',
					name: '',
					iPhone: ''
				},
				dialogImageUrl: '',
				dialogVisible: false
			}
		},
		components: {

		},
		computed: {

		},
		mounted() {

		},
		methods: {
			onSubmit() {
				this.$refs['formRules'].validate(valid => {
				  if (valid) {
				    this.$message({
				    	type: "success",
				    	message: "反馈成功！"
				    })
				  } else {
				    console.log("error submit!!");
				    return false;
				  }
				});
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			exceed(files, fileList) {
				this.$message({
					message: "最多上传3个图片",
					type: 'warning'
				});
			},
			go() {
				this.$route.go(-1);
			}
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

		span {
			display: block;
			position: absolute;
			top: 10px;
			right: 0;
			height: 38px;
			line-height: 38px;
			text-align: center;
			width: 67px;
			border: 1px solid rgba(7, 100, 233, 1);
			color: #0764E9;
			font-size: 14px;
			cursor: pointer;
		}
	}

	.form {
		margin-top: 35px;
		width: 606px;
		overflow: hidden;

		input {
			width: 350px;
		}

		.submit {
			width: 167px;
			height: 44px;
			background: rgba(7, 100, 233, 1);
			text-align: center;
			line-height: 44px;
			font-size: 16px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			padding: 0;
		}
	}
</style>
