<template>
  <div>
    <Header></Header>
    <!-- 当前位置 -->
    <!-- <div class="or2">
      <div class="or3 clearDiv"> -->
        <!-- <div class="or4 clearDiv">
          <img src="../../../src/assets/img/dingwei.png" alt>
          <p>当前位置 ：首页 > 网上订购</p>
        </div> -->
        <!-- <div class="or5">
          <ul class="clearDiv">
            <li>
              <a href>王大锤</a>
            </li>
            <li class="clearDiv or55">
              <img src="../../../src/assets/img/gouwuche.png" alt>
              <a href>购物车 <span>{{shopNum}}</span>)</a>
            </li>
            <li>
              <a href>我的订单</a>
            </li>
          </ul>
        </div> -->
      <!-- </div>
    </div> -->
    <!-- 网上订购 -->
    <div class="or6">
      <div class="or7 clearDiv">
        <!-- 左边 -->
        <div class="pp1">
          <ul>
            <li class="or8">{{$t('Tickets.Text1')}}</li>
            <router-link class="clearDiv or9 oo" tag="li" :to="{ path: '/tickets/'+0}">
              <img style="margin-top:2px" v-show="h1 == 0" src="../../../src/assets/img/menpiao.png" alt>
              <img style="margin-top:2px" v-show="h1 == 1" src="../../../src/assets/img/menpiao-h.png" alt>
              <p>{{$t('Tickets.Text2')}}</p>
            </router-link>
            <router-link class="clearDiv or9 or10" tag="li" :to="{ path: '/tickets/'+1}">
              <img v-show="h2 == 0" src="../../../src/assets/img/linshou.png" alt>
              <img v-show="h2 == 1" src="../../../src/assets/img/linshou-h.png" alt>
              <p>{{$t('Tickets.Text3')}}</p>
            </router-link>
            <router-link class="clearDiv or9 or10" tag="li" :to="{ path: '/tickets/'+2}">
              <img v-show="h3 == 0" src="../../../src/assets/img/canyin.png" alt>
              <img v-show="h3 == 1" src="../../../src/assets/img/canyin-h.png" alt>
              <p>{{$t('Tickets.Text4')}}</p>
            </router-link>
            <!-- <li class="clearDiv or9 or10 or11">
              <img src="../../../src/assets/img/taopiao.png" alt>
              <p>{{$t('Tickets.Text5')}}</p>
            </li> -->
          </ul>
        </div>
        <!-- 右边 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data() {
    return {
      shopNum:0,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      num: 0
    };
  },
  // props:['typeId'],
  components: {
    Header
  },
  methods: {
    changeNum() {
      this.num = this.$route.path.substring(this.$route.path.length-1,this.$route.path.length);
    console.log(this.num);
      if(this.num == 0){
        this.h1 = 1;
        this.h2 = 0;
        this.h3 = 0;
        this.h4 = 0;
      }
      if(this.num == 1){
        this.h1 = 0;
        this.h2 = 1;
        this.h3 = 0;
        this.h4 = 0;
      }
      if(this.num == 2){
        this.h1 = 0;
        this.h2 = 0;
        this.h3 = 1;
        this.h4 = 0;
      }
      if(this.num == 3){
        this.h1 = 0;
        this.h2 = 0;
        this.h3 = 0;
        this.h4 = 1;
      }
    }
  },
  mounted() {
    this.changeNum()
  },
  watch: {
    $route(to,from) {
      this.changeNum()
    }
  }
};
</script>

<style lang="scss" scoped>
.or2 {
  border-top: 1px solid #ededed;
  padding-top: 30px;
  padding-bottom: 24px;
  .or3 {
    width: 1200px;
    margin: 0 auto;
    .or4 {
      float: left;
      img {
        display: block;
        float: left;
      }
      p {
        display: block;
        color: #333333;
        float: left;
      }
    }
    .or5 {
      float: left;
      margin-left: 680px;
      ul {
        float: left;
        li {
          float: left;
          img {
            float: left;
          }
          a {
            color: #666666;
          }
        }
        .or55 {
          margin: 0 30px;
        }
      }
    }
  }
}
.or6 {
  background-image: url(../../../src/assets/img/order-1.jpg);
  .or7 {
    padding-bottom: 100px;
    padding-top: 455px;
    width: 1200px;
    margin:  0 auto;
    .pp1 {
      width: 240px;
      float: left;
       .router-link-active {
        background-color: #ffb518;
        p{
          color: #fff;
        }
      }
    }
    .or8 {
      height: 166px;
      text-align: center;
      background-color: #4dafec;
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      padding-top: 55px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
     
    }
    li {
      cursor: pointer;
      &:active{
         background-color: #ffb518;
      }
      img {
        float: left;
      }
      p {
        float: left;
        color: #4dafec;
        font-size: 20px;
        margin-left: 4px;
      }
    }
    .or9 {
      height: 134px;
      background-color: #ffffff;
      padding-top: 48px;
      padding-left: 90px;
      &:hover {
        background-color: #ffb518;
        p {
          &:hover {
            color: #ffffff;
          }
        }
      }
    }
    .or10 {
      border-top: 2px solid #ededed;
    }
    .or11 {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
}
</style>
