<template>
	<section>
		<Header></Header>
  <div class="risk">
    <div class="title">
      <div class="location">当前位置><router-link to="/index" tag="span">首页></router-link><router-link to="animal" tag="span">动物百科</router-link></div>
    </div>
    <div class="content clearDiv">
      <div class="left floatLeft">
        <ul class="ul">
          <li
            class="li"
            v-for="(item,keys) in 5"
            :key="keys"
            @mouseover="chooseAnimal(keys,item.id)"
            :class="{anActive:actives === keys}"
          >
            哺乳类
            <img src="../../assets/img/animal-r1.png" alt v-show="!(keys === actives)">
            <img src="../../assets/img/animal-r.png" alt v-show="keys === actives">
            <div>
              <ul class="clearDiv">
                <li
                  v-for="(item,key) in 5"
                  :key="key"
                  :class="{liActive:active === key}"
                  @click.stop="choosetype(key,item.id)"
                >鲸豚类动物</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="right floatRight">
        <div class="box">
          <div class="box-top">
            <img src="../../assets/img/login-bg.png" alt class="img">
            <div class="top">
              <p class="a-t">动物百科</p>
              <p class="a-c">珠海长隆海洋王国动物科普大揭秘！同一个世界的另一个角度，这是一个需要你探索求证才能发现的世界，跟着我们来吧！在这里认识聪颖灵敏的 鲸豚类、水陆两生的 鳍脚类、种类繁复多样的 鱼类、依海傍生的 鸟类……</p>
            </div>
          </div>
          <div class="list clearDiv" v-for="item in 4" :key="item">
            <img src="../../assets/img/login-bg.png" alt class="floatLeft">
            <div class="rights floatLeft">
              <div class="t">瓶鼻海豚</div>
              <div class="p">瓶鼻海豚有一个又短又粗的喙，似水瓶，故得名“瓶鼻”。但这并不是真正的鼻子，其鼻孔已经演化为头顶的换气孔。瓶鼻海豚是最常见的鲸豚....</div>
              <a href="#">查看详情>></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
export default {
  data() {
    return {
      active: 0,
      actives: 0
    };
  },
  computed: {},
	components:{
		Header
	},
  methods: {
    chooseAnimal(key, id) {
      this.actives = key;
      this.active = 0;
    },
    choosetype(key, id) {
      this.active = key;
    }
  }
};
</script>
<style lang='scss' scoped>
.risk {
  width: 100%;
  background: #fff url(../../assets/img/new-1.png) no-repeat top center;
  background-size: 1920px 100%;
  padding-top: 440px;
  padding-bottom: 50px;
  .title {
    width: 1200px;
    margin: 0 auto;
    height: 66px;
    background: linear-gradient(
      180deg,
      rgba(15, 107, 234, 1),
      rgba(52, 142, 240, 1)
    );
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);
    .location {
      //   height: 22px;
      height: 66px;
      line-height: 66px;
      font-size: 14px;
      font-family: FZZZHONGJW--GB1-0;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      padding-left: 34px;
      background: url(../../assets/img/new-4.png) no-repeat 15px center;
      cursor: pointer;
    }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    .left {
      width: 250px;
      background: rgba(255, 255, 255, 0.2);
      padding-bottom: 30px;
      border-radius: 0 0 10px 10px;
      .ul {
        width: 213px;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 1);
        padding-top: 30px;

        .li {
          position: relative;
          height: 70px;
          line-height: 70px;
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          cursor: pointer;
          img {
            position: absolute;
            width: 8px;
            height: 14px;
            margin-left: 10px;
            top: 50%;
            margin-top: -7px;
            right: 30px;
          }
          &:hover div {
            display: block;
          }
          div {
            display: none;
            left: 230px;
            top: 0;
            width: 370px;
            height: 114px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
            position: absolute;
            z-index: 10;
            &:after {
              content: "";
              position: absolute;
              top: 50%;
              left: -4px;
              transform: translate(-50%, 0);
              border-right: 9px solid rgba(255, 255, 255, 1);
              /*此处将左右的边框设置为透明色*/
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
              margin-top: -5px;
            }
            ul {
              li {
                float: left;
                height: 28px;
                font-size: 14px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 28px;
                padding: 0 10px;
              }
              .liActive {
                color: rgba(249, 126, 47, 1);
              }
            }
          }
        }
        .anActive {
          background: rgba(249, 126, 47, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .right {
      width: 908px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.08);
      border-radius: 0px 0px 10px 10px;
      padding-bottom: 44px;
      .box {
        width: 863px;
        height: 1600px;
        background: rgba(255, 255, 255, 1);
        margin: 0 auto;
        .box-top {
          position: relative;
          .img {
            width: 863px;
            height: 400px;
          }
          .top {
            position: absolute;
            top: 118px;
            left: 0;
            width: 422px;
            height: 184px;
            background: rgba(0, 0, 0, 0.8);
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            padding-left: 17px;
            .a-t {
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .a-c {
              font-size: 14px;
              height: 89px;
              width: 386px;
              overflow: hidden;
            }
          }
        }

        .list {
          margin: 30px 0;
          padding-left: 30px;
          padding-top: 30px;
          img {
            width: 304px;
            height: 205px;
            border: 4px solid rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.22);
            border-radius: 6px;
          }
          .rights {
            margin-left: 30px;
            .t {
              font-size: 24px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              margin-bottom: 25px;
              margin-top: 10px;
            }
            .p {
              font-size: 14px;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              width: 420px;
              margin-bottom: 35px;
              line-height: 26px;
              overflow: hidden;
            }
            a {
              font-size: 14px;
              font-weight: 400;
              color: rgba(17, 109, 234, 1);
            }
          }
        }
      }
    }
  }
}
</style>