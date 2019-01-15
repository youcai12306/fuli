<template>
	<section>
		<Header></Header>
		<div class="news">
			<div class="main-contion">
				<!-- 导航 -->
				<div class="l">
					<div class="header-title">{{$t('i18nView.navTitle1')}}</div>
					<ul>
						<li :class="{hover:$route.path == '/news' || $route.path == '/newList' || $route.path == '/newDetail'}" @click="changeType(1)">{{$t('i18nView.navTitle2')}}</li>
						<li :class="{hover:$route.path == '/noticeList' || $route.path == '/noticeDetail'}" @click="changeType(0)">{{$t('i18nView.navTitle3')}}</li>
					</ul>
				</div>
				<!-- 园区新闻 -->
				<div class="r">
					<router-view />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import local from './local';
	const viewName = 'i18nView';
	import Header from "@/components/Header"; //引入头部
	export default {
		name: "News",
		data() {
			return {
				title: "所有新闻",
				tabs: 1
			};
		},
		components: {
			Header
		},
		methods: {
			changeType(type) {
				this.tabs = type
				return type === 1 ? this.$router.push('newList') : this.$router.push('noticeList')
			}
		},
		created() {
			document.title = "新闻中心";
			if (!this.$i18n.getLocaleMessage('en')[viewName]) {
				this.$i18n.mergeLocaleMessage('en', local.en)
				this.$i18n.mergeLocaleMessage('zh', local.zh)
			}
		},
	};
</script>

<style scoped="" lang="scss">
	.news {
		width: 100%;
		height: 1802px;
		background: #fff url(../../assets/img/new-bg.jpg) no-repeat top center;
		background-size: 1920px 100%;

		.main-contion {
			width: 1200px;
			min-height: 1%;
			clear: both;
			margin: 0 auto;
			padding-top: 454px;

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
					cursor: pointer;
					background: rgba(111, 196, 249, 1);

					&:nth-of-type(2) {
						margin-top: 5px;
						border-radius: 0 0 10px 10px;
					}

					&.hover {
						color: rgba(7, 100, 233, 1);
					}
				}
			}

			// 主体
			.r {
				// position: relative;
				// height: 1200px;
				// width: 920px;
				float: left;
				// margin-top: 20px;
				// background-color: rgba(255, 255, 255, 1);
				// border-radius: 10px;
				// box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
			}
		}
	}
</style>
