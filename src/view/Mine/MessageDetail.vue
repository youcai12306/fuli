<template>
  <div class="message-detail">
    <div class="nav clearDiv">
      <div class="floatLeft">消息详情</div>
      <div class="back floatRight" @click="backMessage">返回</div>
    </div>
    <div class="content">
      <div class="title">关于一期海南富力开业后价格确定的公告</div>
      <div class="time">2018-12-01 16:14:12</div>
      <div class="box">
        亲爱的游客朋友：
        海南富力一期将于2019年1月全新开放。海南富力一期是北京欢乐谷重磅打造的原汁原味香格里拉风情主题区，全新引进浪漫指数爆棚的音乐过山车、模拟雅鲁藏布江水上探险的大漂流，实景交互式雪域鬼屋、丛林版碰碰车等多项酷爽项目。
        从2006年北京欢乐谷落地首善之都，到2010年二期·欢乐时光区、2014年三期·爱琴港区、2018年四期·甜品王国区、2019年五期·香格里拉区，北京欢乐谷在产品丰富、品质提升、游客服务的道路上从未止步、不忘初心，持之以恒地创造、传递、分享欢乐，致力于打造世界一流的连锁主题公园。
        而今，来欢乐谷，与所爱尽享欢乐时光，已成为闺蜜游、亲子游的理想体验之旅。
        2019年6月起，北京欢乐谷日场全价票价格调整为299元/人，适用于身高超过1.4米的儿童及成人。
        特此公告，敬请悉知！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
      this.init()
  },
  components: {},

  computed: {},

  methods: {
      init(){
          let id = this.$route.query.id;
          console.log(id)
      },
      //返回消息列表
      backMessage(){
          this.$router.push('/myMessage')
      }
  }
};
</script>
<style lang='scss' scoped>
.message-detail {
  width: 875px;
  height: 1283px;
  background: rgba(255, 255, 255, 1);
  padding: 40px 0 50px 0;
  .nav {
    line-height: 34px;
    border-bottom: 1px solid rgba(153, 153, 153, 1);
    padding-bottom: 13px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    .back {
			cursor: pointer;
      width: 76px;
      height: 34px;
      text-align: center;
      border: 1px solid rgba(7, 100, 233, 1);
      font-size: 14px;
      font-weight: 400;
      color: rgba(7, 100, 233, 1);
      cursor: pointer;
    }
  }
  .content {
    margin-top: 31px;
    .title {
      font-size: 20px;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
    }
    .time {
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      padding:31px 0 48px 0;
    }
    .box {
      font-size: 16px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 24px;
    }
  }
}
</style>