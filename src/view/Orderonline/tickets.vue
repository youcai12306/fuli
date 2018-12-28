<template>
  <div class="clearDiv ti1">
    <div class="ti2 clearDiv">
      <!-- 选择游玩日期 -->
      <p class="ti3">选择游玩日期：</p>

      <div class="clearDiv">
        <el-radio-group
          v-model="radio2"
          @change="chooseDate(0)"
        >
          <el-radio :label="1">今天</el-radio>
          <el-radio :label="2">明天</el-radio>
          <el-radio :label="3">后天</el-radio>
        </el-radio-group>

        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            @change="chooseDate(1)"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :editable="false"
            :picker-options="pickerOptions0"
          ></el-date-picker>
        </div>
      </div>
      <!-- 产品 -->
      <div class="pro">
        <ul class="pro1 clearDiv">
          <li
            v-for="(item,index) in list"
            :key="index"
          >
            <div
              @click="jumpDetail(item.id,item.stockId)"
              class="pp"
            >
              <img
                :src="item.pictureId"
                alt
              >
            </div>
            <div class="clearDiv ti4">
              <p>{{item.productName}}</p>
              <div class="can">{{canDebook(item.returnSign)}}</div>
              <div class="clearDiv">
                <span class="ti5 ti6">{{item.originalPrice}}</span>
                <span class="ti5 ti7">{{item.settlementPrice}}</span>
              </div>
            </div>
          </li>
          <!-- <li
            v-for="(item,index) in list"
            :key="index"
          >
            <div
              @click="jumpDetail(item.id,item.stockId)"
              class="pp"
            >
              <img
                :src="item.pictureId"
                alt
              >
            </div>
            <div class="clearDiv ti4">
              <p>{{item.productName}}</p>
              <div>{{item.returnSign}}</div>
              <div class="clearDiv">
                <span class="ti5 ti6">{{item.originalPrice}}</span>
                <span class="ti5 ti7">{{item.settlementPrice}}</span>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
      <div>{{msg}}</div>
      <section
        class="page"
        id="page"
      >
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totle"
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          @current-change="changePage"
        ></el-pagination>
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
      totle: 0,
      date: "",
      imgs: [],
      msg:'',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
  //将图片base64位拼接为图片地址
  computed: {
    list() {
      let list = this.items;
      // console.log(this.imgs);
      let str = [];
      // if(!this.imgs){
      //   return;
      // }
      list.forEach((v, k) => {
        this.imgs.forEach(val => {
          if (v.pictureId == val.id) {
            v.pictureId = "http://192.168.2.61:2600/file/" + val.fileName;
          }
        });
        str.push(v);
      });
      return str;
    }
  },
  //将选择时间里面的时间戳转化为时间
  mounted() {
    let today = new Date();
    this.value1 = this.value2 = this.$tool.formatData(today);
    // console.log(this.$route.params.id);
    let id = this.$route.params.id;
    //请求数据接口
    this.getTicketList(id, this.value2, this.pageSize, this.pageIndex);
  },
  methods: {
    //跳转详情页面
    jumpDetail(id, stockId) {
      this.$router.push({
        path: "/TicketDetail",
        query: {
          id: id,
          stockId: stockId
        }
      });
    },
     //是否可退订
    canDebook(type) {
      return type === 1 ? (this.sign = "可退订") : (this.sign = "不可退订");
    },
    //选择日期
    chooseDate(type) {
      let today = new Date();
      let id = this.$route.params.id;
      this.pageIndex = 1;
      if (type === 0) {
        if (this.radio2 === 1) {
          this.value1 = this.value2 = this.$tool.formatData(today);
        } else if (this.radio2 === 2) {
          this.value1 = this.value2 = this.$tool.formatData(
            new Date(today.getTime() + 24 * 60 * 60 * 1000)
          );
        } else {
          this.value1 = this.value2 = this.$tool.formatData(
            new Date(today.getTime() + 24 * 60 * 60 * 1000 * 2)
          );
        }
        this.date = this.value2;
      } else {
        this.date = this.value1;
      }
      // console.log(id)
      // console.log(this.date)
      // console.log(this.pageSize)
      // console.log(this.pageIndex)
      this.getTicketList(id, this.date, this.pageSize, this.pageIndex);
    },
    //分页
    changePage(val) {
      let id = this.$route.params.id;
      // console.log(id)
      // console.log(this.date)
      // console.log(this.pageSize)
      // console.log(this.pageIndex)
      this.getTicketList(id, this.date, this.pageSize, val);
    },
    //获取门票信息
    getTicketList(typeId, date, pageSize, pageIndex) {
      //请求后台接口
      this.$fetch("http://192.168.2.61:5001/product-aggregate/findProductByStock", {
        playDate: date
      })
        .then(res => {
          console.log(res);
          if(res.code === 400){
              this.msg = res.message
              this.items = []
          }
          if(res.code === 200){
            this.msg = ''
          }
          
          // console.log(res.data.list);
          this.items = res.data.list;
          // console.log(this.items)
          this.totle = res.data.total;
          let xin = [];
          let xin2 = "";
          // if(!this.items){
          //   return;
          // }
          this.items.forEach((v, k) => {
            // console.log(v.pictureId);
            // console.log(v)
            xin.push(v.pictureId);
            // console.log(xin);
            xin2 = xin.join(",");
          });
          // console.log(xin2);
          let imgs = [];
          this.$fetch("http://192.168.2.61:2600/staticResource-mucon/selectFiles", {
            ids: xin2
          }).then(res => {
            console.log(res.data);
            // var img = res.data;
            // img.forEach((v,k) => {
            //   imgs[k] = v.fileName;
            //   imgs[k]=v.id;
            // })
            // this.imgs = res.data || [];
            this.imgs = res.data;
          });
        })
        .catch(error => {
          // alert("今天没有库存")
        });

      // this.items = list;
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
      margin-left: 74px;
      li {
        width: 254px;
        height: 254px;
        float: left;
        margin-right: 6px;
        margin-bottom: 60px;
        cursor: pointer;
        .pp {
          height: 254px;
          img {
            display: block;
            width: 254px;
            height: 254px;
          }
        }
      }
    }
  }
  #page {
    text-align: center;
    margin-top: 100px;
    height: 32px;
  }
  .ti3 {
    float: left;
  }
}
.ti4 {
  margin-top: 16px;
  .can{
    border:1px solid #f27373;
    width: 54px;
    height: 23px;
    border-radius: 5px;
    font-weight: 400px;
    color:#f27373;
    font-size:12px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 8px;
  }
  p {
    font-weight: bold;
    width: 128px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
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
