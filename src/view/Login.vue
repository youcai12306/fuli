<template>
  <div class="main">
    <div class="content">
      <div><label for="">账号：</label><input type="text"></div>
      <div><label for="">密码：</label><input type="password"></div>
      <div><el-button type="primary">提交</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  .content {
    text-align: center;
    width: 1200px;
    margin: 0 auto;
    div {
      margin-top: 30px;
      input {
        width: 300px;
        height: 30px;
      }
    }
  }
}
</style>