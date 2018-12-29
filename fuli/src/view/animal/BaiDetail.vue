<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-25
		描述：保育救助\科普活动详情页面  需要ID
	-->
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="location">当前位置><router-link to="/index" tag="span">首页></router-link>
					<router-link to="animal" tag="span">动物百科</router-link>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<li class="li" v-for="(item,keys) in 3" :key="keys" @click="go" :class="{anActive:actives == keys || type == keys}">
							<template v-if="keys == 0">动物课堂</template>
							<template v-if="keys == 1">保育救助</template>
							<template v-if="keys == 2">科普活动</template>
							<img src="../../assets/img/animal-r.png" alt v-show="keys == actives">
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box">
						<template v-if="type == 1 && id == 1">
							<div class="title-1">
								搁浅领航鲸救助(上)<span @click="go">返回</span>
							</div>
							<div class="title-2">
								<span>海南海洋欢乐世界 2016-05-18</span>
							</div>
							<div class="conent-main">
								<p class="span-3">5月17日下午2点，富力湾海边气温骤升至33度，救援人员已经汗流浃背，鲸鱼也出现不适，物业人员又紧急调配一台潜水泵，抽水给鲸鱼降温。</p>
								<div class="box-swiper">
									<img src="../../assets/img/anila/1.png" alt="">
								</div>
								<div class="span-3">
									<p>省救护中心专家及陵水渔政工作人员带担架赶到现场，海洋公园技术人员将领航鲸抬上担架，配合政府部门，准备转运。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/2.png" alt="">
								</div>
								<div class="span-3">
									<p>救生通道打开，准备船运至分界洲。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/3.png" alt="">
								</div>
								<div class="span-3">
									<p>风浪太大，船靠不上岸，救援人员给鲸鱼泼水降温，安抚动物。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/4.png" alt="">
								</div>
								<div class="span-3">
									<p>海浪无情人有情，夜幕降临了，船靠不上来，但救援不能放弃。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/5.png" alt="">
								</div>
								<div class="span-3">
									<p>当晚7点，海洋公园领导现场研究下一步救援方案。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/6.png" alt="">
								</div>
								<div class="span-3">
									<p>深夜11点，渔政领导果断采用备用方案，车运。富力湾及海洋公园多部门联动，几十名员工齐心协力，把鲸鱼平稳吊入卡车。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/7.png" alt="">
								</div>
								<div class="span-3">
									<p>18日0时，鲸鱼转运至省救护中心新村基地，至此，海洋公园技术人员已经连续奋战24小时，完成爱心接力。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila/8.png" alt="">
								</div>
								<div class="span-3">
									<p>本次救助行动得到了富力湾兄弟部门的大力支持，但也暴露出现阶段救援设备不足等问题。相信海洋公园开园后，专业技术团队将会担当起更多的海洋动物救援任务——爱心不会搁浅，救助仍将继续。</p>
								</div>
							</div>
						</template>
						<template v-if="type ==1 && id == 2">
							<div class="title-1">
								搁浅领航鲸救助(下)<span @click="go">返回</span>
							</div>
							<div class="title-2">
								<span>海南海洋欢乐世界 2016-05-18</span>
							</div>
							<div class="conent-main">
								<p class="span-3">5月17日，零点，海南陵水富力湾安保人员在沙滩上发现一头搁浅领航鲸，因缺乏相关技能，在微信群内向海南富力海洋欢乐世界(下称海洋公园)动物专家求助，动物专家陈军、杨晨等立即赶往现场救治。</p>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/1.png" alt="">
								</div>
								<div class="span-3">
									<p>风浪太大，鲸鱼体力不支，陈、杨到达现场后，立即协调工程人员加入抢救行动，调用挖机为鲸鱼开辟避风港。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/2.png" alt="">
								</div>
								<div class="span-3">
									<p>持续工作到东方渐白，避风港已成型，鲸鱼也稳定下来。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/3.png" alt="">
								</div>
								<div class="span-3">
									<p>17日早7点钟，海洋公园主管领导抵达现场，指挥救护工作。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/4.png" alt="">
								</div>
								<div class="span-3">
									<p>9点钟，应急采购药品到位，对搁浅的领航鲸完成第一次肌肉注射。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/5.png" alt="">
								</div>
								<div class="span-3">
									<p>鲸鱼体表有外伤，动物专家进行了消毒处理。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/6.png" alt="">
								</div>
								<div class="span-3">
									<p>因现场情况有限，鲸鱼情况稍有好转，工作人员即联系政府主管部门及海南省救护中心，准备转移。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/7.png" alt="">
								</div>
								<div class="span-3">
									<p>省救护中心的专家和海洋局的领导赶到现场，安排动物的转移及后续救治工作。对富力湾及富力海洋公园团队的迅速反应及妥善处置表示认可。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/8.png" alt="">
								</div>
								<div class="span-3">
									<p>海洋公园救护中心已经封顶，待设备安装调试后，将肩负更多的海洋生物救护功能。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/9.png" alt="">
								</div>
								<div class="span-3">
									<p>海洋公园的救护中心有用于鲸豚类救护的水池，遗憾的是此时此刻还不能使用。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/10.png" alt="">
								</div>
								<div class="span-3">
									<p>救护中心整体落成后，专业的保育水池、先进的的救护设施、健全的医疗设备，将会为海洋救护和科研做出应有的贡献！</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila2/11.png" alt="">
								</div>
							</div>
						</template>

						<template v-if="type ==2 && id == 1">
							<div class="title-1">
								携手 “净滩”，向海洋垃圾宣战<span @click="go">返回</span>
							</div>
							<div class="title-2">
								<span>海南海洋欢乐世界 09-19</span>
							</div>
							<div class="conent-main">
								<div class="span-3">
									<p>近日，海南富力海洋欢乐世界应三亚市蓝丝带海洋保护协会邀请参加 “净滩”公益活动，由运营执行总裁Vincent.r.Pijnenburg带领19人组成的“净滩”小队及水生野生动物救护车前往三亚大东海广场开展活动。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/1.png" alt="">
								</div>
								<div class="span-3">
									<p>在领取本次“净滩”活动的统一服装后，海南富力海洋欢乐世界的志愿者队伍拉开了项目及蓝海保育救护中心的旗帜，等待主办方开幕。<br>
										　　值得一提的是，蓝海保育救护中心是海洋欢乐世界倾力打造的海南省首家功能完善的海洋动物救护繁育基地，配置有专业的养殖及兽医团队，并从国内外厂家引进许多高精尖医疗设备，以承担近海的海洋动物救护任务。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/2.png" alt="">
									<img src="../../assets/img/anila3/3.png" alt="">
								</div>
								<div class="span-3">
									<p>一首《呵护蔚蓝》拉开了此次活动的序幕，配合手语表演昭示出海洋饱受陆地垃圾侵蚀的无声痛苦，希望人类早日警醒，让每个人都行动起来，提高保护海洋的意识。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/4.png" alt="">
									<img src="../../assets/img/anila3/5.png" alt="">
								</div>
								<div class="span-3">
									<p>活动环节从学习海洋生态知识、了解海洋污染的严重情况开始，到志愿者宣誓并在“向海洋垃圾宣战”的宣传板上签字留名后，全员正式开启“净滩”活动。我们每个人用实际行动来保卫我们的海洋母亲，为还海洋一片蔚蓝尽一份力量。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/6.png" alt="">
									<img src="../../assets/img/anila3/7.png" alt="">
								</div>
								<div class="span-3">
									<p>进入沙滩后短短一段路程，志愿者们就捡到许多被丢弃而埋藏在沙滩上的木棍、废纸、塑料、烟头等垃圾。这些影响沙滩容貌甚至存在安全隐患的垃圾多为游客漫步沙滩时随手丢弃的。志愿者们近一个小时的“净滩”行动居然“收获”颇丰。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/8.png" alt="">
								</div>
								<div class="span-3">
									<p>“净滩”活动结束后，蓝海保育救护中心团队在三亚大东海的海岸边进行了一场“特殊”的展示——水生哺乳动物救助演练，向人们讲解救助海洋动物的正确操作方法，避免对搁浅动物的二次伤害。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila3/9.png" alt="">
								</div>
								<div class="span-3">
									<p>此次“净滩”活动旨在让海洋环保事业增添新能量，提高人们的海洋环保意识，让更多人参与到“净滩”活动中，做到真正的身体力行，也让大家看到海洋欢乐世界对海洋环保事业的恒心与决心，从而获得更多人的理解和支持。<br>
										　　当然 “净滩”不是一日之功，它更需要我们所有人一同携手对抗海洋垃圾，与海洋垃圾战斗到底！</p>
								</div>
							</div>
						</template>

						<template v-if="type == 2 && id == 2">
							<div class="title-1">
								“海洋欢乐世界”科普进校园暨世界海洋日系列活动<span @click="go">返回</span>
							</div>
							<div class="title-2">
								<span>海南海洋欢乐世界 6月11日</span>
							</div>
							<div class="conent-main">
								<div class="span-3">
									<p>如果没有海洋，地球上就不可能拥有这么瑰丽多彩的生命世界，海洋是生命的摇篮，是需要我们共同守护的蓝色家园。</p>
								</div>
								<div class="span-3">
									<p>6月11日，由陵水县海洋与渔业局、陵水县教科局联合主办，海南富力海洋欢乐世界承办的为期一个月的世界海洋日“科普进校园”系列宣传活动，在北斗小学隆重揭幕。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/1.png" alt="">
									<img src="../../assets/img/anila4/2.png" alt="">
									<span>图：全校师生在校园内共同参加宣传活动</span>
								</div>
								<div class="span-3">
									<p>活动中上千名师生共同观看了关于海洋动物保护的宣传视频，视频中刘烨作为全国水生野生动物保护的形象大使，向大家宣扬保护海龟，保护海洋环境的深刻意义。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/3.png" alt="">
									<span>图：数千名师生一同观看海洋保护宣传视频</span>
								</div>
								<div class="span-3">
									<p>陵水县海洋局符方尧副局长在开幕式上致辞，符局长表示，海洋是人类的共同家园，是人类可持续发展的资源宝库。我县把开发和保护海洋，作为推动全县经济发展的一项重大措施，今天的海洋宣传进校园活动必将对我县海洋开发与保护工作产生深远的影响。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/4.png" alt="">
									<span>图：符方尧副局长致辞</span>
								</div>
								<div class="span-3">
									<p>开幕式结束后，全体学生有序参观了此次设置小型水族馆，本次展出动物有绿海龟、玳瑁、鲎、海苹果等动物，正与小学课文中《美丽富饶的西沙群岛》中提及的内容相贴近。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/5.png" alt="">
									<span>图：经救助的海龟</span>
								</div>
								<div class="span-3">
									<p>在专业人员的指导及看护下，学生们还与海星、海参等海洋动物进行了零距离接触，通过这种方式可更直观了解海洋动物的特点、生活习性等知识，寓教于乐。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/6.png" alt="">
									<span>图：工作人员讲解海星</span>
									<img src="../../assets/img/anila4/7.png" alt="">
									<span>图：尝试触摸感受黑海参</span>
									<img src="../../assets/img/anila4/8.png" alt="">
									<span>图：正在参观展出生物的同学们</span>
								</div>
								<div class="span-3">
									<p>值得一提的是，我项目作为此次活动承办方，将将海洋救护水车开进校园。隶属于项目的蓝海保育救护中心已于近期投入使用，并成立了专业救护队，面向全省免费救援水生野生动物，标志着我省海洋动物救护工作迈入了崭新阶段。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila4/9.png" alt="">
									<span>图：蓝海保育救护中心负责人杨经理接受访问</span>
								</div>
								<div class="span-3">
									<p>在搁浅动物需要救助的时候，水车将担起救援生命线，车身有联系电话及二维码，热心群众发现搁浅动物，请尽量避免人群围观，保持其体表湿润，第一时间拨打救援电话（0898-8336 2777）</p>
								</div>
							</div>
						</template>
						<template v-if="type == 2 && id == 3">
							<div class="title-1">
								行动吧！海洋小卫士！<span @click="go">返回</span>
							</div>
							<div class="title-2">
								<span>海南海洋欢乐世界 6月28日</span>
							</div>
							<div class="conent-main">
								<div class="span-3">
									<p>海洋欢乐世界的“科普进校园”系列活动已举办三场，这一次，我们的蓝海保育救护中心专业救护队将“移动水族馆”开到了三亚，走进三亚外国语学校。对同学们而言，这些小动物不仅是突然来临的惊喜，也是最贴切的科普大使。</p>
								</div>
								<div class="span-3">
									<p>听君一言，惠及你我</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/1.png" alt="">
									<img src="../../assets/img/anila5/2.png" alt="">
									<img src="../../assets/img/anila5/3.png" alt="">
								</div>
								<div class="span-3">
									<p>活动最开始，同学们通过观看简短的科普视频进行学习。</p>
									<p>我不丑，我很温柔</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/4.png" alt="">
								</div>
								<div class="span-3">
									<p>随后，同学们来到室外设置的小小水族馆前参观。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/5.png" alt="">
								</div>
								<div class="span-3">
									<p>长相最为奇特的鲎，从4亿多年前至今仍保留其原始而古老的样貌，有“活化石”之称，目前在我国因为滥捕滥捞而濒临灭绝。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/6.png" alt="">
								</div>
								<div class="span-3">
									<p>海苹果的身体呈卵形，有呈管状的管足。它们是滤食性动物，用他们树枝状的触手滤食水中的浮游生物，然后将被触手粘住的食物送入口中。</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/7.png" alt="">
								</div>
								<div class="span-3">
									<p>海星与海参、海胆等同属棘皮动物，一般有五个腕，是肉食性动物，以贝类、虾蟹、蠕虫、甚至鱼类等为食。广泛分布于砂质海底、软泥海底、珊瑚礁及各种深度的海洋中。</p>
									<p>手绘我心，手写我意</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/8.png" alt="">
									<img src="../../assets/img/anila5/9.png" alt="">
									<img src="../../assets/img/anila5/10.png" alt="">
								</div>
								<div class="span-3">
									<p>将自己的奇思妙想与刚习得的海洋保护知识相结合，用彩色水笔在空白的纸袋上描绘，亲手绘制属于自己的特别环保手袋。</p>
									<p>以我之名，保护你</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/11.png" alt="">
									<img src="../../assets/img/anila5/12.png" alt="">
									<img src="../../assets/img/anila5/13.png" alt="">
								</div>
								<div class="span-3">
									<p>活动现场派发了环保手带，每个人签下自己的姓名，成为蓝海小卫士，保护海洋需要你我一点一滴的力量，所以行动吧！蓝海小卫士们！</p>
									<p>海洋保护，义无反顾</p>
								</div>
								<div class="box-swiper">
									<img src="../../assets/img/anila5/14.png" alt="">
									<img src="../../assets/img/anila5/15.png" alt="">
								</div>
								<div class="span-3">
									<p>蓝海保育救护中心是海洋欢乐世界下以公益与海洋救助为主的场馆，总投资约4000万元，占地面积逾5000平米，已于近期投入使用，保育中心内设置有检疫隔离区和兽医院区，并从国内外厂家引进许多高精尖医疗设备，以承担动物进口过程的隔离检疫任务及近海的海洋动物救护任务，面向全省免费救援水生野生动物，标志着我省海洋动物救护工作迈入了崭新阶段。<br>
										　　热心群众发现搁浅动物，请尽量避免人群围观，保持其体表湿润，第一时间拨打救援电话（0898-8336 2777）</p>
								</div>
							</div>
						</template>

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
				actives: 0,
				type: this.$route.params.type,
				id: this.$route.params.id
			}
		},
		components: {
			Header
		},
		computed: {

		},
		mounted() {
			if (!this.type || !this.id) { //没有判断状态和ID
				this.$router.push({
					path: '/animal',
					query: {
						type: this.type || '1'
					}
				})
			} else {
				this.actives = this.type;
			}
		},
		methods: {
			go() { //返回
				this.$router.push({
					path: '/animal',
					query: {
						type: this.type
					}
				})
			}
		},
	}
</script>

<style lang='scss' scoped>
	.risk {
		width: 100%;
		background: #fff url(../../assets/img/theme-animal-bg.png) no-repeat top center;
		padding-top: 438px;
		padding-bottom: 50px;

		.title {
			width: 1200px;
			margin: 0 auto;
			height: 66px;
			background: linear-gradient(180deg,
				rgba(15, 107, 234, 1),
				rgba(52, 142, 240, 1));
			box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.35);

			.location {
				//   height: 22px;
				height: 66px;
				line-height: 66px;
				font-size: 14px;
				font-family: FZZZHONGJW--GB1-0;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				padding-left: 34px;
				background: url(../../assets/img/new-4.png) no-repeat 15px center;
				cursor: pointer;
			}
		}

		.content {
			width: 1200px;
			margin: 0 auto;

			.left {
				width: 250px;
				background: rgba(255, 255, 255, 0.2);
				padding-bottom: 30px;
				border-radius: 0 0 10px 10px;

				.ul {
					width: 213px;
					margin: 0 auto;
					background-color: rgba(255, 255, 255, 1);
					padding-top: 30px;

					.li {
						position: relative;
						height: 70px;
						line-height: 70px;
						text-align: center;
						font-size: 18px;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						cursor: pointer;

						img {
							position: absolute;
							width: 8px;
							height: 14px;
							margin-left: 10px;
							top: 50%;
							margin-top: -7px;
							right: 30px;
						}

						&:hover div {
							display: block;
						}

						div {
							display: none;
							left: 222px;
							top: 0;
							width: 370px;
							height: 114px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
							position: absolute;
							z-index: 10;
							padding: 25px;

							&:after {
								content: "";
								position: absolute;
								top: 50%;
								left: -4px;
								transform: translate(-50%, 0);
								border-right: 9px solid rgba(255, 255, 255, 1);
								/*此处将左右的边框设置为透明色*/
								border-top: 9px solid transparent;
								border-bottom: 9px solid transparent;
								margin-top: -32px;
							}

							ul {
								li {
									float: left;
									height: 28px;
									font-size: 14px;
									font-weight: 400;
									color: rgba(153, 153, 153, 1);
									line-height: 28px;
									padding: 0 10px;
								}

								.liActive {
									color: rgba(249, 126, 47, 1);
								}
							}
						}
					}

					.anActive {
						background: rgba(249, 126, 47, 1);
						color: rgba(255, 255, 255, 1);
					}
				}
			}

			.right {
				width: 908px;
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.08);
				border-radius: 0px 0px 10px 10px;
				padding-bottom: 44px;

				.box {
					width: 863px;
					min-height: 800px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;
					padding: 50px 48px 50px 32px;

					.title-1 {
						position: relative;
						width: 100%;
						padding-right: 80px;
						height: 35px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 24px;
						line-height: 35px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						span {
							position: absolute;
							top: 0;
							right: 0;
							width: 74px;
							height: 33px;
							text-align: center;
							background: rgba(235, 235, 235, 1);
							border: 1px solid rgba(210, 210, 210, 1);
							font-size: 14px;
							color: #666666;
							cursor: pointer;
						}
					}

					.title-2 {
						width: 100%;
						height: 30px;
						margin-top: 10px;
						line-height: 30px;
						font-size: 18px;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						span {
							font-size: 14px;
							color: #999999;
						}
					}

					.box-swiper {
						width: 100%;
						overflow: hidden;
						position: relative;
						text-align: center;

						* {
							max-width: 100%;
							display: inline-block;
							;
						}

						span {
							margin-top: 20px;
							margin-bottom: 20px;
							display: block;
							color: #666666;
						}

					}

					.span-3 {
						text-indent: 2em;
						line-height: 24px;
						font-size: 14px;
						color: #333;
						margin-bottom: 20px;
						margin-top: 20px;

						* {
							text-indent: 2em;
						}
					}

				}
			}
		}
	}

	.conent-main {
		margin-top: 20px;
		width: 100%;
		height: 667px;
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
</style>
<style lang="scss">
	.box-swiper {

		.swiper-button-next,
		.swiper-button-prev {
			width: 38px;
			height: 89px;
			background: rgba(51, 51, 51, 0.2) url(../../assets/img/new-5.png) no-repeat;
			top: 50%;
			transform: translateY(-50%);

			&:focus {
				outline-style: none;
			}
		}

		.swiper-button-prev {
			left: 20px;
			background: url(../../assets/img/new-6.png) no-repeat;
		}

		.swiper-button-next {
			right: 20px;
		}
	}
</style>
