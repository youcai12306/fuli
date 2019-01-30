<!--  -->
<template>
  <div class="main">
    <p class="title">{{$t('Member.Text')}}</p>
    <p class="t2">{{$t('Member.Text1')}}</p>
    <p class="t3">{{$t('Member.Text2')}}</p>
    <div class="info">
      <div class="table">
        <div class="list clearDiv">
          <div class="li1 li3 floatLeft">{{$t('Member.Text3')}}</div>
          <div class="li2 li3 floatLeft">{{$t('Member.Text4')}}</div>
        </div>
        <div class="list clearDiv">
          <div class="li1 floatLeft">Lv.1</div>
          <div class="li2 floatLeft">{{$t('Member.Text5')}}</div>
        </div>
        <div class="list clearDiv" v-for="(item,key) in list" :key="key">
          <div class="li1 floatLeft">Lv.{{key+2}}</div>
          <div class="li2 floatLeft">{{item.discount/10}}{{$t('Member.Text6')}}</div>
        </div>
      </div>
    </div>

    <p class="t2 t4">{{$t('Member.Text7')}}</p>
    <p class="t3">{{$t('Member.Text8')}}</p>
    <!-- 会员升级 -->
    <div class="shengji">
      <div class="table">
        <div class="list clearDiv">
          <div class="li1 li4 floatLeft">{{$t('Member.Text9')}}</div>
          <div class="li2 li4 floatLeft">{{$t('Member.Text10')}}</div>
          <div class="li3 li4 floatLeft">{{$t('Member.Text11')}}</div>
        </div>
        <div class="list clearDiv" v-for="(item,key) in list" :key="key">
          <div class="li1 floatLeft">Lv.{{key+1}}{{$t('Member.Text12')}}Lv.{{key+2}}</div>
          <div class="li2 floatLeft">{{item.integration}}</div>
          <div class="li3 floatLeft">
            <button
              :class="{li5:integral>=item.integration && lv == key+1}"
              class="btn"
              :disabled="integral<item.integration || lv != key+1"
              @click="upgrade(item.integration)"
            >{{$t('Member.Text13')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; //引入状态管理
export default {
  inject: ["reload"],
  data() {
    return {
      list: [],
      integral: 0,
      lv: 0
    };
  },
  mounted() {
    this.getUpgradeRules();
  },
  methods: {
    //获取用户等级和升级积分
    getUpgradeRules() {
      this.$post(
        this.$url +
          ":2060/memberinte-aggregate/getToursAndMember?touristId=" +
          this.$store.getters.getUserData.userId
      ).then(res => {
        if (res.code == 200) {
          this.list = res.data.MemberList;
          this.integral = res.data.Tourist.integration;
          this.lv = res.data.Tourist.memberlevel;
        }
      });
    },
    //升级
    ...mapActions(["updateUserData"]),
    upgrade(integration) {
      let data = {
        id: this.$store.getters.getUserData.userId,
        memberLevel: this.$store.getters.getUserData.memberlevel+1
      };
      this.$put(
        this.$url + ":2060/memberinte-aggregate/updateToMemberLevel",
        this.$tool.formatDatas(data),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      ).then(res => {
        if (res.code == 200) {
          this.$message({
            message: "升级成功",
            type: "success"
          });
          let userData = this.$store.getters.getUserData;
          userData.integration -= integration;
          userData.memberlevel = this.lv + 1;
          this.updateUserData(userData);
          this.reload();
        } else {
          this.$message({
            message: res.message,
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  padding: 0 51px 0 33px;
  .title {
    margin-top: 42px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    font-size: 16px;
    line-height: 16px;
    height: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 25px;
  }
  .t2 {
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(7, 100, 233, 1);
    margin: 27px 0;
  }
  .t3 {
    height: 14px;
    line-height: 21px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 31px;
  }
  .info {
    padding-top: 30px;
    .table {
      width: 490px;
      border: 1px solid rgba(145, 187, 248, 1);
      margin-left: 155px;
      .list {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid rgba(145, 187, 248, 1);
        .li1,
        .li2 {
          height: 100%;
          font-size: 14px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .li3 {
          // font-size: 0.3rem;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          background: rgba(94, 146, 220, 1);
        }
        .li1 {
          width: 37%;
          border-right: 1px solid rgba(145, 187, 248, 1);
        }
        .li2 {
          width: 63%;
        }
      }
      .list:last-child {
        border: 0;
      }
    }
  }

  .t4 {
    color: rgba(238, 50, 35, 1);
  }
  .shengji {
    .table {
      width: 490px;
      border: 1px solid rgba(251, 200, 196, 1);
      margin-left: 155px;
      .list {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid rgba(251, 200, 196, 1);
        .li1,
        .li2,
        .li3 {
          height: 100%;
          font-size: 14px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .li4 {
          // font-size: 0.3rem;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          background: rgba(255, 200, 196, 0.6);
        }
        .li1 {
          width: 34%;
          border-right: 1px solid rgba(251, 200, 196, 1);
        }
        .li2 {
          border-right: 1px solid rgba(251, 200, 196, 1);
        }
        .li2,
        .li3 {
          width: 33%;
        }
        .li3 {
          button {
            width: 108px;
            height: 32px;
            background: rgba(219, 219, 219, 1);
            border-radius: 15px;
            color: rgba(130, 130, 130, 1);
            cursor: pointer;
          }
          .li5 {
            color: rgba(238, 55, 40, 1);
            background: rgba(255, 200, 196, 1);
          }
        }
      }
      .list:last-child {
        border: 0;
      }
    }
  }
}
</style>