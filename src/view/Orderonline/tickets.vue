<template>
  <div class="clearDiv ti1">
    <div class="ti2 clearDiv">
      <!-- 选择游玩日期 -->
      <p class="ti3">选择游玩日期：</p>

      <div class="clearDiv">

        <el-radio-group v-model="radio2">

          <el-radio :label="3">今天</el-radio>
          <el-radio :label="6">明天</el-radio>
          <el-radio :label="9">后天</el-radio>
        </el-radio-group>

        <div class="block">

          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>
      <!-- 产品 -->
      <div class="pro">
        <ul class="pro1">
          <li v-for="(item,index) in items" :key="index">
            <div>
              <img
                :src="item.img"
                alt=""
              >
            </div>
            <div class="clearDiv ti4">
              <p>{{item.titl}}</p>
              <img
                :src="item.order"
                alt=""
              >
              <div class="clearDiv">
                <span class="ti5 ti6">{{item.pri1}}</span>
                <span class="ti5 ti7">{{item.pri2}}</span>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var data1 = new Date();
    return {
      radio2: 3,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: data1,
      value2: "",
      items:[
          {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
          {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
          {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
          {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
           {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
           {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
           {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
           {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          },
           {
              img:'../../static/piao-1.png',
              titl:'富力成人全日票',
              order:'../../static/group.png',
              pri1:'¥280',
              pri2:'¥290'
          }
      ]
    };
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
  .pro{
      border-top:1px solid #EFEFEF;
      width: 854px;
      margin-top:12px;
      .pro1{
          margin-top: 25px;
          li{
              float:left;
              margin-right: 30px;
              margin-bottom: 60px;
          }
      }
  }
  .ti3 {
    float: left;
  }
}
.ti4 {
  p{
    font-weight: bold;
  }
  img{
      margin-top:10px;
      margin-bottom: 2px;
  }
  .ti6{
      font-size:22px;
      color:#FB8C0A;
  }
  .ti7{
      color:#999999;
      font-size: 12px;
      text-decoration:line-through;
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
</style>
