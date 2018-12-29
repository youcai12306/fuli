<template>
  <!--
		作者：lixiaoyi
		时间：2018-12-28
		描述：反馈
  -->
  <div class="feedback">
    <div class="box-titles">
      我要反馈
      <router-link class="span1" to="/FeedbackDetail">我要反馈</router-link>
    </div>
    <div class="title clearDiv">
      <div class="floatLeft left">反馈问题：</div>
      <div class="floatLeft right">
        <p class="p1">这个景区东西丢失怎么办？</p>
        <p class="p2">
          <img src="../../assets/img/feedback-img.png" alt>
          <img src="../../assets/img/feedback-img.png" alt>
        </p>
        <p class="p3">您好！您可以直接去服务台广播播报，并且提供最详细的失物信息。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped="scoped">
.feedback {
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

    .span1 {
      display: block;
      position: absolute;
      top: 10px;
      right: 0;
      width: 90px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      background: #0764e9;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .title {
    margin-top: 40px;
    margin-bottom: 30px;
    .left {
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(7, 100, 233, 1);
    }
    .right {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      .p1 {
        height: 16px;
        line-height: 16px;
		margin-bottom: 30px;
      }
      .p2 {
		  margin-bottom: 22px;
        img {
          width: 82px;
          height: 82px;
          margin-right: 14px;
        }
      }
      .p3 {
        width: 674px;
        height: 159px;
        background: rgba(247, 247, 247, 1);
		padding-top: 20px;
		padding-left: 10px;
      }
    }
  }
}
</style>
