<template>
	<!-- 园区新闻 -->
	<div class="r">
		<div class="title clearDiv">
			<div class="floatLeft">{{$t('i18nView.navTitle2')}}</div>
			<div class="floatRight location">{{$t('i18nView.Position')}}：{{$t('i18nView.navTitle1')}}>{{$t('i18nView.navTitle2')}}>{{$t('i18nView.Details')}}</div>
		</div>

		<!-- 所有新闻 -->
		<div class="main-new">
			<div class="titles clearDiv">
				<div class="title-left floatLeft">
					<div class="one">{{data.infoTitle}}</div>
					<div class="two">{{data.createTime}}&nbsp;&nbsp; {{$t('i18nView.text')}}</div>
				</div>
				<router-link to="/newList" tag="div" class="title-right floatRight">{{$t('Return')}}</router-link>
			</div>
			<!-- <div class="content">
           <img src="../../assets/img/new-bg2.png">
      </div> -->
			<div v-html="data.infoContent" class="aa"></div>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default {
		name: "News",
		data() {
			return {
				data: {
					
				},
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0
			};
		},
		created() {
			document.title = "新闻中心详情";
		},
		mounted() {
			this.$fetch(this.$url2 + '/api-nkf-callback/mongodb-mucon/info/primary/get?infoId=' + this.$route.query.id + '&isEnglish=' + this.isEnglish).then((res) => {
				this.data = res.data
			})
		}
	};
</script>

<style scoped="" lang="scss">
	// 主体
	.r {
		position: relative;
		height: 1200px;
		width: 920px;
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		box-shadow: 0px 4px 13px 0px rgba(1, 12, 24, 0.15);
		margin-top: 20px;

		.title {
			text-align: center;
			font-size: 26px;
			font-weight: bold;
			color: #eeeeee;
			width: 100%;
			height: 91px;
			line-height: 91px;
			background: #4dafec;
			padding-left: 37px;
			border-radius: 10px 10px 0 0;

			.location {
				height: 22px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				line-height: 22px;
				padding-left: 40px;
				background: url(../../assets/img/new-4.png) no-repeat 15px 0;
				margin-top: 40px;
				margin-right: 34px;
			}
		}

		.main-new {
			padding: 31px 34px 0 37px;
			width: 100%;

			.titles {
				padding-bottom: 10px;
				border-bottom: 1px solid rgba(153, 153, 153, 1);

				.title-left {
					.one {
						font-size: 16px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					.two {
						font-size: 12px;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						margin-top: 30px;
					}
				}

				.title-right {
					width: 76px;
					height: 35px;
					background: rgba(235, 235, 235, 1);
					border: 1px solid rgba(210, 210, 210, 1);
					text-align: center;
					line-height: 35px;
					font-size: 14px;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
					margin-top: 18px;
					cursor: pointer;
				}
			}

			.content {
				margin: 30px auto;
				position: relative;
				width: 681px;
				height: 315px;

				img {
					width: 681px;
					height: 315px;
				}
			}

			.aa {
				text-align: center;
				margin-top: 20px;
				height: 950px;
				overflow-y: auto;

				&::-webkit-scrollbar {
					/*滚动条整体样式*/
					width: 10px;
					/*高宽分别对应横竖滚动条的尺寸*/
					height: 1px;
				}

				&::-webkit-scrollbar-thumb {
					/*滚动条里面小方块*/
					border-radius: 10px;
					background-color: #F90;
					background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
				}

				&::-webkit-scrollbar-track {
					/*滚动条里面轨道*/
					-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
					/* border-radius: 10px; */
					background: #EDEDED;
				}
			}
		}
	}
</style>
