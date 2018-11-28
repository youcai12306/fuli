<template>
  <div>
    <!-- 背景层 -->
    <div class="leyuan">
			<!-- 背景轮播图 -->
			<section class="LeBg">
				<swiper :options="swiperOptionThumbs">
					<swiper-slide :style="{backgroundImage:'url(../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1920px'}"></swiper-slide>
					<swiper-slide :style="{backgroundImage:'url(../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1920px'}"></swiper-slide>
					<swiper-slide :style="{backgroundImage:'url(../../../static/le0.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1920px'}"></swiper-slide>
				</swiper>
			</section>
      <!-- main -->
      <div class="main">
        <!-- 咨询公告 -->
        <div class="clearDiv">
          <!-- 分类 -->
          <div class="le1">
						<!--//背景轮播图标页码-->
						<div class="swiper-pagination"></div>
            <ul class="clearDiv">
              <li class="le2 actives">
                <a href="">乐园介绍</a>
              </li>
              <li class="le2"><a href="">分区介绍</a></li>
              <li class="le2"><a href="">计划行程</a></li>
              <li class="le2"><a href="">门票预订</a></li>
              <li class="le2"><a href="">年卡/会员卡</a></li>
              <li class="le2"><a href="">尊贵体验</a></li>
              <li class="le2"><a href="">精彩演绎</a></li>
              <li class="le2"><a href="">冒险之旅</a></li>
              <li class="le2"><a href="">动物百科</a></li>
            </ul>
          </div>
          <!-- 公告头 -->
          <div class="le3">
            <div class="le4">
							<div class="icon">咨询公告 :</div>
              <!-- <p class="le5"></p> -->
              <p class="le6"><Scroller :lists="lists" class="scrollContainer" /></p>
            </div>
            <div>
              <div class="clearDiv">
                <div class="le7 clearDiv">
                  <ul class="clearDiv">
                    <li class="le8">
                      <a href="">
                        <img
                          src="../assets/img/le11.png"
                          alt=""
                        >
                        <p>在线订票</p>

                      </a>
                    </li>
                    <li class="le9">
                      <a href="">
                        <img
                          src="../assets/img/le12.png"
                          alt=""
                        >
                        <p>园区导览</p>

                      </a>
                    </li>
                    <li class="le10">
                      <a href="">
                        <img
                          src="../assets/img/le13.png"
                          alt=""
                        >

                        <p>交通指南</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- 园区资讯 -->
                <div class="le11 clearDiv">

                  <div class="le12 clearDiv">
                    <div ckass="clearDiv">
                      <p class="le13">园区资讯</p>
                    </div>
                    <div class="clearDiv le14">
                      <img
                        src="../assets/img/le2.png"
                        alt=""
                      >
                      <p class="le15">世界马戏精英亮相珠海长隆</p>
                      <p class="le16">陵水黎族自治县黎安港，是海南省重点规划项目，致力于打造成世界一流的主题公园项目位。东线高出入口，出入口与海利的交通系统能快速地向海洋公园输客。
                      </p>
                    </div>

                  </div>
                  <div class="le17">
                    <ul>
                      <li>马戏表演的“魔力”竟然这么大？！</li>
                      <li>第五届中国国际马戏节11月16日在珠海盛大开幕</li>
                      <li>4场惠民演出首发珠海体育中心，香港首秀及巡游巴士万众翘盼</li>
                    </ul>
                  </div>
                </div>
                <div class="le18">
                  <div class="clearDiv">
                    <ul class="clearDiv">
                      <li
                        v-for="(tab,index) in tabsName"
                        :key="index"
                      >
                        <a
                          href="javascript:void(0)"
                          @click="tabsSwitch(index)"
                          :class="{active:tab.isActive}"
                          class="tab-link"
                        >
                          {{tab.name}}
                        </a>
                      </li>
                    </ul>
                    <div class="cards">
                      <div
                        class="tab-card"
                        style="display:block"
                      >
                        <div class="c1">
                          <div class="c2">
                            <div class="c3">
                              <p class="c4">平常日</p>
                              <p>儿童/长者：210/天</p>
                              <p class="cc">成人：300/天</p>
                            </div>
                            <div class="c5">
                              <p class="c6">特殊日</p>
                              <p>儿童/长者：260/天</p>
                              <p>成人：360/天</p>
                            </div>
                          </div>

                          <button class="c7">了解详情</button>
                        </div>
                      </div>
                      <div class="tab-card">
												<div class="c1">
													<div class="c2">
														<div class="c3">
															<p class="c4">平常日</p>
															<p>9:00-12:00</p>
															<p class="cc">1:00-6:00</p>
														</div>
														<div class="c5">
															<p class="c6">特殊日</p>
															<p>9:00-12:00</p>
															<p>1:00-6:00</p>
														</div>
													</div>

													<button class="c7">了解详情</button>
												</div>
											</div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 场馆设备推荐 -->
				<div class="clearDiv e1">
					<div class="e2">场馆设备推荐</div>
					<div class="swiper">
						<swiper :options="swiperOption">
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-14.png"></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-15.png"></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-16.png"></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-14.png"></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-15.png"></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-16.png"></router-link>
							</swiper-slide>
							
							<!-- <template v-for="item in list">
								<swiper-slide>
									<router-link :to="{path:'/'}"><img :src="item.img"><span>{{item.title}}</span></router-link>
								</swiper-slide>
							</template> -->
							
						</swiper>
					</div>
					<div class="swiper-button-next"></div>
					<!--//下一项-->
					<div class="swiper-button-prev"></div>
					<!--//上一项-->
				</div>
				
				
      </div>
    </div>
  </div>
</template>

<script>
	import Scroller from "@/components/Scroller.vue";
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      tabsName:[
        {
          name:"门票价格",
          isActive:false
        },
        {
          name:"营业时间",
          isActive:true
        },
      ],
      active:true,
			lists: ["致决定在相互尊重、坦诚相待、平等互利、合作共赢基础上建立中菲全面战略合作关系,一致决定在相互尊重、坦诚相待"],
			swiperOption: { //场馆设备推荐轮播图设置
				autoplay: false,
				speed: 300,
				slidesPerView: 3,
				spaceBetween: 32,
				
				navigation: {
					nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
					prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
					hideOnClick: true, //点击slide时显示/隐藏按钮
					disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
					hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
				}
			},
			swiperOptionThumbs: {//背景轮播图
				autoplay: true,
				// effect: 'fade',
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
			}
    };
  },
	components: {
		swiper,
		swiperSlide,
		Scroller
	},
	created() {
		document.title = "欢乐海洋世界";
	},
  methods:{
    tabsSwitch: function(tabIndex) {
 
					var tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;
 
					for(var i = 0; i < len; i++) {
						tabCardCollection[i].style.display = "none";
						this.tabsName[i].isActive = false;
					}
					this.tabsName[tabIndex].isActive = true;
					tabCardCollection[tabIndex].style.display = "block";
				}


  }
};
</script>

<style lang="scss" scoped>
a {
  color: #fff;
}
.leyuan {
  // background-image: url(../assets/img/le0.png);
  height: 1867px;
  overflow: hidden;
	position: relative;
	.LeBg{
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		height: 1867px;
		width: 100%;
		.swiper-slide {
			height: 1867px;
			width: 1920px;
		}
	}
	
  .main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 710px;
    .le1 {
      margin-left: 20px;
			position: relative;
			z-index: 10;
			
      li {
        color: #fff;
        float: left;
        background-image: url(../assets/img/le8.png);
        width: 131px;
        height: 58px;
				&:hover,&.actives{
					background-image: url(../assets/img/le7.png);
				}
        a {
          display: block;
          text-align: center;
          margin-top: 14px;
        }
      }
    }
    .le3 {
      width:1200px;
			height:511px;
			background:rgba(255,255,255,0.2);
			border-radius:0px 0px 10px 10px;
			margin-top: -10px;
      .le4 {
				height:66px;
				background:linear-gradient(180deg,rgba(15,107,234,1),rgba(52,142,240,1));
				position: relative;
				.icon{
					position: absolute;
					left: -27px;
					top: 12px;
					width: 184px;
					height: 50px;
					line-height: 40px;
					color: #fff;
					font-size: 16px;
					background: url(../assets/img/le10.png) no-repeat;
					padding-left: 86px;
				}
				
        p {
          display: inline-block;
        }
//         .le5 {
//           font-size: 16px;
//           font-weight: bold;
//           margin-top: 22px;
//           margin-left: 52px;
//           color:#fff;
//         }
        .le6 {
          margin-left: 40px;
          color:#fff;
					position: absolute;
					left: 130px;
					top: 22px;
        }
      }
      .le7 {
        margin-top: 19px;
        margin-left: 31px;
        float: left;
        ul {
          float: left;
        }
        li {
          width: 200px;
          height: 133px;
          overflow: hidden;
          img {
            display: block;
            margin: 0 auto;
            text-align: center;
            margin-top: 22px;
            margin-bottom: 14px;
          }
          p {
            text-align: center;
          }
        }
        .le8 {
          background: linear-gradient(
            0deg,
            rgba(12, 109, 206, 1),
            rgba(68, 165, 210, 1)
          );
        }
        .le9 {
          background: linear-gradient(
            0deg,
            rgba(101, 176, 23, 1),
            rgba(152, 224, 75, 1)
          );
        }
        .le10 {
          background: linear-gradient(
            0deg,
            rgba(224, 71, 101, 1),
            rgba(231, 122, 143, 1)
          );
          box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.15);
        }
      }
      .le11 {
        float: left;
        background-image: url(../assets/img/le15.png);
        background-repeat: no-repeat;
        width: 545px;
        height: 400px;
        margin-top: 19px;
        margin-left: 16px;
        img {
          float: left;
        }
        .le12 {
          float: left;
          margin-bottom: 16px;
          .le13 {
            text-align: center;
            color: #207bed;
            font-weight: bold;
            margin-top: 12px;
          }
          .le14 {
            float: left;
            margin-top: 35px;
            margin-left: 18px;
            margin-right: 18px;
            img {
              float: left;
              width: 173px;
              height: 120px;
              margin-right: 22px;
            }
            .le15 {
              font-size: 16px;
              font-weight: bold;
            }
            .le16 {
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
        .le17{
            ul{
                margin-left:33px;
                margin-top:16px;
                li{
                    width: 470px;
                    font-size: 14px;
                    list-style: disc ;
                    padding:17px 0;
                    border-bottom:1px dotted #cfcfcf;
                    
                }
            }
        }

      }
      .le18{
        float:left;
        background-color: #F6B37F;
        margin-top: 19px;
        margin-left:15px;
        width: 369px;
        height: 401px;
        .tab-card{
          display:none;
        }
        ul{
          li{
            float:left;
            
            a{
              display:block;
              width: 184px;
              height: 48px;
              padding-top:24px;
              text-align: center;
            }
            .tab-link.active{
              background-color: #F09651;
              font-weight:bold;
            }
          }
        }
        .cards{
          float:left;
          .c1{
            background-color: #fff;
            width: 313px;
            height: 300px;
            margin:0 28px;
            margin-top:17px;
            border-radius:10px;
            overflow: hidden;
            .c2{
              margin:14px 28px 22px 25px;
              p{
                margin-top:4px;
                margin-bottom:15px;

              }
              .c3{
                border-bottom:1px solid #f9d5b9;
                .c4{
                  color:#207BED;
                  font-size:18px;
                  font-weight: bold;
                }
                
              }
              .c5{
                .c6{
                  color:#207BED;
                  font-size:18px;
                  font-weight: bold;
                }
              }
            }
            .c7{
              width: 202px;
              height: 41px;
              background-color: #F8A04B;
              border:none;
              color:#fff;
              margin-left:56px;
              outline: none;
              cursor: pointer;
            }
          }
        }
      }
    }
		
		.e1{
			width:1200px;
			height:320px;
			// background:url(../assets/img/le14.png) no-repeat;
			background:rgba(49,139,240,0.45);
			border-radius:10px;
			margin-top: 80px;
			padding-top: 93px;
			position: relative;
			z-index: 1;
			.e2{
				position: absolute;
				left: -26px;
				top: 28px;
				z-index: 2;
				line-height: 37px;
				font-size:16px;
				font-family:MicrosoftYaHei-Bold;
				font-weight:bold;
				color:rgba(255,255,255,1);
				text-align: center;
				background: url(../assets/img/le9.png) no-repeat;
				width: 184px;
				height: 50px;
			}
			.swiper{
				width: 1018px;
				height: 185px;
				margin: 0 auto;
				.swiper-slide{
					height:185px;
					img{
						width:310px;
						height:177px;
						background:rgba(255,255,255,1);
						border:4px solid rgba(255, 255, 255, 1);
						box-shadow:0px 8px 7px 0px rgba(51, 179, 75, 0.35);
					}
				}
			}
			.my-button-disabled,
			.my-button-hidden {
				background-color: rgba(44, 44, 44, 1);
				opacity: .5;
				cursor: not-allowed;
			}
			.swiper-button-next{
				width: 39px;
				height: 128px;
				right: 28px;
				top: 147px;
				background: rgba(255,255,255,0.4) url(../assets/img/md-r.png) no-repeat center center;
				background-size: 14px 22px;
			}
			.swiper-button-prev{
				width: 39px;
				height: 128px;
				left: 28px;
				top: 147px;
				background: rgba(255,255,255,0.4) url(../assets/img/md-l.png) no-repeat center center;
				background-size: 14px 22px;
			}
		}
  }
}
</style>
<style lang="scss">
	.le1 .swiper-pagination {
		left: 50%;
		top: -85px;
		transform: translate(-50%,0);
		z-index: 999;
		.swiper-pagination-bullet {
			width:12px;
			height:12px;
			background:rgba(214,239,250,1);
			border: 5px solid #4FC2F8;
			margin: 0 14px;
			border-radius: 50%;
			opacity: 1;
			&:focus {
				outline: none;
			}
		}
		.swiper-pagination-bullet-active {
			width:12px;
			height:12px;
			background:rgba(246,179,127,1);
			border: 5px solid #4FC2F8;
			border-radius: 50%;
		}
		
	}
</style>