<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-24
		描述：活动详情页面
	-->
	<div class="even" id="even">
		<div class="r">
			<div class="title clearDiv">
				<div class="floatLeft">{{$t('specialOffier.navTitle1')}}</div>
				<div class="floatRight location">{{$t('specialOffier.Position')}}>{{$t('specialOffier.navTitle1')}}</div>
			</div>

			<!-- 所有新闻 -->
			<div class="main-new">
				<div class="titles clearDiv">
					<div class="title-left floatLeft">
						<!-- <div class="one">{{data.infoTitle}}</div>
						<div class="two">{{data.createTime}}&nbsp;&nbsp; 来源：海洋欢乐世界</div> -->
						<div class="one">{{data.title}}</div>
						<div class="two">{{data.createTime}}</div>
					</div>
					<div @click="back" class="title-right floatRight">返回</div>
				</div>
				<!-- <div class="content">
					<img src="../../assets/img/new-bg2.png">
				</div> -->
				<div class="content-main">
					<div v-html="data.content0"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			}
		},
		components: {

		},
		created() {
			document.title = "活动详情";
		},
		mounted() {
			this.GetList();
		},
		methods: {
			GetList() {
				this.$fetch('http://101.201.101.138:6110/mongodb-mucon/structure/primary/get?structureId=' + this.$route.query.id + '&isEnglish='+ this.$isEnglish).then((res) => {
					this.data = res.data;
				})
			},
			back(){
				this.$router.go(-1);
			}
		}
	}
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
			font-size: 35px;
			font-weight: bold;
			color: rgba(238, 238, 238, 1);
			width: 100%;
			height: 91px;
			line-height: 91px;
			background: rgba(77, 175, 236, 1);
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
				margin-top: 50px;
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
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			.content-main {
				height: 900px;
				overflow-y: auto;
				text-indent: 2em;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 24px;
				margin-top: 20px;

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
				p,img{
					margin-bottom: 20px;
				}
				img{
					width: 100%;
				}
				span{
					width: 100%;
					text-align: center;
					font-size: 12px;
					color: #666;
					display: block;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
