<template>
  <div class="risk">
    <div class="title">
      <div class="location">当前位置>首页>动物百科</div>
    </div>
    <div class="content clearDiv">
      <div class="left floatLeft">
        <ul class="ul">
          <li
            class="li"
            v-for="(item,keys) in 5"
            :key="keys"
            @click="chooseAnimal(keys,item.id)"
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
                  @click="choosetype(key,item.id)"
                >鲸豚类动物</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="right floatRight">
          <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      actives: 0
    };
  },
  computed: {},

  methods: {
    chooseAnimal(key, id) {
      this.actives = key;
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
            top: -30px;
            width: 370px;
            height: 114px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
            position: absolute;
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
    }
  }
}
</style>