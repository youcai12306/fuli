<template>
	<section>
		<Header></Header>
		<div class="news">
			<div class="main-contion">
				<!-- 标题 -->
				<div class="spec-title">
					<p class="p1">{{$t('specialOffier.navTitle1')}}</p>
					<p class="p2" v-html="$t('specialOffier.description')"></p>
				</div>
				<!-- 导航 -->
				<div class="l">
					<div class="header-title" :title="$t('specialOffier.navTitle1')">{{$t('specialOffier.navTitle1')}}</div>
					<ul>
						<li :class="{hover:$route.query.id == 'E'}" @click="changeType(1)">{{$t('specialOffier.navTitle2')}}</li>
						<li :class="{hover:$route.query.id == '0'}" @click="changeType(0)">{{$t('specialOffier.navTitle4')}}</li>
						<li :class="{hover:$route.query.id == 'F'}" @click="changeType(2)">{{$t('specialOffier.navTitle3')}}</li>
					</ul>
				</div>
				<!-- 园区新闻 -->
				<div class="r">
					<router-view />
				</div>
				<div class="clearDiv"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	export default {
		name: "SpecialOffier",
		data() {
			return {
				tabs: 1
			};
		},
		components: {
			Header
		},
		methods: {
			changeType(type) {
				this.tabs = type
				if(type === 1){
					this.$router.push({path:'/events',query:{id:'E'}}) 
				}else if(type === 2) {
					this.$router.push({path:'/events',query:{id:'F'}})
				}else{
					this.$router.push({path:'/events',query:{id:'0'}})
				}
			}
		},
		created() {
			document.title = "优惠活动";
		},
	};
</script>

<style scoped="" lang="scss">
	.news {
		width: 100%;
		height: 1800px;
		background: #fff url(../../assets/img/specialOffier-bg.jpg) no-repeat top center;

		.main-contion {
			position: relative;
			width: 1200px;
			min-height: 1%;
			clear: both;
			margin: 0 auto;
			padding-top: 434px;

			.spec-title {
				position: absolute;
				top: 145px;
				left: 338px;
				color: #2583BB;
				width: 600px;
				.p1 {
					height: 48px;
					line-height: 48px;
					font-size: 48px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					color: rgba(4, 139, 223, 1);
					margin-bottom: 20px;
				}

				.p2 {
					font-size: 20px;
					font-family: FZZZHONGJW--GB1-0;
					font-weight: 400;
					color: rgba(37, 131, 187, 1);
					line-height: 30px;
				}
			}

			// 导航
			.l {
				float: left;
				width: 180px;
				height: 410px;
				background: rgba(77, 175, 236, 1);
				margin-right: 40px;
				margin-top: 20px;
				box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
				border-radius: 10px;

				.header-title {
					font-size: 26px;
					font-family: MicrosoftYaHei-Bold;
					font-weight: bold;
					color: rgba(238, 238, 238, 1);
					width: 180px;
					height: 130px;
					line-height: 130px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					text-align: center;
				}

				ul>li {
					width: 100%;
					height: 140px;
					line-height: 140px;
					text-align: center;
					font-size: 20px;
					font-weight: bold;
					color: rgba(238, 238, 238, 1);
					border-top: 4px solid #4dafec;
					cursor: pointer;
					background: rgba(111, 196, 249, 1);

					&:nth-of-type(3) {
						border-radius: 0 0 10px 10px;
					}

					&.hover {
						color: rgba(7, 100, 233, 1);
					}
				}
			}

			// 主体
			.r {
				float: left;
			}
		}
	}
</style>
