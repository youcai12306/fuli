<template>
  <div class="main">
    <div class="take-address clearDiv">
      <div class="change-title">
        {{$t('Adress.Text')}}
        <div class="add-dizhi floatRight" @click="showMeng">
          {{$t('Adress.Text1')}}
          <span class="floatRight add">+</span>
        </div>
      </div>
      <div class="change-content">
        <el-table
          :data="list"
          border
          style="width: 100%"
          :header-cell-style="{background:'#CDE2FF'}"
          class="table-address"
        >
          <el-table-column
            prop="receivePersonName"
            :label="$t('Adress.Text2')"
            width="96"
            align="center"
          ></el-table-column>
          <el-table-column :label="$t('Adress.Text3')" width="123" align="center">
            <template
              slot-scope="scope"
            >{{scope.row.receiveProvince}}{{scope.row.receiveCity}}{{scope.row.receiveArea}}</template>
          </el-table-column>
          <el-table-column
            prop="receiveAddress"
            :label="$t('Adress.Text4')"
            width="136"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="receieveCode"
            :label="$t('Adress.Text5')"
            width="99"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="receivePersonMobile"
            :label="$t('Adress.Text6')"
            width="136"
            align="center"
          ></el-table-column>
          <el-table-column :label="$t('Adress.Text7')" width="167" align="center">
            <template slot-scope="scope">
              <span
                class="change-address"
                @click="changeAddress(scope.$index,list)"
              >{{$t('Adress.Text8')}}</span>
              <span
                @click.prevent="deleteRow(scope.$index,list,scope.row.id)"
                class="del-address"
              >{{$t('Adress.Text9')}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" :label="$t('Adress.Text10')" align="center" fixed="right">
            <template slot-scope="scope">
              <span
                v-show="scope.row.defaultSign === true"
                class="default-address"
              >{{$t('Adress.Text10')}}</span>
              <span
                @click.prevent="setDefault(scope.$index,scope.row.id)"
                v-show="scope.row.defaultSign === false"
                class="set-default"
              >{{$t('Adress.Text11')}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="meng" v-show="mengShow">
      <div class="box">
        <p class="clearDiv">
          <label for="name">{{$t('Adress.Text12')}}：</label>
          <input type="text" v-model="name" id="name">
          <span class="tip">{{nameTip}}</span>
        </p>
        <p class="clearDiv">
          <label for="mobile">{{$t('Adress.Text13')}}：</label>
          <input type="text" v-model="mobile" id="mobile" @blur="checkPhone">
          <span class="tip">{{phoneTip}}</span>
        </p>
        <p class="clearDiv">
          <label for="code">{{$t('Adress.Text14')}}：</label>
          <input type="text" v-model="code" id="code" @blur="checkCode">
          <span class="tip">{{codeTip}}</span>
        </p>
        <p class="clearDiv address">
          <label for="address">{{$t('Adress.Text15')}}：</label>
          <v-distpicker
            :placeholders="{province: '省', city: '市', area: '区'}"
            @selected="selected"
            class="floatLeft"
            id="address"
            :province="select.province"
            :city="select.city"
            :area="select.area"
          ></v-distpicker>
          <span class="tip">{{adressTip}}</span>
        </p>
        <p class="clearDiv detailAdress-box">
          <label for="detailAdress">{{$t('Adress.Text16')}}：</label>
          <textarea type="text" class="detailAdress" v-model="detailAdress" id="detailAdress"></textarea>
          <span class="tip">{{detailAdressTip}}</span>
        </p>
        <p class="clearDiv default" v-show="isChange">
          <input type="checkbox" class="setDefault" v-model="type">
          <span>{{$t('Adress.Text17')}}</span>
        </p>
        <div class="btn">
          <button @click="addAddress(0)" v-show="isChange">{{$t('Adress.Text18')}}</button>
          <button @click="addAddress(1)" v-show="!isChange">{{$t('Adress.Text18')}}</button>
          <button class="close" @click="close()">{{$t('Adress.Text19')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      list: [],
      name: "",
      mobile: "",
      code: "",
      detailAdress: "",
      type: false,
      select: {
        province: "海南省",
        city: "三亚市",
        area: "天涯区"
      },
      mengShow: false,
      isChange: false,
      nameTip: "",
      phoneTip: "",
      codeTip: "",
      adressTip: "",
      detailAdressTip: ""
    };
  },
  components: {
    VDistpicker
  },
  mounted() {
    this.init();
  },
  computed: {
    checkType() {
      if (this.type === false) {
        this.type = 0;
      } else {
        this.type = 1;
      }
      return this.type;
    }
  },
  methods: {
    //初始化数据
    init() {
      let Uid = this.$store.getters.getUserData.userId;
      this.$fetch(
        `${this.$url}:2060/user-aggregate/address/selectReceiveAddress`,
        { touristId: Uid }
      ).then(res => {
        this.list = res.data;
      });
    },
    //处理地址
    setAddress(province, city, area) {
      return province + city + area;
    },
    //删除收货地址
    deleteRow(index, rows, id) {
      this.$confirm("是否删除改地址?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$fetch(
            `${this.$url}:2060/user-aggregate/address/deleteReceiveAddress`,
            { id: id }
          ).then(res => {
            if (res.code === 200) {
              rows.splice(index, 1);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //显示
    showMeng() {
      this.isChange = true;
      if (this.list === null) {
        this.mengShow = !this.mengShow;
      } else if (this.list.length >= 3) {
        this.$alert("最多只能添加三个收货地址哦", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.name = "";
        this.mobile = "";
        this.phoneTip = "";
        this.code = "";
        this.codeTip = "";
        this.select.province = "";
        this.select.city = "";
        this.select.area = "";
        this.adressTip = "";
        this.detailAdress = "";
        this.detailAdressTip = "";
        this.type = false;
        this.mengShow = !this.mengShow;
      }
    },
    //关闭蒙版
    close() {
      this.name = "";
      this.mobile = "";
      this.phoneTip = "";
      this.code = "";
      this.codeTip = "";
      this.select.province = "";
      this.select.city = "";
      this.select.area = "";
      this.adressTip = "";
      this.detailAdress = "";
      this.detailAdressTip = "";
      this.mengShow = false;
    },
    //获取地址栏的值
    selected(val) {
      // console.log(val.province.value)
      this.select.province = val.province.value;
      this.select.city = val.city.value;
      this.select.area = val.area.value;
      this.adressTip = "";
    },
    //判断手机号码
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.mobile)) {
        this.phoneTip = "请输入正确的手机号码";
        this.isOk = false;
        return false;
      } else {
        this.phoneTip = "";
        this.isOk = true;
      }
    },
    //判断邮编
    checkCode() {
      if (!/^\d{6}$/.test(this.code)) {
        this.codeTip = "请输入正确的邮政编码";
        this.isOk1 = false;
      } else {
        this.codeTip = "";
        this.isOk1 = true;
      }
    },
    //新增收货地址
    addAddress(key) {
      if (this.name == "") {
        this.$message.error("姓名不能为空");
        return;
      }
      if (this.mobile == "") {
        this.$message.error("手机号不能为空");
        return;
      }
      if (this.code == "") {
        this.$message.error("邮编不能为空");
        return;
      }
      if (
        this.select.province == "" ||
        this.select.city == "" ||
        this.select.area == ""
      ) {
        this.$message.error("请选择地址");
        return;
      } else {
        this.adressTip = "";
      }
      if (this.detailAdress == "") {
        this.$message.error("请填写详细地址");
        return;
      }
      if (key === 0) {
        let Uid = this.$store.getters.getUserData.userId;
        let data = {
          touristId: Uid,
          receivePersonName: this.name,
          receivePersonMobile: this.mobile,
          receiveAddress: this.detailAdress,
          receieveCode: this.code,
          receiveProvince: this.select.province,
          receiveCity: this.select.city,
          receiveArea: this.select.area,
          defaultSign: this.checkType
        };
        this.$post(
          `${this.$url}:2060/user-aggregate/address/addReceiveAddress`,
          data,
          { headers: { "Content-Type": "application/json;charset=UTF-8" } }
        ).then(res => {
          if (res.code === 200) {
            this.mengShow = !this.mengShow;
            this.$message({
              type: "success",
              message: "新增成功"
            });
            this.init();
          }
        });
      } else {
        let data = {
          id: this.id,
          receivePersonName: this.name,
          receivePersonMobile: this.mobile,
          receiveAddress: this.detailAdress,
          receieveCode: this.code,
          receiveProvince: this.select.province,
          receiveCity: this.select.city,
          receiveArea: this.select.area
        };
        this.$post(
          `${this.$url}:2060/user-aggregate/address/updateReceiveAddress`,
          data,
          { headers: { "Content-Type": "application/json;charset=UTF-8" } }
        ).then(res => {
          if (res.code === 200) {
            this.mengShow = !this.mengShow;
            this.$message({
              type: "success",
              message: "修改成功"
            });
            this.init();
          } else {
            this.$message({
              type: "error",
              message: res.message
            });
          }
        });
      }
    },
    //设为默认地址
    setDefault(index, id) {
      let Uid = this.$store.getters.getUserData.userId;
      this.$fetch(
        `${this.$url}:2060/user-aggregate/address/setDefaultReceiveAddress`,
        {
          touristId: Uid,
          id: id
        }
      ).then(res => {
        if (res.code === 200) {
          this.list.forEach((val, k) => {
            val.defaultSign = false;
            if (index === k) {
              val.defaultSign = true;
            }
          });
        }
      });
    },
    //修改地址
    changeAddress(index, rows) {
      this.isChange = false;
      this.mengShow = !this.mengShow;
      this.name = rows[index].receivePersonName;
      this.mobile = rows[index].receivePersonMobile;
      this.code = rows[index].receieveCode;
      this.select.province = rows[index].receiveProvince;
      this.select.city = rows[index].receiveCity;
      this.select.area = rows[index].receiveArea;
      this.detailAdress = rows[index].receiveAddress;
      this.id = rows[index].id;
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
      .add-dizhi {
        font-size: 14px;
        cursor: pointer;
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
          margin-left: 10px;
        }
      }
    }
    .change-content {
      margin-top: 21px;
      .table-address {
        .change-address {
          height: 26px;
          line-height: 26px;
          width: 60px;
          display: inline-block;
          background-color: #2d7ae4;
          color: #ffffff;
          cursor: pointer;
        }
        .del-address {
          height: 26px;
          line-height: 26px;
          width: 60px;
          display: inline-block;
          background-color: #c0c0c0;
          color: #ffffff;
          cursor: pointer;
        }
        .default-address {
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          background-color: #8cbbff;
          color: #ffffff;
          border: 1px dotted #9b9b9b;
          cursor: pointer;
        }
        .set-default {
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          border: 1px dotted #9b9b9b;
          cursor: pointer;
        }
      }
    }
  }
  .meng {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(58, 41, 41, 0.5);
    .box {
      width: 491px;
      height: 525px;
      background: rgba(255, 255, 255, 1);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -245px;
      margin-top: -260px;
      padding: 0 20px;
      p {
        font-size: 14px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        height: 34px;
        line-height: 34px;
        margin-top: 20px;
        position: relative;
        * {
          float: left;
        }
        label {
          width: 20%;
        }
        input {
          width: 80%;
          height: 34px;
          border: 1px solid rgba(191, 191, 191, 1);
          text-indent: 10px;
        }
        span {
          display: inline-block;
          margin-left: 10px;
        }
        .setDefault {
          width: 18px;
          height: 18px;
          background: rgba(220, 220, 220, 1);
          border: 1px solid rgba(191, 191, 191, 1);
          border-radius: 50%;
        }
        .tip {
          position: absolute;
          left: 90px;
          top: 25px;
          font-size: 12px;
          color: red;
        }
      }
      .detailAdress-box {
        height: 129px;
        .detailAdress {
          border: 1px solid rgba(191, 191, 191, 1);
          text-indent: 10px;
          width: 80%;
          height: 129px;
          //padding-bottom: 100px;
        }
        .tip {
          top: 122px;
        }
      }
      .default {
        height: 18px;
        line-height: 18px;
      }
      .btn {
        margin-top: 40px;
        button {
          cursor: pointer;
          width: 114px;
          height: 44px;
          background: rgba(7, 100, 233, 1);
          cursor: pointer;
        }
        .close {
          margin-left: 20px;
          border: 1px solid rgba(7, 100, 233, 1);
          background-color: #ffffff;
        }
      }
    }
  }
}
</style>
<style scoped>
.address >>> select {
  float: left;
  width: 110px;
  height: 34px;
  border: solid 1px #c5c5c5;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 0;
  padding: 0.3rem 0.75rem;
}
</style>
