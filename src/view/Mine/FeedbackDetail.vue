<template>
  <!--
		作者：lixiaoyi
		时间：2018-12-28
		描述：反馈详情
  -->
  <div class="feedback">
    <div class="box-titles">
      {{$t('Feedback')}}
      <span @click="go()">{{$t('Return')}}</span>
    </div>
    <el-form ref="formRules" :model="form" label-width="100px" class="form">
      <el-form-item
        :label="$t('FeedbackDetail.Text')"
        prop="region"
        :rules="[{ required: true, message: '反馈类型不能为空'}]"
      >
        <el-select v-model="form.region" :placeholder="$t('FeedbackDetail.Text1')">
          <el-option label="票务问题" value="shanghai"></el-option>
          <el-option label="我要退订" value="beijing"></el-option>
          <el-option label="我要投诉" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        :label="$t('FeedbackDetail.Text2')"
        prop="desc"
        :rules="[{ required: true, message: '反馈内容不能为空'}]"
      >
        <el-input type="textarea" v-model="form.desc" :placeholder="$t('FeedbackDetail.Text3')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('FeedbackDetail.Text4')">
        <el-upload
          action
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :multiple="true"
          :limit="3"
          :on-exceed="exceed"
          accept="image/*"
          :http-request="myUpload"
          :on-change="handleChange"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-form-item>
      <!-- <el-form-item :label="$t('FeedbackDetail.Text5')" prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
				<el-input v-model="form.name" :placeholder="$t('FeedbackDetail.Text6')"></el-input>
			</el-form-item>
			<el-form-item :label="$t('FeedbackDetail.Text7')" prop="iPhone" :rules="[{ required: true, message: '手机号不能为空',trigger:'blur'}]">
				<el-input v-model="form.iPhone" :placeholder="$t('FeedbackDetail.Text8')"></el-input>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="submit">{{$t('FeedbackDetail.Text9')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: "",
        desc: "",
        name: "",
        iPhone: ""
      },
      formRules: {
        region: "",
        desc: "",
        name: "",
        iPhone: ""
      },
      dialogImageUrl: "",
      imgIds: [],
      dialogVisible: false,
      file: {}
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    //提交反馈
    onSubmit() {
      this.$refs["formRules"].validate(valid => {
        let imgIds = "";
        this.imgIds.forEach((val) =>{
			imgIds += val + ','
		})
        if (valid) {
          this.$post(this.$url + ":2060/myfeedback-aggregate/addToMyFeedback", {
            touristId: this.$store.getters.getUserData.userId,
            questionType: this.form.region,
            content: this.form.desc,
            picture: imgIds
          }).then(res => {
            if (res.data == 200) {
              this.$message({
                type: "success",
                message: "反馈成功！"
              });
              this.$router.push('feedback')
            } else {
              this.$message({
                type: "success",
                message: res.message
              });
            }
          });
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
    // 上传文件，获取文件流
    handleChange(file) {
      this.file = file.raw;
    },
    exceed(files, fileList) {
      this.$message({
        message: "最多上传3个图片",
        type: "warning"
      });
    },
    go() {
      this.$router.go(-1);
    },
    //上传图片
    myUpload() {
      // 创建表单对象
      let form = new FormData();
      // 后端接受参数 ，可以接受多个参数
      form.append("file", this.file);
      this.$post(
        this.$url + ":2600/staticResource-mucon/uploadFile",
        form
      ).then(res => {
        if (res.code == 200) {
          this.$message({
            message: "图片上传成功",
            type: "success"
          });
          this.imgIds.push(res.data.id);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.box-titles {
  width: 100%;
  height: 58px;
  line-height: 38px;
  padding: 10px 0;
  border-bottom: 1px solid #eeeeee;
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
    color: #0764e9;
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
