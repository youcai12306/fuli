<template>
  <div>
    <Header></Header>
    <div class="ok1">
      <div class="okk2">
        <div class="okk3">
          <img
            src="../../assets/img/okk.png"
            alt=""
          >
          <p>订单支付成功</p>
        </div>
        <div class="okk4">
            <button class="okk5" @click="jixu()">继续购买</button>
            <button class="okk6" @click="chakan()">查看订单</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  methods:{
      jixu(){
          this.$router.push("./tickets/1")
      },
      chakan(){
          this.$router.push("./mine")
      }
  }
};
</script>

<style lang="scss" scoped>
.ok1{
    background-image: url(../../assets/img/bacdd.png);
    
    .okk2{
        background-color:#fff;
        width: 1200px;
        margin:0 auto;
        padding-bottom: 1000px;
        .okk3{
            text-align:center;
            img{
                display:inline-block;
                margin-top:95px;
                margin-bottom:27px;
            }
            p{
                margin-bottom: 61px;
            }
        }
        .okk4{
            text-align:center;
            .okk5{
                background-color: #0764E9;
                color:#fff;
                width: 114px;
                height: 44px;
                margin-right:63px;
            }
            .okk6{
                background-color: #fff;
                width: 114px;
                height: 44px;
                border:1px solid #0764E9;
                color:#0764E9
            }
        }
    }
}
</style>
