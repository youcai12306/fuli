<template>
  <div class="main">
    <div class="message-manage">
      <p class="change-title">{{$t('Message1.Text')}}</p>
      <div class="change-content">
        <div class="content-list clearDiv" @click="jumpDetail(item.structureId)" v-for="(item,key) in list" :key="key">
          <img src="../../assets/img/mine-message.png" alt class="floatLeft">
          <div class="list-info floatLeft">
            <div>
              <span class="tongzhi">{{$t('Message1.Text1')}}</span>
              <span class="time">{{item.createTime}}</span>
            </div>
            <div class="work">{{item.title}}</div>
          </div>
          <img src="../../assets/img/mine-turnRight.png" alt class="floatRight trunRight">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum:1,
      pageSize:10,
      total:0,
      list:[],
      isChinese: sessionStorage.getItem('isChinese') || 0
    };
  },
  mounted(){
    this.getList(this.pageNum,this.isChinese)
  },
  methods: {
    jumpDetail(id) {
      this.$router.push({
        path: "/messageDetail",
        query: {
          id: id
        }
      });
    },
    //获取消息列表
    getList(val,isEnglish) {
      console.log(isEnglish)
      this.$fetch(this.$url + ":6110/mongodb-mucon/structure/primary/search", {
        pageNum: val,
        pageSize: this.pageSize,
        type: 2,
        linkIndex: "M",
        isEnglish: isEnglish
      }).then(res => {
        if(res.code == 200){
          this.list = res.data.content;
          console.log(this.list)
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .message-manage {
    .change-title {
      font-size: 16px;
      color: #333333;
      padding-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
    }
    .change-content {
      position: relative;
      .content-list::before {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #ed3f31;
        border-radius: 50%;
        position: absolute;
        left: 0;
        margin-top: 16px;
      }
      .content-list {
        cursor: pointer;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 18px 0 18px 23px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
        }
        .list-info {
          margin-left: 12px;
          .tongzhi {
            font-size: 16px;
            color: #333333;
          }
          .time {
            font-size: 12px;
            color: #bfbfbf;
            margin-left: 5px;
          }
          .work {
            font-size: 14px;
            color: #333333;
          }
        }
        .trunRight {
          width: 18px;
          height: 30px;
          margin: 5px 44px 0 0;
        }
      }
    }
  }
}
</style>