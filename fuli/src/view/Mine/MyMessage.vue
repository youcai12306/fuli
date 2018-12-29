<template>
  <div class="main">
       <div class="message-manage">
            <p class="change-title">消息管理</p>
            <div class="change-content">
              <div class="content-list clearDiv" @click="jumpDetail(1)">
                <img src="../../assets/img/mine-message.png" alt="" class="floatLeft">
                <div class="list-info floatLeft">
                  <div><span class="tongzhi">系统通知</span><span class="time">3天前</span></div>
                  <div class="work">万圣节| 万圣节最新活动来袭！</div>
                </div>
                <img src="../../assets/img/mine-turnRight.png" alt="" class="floatRight trunRight">
              </div>
              <div class="content-list clearDiv">
                <img src="../../assets/img/mine-message.png" alt="" class="floatLeft">
                <div class="list-info floatLeft">
                  <div><span class="tongzhi">系统通知</span><span class="time">3天前</span></div>
                  <div class="work">万圣节| 万圣节最新活动来袭！</div>
                </div>
                <img src="../../assets/img/mine-turnRight.png" alt="" class="floatRight trunRight">
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
    jumpDetail(id){
      this.$router.push({path:'/messageDetail',query:{
        id:id
      }})
    }
  }
}

</script>
<style lang='scss' scoped>
    .main{
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
              border-bottom: 1px solid rgba(238,238,238,1);
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