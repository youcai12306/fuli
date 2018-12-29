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
						<!-- <div class="one">{{data.infoTitle}}</div>
						<div class="two">{{data.createTime}}&nbsp;&nbsp; 来源：海洋欢乐世界</div> -->
						<div class="one">荟精英，海洋欢乐世界展露头角<br>创未来，富力集团即将扬帆启航</div>
						<div class="two">2018年11月26日&nbsp;&nbsp; 来源：海洋欢乐世界</div>
					</div>
					<router-link to="/specialOffier" tag="div" class="title-right floatRight">返回</router-link>
				</div>
				<!-- <div class="content">
					<img src="../../assets/img/new-bg2.png">
				</div> -->
				<div class="content-main">
					<p>2018年11月26日，一场文旅的激情碰撞在海南博鳌国际会议中心拉开序幕，作为2018年（第十九届）海南国际旅游岛欢乐节的重要组成部分，今年已经是博鳌国际旅游传播论坛走过的第三个春秋，是在海南岛国际旅游迎来国家政策利好的又一次绽放。</p>
					<img src="../../assets/img/new-bg2.png" alt="">
					<img src="../../assets/img/EventsDetail1.png" alt="">
					<p>此次论坛以“文化+旅游的全球智慧与中国路径”为主题，由中国传媒大学、海南省旅游文化广电体育厅与琼海市人民政府联合举办，邀请了包括中国传媒大学知名学者、国际友人、旅游达人及政府与从业人士，从旅游趋势下的热门话题“城市品牌”、“自媒体传播”、“IP文创衍生”等角度诠释旅游趋势发展。</p>
					<img src="../../assets/img/EventsDetail2.png" alt="">
					<span>备注：中国传媒大学广告学院旅游传播研究中心副主任张婷婷<br>
发布内容：《2019中国旅游传播趋势发布》</span>
					<img src="../../assets/img/EventsDetail3.png" alt="">
					<span>备注：前加拿大国家旅游局局长、国际旅游营销专家，格瑞格里·克拉森<br>
演讲主题：《旅游传播VS国家品牌、城市品牌塑造》</span>
					<p>受主办方邀请，富力集团海南区域常务副总兼海南富力海洋欢乐世界董事长朱家麟与市场总监谷宛儒一行亲临论坛现场，认真听取行业嘉宾的经验分享，并积极与参会嘉宾、企业进行交流与沟通，为未来富力海洋欢乐世界的全面开放做好资源储备。</p>
					<img src="../../assets/img/EventsDetail4.png" alt="">
					<p>同时，博鳌旅游TC奖的发布作为论坛的重要内容和成果总结，是对业内企业在2018年取得成绩的肯定，相对于未来即将开放的富力海洋欢乐世界，正以国际化的视角打造亚洲乃至世界的顶级海洋主题乐园，专业化的国际管理团队、国际化的设施设备，加之30余位中外海洋动物专家学者组建的蓝海保育救护中心让富力海洋欢乐世界的绽放更佳值得期待，已经具备了角逐奖项的绝对竞争力，有望在下一届博鳌旅游论坛中，囊获专业旅游奖项，获得行业认可，成为蔚蓝海域中崭新的探索。</p>
					<img src="../../assets/img/EventsDetail5.png" alt="">
					<span>备注：博鳌旅游TC奖，年度全域旅游品牌传播奖</span>
					<p>巅峰论坛，荟萃精英，审视行业趋势，富力海洋欢乐世界展露头角；创造未来，富力集团，打造海洋乐园，富力海洋欢乐世界即将扬帆启航。</p>
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
			// 			GetList() {
			// 				this.$post('http://192.168.2.61:2670/info/secondary/getInfo?infoId=' + this.$route.query.id).then((res) => {
			// 					console.log(res.data)
			// 					this.data = res.data
			// 				})
			// 			}
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
