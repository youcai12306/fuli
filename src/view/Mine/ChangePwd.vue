<template>
  <div class="main">
    <div class="changePwd">
      <p class="change-title">修改密码</p>
      <div class="change-content">
        <p><label for="">新密码</label><input
            type="text"
            placeholder="请输入新的密码"
          ></p>
        <p><label for="">确认新密码</label><input
            type="text"
            placeholder="请确认密码"
          ></p>
        <p><label for="">验证码</label><input
            type="text"
            placeholder="请输入验证码"
            class="code"
          ><img
            src="../../assets/img/mine-code.png"
            alt=""
          ></p>
        <button>确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.main {
  .changePwd {
    .change-title {
      font-size: 16px;
      color: #333333;
      padding-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
    }
    .change-content {
      padding-top: 47px;
      p {
        height: 40px;
        line-height: 40px;
        margin-bottom: 30px;
        font-size: 14px;
        label {
          text-align: left;
          width: 10%;
          display: inline-block;
        }
        input {
          width: 293px;
          height: 40px;
          border: solid 1px #c5c5c5;
          text-indent: 14px;
        }
        .code {
          width: 123px;
        }
        img {
          width: 100px;
          height: 23px;
          vertical-align: middle;
          margin-left: 10px;
        }
      }
      button {
        width: 293px;
        height: 40px;
        background-color: #0764e9;
        font-size: 14px;
        color: #ffffff;
        margin-left: 87px;
      }
    }
  }
}
</style>