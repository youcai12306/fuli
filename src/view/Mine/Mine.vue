<template>
  <div class="main">
    <div class="nav">
      <ul class="nav-content clearDiv">
        <li class="floatLeft">您好，欢迎登录富力海洋欢乐世界度假区！<a href="#"> [返回首页]</a></li>
        <li class="floatRight"><span class="phone-img"></span>客服电话400-xxxx-xxx</li>
        <li class="floatRight phon-type">手机版</li>
      </ul>
    </div>
    <div class="nav2">
      <ul class="nav-logo clearDiv">
        <li class="floatLeft"><img src="../../assets/img/logo.png" alt=""></li>
        <li class="mine-center floatLeft">会员中心</li>
        <li class="mine-login floatRight"><span></span>退出登录</li>
      </ul>
    </div>
    <div class="mine-bg">
      <ul class="mine-info clearDiv">
        <li class="portrait floatLeft"><img src="../../assets/img/mine-icon.png" alt=""></li>
        <li class="info-people floatLeft">
          <p class="people-phone">13888888888，欢迎您！</p>
          <p>我的等级：2</p>
          <p>绑定手机：13888888888 <a href="#">变更绑定手机</a></p>
        </li>
        <li class="coupon floatLeft">
          <p class="num">2</p>
          <p class="words">优惠券</p>
        </li>
        <li class="integral floatLeft">
          <p class="num nums">666</p>
          <p class="words">积分</p>
        </li>
      </ul>
      <div class="mine-content clearDiv">
        <div class="content-left floatLeft">
          <!-- <dl>
            <dt>订单管理<span></span></dt>
            <dd>订单详情</dd>
          </dl>
          <dl>
            <dt>我的账户<span></span></dt>
            <dd>积分</dd>
            <dd>优惠券</dd>
          </dl>
          <dl>
            <dt>账户设置<span></span></dt>
            <dd>收货地址</dd>
            <dd>消息管理</dd>
            <dd>会员资料</dd>
            <dd>修改密码</dd>
          </dl> -->
					
				<el-menu
					router
					class="el-menu-vertical-demo"
					active-text-color = "#2D7AE4"
					@open="handleOpen"
					@close="handleClose" :default-openeds="openeds">
					<el-submenu index="1">
						<template slot="title">
							<span>订单管理</span>
						</template>
							<el-menu-item :index="`/myorder`" :class="{'is_active' : $route.path=='/myorder' || $route.path=='/orderdetails'}">我的订单</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<span>我的钱包</span>
						</template>
							<el-menu-item :index="`/myCoupon`" :class="{'is_active' : $route.path=='/myCoupon'}">我的卡券</el-menu-item>
							<el-menu-item :index="`/CouponCenter`" :class="{'is_active' : $route.path=='/CouponCenter'}">卡券中心</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<span>会员中心</span>
						</template>
							<el-menu-item :index="`/MyIntegral`" :class="{'is_active' : $route.path=='/MyIntegral'}">积分</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<span>账户中心</span>
						</template>
							<el-menu-item :index="`/ShoppingCar`" :class="{'is_active' : $route.path=='/ShoppingCar'}">购物车</el-menu-item>
							<el-menu-item :index="`/ShoppingAdress`" :class="{'is_active' : $route.path=='/ShoppingAdress'}">收货地址</el-menu-item>
							<el-menu-item :index="`/MyMessage`" :class="{'is_active' : $route.path=='/MyMessage'}">消息管理</el-menu-item>
							<el-menu-item :index="`/Membership`" :class="{'is_active' : $route.path=='/Membership'}">会员资料</el-menu-item>
							<el-menu-item :index="`/ChangePwd`" :class="{'is_active' : $route.path=='/ChangePwd'}">修改密码</el-menu-item>
					</el-submenu>
				</el-menu>
					
        </div>
        <div class="content-right floatRight">
					<router-view/>
          <!-- 订单详情 -->
          <!-- <div class="orderDetails" v-show="false">
            <ul class="clearDiv">
              <li>下单时间：</li>
              <li class="date">
                <el-date-picker v-model="beginTime" type="date" size="small" align="right" class="date-begin">
                </el-date-picker>
              </li>
              <li class="line">——</li>
              <li class="date">
                <el-date-picker v-model="endTime" type="date" size="small" align="right" class="date-begin">
                </el-date-picker>
              </li>
              <li>状态：</li>
              <li>
                <select name="" id="">
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </li>
              <li>类型：</li>
              <li>
                <select name="" id="">
                  <option value="">商品订单</option>
                  <option value=""></option>
                </select>
              </li>
              <li>
                <button>查询</button>
              </li>
            </ul>
            <div class="order-list">
              <el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#CDE2FF'}">
                <el-table-column prop="id" label="订单编号" width="150" align="center">
                </el-table-column>
                <el-table-column prop="name" label="收货人" width="140" align="center">
                </el-table-column>
                <el-table-column prop="money" label="金额" width="130" align="center">
                </el-table-column>
                <el-table-column prop="time" label="金额" width="150" align="center">
                </el-table-column>
                <el-table-column prop="type" label="金额" width="150" align="center">
                  <template slot-scope="scope">
                    <span v-if="scope.row.type === '待支付'" style="color:#EE3223">{{scope.row.type}}</span>
                    <span v-else style="color:#FFAA17">{{scope.row.type}}</span>
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                      移除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div> -->
          <!-- 积分模块 -->
          <!-- <div class="integration">
            <p class="change-title">我的积分：<span>666</span><img src="../assets/img/mine-duihuan.png" alt=""></p>
            <div class="change-content">
              <el-table :data="tableDate1" border style="width: 100%" :header-cell-style="{background:'#CDE2FF'}">
                <el-table-column prop="in" label="积分来源" width="200" align="center">
                </el-table-column>
                <el-table-column prop="change" label="积分变化" width="200" align="center">
                  <template slot-scope="scope">
                    <span v-if="scope.row.change>=0" style="color:#EE3223">+{{scope.row.change}}</span>
                    <span v-else style="color:#FFAA17">{{scope.row.change}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="time" label="日期" width="140" align="center">
                </el-table-column>
                <el-table-column prop="tip" label="备注" align="center" fixed="right">
                </el-table-column>
              </el-table>
            </div>
          </div> -->
          <!-- 优惠券 -->
          <!-- <div class="coupon">
            <p class="change-title">优惠券</p>
            <div class="change-content">
              <img src="../assets/pear.png" alt="">
              <img src="../assets/pear.png" alt="">
              <img src="../assets/pear.png" alt="">
              <img src="../assets/pear.png" alt="">
              <img src="../assets/pear.png" alt="">
              <img src="../assets/pear.png" alt="">
            </div>
          </div> -->
          <!-- 购物车 -->
          <!-- <div class="shopping-car">
            <p class="change-title">购物车<span>+</span></p>
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
                  <td class="checkbox-choose"><input type="checkbox" v-model="item.is_selected" @click="select_one(key)"></td>
                  <td class="shop-info">
                    <div class="info clearDiv">
                      <img src="../assets/pear.png" alt="" class="info-left floatLeft">

                      <div class="info-right floatLeft">
                        <p class="shop-name">富力公仔玩偶</p>
                        <p class="shop-type">自提</p>
                      </div>
                    </div>
                  </td>
                  <td class="price">{{item.price}}</td>
                  <td class="num">
                    <el-input-number v-model="item.num" :min="1" @change="handleChange()"></el-input-number>
                  </td>
                  <td class="totle">{{item.price*item.num}}</td>
                  <td class="del"><button @click="delShopping(item,key)" class="del-btn">删除</button></td>
                </tr>
                <tr class="count">
                  <td colspan="6" class="count-all clearDiv">
                    <div class="all-choose"><input type="checkbox" @click="slect_all()" v-model="selected_all">全选</div>
                    <div class="choosed">已选商品<span>{{totalNum}}</span>件</div>
                    <div class="totles">合计：<span>{{totalPrice}}.00</span>元</div>
                    <button></button>
                  </td>
                </tr>
              </table>
            </div>
          </div> -->
          <!-- 收货地址 -->
          <!-- <div class="take-address">
            <p class="change-title">收货地址<span>+</span></p>
            <div class="change-content">
              <div class="list clearDiv">
                <div class="list-left floatLeft">
                  <div class="list-leftOne clearDiv">
                    <div>王大锤</div>
                    <div>13888888888</div>
                    <div class="moren" v-show="true">默认地址</div>
                  </div>
                  <div class="list-leftTwo">地址：湖北省武汉市武昌区717</div>
                </div>
                <button class="del floatRight">删除</button>
                <button class="floatRight">修改</button>
                <button class="set-default floatRight" v-show="false">设为默认</button>
              </div>
              <div class="list clearDiv">
                <div class="list-left floatLeft">
                  <div class="list-leftOne clearDiv">
                    <div>王大锤</div>
                    <div>13888888888</div>
                    <div class="moren" v-show="false">默认地址</div>
                  </div>
                  <div class="list-leftTwo">地址：湖北省武汉市武昌区717</div>
                </div>
                <button class="del floatRight">删除</button>
                <button class="floatRight">修改</button>
                <button class="set-default floatRight" v-show="true">设为默认</button>
              </div>
            </div>
          </div> -->
          <!-- 消息管理 -->
          <!-- <div class="message-manage">
            <p class="change-title">消息管理</p>
            <div class="change-content">
              <div class="content-list clearDiv">
                <img src="../assets/pear.png" alt="" class="floatLeft">
                <div class="list-info floatLeft">
                  <div><span class="tongzhi">系统通知</span><span class="time">3天前</span></div>
                  <div class="work">万圣节| 万圣节最新活动来袭！</div>
                </div>
                <img src="../assets/pear.png" alt="" class="floatRight trunRight">
              </div>
              <div class="content-list clearDiv">
                <img src="../assets/pear.png" alt="" class="floatLeft">
                <div class="list-info floatLeft">
                  <div><span class="tongzhi">系统通知</span><span class="time">3天前</span></div>
                  <div class="work">万圣节| 万圣节最新活动来袭！</div>
                </div>
                <img src="../assets/pear.png" alt="" class="floatRight trunRight">
              </div>
            </div>
          </div> -->
          <!-- 会员资料 -->
          <!-- <div class="member-info" v-show="false">
            <p class="change-title">会员资料</p>
            <div class="change-content">
              <p><label for="">姓名：</label><input type="text" value="yyyyyyyy"></p>
              <p><label for="">手机号码：</label><span class="phone">13811111111</span><span class="phone-change">[修改]</span></p>
              <p><label for="">身份证号：</label><input type="text" placeholder="请填写身份证号"></p>
              <p><label for="">联系邮箱：</label><input type="text" placeholder="请填写邮箱"></p>
              <p><label for="">所在地区：</label>
                <select name="" id="">
                  <option value="">请选择</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <select name="" id="">
                  <option value="">请选择</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <select name="" id="">
                  <option value="">请选择</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </p>
              <p><label for="">具体地址：</label><input type="text" placeholder="请填写具体地址"></p>
              <button>保存</button>
            </div>
          </div> -->
          <!-- 修改密码 -->
          <!-- <div class="changePwd" v-show="false">
            <p class="change-title">修改密码</p>
            <div class="change-content">
              <p><label for="">新密码</label><input type="text" placeholder="请输入新的密码"></p>
              <p><label for="">确认新密码</label><input type="text" placeholder="请确认密码"></p>
              <p><label for="">验证码</label><input type="text" placeholder="请输入验证码" class="code"><img src="../assets/pear.png" alt=""></p>
              <button>确认修改</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			openeds: ['1','2','3','4'],//展开的菜单导航
      beginTime: "",
      endTime: "",
      tableData: [
        {
          id: "2016-05-02",
          name: "王小虎",
          money: "199.00元",
          time: "2018-11-11",
          type: "待支付"
        },
        {
          id: "2016-05-02",
          name: "王小虎",
          money: "199.00元",
          time: "2018-11-11",
          type: "待消费"
        },
        {
          id: "2016-05-02",
          name: "王小虎",
          money: "199.00元",
          time: "2018-11-11",
          type: "待支付"
        },
        {
          id: "2016-05-02",
          name: "王小虎",
          money: "199.00元",
          time: "2018-11-11",
          type: "待支付"
        }
      ],
      tableDate1: [
        {
          id: "1",
          in: "富力玩偶",
          change: 15,
          time: "2018-11-11",
          tip: "交易获得"
        },
        {
          id: "2",
          in: "富力玩偶",
          change: "-15",
          time: "2018-11-11",
          tip: "交易获得"
        }
      ],
      good_list: [],
      selected_all: false,
      checked: [],
      totalPrice: 0,
      totalNum:0,
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
          this.totalNum += _d["num"]
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
    },
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
  }
};
</script>
<style lang='scss' scoped>
.main {
  width: 100%;
  .nav {
    width: 100%;
    height: 63px;
    line-height: 63px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: url(../../assets/img/mine-nav.png) no-repeat 0 0;
    background-size: 100% 100%;
    .nav-content {
      width: 1200px;
      margin: 0 auto;
      a {
        color: rgba(255, 255, 255, 1);
      }
      li {
        .phone-img {
          display: inline-block;
          width: 20px;
          height: 22px;
          background: url(../../assets/img/mine-phone.png) no-repeat 0 0px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      .phon-type {
        margin-right: 20px;
      }
    }
  }
  .nav2 {
    width: 100%;
    height: 125px;
    line-height: 125px;
    background-color: #359af7;
    ul {
      width: 1200px;
      margin: 0 auto;
      height: 125px;
      line-height: 125px;
      li {
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        img {
          vertical-align: middle;
        }
      }
      .mine-center {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        margin-left: 22px;
        padding-left: 18px;
        border-left: 1px solid #ffffff;
        margin-top: 36px;
      }
      .mine-login {
        font-size: 14px;
        span {
          width: 19px;
          height: 21px;
          display: inline-block;
          vertical-align: middle;
          background: url(../../assets/img/mine-login.png) no-repeat 0 0;
          margin-right: 5px;
        }
      }
    }
  }
  .mine-bg {
    width: 100%;
    height: 100%;
    background: url(../../assets/img/mine-bg.png) no-repeat 0 0;
    background-size: 100% 100%;
    .mine-info {
      width: 1200px;
      height: 285px;
      // line-height: 285px;
      background: rgba(255, 255, 255, 1);
      opacity: 0.65;
      margin: 0 auto;
      li {
        height: 285px;
        line-height: 285px;
      }
      .portrait {
        margin-left: 44px;
        img {
          width: 191px;
          height: 191px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .info-people {
        height: 139px;
        line-height: normal;
        margin-top: 74px;
        padding: 0 149px 0 38px;
        border-right: 2px solid #cccccc;
        p {
          margin-bottom: 25px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          a {
            font-size: 12px;
            text-decoration: underline;
            color: rgba(227, 87, 76, 1);
          }
        }
        .people-phone {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .coupon {
        padding: 101px 100px 101px 137px;
        line-height: normal;
        text-align: center;
      }
      .integral {
        padding: 101px 0;
        line-height: normal;
        text-align: center;
      }
      .coupon .num,
      .integral .num {
        font-size: 47px;
        font-weight: bold;
        color: rgba(238, 50, 35, 1);
      }
      .integral .num {
        color: rgba(255, 170, 23, 1);
      }
      .coupon .words,
      .integral .words {
        font-size: 20px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .mine-content {
      width: 1200px;
      margin: 20px auto 0 auto;
      .content-left {
        width: 249px;
        height: 1244px;
        background: rgba(255, 255, 255, 1);
        text-align: center;
        padding-top: 32px;
				

        dl {
          dt {
            font-size: 18px;
            font-weight: bold;
            color: rgba(7, 100, 233, 1);
            margin-bottom: 24px;
            span {
              width: 19px;
              height: 15px;
              display: inline-block;
              background: url(../../assets/img/mine-jiantou.png) no-repeat 0 0;
              margin-left: 5px;
            }
          }
          dd {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 24px;
          }
        }
      }
      .content-right {
        width: 935px;
        height: 1244px;
        background: rgba(255, 255, 255, 1);
        padding: 0 30px;
        .orderDetails {
          ul {
            height: 92px;
            padding: 47px 0 18px 0;
            border-bottom: 1px solid #cecece;
            li {
              float: left;
              height: 27px;
              line-height: 27px;
              font-size: 16px;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              margin-right: 10px;
              select {
                width: 113px;
                height: 27px;
                border: 1px solid rgba(170, 170, 170, 1);
              }
              button {
                width: 71px;
                height: 27px;
                background: rgba(7, 100, 233, 1);
              }
            }
            .line {
              color: #aaaaaa;
            }
            .date {
              width: 113px;
              height: 27px;
              .date-begin {
                width: 113px;
                height: 27px;
              }
            }
          }
        }
        .integration {
          .change-title {
            font-size: 16px;
            color: #333333;
            padding-top: 48px;
            padding-bottom: 16px;
            border-bottom: 2px solid #eeeeee;
            span {
              display: inline-block;
              font-size: 26px;
              color: #ee3223;
            }
            img {
              width: 138px;
              height: 38px;
              vertical-align: middle;
              margin-left: 63px;
            }
          }
          .change-content {
            margin-top: 21px;
          }
        }
        .coupon {
          .change-title {
            font-size: 16px;
            color: #333333;
            padding-top: 48px;
            padding-bottom: 16px;
            border-bottom: 2px solid #eeeeee;
          }
          .change-content {
            padding-top: 25px;
            padding-right: 150px;
            img {
              width: 139px;
              height: 66px;
              margin-right: 31px;
              margin-bottom: 45px;
            }
          }
        }
        .shopping-car {
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
              color: #c0c0c0;
              border: 1px solid #c0c0c0;
              border-radius: 4px;
              margin-left: 16px;
            }
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
                    width: 65px;
                    height: 30px;
                    background: url(../../assets/img/mine-shoppingcar-pay.png)
                      no-repeat 0 0;
                  }
                }
              }
            }
          }
        }
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
              color: #c0c0c0;
              border: 1px solid #c0c0c0;
              border-radius: 4px;
              margin-left: 16px;
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
        .message-manage {
          .change-title {
            font-size: 16px;
            color: #333333;
            padding-top: 48px;
            padding-bottom: 16px;
            border-bottom: 2px solid #eeeeee;
          }
          .change-content {
            position: relative;
            .content-list::before {
              content: "";
              width: 8px;
              height: 8px;
              background-color: #ed3f31;
              border-radius: 50%;
              position: absolute;
              left: 0;
              margin-top: 16px;
            }
            .content-list {
              padding: 18px 0 18px 23px;
              img {
                width: 40px;
                height: 40px;
              }
              .list-info {
                margin-left: 12px;
                .tongzhi {
                  font-size: 16px;
                  color: #333333;
                }
                .time {
                  font-size: 12px;
                  color: #bfbfbf;
                }
                .work {
                  font-size: 14px;
                  color: #333333;
                }
              }
              .trunRight {
                width: 18px;
                height: 30px;
                margin: 5px 44px 0 0;
              }
            }
          }
        }
        .member-info {
          .change-title {
            font-size: 16px;
            color: #333333;
            padding-top: 48px;
            padding-bottom: 16px;
            border-bottom: 2px solid #eeeeee;
          }
          .change-content {
            padding-top: 47px;
            p {
              height: 40px;
              line-height: 40px;
              margin-bottom: 30px;
              font-size: 14px;
              label {
                text-align: left;
                width: 10%;
                display: inline-block;
              }
              input {
                width: 360px;
                height: 40px;
                border: solid 1px #c5c5c5;
                text-indent: 14px;
              }
              select {
                width: 110px;
                height: 40px;
                border: solid 1px #c5c5c5;
                margin-right: 10px;
              }
              .phone {
                font-size: 14px;
                color: #333333;
              }
              .phone-change {
                font-size: 14px;
                color: #e3574c;
                margin-left: 5px;
              }
            }
            button {
              width: 293px;
              height: 40px;
              background-color: #0764e9;
              font-size: 14px;
              color: #ffffff;
              margin-left: 87px;
            }
          }
        }
        .changePwd {
          .change-title {
            font-size: 16px;
            color: #333333;
            padding-top: 48px;
            padding-bottom: 16px;
            border-bottom: 2px solid #eeeeee;
          }
          .change-content {
            padding-top: 47px;
            p {
              height: 40px;
              line-height: 40px;
              margin-bottom: 30px;
              font-size: 14px;
              label {
                text-align: left;
                width: 10%;
                display: inline-block;
              }
              input {
                width: 293px;
                height: 40px;
                border: solid 1px #c5c5c5;
                text-indent: 14px;
              }
              .code {
                width: 123px;
              }
              img {
                width: 100px;
                height: 23px;
                vertical-align: middle;
                margin-left: 10px;
              }
            }
            button {
              width: 293px;
              height: 40px;
              background-color: #0764e9;
              font-size: 14px;
              color: #ffffff;
              margin-left: 87px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.date .date-begin .el-input__inner {
  height: 27px;
  line-height: 27px;
}
.date .el-input__prefix {
  text-align: right;
  right: 0;
}
.date .el-input--small .el-input__icon {
  line-height: 27px;
}
.content-left{
	.el-submenu__title:hover{
		background: none;
	}
	.el-submenu__title{
		font-size:18px;
		font-family:MicrosoftYaHei;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.el-submenu__icon-arrow{
		right: 60px;
		font-size: 20px;
		color: #666666;
	}
	.el-submenu .el-menu-item{
		font-size:14px;
		font-family:MicrosoftYaHei;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.el-menu-item:focus, .el-menu-item:hover{
		background: none;
	}
	.el-menu-item.is_active{
		color: #2D7AE4;
	}
}
</style>
