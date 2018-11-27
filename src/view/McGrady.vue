<template>
	<!--
    	作者：黎孝义
    	时间：2018-11-23
    	描述：麦迪卡斯首页
    -->
	<section class="mcgrady">
		<section class="mcgrady-bg">
			<!--Swiper1-->
			<swiper :options="swiperOptionThumbs">
				<swiper-slide :style="{backgroundImage:'url(../../../static/md-bg.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1920px'}"></swiper-slide>
				<swiper-slide :style="{backgroundImage:'url(../../../static/md-bg.png)', backgroundRepeat:'no-repeat', backgroundPosition:'top center',width:'1920px'}"></swiper-slide>
			</swiper>
		</section>
		<el-row>
			<el-col :span="24" class="the">
				<i class="icoe"></i>公告：
				<Scroller :lists="lists" class="scrollContainer left" />
			</el-col>
		</el-row>

		<!--乐园介绍-->
		<section class="main-conent">
			<div class="mc-info1">
				<!--//Swiper1标页码-->
				<div class="swiper-pagination"></div>
				<!--背景小图-->
				<div class="bg-xiao"></div>
				<div class="bg-xiao2"></div>
				
				<div class="lists">
					<ul>
						<li>
							<div class="items">
								<p class="item">
									<router-link :to="{path:'/'}">园区介绍</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">最新消息及活动</router-link>
								</p>
							</div>
						</li>
						<li>
							<div class="items">
								<p class="item">
									<router-link :to="{path:'/'}">水乐园设施设备介绍</router-link>
								</p>
							</div>

						</li>
						<li>
							<div class="items">
								<p class="item">
									<router-link :to="{path:'/'}">演艺项目介绍</router-link>
								</p>
							</div>
						</li>
						<li>
							<div class="items">
								<p class="item">
									<router-link :to="{path:'/'}">餐厅介绍</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">购物介绍</router-link>
								</p>
							</div>
						</li>
						<li>
							<div class="items">
								<p class="item">
									<router-link :to="{path:'/'}">游园指南</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">服务项目</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">票价信息</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">园区地图</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">常见问题</router-link>
								</p>
								<p class="item">
									<router-link :to="{path:'/'}">暴风台风预案</router-link>
								</p>
							</div>
						</li>
						<li>
							<router-link :to="{path:'/'}"></router-link>
						</li>
					</ul>
				</div>

				<el-row class="info-row">
					<el-col :span="12" class="info-col1">
						<span class="icoe"></span>
						<span class="time">11.21 星期三</span>
						<div class="info-img">
							<img src="../assets/img/md-5.png" />
							<p>平日 9.30~17.30</p>
							<p>周末 9.00~18.00</p>
						</div>
						<div class="info-boutton">
							<a href="">详细营业信息>>></a>
						</div>
					</el-col>
					<el-col :span="12" class="info-col1">
						<span class="icoe"></span>
						<div class="info-img2">
							<img src="../assets/img/md-10.png" />
							<div class="info-p">
								<p>全价票 <span>240元</span>/人</p>
								<p>优惠价 <span>180元</span>/人</p>
							</div>
						</div>
						<div class="info-boutton">
							<a href="">立即购票>>></a>
						</div>
					</el-col>
				</el-row>
				<!--明星场馆-->
				<div class="info-row2">
					<div class="header-img"></div>
					<div class="swiper">
						<swiper :options="swiperOption">
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-14.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-15.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-16.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-14.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-15.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link :to="{path:'/'}"><img src="../assets/img/md-16.png"><span>2019精彩活动马上来袭！</span></router-link>
							</swiper-slide>
						</swiper>
					</div>
					<div class="swiper-button-next"></div>
					<!--//下一项-->
					<div class="swiper-button-prev"></div>
					<!--//上一项-->
				</div>
			</div>
		</section>

		<!--最新新闻-->
		<section class="main-conent">
			<div class="mc-info2">
				<div class="box1">
					<div class="header">
						<span class="icoe"></span>
						<a href="">更多<i></i></a>
					</div>
					<div class="conent-main">
						<div class="main-top">
							<img src="../assets/img/md-23.png" />
							<p class="p1">世界马戏精英亮相珠海长隆国际顺准开幕...</p>
							<p class="p2">长隆海洋王国的“丛林过山车、沙雕城堡、海鸟世界象龟展区”于2018年11月20日起暂停服务，该区域将会进行升级改造，敬请期待！</p>
						</div>
						<div class="main-botton">
							<ul>
								<li>
									<a href="" title=""><i></i><strong class="font">世界马戏精英亮相珠海长隆 国际顺准开幕式明</strong><span>2018.05.06</span></a>
								</li>
								<li>
									<a href="" title=""><i></i><strong class="font">世界马戏精英亮相珠海长隆 国际顺准开幕式明</strong><span>2018.05.06</span></a>
								</li>
								<li>
									<a href="" title=""><i></i><strong class="font">世界马戏精英亮相珠海长隆 国际顺准开幕式明</strong><span>2018.05.06</span></a>
								</li>
								<li>
									<a href="" title=""><i></i><strong class="font">世界马戏精英亮相珠海长隆 国际顺准开幕式明</strong><span>2018.05.06</span></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="box2">
					<img src="../assets/img/md-20.png" />
					<div class="icoe-l"></div>
					<div class="icoe-r">
						<router-link :to="{path:'/'}">进入<i></i></router-link>
					</div>
				</div>
				<div class="box2">
					<img src="../assets/img/md-21.png" />
					<div class="icoe-l"></div>
					<div class="icoe-r">
						<router-link :to="{path:'/'}">进入<i></i></router-link>
					</div>
				</div>
			</div>
		</section>

	</section>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	import Scroller from "@/components/Scroller.vue";
	export default {
		name: "McGrady",
		data() {
			return {
				swiperOption: { //swiper3
					autoplay: false,
					speed: 300,
					slidesPerView: 3,
					spaceBetween: 20,
					
					navigation: {
						nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
						prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
						hideOnClick: true, //点击slide时显示/隐藏按钮
						disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
						hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
					}
				},
				swiperOptionThumbs: {
					autoplay: true,
					effect: 'fade',
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				lists: ["连雨不知春去", "一晴方觉夏深"]
			}
		},
		components: {
			swiper,
			swiperSlide,
			Scroller
		},
		methods: {}
	};
</script>
<style scoped lang="scss" src="../assets/mcgrady.scss"></style>
<style lang="scss" scoped>
	.scrollContainer {
		color: #ffffff;
		font-size: 12px;
		margin-left: 10px;
		width: 515px;
		height: 30px;
		line-height: 30px;
		overflow: hidden;
		margin-top: -24px;
		margin-left: 40px;
	}
</style>
<style lang="scss">
	.mc-info1 .swiper-pagination {
		right: 155px;
		top: -82px;
		z-index: 999;
		.swiper-pagination-bullet {
			width: 19px;
			height: 19px;
			margin: 0 6px;
			background: rgba(32, 32, 32, 1);
			opacity: 0.78;
			border-radius: 50%;
		}
		.swiper-pagination-bullet-active {
			width: 17px;
			height: 17px;
			background: rgba(32, 32, 32, 1);
			border: 2px solid rgba(134, 217, 255, 1);
			border-radius: 50%;
		}
		&:focus {
			border: none;
			outline: none;
		}
	}
</style>