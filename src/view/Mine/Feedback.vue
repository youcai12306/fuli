<template>
  <!--
		作者：lixiaoyi
		时间：2018-12-28
		描述：反馈
  -->
  <div class="feedback">
    <div class="box-titles">
      {{$t('Feedback3.Text')}}
      <router-link class="span1" to="/FeedbackDetail">{{$t('Feedback3.Text1')}}</router-link>
    </div>
    <div class="title clearDiv" v-for="(item,key) in data||list" :key="key">
      <div class="floatLeft left">{{$t('Feedback3.Text2')}}</div>
      <div class="floatLeft right">
        <p class="p1">{{item.content}}</p>
        <p class="p2">
          <img :src="imgAddress(value.fileName)" alt v-for="(value,key) in item.imgList" :key="key">
        </p>
        <p class="p3">{{item.feedbackContent|| '暂无回复'}}</p>
      </div>
    </div>
    <div class="pages">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="pageNum"
        :page-size="pageSize"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
      pageSize: 3,
      total: 0,
      list: [],
      imgids: [],
      data:[]
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.init(this.pageNum);
  },
  methods: {
    //查询反馈列表
    init(val) {
      this.$fetch(this.$url + ":2060/myfeedback-aggregate/findList", {
        pageNum: val,
        pageSize: this.pageSize,
        touristId: this.$store.getters.getUserData.userId
      }).then(res => {
         console.log(res);
        if (res.code == 200) {
          this.list = res.data.list;
          this.total = res.data.total;
          let imgList = [];
          this.data = [];
          this.list.forEach(val => {
            console.log(typeof(val.picture))
            if (val.picture != "" && val.picture != null) {
              this.$fetch(
                `${this.$url}:2600/staticResource-mucon/selectFiles`,
                {
                  ids: val.picture
                }
              ).then(res => {
                val.imgList = res.data;
                this.data.push(val)
              });
            }else{
              this.data.push(val)
            }
          });
          // setTimeout(() =>{
          //   this.data = this.list;
          // },5000)
          
        }
      });
    },
    //分页
    changePage(val) {
      this.init(this.pageNum);
    },
    //处理图片地址
    imgAddress(value){
      return `http://101.201.101.138:2600/file/${value}`
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.feedback {
  position: relative;
  .box-titles {
    width: 100%;
    height: 58px;
    line-height: 38px;
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
    margin-top: 20px;
    position: relative;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);

    .span1 {
      display: block;
      position: absolute;
      top: 10px;
      right: 0;
      width: 90px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      background: #0764e9;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .title {
    margin-top: 40px;
    margin-bottom: 30px;
    .left {
      height: 16px;
      line-height: 16px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(7, 100, 233, 1);
    }
    .right {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      .p1 {
        height: 16px;
        line-height: 16px;
        margin-bottom: 30px;
      }
      .p2 {
        margin-bottom: 22px;
        img {
          width: 82px;
          height: 82px;
          margin-right: 14px;
        }
      }
      .p3 {
        width: 674px;
        height: 159px;
        background: rgba(247, 247, 247, 1);
        padding-top: 20px;
        padding-left: 10px;
      }
    }
  }
  .pages {
    position: absolute;
    height: 32px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
