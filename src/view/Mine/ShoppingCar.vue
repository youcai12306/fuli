<template>
  <div class="main">
    <div class="shopping-car">
      <p class="change-title">购物车</p>
      <p class="tip">温馨提示：商品金额以实际下单金额为准</p>
      <div class="change-content">
        <table>
          <tr class="title">
            <td></td>
            <td>商品信息</td>
            <td>单价</td>
            <td>数量</td>
            <td>金额</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item,key) in good_list" :key="key" class="list">
            <td class="checkbox-choose">
              <input type="checkbox" v-model="item.is_selected" @click="select_one(key)">
            </td>
            <td class="shop-info">
              <div class="info clearDiv">
                <img src="../../assets/img/mine-shop1.png" alt class="info-left floatLeft">

                <div class="info-right floatLeft">
                  <p class="shop-name">富力公仔玩偶</p>
                  <p class="shop-type">自提</p>
                </div>
              </div>
            </td>
            <td class="price">¥{{item.price}}</td>
            <td class="num">
              <el-input-number v-model="item.num" :min="1" @change="handleChange()"></el-input-number>
            </td>
            <td class="totle">¥{{item.price*item.num}}</td>
            <td class="del">
              <button @click="delShopping(item,key)" class="del-btn">删除</button>
            </td>
          </tr>
          <tr class="count">
            <td colspan="6" class="count-all clearDiv">
              <div class="all-choose">
                <input type="checkbox" @click="slect_all()" v-model="selected_all">全选
              </div>
              <div class="choosed">已选商品
                <span>{{totalNum}}</span>件
              </div>
              <div class="totles">合计：
                <span>{{totalPrice}}.00</span>元
              </div>
              <button></button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good_list: [],
      selected_all: false,
      totalPrice: 0,
      totalNum: 0
    };
  },
  watch: {
    // 侦听商品选中数据的变化
    good_list: {
      handler: function(val, oldVal) {
        // console.log('val', val)
        return val;
      },
      deep: true
    }
  },
  created() {
    let tableDate2 = [
      {
        id: "1",
        name: "富力公仔玩偶",
        type: 0,
        price: 155,
        num: 1,
        is_selected: false
      },
      {
        id: "2",
        name: "富力公仔玩偶",
        type: 1,
        price: 1995,
        num: 1,
        is_selected: false
      }
    ];
    this.good_list = tableDate2;
  },
  methods: {
    //删除表格数据
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    //删除购物车商品
    delShopping(item, key) {
      this.good_list.splice(key, 1);
      this.getTotal();
    },
    // 计算选中商品金额
    getTotal() {
      this.totalPrice = 0;
      this.totalNum = 0;
      for (let i = 0; i < this.good_list.length; i++) {
        let _d = this.good_list[i];
        if (_d.is_selected) {
          this.totalPrice += _d["price"] * _d["num"];
          this.totalNum += _d["num"];
        }
      }
    },
    // 删除选中商品
    // delete_selected() {
    //   let arr = [];
    //   for (let i = 0; i < this.good_list.length; i++) {
    //     let _d = this.good_list[i];
    //     if (!_d.is_selected) {
    //       arr.push(this.good_list[i]);
    //     }
    //   }
    //   console.log(arr);
    //   this.good_list = arr;
    //   this.totalPrice = 0;
    // },
    // 选中其中一件商品
    select_one(index) {
      if (this.good_list[index].is_selected === true) {
        this.good_list[index].is_selected = false;
      } else {
        this.good_list[index].is_selected = true;
      }
      this.getTotal();
    },
    //选中全部
    slect_all() {
      if (this.selected_all) {
        for (let i = 0; i < this.good_list.length; i++) {
          this.good_list[i].is_selected = false;
        }
        this.selected_all = false;
      } else {
        for (let i = 0; i < this.good_list.length; i++) {
          this.good_list[i].is_selected = true;
        }
        this.selected_all = true;
      }
      this.getTotal();
    },
    //计数器方法
    handleChange() {
      this.getTotal();
    }
  }
};
</script>
<style lang='scss' scoped>
.main {
  .shopping-car {
    .change-title {
      font-size: 16px;
      color: #333333;
      padding-top: 48px;
      padding-bottom: 16px;
      border-bottom: 2px solid #eeeeee;
      font-weight: bold;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        color: #c0c0c0;
        border: 1px solid #c0c0c0;
        border-radius: 4px;
        margin-left: 16px;
      }
    }
    .tip {
      font-size: 12px;
      font-weight: 400;
      color: rgba(237, 90, 78, 1);
      padding:  36px 0 17px 0;
    }
    .change-content {
      table {
        border-collapse: collapse;
        text-align: center;
        border: solid 1px #e1e1e1;
        .title {
          height: 48px;
          background-color: #cde2ff;
          font-size: 14px;
          color: #333333;
        }
        .list {
          height: 160px;
          border-bottom: 1px solid #e1e1e1;
          .checkbox-choose {
            width: 30px;
          }
          .shop-info {
            width: 300px;

            .info {
              width: 90%;
              margin: 0 auto;
              .info-left {
                width: 130px;
                height: 131px;
              }

              .info-right {
                padding-top: 28px;
                padding-left: 15px;
                p {
                  text-align: left;
                }
                .shop-name {
                  font-size: 14px;
                  color: #333333;
                }
                .shop-type {
                  font-size: 12px;
                  color: #e3574c;
                  margin-top: 22px;
                }
              }
            }
          }
          .price {
            width: 127px;
          }
          .num {
            width: 150px;
          }
          .totle {
            width: 127px;
            font-size: 16px;
            color: #ec4b3e;
            font-weight: bold;
          }
          .del {
            width: 127px;
            .del-btn {
              width: 57px;
              height: 30px;
              background-color: #e1e1e1;
              font-size: 14px;
              color: #333333;
            }
          }
        }
        .count {
          height: 78px;
          line-height: 78px;
          font-size: 14px;
          color: #333333;
          .count-all {
            div {
              float: left;
            }
            .all-choose {
              input {
                width: 30px;
              }
            }
            .choosed {
              margin-left: 415px;
              margin-right: 45px;
              span {
                color: #ee5043;
                margin: 0 5px;
              }
            }
            button {
              margin-left: 33px;
              width: 91px;
              height: 30px;
              background: url(../../assets/img/mine-shoppingcar-pay1.png)
                no-repeat 0 0;
              background-size: 100% 100%;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>