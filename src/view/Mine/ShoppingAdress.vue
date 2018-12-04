<template>
  <div class="main">
    <div class="take-address clearDiv">
      <div class="change-title">
        收货地址
        <span class="floatRight add">+</span>
        <div class="floatRight refresh clearDiv">
          <span class="floatLeft">刷新</span>
          <img class="floatLeft" src="../../assets/img/mine-refresh.png" alt>
        </div>
      </div>
      <!-- <div class="change-content">
        <div class="list clearDiv" v-for="(item,key) in list" :key="key">
          <div class="list-left floatLeft">
            <div class="list-leftOne clearDiv">
              <div>{{item.name}}</div>
              <div>{{item.phone}}</div>
              <div class="moren" v-show="item.type === 0">默认地址</div>
            </div>
            <div class="list-leftTwo">地址：湖北省武汉市武昌区717</div>
          </div>
          <button class="del floatRight" @click="del(key)">删除</button>
          <button class="floatRight">修改</button>
          <button
            class="set-default floatRight"
            v-show="item.type !== 0"
            @click="setDefault(key)"
          >设为默认</button>
        </div>
      </div>-->
      <div class="change-content">
        <el-table
          :data="list"
          border
          style="width: 100%"
          :header-cell-style="{background:'#CDE2FF'}"
          class="table-address"
        >
          <el-table-column prop="name" label="收货人" width="96" align="center"></el-table-column>
          <el-table-column prop="name" label="所在地区" width="123" align="center"></el-table-column>
          <el-table-column prop="name" label="详细地址" width="136" align="center"></el-table-column>
          <el-table-column prop="name" label="邮编" width="99" align="center"></el-table-column>
          <el-table-column prop="name" label="电话" width="136" align="center"></el-table-column>
          <el-table-column label="操作" width="167" align="center">
            <template slot-scope="scope">
              <span class="change-address">修改</span>
              <span @click.prevent="deleteRow(scope.$index, list)" class="del-address">删除</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="默认地址" align="center" fixed="right">
            <template slot-scope="scope">
              <span v-show="scope.row.type === 0" class="default-address">默认地址</span>
              <span
                @click.prevent="setDefault(scope.$index, list)"
                v-show="scope.row.type === 1"
                class="set-default"
              >设为默认</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    let list = [
      {
        name: "油菜",
        phone: "13811111111",
        type: 0
      },
      {
        name: "youcai",
        phone: "13811111112",
        type: 1
      },
      {
        name: "youcai2",
        phone: "13811111113",
        type: 1
      }
    ];
    this.list = list;
  },
  methods: {
    //设为默认
    setDefault(index, rows) {
      this.list.forEach((val, k) => {
        val.type = 1;
        if (index === k) {
          val.type = 0;
        }
      });
    },
    //删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
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
      .add {
        display: inline-block;
        width: 16px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        color: rgba(45, 122, 228, 1);
        border: 1px solid rgba(45, 122, 228, 1);
        border-radius: 4px;
        margin-right: 36px;
      }
      .refresh {
        height: 18px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(45, 122, 228, 1);
        margin-right: 24px;
        span {
          font-size: 14px;
          height: 18px;
          line-height: 18px;
        }
        img {
          width: 20px;
          height: 18px;
        }
      }
    }
    .change-content {
      margin-top: 21px;
      .table-address {
        .change-address{
          height: 26px;
          line-height: 26px;
          width: 60px;
          display: inline-block;
          background-color: #2D7AE4;
          color: #ffffff;
        }
        .del-address{
          height: 26px;
          line-height: 26px;
          width: 60px;
          display: inline-block;
          background-color: #C0C0C0;
          color: #ffffff;
        }
        .default-address {
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          background-color: #8cbbff;
          color: #ffffff;
          border: 1px dotted #9b9b9b;
        }
        .set-default{
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          border: 1px dotted #9b9b9b;
        }
      }
    }
  }
}
</style>
<style>
</style>
