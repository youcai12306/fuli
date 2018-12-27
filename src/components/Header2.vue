<!--  -->
<template>
  <div>
    <div class="nav">
      <ul class="nav-content clearDiv">
        <li class="floatLeft">您好，欢迎登录富力海洋欢乐世界度假区！
          <router-link to="/">[返回首页]</router-link>
        </li>
        <li class="floatRight">
          <span class="phone-img"></span>客服电话400-xxxx-xxx
        </li>
        <li class="floatRight phon-type">手机版</li>
      </ul>
    </div>
    <div class="nav2">
      <ul class="nav-logo clearDiv">
        <li class="floatLeft">
          <router-link to="/"><img src="../assets/img/content-bg.png" alt></router-link>
        </li>
        <li class="mine-center floatLeft">会员中心</li>
        <li class="mine-login floatRight" @click="setSignOuts">
          <span></span>退出登录
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { delCookie } from "@/package/cookie";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    ...mapActions(["setSignOut"]),
    //登出
    setSignOuts() {
      this.setSignOut();
			delCookie('userData');
      this.$router.replace("/index");
    }
  }
};
</script>
<style lang='scss' scoped>
.nav {
  width: 100%;
  height: 63px;
  line-height: 63px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: url(../assets/img/mine-nav.png) no-repeat 0 0;
  background-size: 100% 100%;

  .nav-content {
    width: 1200px;
    margin: 0 auto;

    a {
      color: rgba(255, 255, 255, 1);
    }

    li {
      .phone-img {
        display: inline-block;
        width: 20px;
        height: 22px;
        background: url(../assets/img/mine-phone.png) no-repeat 0 0px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }

    .phon-type {
      margin-right: 20px;
    }
  }
}

.nav2 {
  width: 100%;
  height: 125px;
  line-height: 125px;
  background-color: rgba(7,100,233,1); 
  ul {
    width: 1200px;
    margin: 0 auto;
    height: 125px;
    line-height: 125px;

    li {
      font-weight: 400;
      color: rgba(255, 255, 255, 1);

      img {
        vertical-align: middle;
      }
    }

    .mine-center {
      height: 45px;
      line-height: 45px;
      font-size: 18px;
      margin-left: 22px;
      padding-left: 18px;
      border-left: 1px solid #ffffff;
      margin-top: 40px;
    }

    .mine-login {
			cursor: pointer;
      font-size: 14px;

      span {
        width: 19px;
        height: 21px;
        display: inline-block;
        vertical-align: middle;
        background: url(../assets/img/mine-login.png) no-repeat 0 0;
        margin-right: 5px;
      }
    }
  }
}
</style>