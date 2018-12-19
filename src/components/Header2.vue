<template>
  <div class="main">
    <div class="main-content">
      <div class="logo floatLeft">
        <router-link tag="div" to="/index">
          <img src="../assets/img/logo.png" alt>
        </router-link>
      </div>
      <div class="floatLeft">
        <ul>
          <li @mouseover="showNavList(1)" @mouseout="hiddenNavList(1)">主题乐园</li>
          <li class="hotel">度假酒店</li>
          <li class="news">新闻中心</li>
          <li class="trip">计划旅程</li>
          <li class="discounts">特别优惠</li>
          <li class="order" @click="jumpOrderTicket">网上订购</li>
          <li class="risk">冒险之旅</li>
        </ul>
      </div>
      <div class="nav-right floatLeft">
        <div class="right-info">
          <div class="login" @click="jumpMine" ref="box">
            <span>{{name}}</span>
            <div class="person-info" v-show="loginShow">
              <div class="info-one">
                <router-link to="/mine" class="mine">个人中心</router-link>
                <!-- <a href="javascript:;" class="mine" >个人中心</a> -->
                <a href="javascript:;" class="exit" @click.stop="setSignOuts">退出</a>
              </div>
              <div class="clearDiv info-two">
                <img src="../assets/img/mine-icon.png" alt class="floatLeft">
                <div class="floatLeft">
                  <p>13800000000</p>
                  <p>我的等级：2</p>
                </div>
              </div>
            </div>
          </div>
          <div class="language-change">
            <span class="ch">中文</span>
            <span>英文</span>
          </div>
        </div>
        <input type="text">
      </div>
    </div>

    <div class="nav-list" v-show="show" @mouseover="showNavList(2)" @mouseout="hiddenNavList(2)">
      <div class="lists">
        <ul>
          <li>
            <router-link :to="{path:'/waterworld'}">
              <p class="list-img">
                <img src="../assets/img/header-img1.png" alt>
              </p>
              <p class="list-title">欢乐海洋世界</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mcgrady'}">
              <p class="list-img">
                <img src="../assets/img/header-img2.png" alt>
              </p>
              <p class="list-title">麦迪斯卡水乐园</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Hearer",
  data() {
    return {
      show: false,
      name: "登录/注册",
      loginShow: false
    };
  },
  watch: {
    // $route(to){
    // 	if(!to.path.indexOf('/login')){
    // 		this.name = '富力会员登录'
    // 	}else{
    // 		this.name = this.$store.getters.userInfo.userName+',欢迎您！';
    // 	}
    // }
  },
  created() {
    if (Object.keys(this.$store.getters.userInfo).length === 0) {
      this.name = "登录/注册";
    } else {
      this.name = this.$store.getters.userInfo.mobile + ",欢迎您！";
    }
    if (this.$refs.box) {
      document.addEventListener("click", e => {
        if (!this.$refs.box.contains(e.target)) {
          this.loginShow = false;
        }
      });
    }
  },
  updated() {},

  methods: {
    showNavList(type) {
      if (type === 2) {
        clearTimeout(this.time);
      }
      this.show = true;
    },
    hiddenNavList(type) {
      if (type === 2) {
        this.show = false;
      } else {
        this.time = setTimeout(() => {
          this.show = false;
        }, 2000);
      }
    },
    //跳转个人中心
    jumpMine() {
      console.log(Object.keys(this.$store.getters.userInfo).length);
      if (Object.keys(this.$store.getters.userInfo).length === 0) {
        this.$router.push("/login");
      } else {
        // this.$router.push("/mine");
        this.loginShow = true;
      }
      this.loginShow = true;
    },
    //跳转订票页面
    jumpOrderTicket() {
      this.$router.push("/tickets/1");
    },
    ...mapActions(["setSignOut"]),
    //退出登录
    setSignOuts(){
      this.setSignOut()
      this.$router.replace('/login')
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  position: relative;

  .main-content {
    height: 97px;
    background-color: #f5f9ff;

    .logo {
      padding-top: 36px;
      margin-left: 441px;
    }

    ul {
      padding-top: 52px;
      padding-left: 80px;

      li {
        height: 26px;
        line-height: 26px;
        float: left;
        font-size: 12px;
        color: #333333;
        background: url(../assets/img/index-theme.png) no-repeat 0 0;
        padding-left: 36px;
        margin-right: 33px;
      }

      .hotel {
        background: url(../assets/img/index-hotel.png) no-repeat 0 0;
        padding-left: 27px;
      }

      .news {
        background: url(../assets/img/index-news.png) no-repeat 0 0;
        padding-left: 27px;
      }

      .trip {
        background: url(../assets/img/index-trip.png) no-repeat 0 0;
        padding-left: 27px;
      }

      .discounts {
        background: url(../assets/img/index-discounts.png) no-repeat 0 0;
        padding-left: 27px;
      }

      .order {
        background: url(../assets/img/index-order.png) no-repeat 0 3px;
        padding-left: 27px;
      }

      .risk {
        background: url(../assets/img/index-risk.png) no-repeat 0 0;
        padding-left: 27px;
      }
    }

    .nav-right {
      font-size: 12px;
      padding-top: 22px;

      .right-info {
        color: #333333;

        .login {
          float: left;
          background: url(../assets/img/index-login.png) no-repeat 0 0;
          padding-left: 20px;
          position: relative;
          &:hover {
            cursor: pointer;
          }
          .person-info {
            position: absolute;
            width: 189px;
            height: 99px;
            background: rgba(248, 248, 248, 1);
            border: 1px solid rgba(231, 229, 229, 1);
            z-index: 11;
            top: 22px;
            left: -55px;
            font-size: 12px;
            color: rgba(102, 102, 102, 1);
            .info-one {
              padding: 5px 0;
              a {
                color: rgba(102, 102, 102, 1);
                margin: 5px 0;
              }
              .mine {
                margin-left: 88px;
              }
              .exit {
                margin-left: 10px;
              }
            }
            .info-two {
              img {
                width: 57px;
                height: 57px;
                border-radius: 50%;
                margin: 0 13px;
              }
              div {
                margin-top: 10px;
              }
            }
          }
        }
        .language-change {
          float: left;
          margin-left: 14px;

          span {
            padding: 0 10px;
            letter-spacing: 1px;
          }

          .ch {
            color: #0764e9;
            border-right: 1px solid #333333;
          }
        }
      }

      input {
        width: 199px;
        height: 32px;
        border-radius: 16px;
        border: solid 1px #bfbfbf;
        background: url(../assets/img/index-search.png) no-repeat 163px center;
        text-indent: 10px;
        margin-top: 8px;
      }
    }
  }

  .nav-list {
    width: 100%;
    height: 110px;
    background: rgba(7, 100, 233, 1);
    position: absolute;
    z-index: 10;

    .lists {
      padding-left: 691px;

      ul {
        li {
          float: left;
          font-size: 12px;
          font-weight: 400;
          color: rgba(245, 249, 255, 1);
          margin-right: 46px;

          .list-img {
            height: 52px;
            line-height: 52px;
            text-align: center;
            margin-top: 10px;

            img {
              display: inline-block;
              vertical-align: middle;
            }
          }

          .list-title {
            line-height: 30px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
