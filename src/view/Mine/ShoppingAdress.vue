<template>
  <div class="main">
    <div class="take-address clearDiv">
      <p class="change-title">收货地址<span class="floatRight">+</span></p>
      <div class="change-content">
        <div class="list clearDiv">
          <div class="list-left floatLeft">
            <div class="list-leftOne clearDiv">
              <div>王大锤</div>
              <div>13888888888</div>
              <div
                class="moren"
                v-show="true"
              >默认地址</div>
            </div>
            <div class="list-leftTwo">地址：湖北省武汉市武昌区717</div>
          </div>
          <button class="del floatRight">删除</button>
          <button class="floatRight">修改</button>
          <button
            class="set-default floatRight"
            v-show="false"
          >设为默认</button>
        </div>
        <div class="list clearDiv">
          <div class="list-left floatLeft">
            <div class="list-leftOne clearDiv">
              <div>王大锤</div>
              <div>13888888888</div>
              <div
                class="moren"
                v-show="false"
              >默认地址</div>
            </div>
            <div class="list-leftTwo">地址：湖北省武汉市武昌区717</div>
          </div>
          <button class="del floatRight">删除</button>
          <button class="floatRight">修改</button>
          <button
            class="set-default floatRight"
            v-show="true"
          >设为默认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.main {
  .take-address {
    .change-title {
      font-size: 16px;
      color: #333333;
      padding-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: rgba(45, 122, 228, 1);
        border: 1px solid rgba(45, 122, 228, 1);
        border-radius: 4px;
        margin-right: 36px;
      }
    }
    .change-content {
      .list {
        height: 104px;
        padding: 25px 0;
        border-bottom: 1px solid #eeeeee;
        .list-left {
          font-size: 14px;
          color: #333333;
          .list-leftOne {
            margin-bottom: 21px;
            div {
              float: left;
              margin-right: 10px;
              height: 22px;
              line-height: 22px;
            }
            .moren {
              font-size: 12px;
              color: #e3574c;
              width: 65px;
              height: 22px;
              line-height: 22px;
              border-radius: 11px;
              border: solid 1px #e3574c;
              text-align: center;
            }
          }
        }
        button {
          width: 83px;
          height: 32px;
          background-color: #2d7ae4;
          color: #ffffff;
          font-size: 14px;
          margin-top: 11px;
        }
        .del {
          background-color: #c0c0c0;
          margin-right: 36px;
          margin-left: 8px;
        }
        .set-default {
          width: 64px;
          height: 24px;
          border: solid 1px #e3574c;
          background-color: #ffffff;
          margin-right: 17px;
          margin-top: 15px;
          font-size: 12px;
          color: #e3574c;
        }
      }
    }
  }
}
</style>