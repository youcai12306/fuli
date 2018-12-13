<template>
  <div class="clearDiv ti1">
    <div class="ti2 clearDiv">
      <!-- 选择游玩日期 -->
      <p class="ti3">选择游玩日期：</p>

      <div class="clearDiv">
        <el-radio-group v-model="radio2" @change="chooseDate(0)">
          <el-radio :label="1">今天</el-radio>
          <el-radio :label="2">明天</el-radio>
          <el-radio :label="3">后天</el-radio>
        </el-radio-group>

        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" @change="chooseDate(1)" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
        </div>
      </div>
      <!-- 产品 -->
      <div class="pro">
        <ul class="pro1 clearDiv">
          <li v-for="(item,index) in items" :key="index">
            <div @click="jumpDetail(item.id)">
              <img :src="item.img" alt>
            </div>
            <div class="clearDiv ti4">
              <p>{{item.titl}}</p>
              <img :src="item.order" alt>
              <div class="clearDiv">
                <span class="ti5 ti6">{{item.pri1}}</span>
                <span class="ti5 ti7">{{item.pri2}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section class="page" id="page">
        <el-pagination background layout="prev, pager, next" :total="totle" :current-page.sync ="pageIndex" :page-size="pageSize" @current-change="changePage"></el-pagination>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio2: 1,
      value1: "",
      items: [],
      pageSize: 9,
      pageIndex: 1,
      totle:0,
      date:''
    };
  },
  mounted() {
    let today = new Date();
    this.value1 = this.value2 = this.$tool.formatData(today);
    console.log(this.$route.params.id);
    let id = this.$route.params.id;
    //请求数据接口
    this.getTicketList(id, this.value2, this.pageSize, this.pageIndex);
  },
  methods: {
    //跳转详情页面
    jumpDetail(id) {
      this.$router.push({
        path: "/TicketDetail",
        query: {
          id: id
        }
      });
    },
    //选择日期
    chooseDate(type) {
      let today = new Date();
      let id = this.$route.params.id;
      this.pageIndex = 1;
      if (type === 0) {
        if (this.radio2 === 1) {
          this.value2 = this.$tool.formatData(today);
        } else if (this.radio2 === 2) {
          this.value2 = this.$tool.formatData(
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
          );
        } else {
          this.value2 = this.$tool.formatData(
            new Date(today.getTime() + 24 * 60 * 60 * 1000 * 2)
          );
        }
        this.date = this.value2
      }else{
        this.date = this.value1
      }
      console.log(id)
      console.log(this.date)
      console.log(this.pageSize)
      console.log(this.pageIndex)
      this.getTicketList(id, this.date, this.pageSize, this.pageIndex);
    },
    //分页
    changePage(val){
      let id = this.$route.params.id;
      console.log(id)
      console.log(this.date)
      console.log(this.pageSize)
      console.log(this.pageIndex)
      this.getTicketList(id, this.date, this.pageSize, val);
    },
    //获取门票信息
    getTicketList(typeId, date, pageSize, pageIndex) {
      //请求后台接口
      let list =  [
        {
          id: 1,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 2,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 3,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 4,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 5,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 6,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 7,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 8,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 9,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
        {
          id: 10,
          img: "../../static/piao-1.png",
          titl: "富力成人全日票",
          order: "../../static/group.png",
          pri1: "¥280",
          pri2: "¥290"
        },
      ]
      this.items = list;
      //此处要获取总条数
      this.totle = this.items.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.ti1 {
  float: left;
  margin-left: 40px;
}
.ti2 {
  background-color: #fff;
  width: 920px;
  height: 1409px;
  float: left;
  padding-top: 55px;
  padding-left: 33px;
  box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
  border-radius: 10px;
  .pro {
    border-top: 1px solid #efefef;
    width: 854px;
    margin-top: 12px;
    .pro1 {
      margin-top: 25px;
      li {
        float: left;
        margin-right: 30px;
        margin-bottom: 60px;
      }
    }
  }
  #page {
    text-align: center;
    margin-top: 10px;
    height: 32px;
  }
  .ti3 {
    float: left;
  }
}
.ti4 {
  p {
    font-weight: bold;
  }
  img {
    margin-top: 10px;
    margin-bottom: 2px;
  }
  .ti6 {
    font-size: 22px;
    color: #fb8c0a;
  }
  .ti7 {
    color: #999999;
    font-size: 12px;
    text-decoration: line-through;
  }
}
</style>
<style lang="">
.el-radio-group {
  float: left;
}
.el-radio-group {
  margin-top: 5px;
}
.el-date-editor {
  margin-top: -8px;
  margin-left: 35px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 140px;
}
</style>
