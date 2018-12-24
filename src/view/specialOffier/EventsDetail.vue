<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-24
		描述：活动详情页面
	-->
	<div class="even" id="even">
		<div class="r">
			<div class="title clearDiv">
				<div class="floatLeft">精彩活动</div>
				<div class="floatRight location">当前位置>优惠活动</div>
			</div>

			<!-- 所有新闻 -->
			<div class="main-new">
				<div class="titles clearDiv">
					<div class="title-left floatLeft">
						<div class="one">{{data.infoTitle}}</div>
						<div class="two">{{data.createTime}}&nbsp;&nbsp; 来源：富力海洋欢乐世界 浏览次数：65</div>
					</div>
					<router-link to="/specialOffier" tag="div" class="title-right floatRight">返回</router-link>
				</div>
				<div class="content">
					<img src="../../assets/img/new-bg2.png">
				</div>
				<div>{{data.infoContent}}</div>
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
			document.title = "新闻中心详情";
		},
		mounted() {
			this.GetList();
		},
		methods: {
			GetList() {
				this.$post('http://192.168.2.61:2670/info/secondary/getInfo?infoId=' + this.$route.query.id).then((res) => {
					console.log(res.data)
					this.data = res.data
				})
			}
		},
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
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>
