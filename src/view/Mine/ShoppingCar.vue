<template>
  <div class="main">
    <div class="shopping-car">
      <p class="change-title">{{$t('Car.Text')}}</p>
      <p class="tip">{{$t('Car.Text1')}}</p>
      <div class="change-content">
        <table height="500px">
          <tr class="title">
            <td class="selectAll">{{$t('Car.Text2')}}</td>
            <td class="info">{{$t('Car.Text3')}}</td>
            <td class="title-num">{{$t('Car.Text4')}}</td>
            <td class="title-do">{{$t('Car.Text5')}}</td>
          </tr>
          <tbody>
            <tr v-for="(item,key) in good_list" :key="key" class="list">
              <td class="checkbox-choose">
                <input
                  type="checkbox"
                  v-model="item.is_selected"
                  @click="select_one(key)"
                  :disabled="!item.enableStock"
                >
              </td>
              <td class="shop-info">
                <div class="name">{{item.product.productName}}</div>
                <div class="tui">{{canDebook(item.product.returnSign)}}</div>
                <div class="timeslot">
                  {{$t('Car.Text6')}}：
                  <span>
                    {{item.dataBaseDate}}
                    <font v-if="!item.enableStock" color="red">&nbsp;(该商品已过期)</font>
                  </span>
                </div>
              </td>
              <td class="num">
                {{item.productCount}}
                <!-- <span class="tip">注：一个手机号最多可购买5张票</span> -->
              </td>
              <td class="del">
                <button @click="delShopping(item,key)" class="del-btn"></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="count" v-show="!flag">
              <td colspan="6" class="count-all clearDiv">
                <div class="all-choose">
                  <input type="checkbox" @click="slect_all()" v-model="selected_all">
                  {{$t('Car.Text2')}}
                </div>
                <div class="delAll" @click="delAll">{{$t('Car.Text7')}}</div>
                <div class="choosed">
                  {{$t('Car.Text8')}}
                  <span>{{totalNum}}</span>
                  {{$t('Car.Text9')}}
                </div>
                <!-- <div class="totles">
                合计：
                <span>{{totalPrice}}.00</span>元
                </div>-->
                <button @click="jumpShoppingCarOrder" :disabled="dis"></button>
              </td>
            </tr>
            <tr class="empty" v-show="flag">
              <td colspan="6">{{$t('Car.Text10')}}</td>
            </tr>
          </tfoot>
        </table>
        <!-- {{flag}} -->
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
      totalNum: 0,
      // totalNum1: 0,
      flag: true,
      id1: "",
      id2: "",
      arr: [],
      arr1: [],
      dis: true,
      pageNum: 1,
      pageSize: 50
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
  mounted() {
    this.searchShoppingCar(this.pageNum);
  },
  methods: {
    //查询购物车
    searchShoppingCar(val) {
      this.$fetch(`${this.$url2}/api-bkf-user/user-aggregate/selectShopCarts`, {
        touristId: this.$store.getters.getUserData.userId,
        pageNum: val,
        pageSize: this.pageSize
        // typeId:this.$route.query.typeId
      }).then(res => {
        this.id1 = res.data.list[0].createDateId;
        this.id2 = res.data.list[0].productId;
        // this.stockId = res.data.list[0].createDateId;
        // this.saleType = res.data.list[0].product.saleType;
        // this.typeId = res.data.list[0].product.typeId;
        if (res.code == 200) {
          this.good_list = res.data.list;
          if (this.good_list.length === 0) {
            this.flag = true;
          } else {
            this.flag = false;
          }
          this.good_list.forEach(val => {
            val.is_selected = false;
          });
          console.log(this.good_list);
        }
      });
    },
    //是否可退订
    canDebook(type) {
      return type === 1 ? (this.sign = "可退订") : (this.sign = "不可退订");
    },
    //删除表格数据
    // deleteRow(index, rows) {
    //   rows.splice(index, 1);
    // },
    //删除购物车商品
    delShopping(item, key) {
      this.$fetch(`${this.$url2}/api-bkf-user/user-aggregate/deleteshopCart`, {
        id: item.id
      }).then(res => {
        if (res.code === 200) {
          this.good_list.splice(key, 1);
          // this.flag = true;
          if (this.good_list.length == 0) {
            this.flag = true;
          }
        }
      });
      this.getTotal();
    },
    // 计算选中商品金额
    getTotal() {
      this.totalNum = 0;
      this.arr.splice(0, this.arr.length);
      console.log(this.good_list);
      this.good_list.forEach((v, i) => {
        if (v.is_selected) {
          this.dis = false;
          this.arr.push({
            id: v.id,
            productId: v.productId,
            num: v.productCount,
            stockId: v.createDateId,
            saleType: v.product.saleType ? 2 : 0,
            typeId: v.product.typeId
          });
          this.totalNum += v.productCount;
        }
      });
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
      // for(let val of this.good_list){
      //   if(val.)
      // }
      if (this.good_list[index].is_selected === true) {
        this.good_list[index].is_selected = false;
      } else {
        this.good_list[index].is_selected = true;
      }
      if (this.good_list.some(v => v.is_selected === false)) {
        this.selected_all = false;
        // this.dis = false
      } else {
        this.selected_all = true;
      }
      this.getTotal();
    },
    //选中全部
    slect_all() {
      if (this.selected_all) {
        for (let i = 0; i < this.good_list.length; i++) {
          if (this.good_list[i].enableStock) {
            this.good_list[i].is_selected = false;
          }
          // this.good_list[i].is_selected.length == this.totalNum1
          // console.log(this.good_list[i].is_selected.length);
        }
        this.selected_all = false;
      } else {
        for (let i = 0; i < this.good_list.length; i++) {
          if (this.good_list[i].enableStock) {
            this.good_list[i].is_selected = true;
          }
        }
        this.selected_all = true;
      }
      this.getTotal();
    },
    //清空购物车
    delAll() {
      // this.good_list = {};
      this.good_list.forEach((v, i) => {
        this.arr[i] = {};
        this.arr[i]["id"] = v.id;
        this.arr1.push(this.arr[i]["id"]);
      });
      let ids = this.arr1.join(",");

      this.$fetch(
        `${this.$url2}/api-bkf-user/user-aggregate/bathDeleteShopCarts?ids=` + ids
      ).then(res => {
        if (res.code === 200) {
          this.good_list = {};
          this.flag = true;
        }
      });
    },
    jumpShoppingCarOrder() {
      // this.$router.push("/suborder");
      let list1 = [];
      this.good_list.forEach((v, k) => {
        if (v.is_selected) {
          list1.push(v);
          // this.delShopping(v,k)
        }
      });
      if (list1.length > 0) {
        this.$router.push({
          path: "/suborder",
          query: {
            list1: JSON.stringify(list1),
            a: 1,
            // id1: this.id1,
            // id2: this.id2,
            totalNum: this.totalNum,
            // stockId: this.stockId,
            arr: JSON.stringify(this.arr)
            // saleType: this.saleType,
            // typeId: this.typeId
          }
        });
      }
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
      padding: 36px 0 17px 0;
    }
    .change-content {
      // height: 200px !important;
      table {
        position: relative;
        border-collapse: collapse;
        text-align: center;
        display: block;
        height: 1000px;
        overflow: auto;
        // border: solid 1px #e1e1e1;
        tbody {
          .list {
            height: 250px;
            border-bottom: 1px solid #e1e1e1;
            .checkbox-choose {
              width: 70px;
            }
            .shop-info {
              width: 300px;
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
              width: 200px;
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
              width: 150px;

              .del-btn {
                cursor: pointer;
                width: 31px;
                height: 32px;
                background: url(../../assets/img/shopping-car-del.png) no-repeat;
              }
            }
          }
        }
        .title {
          height: 48px;
          background-color: #cde2ff;
          font-size: 14px;
          color: #333333;
          .selectAll {
            width: 70px;
          }
          .info {
            width: 400px;
          }
          .title-num {
            width: 250px;
          }
          .title-do {
            width: 200px;
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
              cursor: pointer;
            }
            .choosed {
              margin-left: 500px;
              //   margin-right: 45px;
              color: rgba(238, 50, 35, 1);
              span {
                margin: 0 5px;
              }
            }
            button {
              float: left;
              margin-left: 20px;
              width: 91px;
              height: 30px;
              background: url(../../assets/img/mine-shoppingcar-pay1.png)
                no-repeat 0 0;
              background-size: 100% 100%;
              vertical-align: middle;
              margin-top: 25px;
              cursor: pointer;
            }
          }
        }
        .empty {
          height: 60px;
          line-height: 60px;
          width: 870px;
          td {
            color: #909399;
            text-align: center;
            border: 1px solid #ebeef5;
            border-top: 0;
            font-size: 14px;
          }
        }
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