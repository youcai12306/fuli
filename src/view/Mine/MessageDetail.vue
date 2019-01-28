<template>
  <div class="message-detail">
    <div class="nav clearDiv">
      <div class="floatLeft">{{$t('MessageDetail')}}</div>
      <div class="back floatRight" @click="backMessage">{{$t('Return')}}</div>
    </div>
    <div class="content">
      <div class="title">{{info.title}}</div>
      <div class="time">{{info.createTime}}</div>
      <div class="box" v-html="info.content0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{},
      isChinese: sessionStorage.getItem('isChinese') || 0
    };
  },
  mounted(){
      this.init(this.isChinese)
  },
  components: {},

  computed: {},

  methods: {
      init(isEnglish){
          let id = this.$route.query.id;
          this.$fetch(this.$url+":6110/mongodb-mucon/structure/primary/get",{
            structureId: this.$route.query.id,
            isEnglish: isEnglish
          }).then(res =>{
              if(res.code == 200){
                this.info = res.data;
              }
          })
      },
      //返回消息列表
      backMessage(){
          this.$router.push('myMessage')
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