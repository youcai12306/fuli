<template>
	<!--
    	作者：lixiaoyi
    	时间：2018-12-24
    	描述：游玩指南
    -->
	<section>
		<Header></Header>
		<div class="risk">
			<div class="title">
				<div class="location">
					<el-breadcrumb separator=">">
						<el-breadcrumb-item>当前位置</el-breadcrumb-item>
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>游玩指南</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			<div class="content clearDiv">
				<div class="left floatLeft">
					<ul class="ul">
						<li class="li" @click="actives = 0" :class="{anActive:actives == 0}">
							门票价格
						</li>
						<!-- <li class="li" @click="actives = 1" :class="{anActive:actives === 1}">
						酒店预定
					</li> -->
						<li class="li" @click="actives = 2" :class="{anActive:actives == 2}">
							营业时间
						</li>
						<li class="li" @click="actives = 3" :class="{anActive:actives == 3}">
							交通指南
						</li>
						<li class="li" @click="actives = 4" :class="{anActive:actives == 4}">
							常见问题
						</li>
						<li class="li" @click="actives = 5" :class="{anActive:actives == 5}">
							宾客服务
						</li>
						<li class="li" @click="actives = 6" :class="{anActive:actives == 6}">
							恶劣天气预案
						</li>
						<li class="li" @click="actives = 7" :class="{anActive:actives == 7}">
							年卡/会员卡
						</li>
						<li class="li" @click="actives = 8" :class="{anActive:actives == 8}">
							园区地图
						</li>
					</ul>
				</div>
				<div class="right floatRight">
					<div class="box7 box0" v-if="actives == 0">
						<div class="info">
							<div class="info-1">海洋欢乐世界度假区——门票<router-link tag="i" to="/tickets/1"></router-link></div>
							<div class="info-title-2" v-if="status">有效期：2018年1月1日~2019年1月1日<span>单位：每人/元</span></div>
							<div class="info-2">
								<div class="info-2-tr">
									<div class="info-2-td">门票类别</div>
									<div class="info-2-td">平日</div>
									<div class="info-2-td">特定日</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">成人票（示例）</div>
									<div class="info-2-td color">XXX元/人</div>
									<div class="info-2-td color">XXX元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">儿童票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">长者票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">优待票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">两天全票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">两天儿童票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
								<div class="info-2-tr" v-if="status">
									<div class="info-2-td">两天长者票</div>
									<div class="info-2-td color">260元/人</div>
									<div class="info-2-td color">260元/人</div>
								</div>
							</div>

							<div class="info-2" v-if="status">
								<div class="info-2-tr">
									<div class="info-2-td">门票类别</div>
									<div class="info-2-td">平日</div>
									<div class="info-2-td">备注</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">与海豚畅游体验券单人价格</div>
									<div class="info-2-td color">1500</div>
									<div class="info-2-td color">不含门票</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">与海豚畅游体验券家庭票价格</div>
									<div class="info-2-td color">3750</div>
									<div class="info-2-td color">不含门票</div>
								</div>
							</div>
							<div class="a" v-if="status">
								家庭票适用对象：两名成人及一名儿童或一名成人及两名儿童【其中每张套票必须含一名1.5米（不含）以下儿童】<br /> 说明：详情请阅活动链<a href="http://zh.chimelong.com/Oceankingdom/science/dolphin.shtml">http://zh.chimelong.com/Oceankingdom/science/dolphin.shtml</a>
							</div>
							<div class="info-2" v-if="status">
								<div class="info-2-tr">
									<div class="info-2-td">门票类别</div>
									<div class="info-2-td">平日</div>
									<div class="info-2-td">特定日</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">海底区：2人海底夜宿平日两天套票</div>
									<div class="info-2-td color">260</div>
									<div class="info-2-td color">含门票</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">海底区：2人海底夜宿特定日两天套票</div>
									<div class="info-2-td color">2600</div>
									<div class="info-2-td color">含门票</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">深海区、海景区：2人海底夜宿平日两天套票</div>
									<div class="info-2-td color">2600</div>
									<div class="info-2-td color">含门票</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">深海区、海景区日两天套票</div>
									<div class="info-2-td color">2600</div>
									<div class="info-2-td color">含门票</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">深海区、海景区：2人海底夜宿特 定日两天套票</div>
									<div class="info-2-td color">2600</div>
									<div class="info-2-td color">含门票</div>
								</div>
							</div>
							<div class="a" v-if="status">
								家庭票适用对象：两名成人及一名儿童或一名成人及两名儿童【其中每张套票必须含一名1.5米（不含）以下儿童】<br /> 说明：详情请阅活动链<a href="http://zh.chimelong.com/Oceankingdom/science/dolphin.shtml">http://zh.chimelong.com/Oceankingdom/science/dolphin.shtml</a>
							</div>

							<div class="info-p">
								<b>温馨提示：</b><br>
								1、等待上传
								<!-- 1、购票前请仔细阅读乐园《游客须知》、服务说明和相关公告，游客购票即被视为已认可乐园的相关规定。<br>
								2、身高1.2米（不含1.2米）以下的儿童免票；身高1.2米（含1.2米）—1.5米（不含1.5米）之间的需购儿童票；身高1.5米以上（含1.5米）的游客需购全价票。<br>
								3、免票：身高1.2米（不含1.2米）以下儿童；70岁以上的老人需出事老年证或身份证；持有国家残联颁发《一、二级残疾证》的残障人士均需一名持全价票具有监护能力的成人陪同方可入园（监护人需出示有效身份证件登记）。导游证（非带团导游）、军官证、记者证、残疾证均不属于免票人士。<br>
								以上免票和优惠票价人士均须有一名具有监护能力的成人陪同，且每名全价票人士限带一名免票人士和优惠票人士入园。<br>
								4、本票为入园门票，门票一经售出，概不退换，涂改无效，在有效期内使用一次有效（一人一票），副券撕下作废。<br>
								5、假票无效，发现即没收，本乐园保留追究相关法律责任的权利；乐园对门票丢失、失窃、过期概不负责。<br>
								6、导游票持有人必须出示本人的导游证，如证件与本人不符，一经发现，立即没收该导游票。<br>
								7、乐园不保证游客一次入园可游览到园内所有项目，乐园可能由于恶劣天气、特殊活动、设备更新或例行检修。<br> -->
							</div>

						</div>


					</div>
					<!-- <div class="box1" v-if="actives == 1">
					2
				</div> -->

					<!-- 营业时间 -->
					<div class="box2" v-if="actives == 2">
						<el-row class="row1">
							<el-col>海洋欢乐世界度假区营业时间</el-col>
						</el-row>

						<el-row class="row2">
							<el-col class="col1">平日 9.30~17.30  &nbsp;&nbsp;&nbsp;&nbsp; 周末 9.00~18.00</el-col>
							<el-col class="col2">设施开放时间表</el-col>
							<el-col class="col3">（当日设备开放情况将根据天气情况动态调整，请以现场公告为准，或提前咨询景区客服中心：010-67389898或010-67383333转）</el-col>
							<el-col class="col4">
								<span class="span1" :class="{active:tab==0}" @click="tab=0">游玩设施开放时间<i></i></span>
								<span :class="{active:tab==1}" @click="tab=1">动物场馆开放时间<i></i></span>
								<span :class="{active:tab==2}" @click="tab=2">精彩演艺表演时间<i></i></span>
							</el-col>
						</el-row>

						<el-row>
							<div class="tab0" v-if="tab==0">
								<div class="th">
									<div class="td">序号</div>
									<div class="td">分区</div>
									<div class="td">设备名称</div>
									<div class="td">开放时间</div>
								</div>
								<div class="tr">
									<div class="td">1</div>
									<div class="td">麦迪卡斯水乐园</div>
									<div class="td">梦幻转马</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="tr">
									<div class="td">2</div>
									<div class="td">冒险海洋</div>
									<div class="td">水手秋千</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="footer">
									<p>备注：</p>
									<p>等待上传</p>
									<!-- <p>1、如果气温不能满足开放要求,设备开放时间另行通知。</p>
									<p>2、甜品王国区果冻历险记每周一开放至17:00。</p>
									<p>3、大型游乐设施属于特种设备，应国家质检总局相关规定要求，需进行定期维护。</p>
									<p>4、受降水、大风等天气影响，部分设备可能临时暂停开放，以现场工作人员通知为准。</p>
									<p>5、例行维护项目每日约12:00可恢复开放，实际开放情况以现场为准。</p>
									<p>6、当日设备开放具体情况可拨打客服电话010-67389898或010-67383333转8004进行咨询。
										根据国家安全和技术监督部门的规定，在不能满足设备运行安全的恶劣天气及其它自然灾害等情况下（如:雷电、风沙、雨雪、
										冰雹、大雾等）园内设施、表演将关闭或部分关闭，公园项目明日开放情况以当天显示为准，实时开放情况以项目现场告知为
										准。也请您关注天气变化合理安排游玩时间。</p> -->
								</div>
							</div>
							<div class="tab0" v-if="tab==1">
								<div class="th">
									<div class="td">序号</div>
									<div class="td">分区</div>
									<div class="td">动物场馆名称</div>
									<div class="td">开放时间</div>
								</div>
								<div class="tr">
									<div class="td">1</div>
									<div class="td">麦迪卡斯水乐园</div>
									<div class="td">梦幻转马</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="tr">
									<div class="td">2</div>
									<div class="td">冒险海洋</div>
									<div class="td">水手秋千</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="footer">
									<p>备注：</p>
									<p>等待上传</p>
								</div>
							</div>
							<div class="tab0" v-if="tab==2">
								<div class="th">
									<div class="td">序号</div>
									<div class="td">分区</div>
									<div class="td">精彩演艺名称</div>
									<div class="td">开放时间</div>
								</div>
								<div class="tr">
									<div class="td">1</div>
									<div class="td">麦迪卡斯水乐园</div>
									<div class="td">梦幻转马</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="tr">
									<div class="td">2</div>
									<div class="td">冒险海洋</div>
									<div class="td">水手秋千</div>
									<div class="td">10:30-17:00</div>
								</div>
								<div class="footer">
									<p>备注：</p>
									<p>等待上传</p>
								</div>
							</div>
						</el-row>
					</div>

					<!-- 交通指南 -->
					<div class="box3" v-if="actives == 3">
						<div class="box_header">交通指南</div>
						<div class="map"><a href="https://j.map.baidu.com/WC0L2" target="_blank"><img src="../../assets/img/ditu10.png" alt=""></a></div>
						<div class="table">
							<el-row class="th">
								<el-col :span="4">出发地</el-col>
								<el-col :span="10">交通方式</el-col>
								<el-col :span="10">路线</el-col>
							</el-row>
							<div class="tr">
								<div class="l1 floatLeft">
									<p>三亚</p>
								</div>
								<div class="l1 floatLeft">
									<p>自驾<br /><br /><img src="../../assets/img/ditu4.png" alt=""></p>
								</div>
								<div class="l2 floatLeft">
									<b>路线1：</b>由三亚市区驶入海南环线高速，向东南方行驶，进入陵水，沿陵水文黎大道行驶即可。总行程83.3公里。 <br /><br />
									<b>路线2：</b>由三亚市区沿海榆（东）线，林旺路驶入陵水文黎大道，沿文黎大道行驶即可。总行程80.7公里。
								</div>
								<div class="l1 floatLeft">
									<p>公共交通<br /><br /><img src="../../assets/img/ditu5.png" alt=""></p>
								</div>
								<div class="l2 floatLeft">
									<b>铁路路线：</b>三亚开往陵水的动车共有20趟次，到达陵水站后，可搭乘91路公交车，在海洋公园站下车即可。<br /> <br />
									<b>长途客车路线：</b>三亚开往陵水的长途客车共有13趟次，到达陵水车站后，可选择：<br />
									（1）搭乘91路公交车，汽车站站点上车，海洋公园站点下车即可。<br />
									（2）搭乘92路公交车，步行至椰林中心农贸市场站上车，海洋公园站下车。<br />
								</div>
							</div>

							<div class="tr">
								<div class="l1 floatLeft">
									<p>海口</p>
								</div>
								<div class="l1 floatLeft">
									<p>自驾<br /><br /><img src="../../assets/img/ditu4.png" alt=""></p>
								</div>
								<div class="l2 floatLeft">
									由海口市区驶入海南环线高速，向南行驶进入陵水，沿陵水文黎大道行驶即可。总行程215.9公里。
								</div>
								<div class="l1 floatLeft">
									<p>公共交通<br /><br /><img src="../../assets/img/ditu5.png" alt=""></p>
								</div>
								<div class="l2 floatLeft">
									<b>铁路路线：</b>海口开往陵水的动车共有22趟次，到达陵水站后，可搭乘91路公交车，在海洋公园站下车即可<br />
									<b>长途客车路线：</b>海口开往陵水的长途客车共有25趟次，到达陵水车站后，可选择：<br /><br />
									（1）搭乘91路公交车，汽车站站点上车，海洋公园站点下车即可。<br /><br />
									（2）搭乘92路公交车，步行至椰林中心农贸市场站上车，海洋公园站下车。
								</div>
							</div>

						</div>
					</div>

					<!-- 常见问题 -->
					<div class="box4" v-if="actives == 4">
						<div class="box_header">常见问题</div>
						<div class="box4_con">
							<el-collapse accordion>
								<el-collapse-item>
									<template slot="title">
										<span class="span">1</span>海洋公园在哪里？
									</template>
									<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
									<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
								</el-collapse-item>
								<template v-for="(item,k) in 10">
									<el-collapse-item>
										<template slot="title">
											<span class="span">{{k+2}}</span>海洋公园票价节假日打不打折？
										</template>
										<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
										<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
									</el-collapse-item>
								</template>

							</el-collapse>
						</div>
					</div>

					<!-- 宾客服务 -->
					<div class="box5" v-if="actives == 5" style="background:#fff url();">
						<div class="botton" style="margin-bottom: 40px;">宾客服务</div>
						<div class="box5-title" v-if="status">
							为了大家的安全着想，我们会依据天气情况开放或关闭部分设施。
						</div>
						<div class="Dbox mt-10">
							<p class="p1">游客中心</p>
							<p class="p2">长隆海洋王国设有三个游客服务中心，分别位于团队安检旁、海洋大街旁及鲸鲨馆旁。您可以在此查询资料、 获取地图指南及表演时间表、行程路线建议、餐饮服务查询、残疾人士协助、。</p>
						</div>
						<div class="Dbox">
							<p class="p1">失物认领</p>
							<p class="p2">位于游客服务中心内。</p>
						</div>
						<div class="Dbox">
							<p class="p1">干身机</p>
							<p class="p2">本园区设有三处干身机，供宾客服务，分别位于极地探险号、激流之旅及海洋露天剧场。</p>
						</div>
						<div class="Dbox">
							<p class="p1">自助取款机</p>
							<p class="p2">本园区设有中国工商银行自助取款机，位于散客安检旁。</p>
						</div>
						<div class="Dbox">
							<p class="p1">婴儿车/轮椅</p>
							<p class="p2">本园区设有两个婴儿车/轮椅使用服务，分别位于海洋大街游客服务中心旁及鲸鲨馆游客服务中心旁。</p>
						</div>
						<div class="Dbox">
							<p class="p1">储物柜</p>
							<p class="p2">本园区设有两处储物柜使用服务，分别位于散客安检旁及海洋大街旁。</p>
						</div>
						<div class="Dbox">
							<p class="p1">医务室</p>
							<p class="p2">位于海豚湾海豚剧场旁，为有需要的宾客提供应急医疗服务。</p>
						</div>
						<div class="Dbox">
							<p class="p1">寻人/迷童认领</p>
							<p class="p2">第三卫生间</p>
						</div>
						<div class="Dbox">
							<p class="p1">指定吸烟区</p>
							<p class="p2">为了所有宾客着想，请于指定吸烟区内吸烟。请留意指定吸烟区的标志，或向工作人员查询。</p>
						</div>
						<div class="Dbox">
							<p class="p1">指纹套票须知</p>
							<p class="p2">套票均需提前进行指纹数据登记，入园时仅限同一人验证使用。请妥善保管，如不慎遗失需另行购票。套票指纹数据仅作入园凭证，门票过期后</p>
						</div>
						<div class="Dbox">
							<p class="p1">「海洋特快」快速通道</p>
							<p class="p2">长隆海洋王国设有三个游客服务中心，分别位于团队安检旁、海洋大街旁及鲸鲨馆旁。您可以在此查询 资料、 获取地图指南及表演时间表、</p>
						</div>
						<div class="Dbox">
							<p class="p1">伤健人土服务</p>
							<p class="p2">海洋王国提供轮椅有偿使用服务，本园区景点设有可供伤健人士使用的配套设施，包括专用洗手间、无障碍通道及剧场看台等，为乘坐轮椅的宾</p>
						</div>

						<div class="Fbox">
						</div>

					</div>

					<!-- 恶劣天气预案 -->
					<div class="box5" v-if="actives == 6">
						<div class="botton">恶劣天气预案</div>
						<div class="box5-title">
							为了大家的安全着想，我们会依据天气情况开放或关闭部分设施。
						</div>
						<div class="box6">
							<p>等待上传</p>
							<!-- <p><b>恶劣天气时行程安排</b></p>
							<p>无论天气如何，富力海洋欢乐世界致力于为您提供最佳游客体验。园内的多数游乐设施、餐厅和商店将保持正常运营，向公众开放。<br /><br />乐园开放时间和个别游乐设施可能会因少数恶劣天气条件而受到影响，尤其是在六月至九月的雨季期间。请随时查看，以了解风暴警报、乐园封闭情况及更多信息。</p> -->
						</div>
						<div class="Fbox">
						</div>
					</div>

					<!-- 年卡/会员卡 -->
					<div class="box7" v-if="actives == 7">
						<div class="info-title">年卡/会员卡</div>
						<div class="info">
							<div class="info-1">海洋欢乐世界度假区——年卡<i></i></div>
							<div style="margin-bottom: 150px;">年卡介绍信息等待上传</div>
							<div class="info-2" v-if="status">
								<div class="info-2-tr">
									<div class="info-2-td">人群类别</div>
									<div class="info-2-td">平日年卡</div>
									<div class="info-2-td">通完年卡</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">成人卡</div>
									<div class="info-2-td color">888</div>
									<div class="info-2-td color">1220</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">儿童/年长者卡</div>
									<div class="info-2-td color">660</div>
									<div class="info-2-td color">1088</div>
								</div>
							</div>
						</div>

						<div class="info">
							<div class="info-1">海洋欢乐世界度假区——会员卡<i></i></div>
							<div style="margin-bottom: 150px;padding-bottom: 200px;">会员卡介绍信息等待上传</div>
							<div class="info-2" v-if="status">
								<div class="info-2-tr">
									<div class="info-2-td">人群类别</div>
									<div class="info-2-td">平日年卡</div>
									<div class="info-2-td">通完年卡</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">成人卡</div>
									<div class="info-2-td color">888</div>
									<div class="info-2-td color">1220</div>
								</div>
								<div class="info-2-tr">
									<div class="info-2-td">儿童/年长者卡</div>
									<div class="info-2-td color">660</div>
									<div class="info-2-td color">1088</div>
								</div>
							</div>
						</div>

						<div class="info-p" v-if="status">
							<b>温馨提示：</b><br>
							1、购票前请仔细阅读乐园《游客须知》、服务说明和相关公告，游客购票即被视为已认可乐园的相关规定。<br>
							2、身高1.2米（不含1.2米）以下的儿童免票；身高1.2米（含1.2米）—1.5米（不含1.5米）之间的需购儿童票；身高1.5米以上（含1.5米）的游客需购全价票。<br>
							3、免票：身高1.2米（不含1.2米）以下儿童；70岁以上的老人需出事老年证或身份证；持有国家残联颁发《一、二级残疾证》的残障人士均需一名持全价票具有监护能力的成人陪同方可入园（监护人需出示有效身份证件登记）。导游证（非带团导游）、军官证、记者证、残疾证均不属于免票人士。<br>
							以上免票和优惠票价人士均须有一名具有监护能力的成人陪同，且每名全价票人士限带一名免票人士和优惠票人士入园。<br>
							4、本票为入园门票，门票一经售出，概不退换，涂改无效，在有效期内使用一次有效（一人一票），副券撕下作废。<br>
							5、假票无效，发现即没收，本乐园保留追究相关法律责任的权利；乐园对门票丢失、失窃、过期概不负责。<br>
							6、导游票持有人必须出示本人的导游证，如证件与本人不符，一经发现，立即没收该导游票。<br>
							7、乐园不保证游客一次入园可游览到园内所有项目，乐园可能由于恶劣天气、特殊活动、设备更新或例行检修。<br>
						</div>
					</div>

					<!-- 园区地图 -->
					<div class="box8" v-if="actives == 8">
						<div class="info-title">园区地图</div>
						<div class="info-8-img">
							<viewer :images="imgs">
								<img v-for="src in imgs" :src="src" :key="src">
							</viewer>
						</div>
						<!-- <div class="info-botton">
						<span class="prev" @click="scale">+</span>
						<span class="next" @click="scale">-</span>
					</div> -->
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
				tab: 0,
				actives: 0,
				imgs: ['../../../static/ditu9.png'],
				status:false
			};
		},
		components: {
			Header
		},
		methods: {

		},
		mounted() {
			let id = this.$route.query.id;
			if (id != undefined) {
				this.actives = id;
			}
		}
	};
</script>
<style lang='scss' scoped>
	.risk {
		width: 100%;
		height: 100%;
		background: url(../../assets/img/ditu_bg.png) no-repeat top center;
		/* background-size: 100%; */
		background-attachment: fixed;
		padding-top: 280px;
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
			
			&:after{
				position: absolute;
				left: -105px;
				top: -227px;
				z-index: 8;
				content: " ";
				width: 529px;
				height: 227px;
				background: url(../../assets/img/ditu-qq.png) no-repeat;
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
				box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.28);
				padding-top: 10px;

				.ul {
					width: 213px;
					margin: 0 auto;
					background-color: rgba(255, 255, 255, 1);

					.li {
						position: relative;
						height: 70px;
						line-height: 70px;
						text-align: center;
						font-size: 18px;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						cursor: pointer;
						border-bottom: 1px solid #E5E5E5;

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
							left: 230px;
							top: -30px;
							width: 370px;
							height: 114px;
							background: rgba(255, 255, 255, 1);
							box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
							position: absolute;

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
								margin-top: -5px;
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
				padding-bottom: 30px;
				padding-top: 10px;

				.box0 {
					width: 863px;
					min-height: 800px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;
				}

				.box2 {
					width: 863px;
					min-height: 800px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;

					.row1 {
						height: 26px;
						font-size: 26px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 20px;
						width: 100%;
						text-align: center;
						padding-top: 50px;
						height: 70px;
						margin-bottom: 27px;
					}

					.row2 {
						border: 1px solid #BFBFBF;
						height: 58px+79px+56px;
						width: 810px;
						margin: 0 auto;

						.col1 {
							width: 100%;
							height: 56px;
							line-height: 56px;
							text-align: center;
							font-size: 16px;
							font-family: MicrosoftYaHei-Bold;
							font-weight: bold;
							color: rgba(38, 129, 238, 1);
						}

						.col2 {
							width: 100%;
							border-top: 1px solid rgba(191, 191, 191, 1);
							text-align: center;
							font-size: 16px;
							font-family: MicrosoftYaHei;
							font-weight: bold;
							line-height: 20px;
							padding-top: 18px;
							margin-bottom: 20px;
							color: rgba(51, 51, 51, 1);
						}

						.col3 {
							width: 100%;
							text-align: center;
							font-size: 12px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);
							line-height: 20px;
						}

						.col4 {
							cursor: pointer;
							margin-top: 12px;
							font-size: 0;
							font-family: MicrosoftYaHei;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							height: 44px;
							line-height: 44px;
							background: rgba(106, 166, 252, 1);

							&:after {
								content: '';
								clear: both;
							}

							span {
								font-size: 18px;
								float: left;
								padding-left: 12px;
								display: inline-block;
								border-left: 1px solid rgba(170, 205, 255, 1);
								width: 256px;
								position: relative;

								i {
									display: block;
									width: 43px;
									height: 36px;
									background: url(../../assets/img/ditu1.png) no-repeat top right;
									position: absolute;
									top: 5px;
									right: 10px;
								}

								&:nth-child(2) {
									i {
										background: url(../../assets/img/ditu3.png) no-repeat top right;
									}
								}

								&:nth-child(3) {
									i {
										width: 54px;
										background: url(../../assets/img/ditu2.png) no-repeat top right;
									}
								}

								&.span1 {
									border-left: none;
								}

								&.active {
									background: #0764E9;

									&:after {
										content: "";
										position: absolute;
										bottom: 0;
										left: 50%;
										transform: translate(-50%, 0);
										border-bottom: 6px solid rgba(255, 255, 255, 1);
										/*此处将左右的边框设置为透明色*/
										border-right: 6px solid transparent;
										border-left: 6px solid transparent;

									}
								}
							}
						}
					}

					.tab0,
					.tab1,
					.tab2 {
						width: 810px;
						margin: 0 auto;
						margin-top: 10px;

						.th {
							height: 40px;
							text-align: center;
							font-size: 14px;
							font-family: MicrosoftYaHei-Bold;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
							line-height: 40px;

							.td {
								float: left;

								&:nth-of-type(1) {
									width: 100px;
									background: #2681EE;
								}

								&:nth-of-type(2) {
									width: 276px;
									background: #FD7100;
								}

								&:nth-of-type(3) {
									width: 226px;
									background: #61C31F;
								}

								&:nth-of-type(4) {
									width: 208px;
									background: #2681EE;
								}
							}
						}

						.tr {
							text-align: center;
							height: 72px;
							line-height: 72px;
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);
							border-left: 1px solid #BFBFBF;
							border-bottom: 1px solid #BFBFBF;

							.td {
								float: left;
								border-right: 1px solid #BFBFBF;

								&:nth-of-type(1) {
									width: 99px;
								}

								&:nth-of-type(2) {
									width: 277px;
								}

								&:nth-of-type(3) {
									width: 226px;
								}

								&:nth-of-type(4) {
									width: 207px;
								}
							}
						}

						.footer {
							width: 810px;
							margin: 0 auto;
							border: 1px solid #BFBFBF;
							border-top: none;
							padding: 20px 26px 28px 15px;

							p {
								line-height: 20px;
								font-size: 14px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(102, 102, 102, 1);
							}
						}
					}

					.tab1 {
						.th {
							.td {
								&:nth-of-type(1) {
									width: 168px;
								}

								&:nth-of-type(2) {
									width: 333px;
									background: #61C31F;
								}

								&:nth-of-type(3) {
									width: 309px;
									background: #2681EE;
								}
							}
						}

						.tr {
							.td {
								&:nth-of-type(1) {
									width: 167px;
								}

								&:nth-of-type(2) {
									width: 333px;
								}

								&:nth-of-type(3) {
									width: 309px;
								}
							}
						}
					}

					.tab2 {
						.theader {
							width: 100%;
							height: 54px;
							line-height: 54px;
							background: rgba(233, 247, 215, 1);
							text-align: center;
							font-size: 16px;
							font-family: MicrosoftYaHei;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
						}

						.tr {
							height: 75px;
							line-height: 75px;

							&.hea {
								height: 37px;
								line-height: 37px;

								.td {
									font-size: 14px;
									font-family: MicrosoftYaHei;
									font-weight: bold;
									color: rgba(51, 51, 51, 1);
								}

							}

							.td {
								float: left;
								font-size: 14px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(51, 51, 51, 1);
								height: 100%;

								&:nth-of-type(1) {
									width: 99px;
								}

								&:nth-of-type(2) {
									width: 122px;
								}

								&:nth-of-type(3) {
									width: 198px;
								}

								&:nth-of-type(4) {
									width: 133px;
								}

								&:nth-of-type(5) {
									width: 133px;
								}

								&:nth-of-type(6) {
									width: 124px;
								}
							}
						}

						.p {
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
							margin-top: 30px;
						}
					}
				}

				.box4,
				.box3 {
					width: 863px;
					min-height: 1000px;
					padding-bottom: 20px;
					background: rgba(255, 255, 255, 1);
					margin: 0 auto;

					.box_header {
						width: 100%;
						text-align: center;
						font-size: 26px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						padding: 65px 0;
					}

					.box4_con {
						width: 810px;
						margin: 0 auto;

					}
				}

				.box3 {
					.map {
						width: 779px;
						margin: 0 auto;
						height: 372px;
						/* border: 1px solid rgba(214, 214, 214, 1); */
						margin-bottom: 46px;
					}

					.table {
						width: 779px;
						margin: 0 auto;

						.th {
							text-align: center;
							background: #C6DDFD;
							height: 60px;
							line-height: 60px;
							border: 1px solid rgba(191, 191, 191, 1);
							border-left: none;
							font-size: 20px;
							font-family: MicrosoftYaHei;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);

							.el-col {
								border-left: 1px solid #BFBFBF;
							}

							.el-col:nth-of-type(1) {
								width: 180px;
							}

							.el-col:nth-of-type(2) {
								width: 196px;
							}

							.el-col:nth-of-type(3) {
								width: 402px;
							}
						}

						.tr {
							font-size: 14px;
							text-align: center;
							font-family: MicrosoftYaHei;
							color: rgba(51, 51, 51, 1);
							height: 398px;
							border-left: 1px solid #BFBFBF;

							.l1 {
								font-size: 18px;
								width: 180px;
								height: 398px;
								position: relative;
								word-break: break-all;
								text-align: center;
								border-right: 1px solid #BFBFBF;
								border-bottom: 1px solid #BFBFBF;

								p {
									position: absolute;
									left: 50%;
									top: 50%;
									transform: translate(-50%, -50%);
								}

								&:nth-of-type(2),
								&:nth-of-type(4) {
									width: 196px;
									height: 170px;
									font-size: 16px;
								}

								&:nth-of-type(4) {
									height: 228px;
								}
							}

							.l2 {
								width: 402px;
								font-size: 14px;
								height: 170px;
								border-right: 1px solid #BFBFBF;
								border-bottom: 1px solid #BFBFBF;
								padding: 25px 31px 0 25px;
								text-align: left;

								&:nth-of-type(5) {
									height: 228px;
								}
							}

						}

					}
				}

				.box5 {
					width: 868px;
					background:#fff url(../../assets/img/ditu11.png) no-repeat top center;
					background-size: cover;
					/* background: #fff; */
					margin: 0 20px;
					padding-top: 40px;

					.botton {
						width: 199px;
						height: 56px;
						line-height: 56px;
						background: rgba(249, 126, 47, 1);
						border-radius: 10px;
						margin: 0 auto 4px auto;

						text-align: center;
						font-size: 26px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(255, 255, 255, 1);
					}

					.box5-title {
						margin: 0 auto;
						width: 742px;
						height: 292px;
						background: url(../../assets/img/ditu6.png) no-repeat top center;
						font-size: 16px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
						padding: 160px 0 0 220px;
					}

					.Dbox {
						width: 780px;
						height: 140px;
						margin: 0 auto;
						border: 1px solid rgba(220, 220, 220, 1);
						padding: 30px 106px 36px 44px;

						&:nth-child(even) {
							background: #DCDCDC;
						}

						&.mt-10 {
							margin-top: -10px;
						}

						.p1 {
							width: 100%;
							height: 20px;
							font-size: 20px;
							font-family: MicrosoftYaHei-Bold;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
							line-height: 20px;
							margin-bottom: 18px;
						}

						.p2 {
							width: 100%;
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);
							line-height: 22px;
						}
					}

					.Fbox {
						width: 408px;
						margin: 0 auto 0 auto;
						padding: 70px 0 55px 0;

						p {
							text-align: center;
							font-size: 14px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);

							&.p1 {
								font-weight: bold;
								font-size: 22px;
								height: 22px;
								line-height: 22px;
								margin-bottom: 32px;
							}

							&.p2 {
								img {
									display: inline-block;
									width: 120px;
									height: 120px;
									margin-bottom: 26px;
								}
							}
						}
					}

					.box6 {
						p {
							width: 723px;
							margin: 0 auto;
							margin-top: 46px;
							font-size: 16px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
						}
					}

				}

				.box7 {
					background: #fff;
					width: 863px;
					margin: 0 auto;
					min-height: 500px;
					padding-top: 60px;

					.info-title {
						margin-bottom: 30px;
						text-align: center;
						font-size: 30px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}

					.info {
						width: 762px;
						margin: 0 auto;
						font-size: 16px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						text-align: center;

						.info-1 {
							height: 60px;
							line-height: 60px;
							width: 100%;
							text-align: left;
							font-size: 24px;
							font-family: MicrosoftYaHei-Bold;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
							position: relative;
							margin-bottom: 12px;

							i {
								display: block;
								position: absolute;
								top: 0;
								right: -70px;
								width: 220px;
								height: 67px;
								background: url(../../assets/img/ditu7.png) no-repeat;
								cursor: pointer;
							}
						}

						.info-2 {
							height: 194px;
							border-left: 1px solid #DCDCDC;
							border-bottom: 1px solid #DCDCDC;
							margin-bottom: 50px;

							.info-2-tr {
								height: 70px;
								line-height: 70px;
								font-size: 16px;
								font-family: MicrosoftYaHei;
								font-weight: 400;
								color: rgba(47, 47, 47, 1);

								&:nth-of-type(1) {
									height: 51px;
									line-height: 50px;
									background: #EEEEEE;
								}
							}

							.info-2-td {
								border: 1px solid #DCDCDC;
								border-left: none;
								border-bottom: none;
								float: left;

								&:nth-of-type(1) {
									width: 368px;
								}

								&:nth-of-type(2) {
									width: 171px;
								}

								&:nth-of-type(3) {
									width: 222px;
								}

								&.color {
									color: #F97E2F;
								}
							}
						}
					}

					.info-p {
						b {
							font-size: 16px;
						}

						width: 762px;
						margin: 0 auto;
						font-size: 14px;
						font-family: MicrosoftYaHei;
						font-weight: bold;
						color: rgba(47, 47, 47, 1);
						line-height: 30px;
						padding-bottom: 100px;
					}
				}

				.box8 {
					background: #fff;
					width: 863px;
					margin: 0 auto;
					padding-top: 50px;
					padding-bottom: 120px;

					.info-title {
						font-size: 26px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 44px;
						text-align: center;
					}

					.info-8-img {
						width: 790px;
						height: 1107px;
						margin: 0 auto;
						cursor: pointer;
					}

					.info-botton {
						text-align: center;
						padding-top: 30px;
						font-size: 0;

						span {
							display: inline-block;
							width: 86px;
							height: 52px;
							line-height: 52px;
							font-size: 50px;
							text-align: center;
							color: #fff;
							cursor: pointer;

							background: #00561F;

							&.next {
								margin-left: 64px;
							}
						}
					}
				}

				.box0 {
					.info .info-2 {
						height: auto;

						.info-2-tr {
							height: 69px;
							line-height: 68px;
						}
					}

					.info-title-2 {
						font-size: 16px;
						font-family: MicrosoftYaHei-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 20px;
						margin-bottom: 30px;
						text-align: left;

						span {
							display: inline-block;
							margin-left: 34px;
						}
					}

					.a {
						font-size: 14px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						text-align: left;
						color: rgba(51, 51, 51, 1);
						padding-bottom: 80px;
					}

					.info-p {
						text-align: left;
					}

					.info .info-1 i {
						background: url(../../assets/img/biao.png) no-repeat;
					}

				}

			}
		}
	}
</style>
<style lang="scss">
	.box4 {
		.el-collapse {
			border: none;
		}

		.el-collapse-item:nth-child(even) {
			.el-collapse-item__header {
				background: #65CEFA;
			}
		}

		.el-collapse-item__header {
			border: none;
			background: #7FB3FD;
			border-radius: 20px;
			margin-bottom: 22px;
			font-weight: bold;
			font-size: 18px;
			color: #fff;
			padding-left: 88px;
			position: relative;

			&.is-active {
				border-radius: 20px 20px 0 0;
			}

			.span {
				display: block;
				position: absolute;
				left: 47px;
				top: 10px;
				width: 27px;
				height: 27px;
				text-align: center;
				line-height: 27px;
				background: rgba(255, 255, 255, 1);
				border-radius: 50%;
				color: #679CFF;
			}
		}

		.el-collapse-item__wrap {
			background: #EFF6FF;
			margin-top: -22px;
			border-radius: 0 0 20px 20px;
			padding: 30px 10px 20px 67px;
			position: relative;
			z-index: 2;
			margin-bottom: 22px;
		}
	}
	.location{
		.el-breadcrumb__inner{
			color: #fff;
			&:hover{
				color: #fff;
			}
		}
		.el-breadcrumb__item:last-child .el-breadcrumb__inner{
			color: #fff;
		}
	}
</style>
