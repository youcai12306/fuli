<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-29
		描述：当前位置：首页 > 园区介绍
	-->
	<section>
		<Header></Header>
		<div class="risk park">
			<div class="title">
				<div class="location">
					<el-breadcrumb separator=">">
						<el-breadcrumb-item>当前位置</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>园区介绍</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			<div class="box">
				<div class="info">
					<div class="info-title">
						海洋欢乐世界度假区
					</div>
					<div class="info-img">
						<img src="../../assets/img/park1.png" alt="">
					</div>
					<div class="info-p">
						海南海洋欢乐世界旅游度假综合区规划占地5000亩，总投资400亿元。其中海洋公园规划总占地约为2000亩，项目总投资约为150亿元人民币，一期投资65亿元，目前累计投资约45亿元。项目参照美国奥兰多主题乐园发展模式，分为5大园区，拥有8大场馆，40多套多国顶级游乐设备厂商供应的先进游乐设备，1500余种4万余只海洋生物，总水体量13万多吨。
					</div>
					<div class="info-p1">
						<p>深海之城</p>
						接受海洋的文化洗礼，由此开启神秘的海洋之旅。本区包含有特色商店、主题餐饮、海洋主题教育中心、海洋知识普及中心、脱口秀表演场、暗黑骑乘等新颖有趣的互动项目，抢先一步享受旅行的快意时光。
					</div>
					<div class="info-p1">
						<p>探索港湾
						</p>这里是好奇心演化的最大试验场！拥有水体量最大的鲸鲨馆，近距离观看鲸鲨游曳，海豚表演馆也让游客在海天一线的美景中欣赏精彩的海豚表演。更有旋转飞椅、双层旋转木马、摩天轮等1
						0多项适合儿童的游乐项目，每当夜幕降临，还可尽情饱览融合现代科技的音乐喷泉秀。
					</div>
					<div class="info-p1">
						<p>冒险海洋
						</p>这里有让人惊叹的游乐设备，如提升角度近90°的垂直过山车、60米高的跳楼机、搭载20人极速下落的激流勇进……
						也有让人感叹极地与热带奇妙相遇的极地动物场馆、沉浸式观影的4D球幕影院、生动活泼的海狮表演馆……
						动静相宜，万般皆妙。
					</div>
					<div class="info-p1">
						<p>生态海岸
						</p>本区配有天幕影院、丛林漂流、摩托艇划水、风筝飞行等游乐设备，纵情玩乐的同时更能体验独特的海南特色风情，徜徉于独具特色的雨林海岸，更有高达123米南中国最高的海岸观光塔，一眼看懂中国南。
					</div>
					<div class="info-p1">
						<p>麦迪卡斯水乐园
						</p>四季全时运营的水乐园，在古希腊神话与现代爱琴海风格一秒切换，无与伦比的海洋冒险世界将生动展示，挑战吧，勇者！燃烧吧，肾上腺！高刺激滑道、高空大喇叭、极限竞速滑道、疯狂巨碗等等，20余套戏水滑道，足够让戏水爱好者为之疯狂。区内还配置有主题餐厅、特色商店及各类功能齐全的游客服务设施，满足游客更多需求。
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {

			}
		},
		components: {
			Header
		},
		computed: {

		},
		mounted() {

		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped="scoped">
	.risk {
		width: 100%;
		height: 2169px;
		background: url(../../assets/img/park2.png) no-repeat top center;
		padding-top: 446px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			position: relative;
			z-index: 10;
			background: linear-gradient(180deg,
				rgba(15, 107, 234, 1),
				rgba(52, 142, 240, 1));
			box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);

			.location {
				height: 66px;
				line-height: 66px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: #fff;
				padding: 26px 34px;
				background: url(../../assets/img/new-4.png) no-repeat 15px center;
			}
		}

		.box {
			width: 1200px;
			background: rgba(255, 255, 255, 0.2);
			box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.28);
			border-radius: 0px 0px 10px 10px;
			padding-bottom: 40px;
			margin: 0 auto;

			.info {
				width: 1140px;
				min-height: 1460px;
				background: #fff;
				margin: 0 auto;

				.info-title {
					padding: 68px 0 40px 0;
					width: 100%;
					height: (26+68+40)px;
					line-height: 26px;
					text-align: center;
					font-size: 26px;
					font-family: MicrosoftYaHei-Bold;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				.info-img {
					width: 905px;
					margin: 0 auto;
					text-align: center;
					overflow: hidden;
				}

				.info-p {
					width: 905px;
					margin: 0 auto;
					padding-top: 20px;
					padding-bottom: 40px;
					text-indent: 2em;
					font-size: 16px;
					font-weight: bold;
					color: #333333;
				}

				.info-p1 {
					width: 905px;
					margin: 0 auto;
					padding-bottom: 20px;
					font-size: 14px;
					color: #333333;
					font-family: Regular;
					line-height: 24px;
					p {
						padding-bottom: 20px;
						font-size: 16px;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
<style lang="scss">
	.park {
		.location {
			.el-breadcrumb__inner {
				color: #fff;

				&:hover {
					color: #fff;
				}
			}

			.el-breadcrumb__item:last-child .el-breadcrumb__inner {
				color: #fff;
			}
		}
	}
</style>
