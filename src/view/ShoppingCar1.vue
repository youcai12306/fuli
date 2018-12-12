<template>
  <div class="main">
    <div class="shopping-car">
      <div class="nav">
        <div>当前位置：网上订购>详情页>购物车</div>
      </div>
      <div class="change-content">
        <table>
          <tr class="title">
            <td>全选</td>
            <td>商品信息</td>
            <td>数量</td>
            <td>操作</td>
          </tr>
          <tr v-for="(item,key) in good_list" :key="key" class="list">
            <td class="checkbox-choose">
              <input type="checkbox" v-model="item.is_selected" @click="select_one(key)">
            </td>
            <td class="shop-info">
              <div class="name">{{item.name}}</div>
              <div class="tui">{{item.tui}}</div>
              <div class="timeslot">
                游玩时间
                <span>{{item.timeslot}}</span>
              </div>
            </td>
            <td class="num">
              {{item.num}}
              <span class="tip">注：一个手机号最多可购买5张票</span>
            </td>
            <td class="del">
              <button @click="delShopping(item,key)" class="del-btn"></button>
            </td>
          </tr>
          <tr class="count">
            <td colspan="6" class="count-all clearDiv">
              <div class="all-choose">
                <input type="checkbox" @click="slect_all()" v-model="selected_all">全选
              </div>
              <div class="delAll" @click="delAll">清空购物车</div>
              <div class="choosed">
                已选商品
                <span>{{totalNum}}</span>件
              </div>
              <!-- <div class="totles">
                合计：
                <span>{{totalPrice}}.00</span>元
              </div>-->
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
        tui: "可推定",
        timeslot: "2017-11-11 12:00:00",
        is_selected: false
      },
      {
        id: "2",
        name: "富力公仔玩偶",
        type: 1,
        price: 1995,
        num: 1,
        tui: "不可推定",
        timeslot: "2017-11-11 12:00:00",
        is_selected: false
      }
    ];
    this.good_list = tableDate2;
  },
  methods: {
    //删除表格数据
    // deleteRow(index, rows) {
    //   rows.splice(index, 1);
    // },
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
    //清空购物车
    delAll() {
      this.good_list = {}
      this.getTotal();
    }
    //计数器方法
    // handleChange() {
    //   this.getTotal();
    // }
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: url(../assets/img/mine-bg.png) no-repeat;
  background-size: 100% 100%;
  .shopping-car {
    width: 1200px;
    background: #ffffff;
    margin: 0 auto;
    padding: 36px 37px 30px 42px;
    .nav {
      height: 23px;
      line-height: 23px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      padding-bottom: 54px;
    }
    .change-content {
      table {
        border-collapse: collapse;
        text-align: center;
        // border: solid 1px #e1e1e1;
        .title {
          height: 48px;
          background-color: #cde2ff;
          font-size: 14px;
          color: #333333;
        }
        .list {
          height: 250px;
          border-bottom: 1px solid #e1e1e1;
          .checkbox-choose {
            width: 70px;
          }
          .shop-info {
            width: 400px;
            font-weight: 400;
            text-align: left;
            padding-left: 40px;
            .name {
              font-size: 16px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
            .tui {
              font-size: 12px;
              color: rgba(242, 115, 115, 1);
              //   height: 23px;
              min-width: 72px;
              width: 72px;
              border: 1px solid rgba(242, 115, 115, 1);
              border-radius: 5px;
              padding: 5px 10px;
              margin: 15px 0;
              text-align: center;
            }
            .timeslot {
              font-size: 14px;
              color: rgba(51, 51, 51, 0.5);
              span {
                color: rgba(51, 51, 51, 1);
              }
            }
          }
          .num {
            width: 400px;
            position: relative;
            .tip {
              position: absolute;
              font-size: 12px;
              font-weight: 400;
              color: rgba(227, 87, 76, 1);
              left: 100px;
              bottom: 40px;
            }
          }
          .del {
            width: 250px;
            .del-btn {
              width: 31px;
              height: 32px;
              background: url(../assets/img/shopping-car-del.png) no-repeat;
            }
          }
        }
        .count {
          height: 83px;
          background: rgba(242, 245, 250, 1);
          line-height: 83px;
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
            .delAll {
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              margin-left: 50px;
            }
            .choosed {
              margin-left: 650px;
              //   margin-right: 45px;
              color: rgba(238, 50, 35, 1);
              span {
                margin: 0 5px;
              }
            }
            button {
              float: left;
              margin-left: 33px;
              width: 91px;
              height: 30px;
              background: url(../assets/img/mine-shoppingcar-pay1.png) no-repeat
                0 0;
              background-size: 100% 100%;
              vertical-align: middle;
              margin-top: 25px;
            }
          }
        }
      }
    }
  }
}
</style>