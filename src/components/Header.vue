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
          <li class="order" @click="jumpOrderTicket">
            <img src="../assets/img/index-discounts.png" alt>
            <p>网上订购</p>
          </li>
          <li @mouseover="showNavList(1)" @mouseout="hiddenNavList(1)" class="theme">
            <img src="../assets/img/index-theme.png" alt>
            <p>主题乐园</p>
            <div class="nav-list">
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
          </li>
          <li class="hotel">
            <img src="../assets/img/index-hotel.png" alt>
            <p>度假酒店</p>
          </li>
          <router-link to="/news" tag="li" class="news">
            <img src="../assets/img/index-news.png" alt>
            <p>新闻中心</p>
          </router-link>
					<router-link to="/ditu" tag="li" class="trip">
						<img src="../assets/img/index-news.png" alt>
						<p>游玩指南</p>
					</router-link>
          <router-link to="/specialOffier" tag="li" class="active">
            <img src="../assets/img/index-theme.png" alt>
            <p>优惠活动</p>
          </router-link>
          <router-link to="/risk" tag="li" class="risk">
            <img src="../assets/img/index-risk.png" alt>
            <p>冒险之旅</p>
          </router-link>
          <router-link to="/animal" tag="li" class="animal">
            <img src="../assets/img/index-theme.png" alt>
            <p>动物百科</p>
          </router-link>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {mapGetters} from 'vuex'
export default {
  name: "Hearer",
  data() {
    return {
      show: false,
      name: "登录/注册",
      loginShow: false
    };
  },
  computed:{
    ...mapGetters({
        user: 'getUserData'
    }),
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
      if (Object.keys(this.$store.getters.userInfo).length === 0) {
        this.$router.push("/login");
        this.loginShow = false;
      } else {
        this.loginShow = true;
      } 
    },
    //跳转订票页面
    jumpOrderTicket() {
      this.$router.push("/tickets/1");
    },
    ...mapActions(["setSignOut"]),
    //退出登录
    setSignOuts() {
      this.setSignOut();
      this.$router.go(0)
    }
  },
  mounted() {
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
      padding-top: 26px;
      margin-left: 180px;
    }

    ul {
      padding-left: 26px;

      li {
        height: 97px;
        padding: 21px 42px 0 42px;
        float: left;
        font-size: 14px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover {
          background: rgba(7, 100, 233, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
      .theme {
        position: relative;
        &:hover .nav-list {
          display: block;
        }
        .nav-list {
          display: none;
          width: 500px;
          height: 110px;
          background: rgba(7, 100, 233, 1);
          z-index: 10;
          position: absolute;
          top: 97px;
          left: 0;
          .lists {
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
    }

    .nav-right {
      font-size: 12px;
      padding-top: 43px;
      margin-left: 20px;
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
    }
  }
}
@media screen and (max-width: 1700px) {
  .main .main-content ul li {
    padding: 21px 22px 0 22px !important;
  }
}
</style>
