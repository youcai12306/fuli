<template>
  <div class="main">
    <div class="title clearDiv">
      <p class="floatLeft title-left">优惠券</p>
      <p class="floatRight title-right">使用规则</p>
    </div>
    <ul class="cards clearDiv">
      <li :class="{liActive:type === 0}" @click="chooseType(0)">已领取</li>
      <li :class="{liActive:type === 1}" @click="chooseType(1)">已使用</li>
      <li :class="{liActive:type === 2}" @click="chooseType(2)">未使用</li>
      <li :class="{liActive:type === 3}" @click="chooseType(3)">已过期</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0
    };
  },
  methods: {
    chooseType(index) {
      this.type = index;
      switch (index) {
        case 0: {
          console.log(index);
          this.$router.push({ path: "/couponReceived", query: {} });
          break;
        }
        case 1: {
          console.log(index);
          this.$router.push({ path: "/couponused" });
          break;
        }
        case 2: {
          this.$router.push({ path: "/couponUnused" });
          break
        }
        case 3: {
          this.$router.push({ path: "/couponStale" });
          break;
        }
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .title {
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding: 49px 0 11px 0;
    border-bottom: 2px solid rgba(238, 238, 238, 1);
    .title-left {
      font-size: 16px;
      line-height: 28px;
    }
    .title-right {
      font-size: 12px;
      width: 68px;
      height: 27px;
      line-height: 27px;
      text-align: center;
      border: 1px solid rgba(7, 100, 233, 1);
      border-radius: 5px;
      color: rgba(7, 100, 233, 1);
    }
  }
  .cards {
    margin-top: 52px;
    li {
      float: left;
      width: 114px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      border: 1px solid rgba(101, 156, 238, 1);
      color: rgba(101, 156, 238, 1);
      margin-right: 16px;
    }
    .liActive {
      color: rgba(255, 255, 255, 1);
      background: rgba(7, 100, 233, 1);
    }
  }
}
</style>