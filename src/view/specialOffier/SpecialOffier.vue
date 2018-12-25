<template>
	<section>
		<Header></Header>	
  <div class="news">
    <div class="main-contion">
      <!-- 导航 -->
      <div class="l">
        <div class="header-title">优惠活动</div>
        <ul>
          <li :class="{hover:tabs==1}" @click="changeType(1)">精彩活动</li>
          <li :class="{hover:tabs==2}" @click="changeType(2)">优惠信息</li>
        </ul>
      </div>
      <!-- 园区新闻 -->
      <div class="r">
        <router-view/>
      </div>
			<div class="clearDiv"></div>
    </div>
  </div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
export default {
  name: "SpecialOffier",
  data() {
    return {
      tabs:1
    };
  },
	components:{
		Header
	},
  methods: {
    changeType(type){
       this.tabs = type
       return type === 1 ? this.$router.push('events') : this.$router.push('events')
    }
  },
  created() {
    document.title = "优惠活动";
  },
};
</script>

<style scoped="" lang="scss">
.news {
  width: 100%;
  height: 1802px;
  background: #fff url(../../assets/img/specialOffier-bg.png) no-repeat top center;

  .main-contion {
    width: 1200px;
    min-height: 1%;
    clear: both;
    margin: 0 auto;
    padding-top: 434px;
    // 导航
    .l {
      float: left;
      width: 240px;
      height: 460px;
      background: rgba(77, 175, 236, 1);
      margin-right: 40px;
      margin-top: 20px;
      box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
      border-radius: 10px;

      .header-title {
        font-size: 35px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(238, 238, 238, 1);
        width: 240px;
        height: 180px;
        line-height: 180px;
        text-align: center;
      }

      ul > li {
        width: 100%;
        height: 140px;
        line-height: 140px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgba(238, 238, 238, 1);
        cursor: pointer;
        background: rgba(111, 196, 249, 1);
        &:nth-of-type(2) {
          margin-top: 5px;
          border-radius: 0 0 10px 10px;
        }
        &.hover {
          color: rgba(7, 100, 233, 1);
        }
      }
    }

    // 主体
    .r {
       float: left;
    }
  }
}
</style>
