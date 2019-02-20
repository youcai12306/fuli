<template>
	<!-- 园区新闻 -->
	<div class="r">
		<div class="title clearDiv">
			<div class="floatLeft">{{$t('i18nView.navTitle1')}}</div>
			<div class="floatRight location">{{$t('i18nView.Position')}}：{{$t('i18nView.navTitle1')}}>{{$t('i18nView.navTitle2')}}</div>
		</div>

		<!-- 所有新闻 -->
		<div class="main-new">
			<div class="hea-img" @click="jumpDetail(list.id)">
				<img :src="img" alt="图片" @error="userAvaterError">
				<div class="bt">
					<p class="p1">{{list.infoTitle}}</p>
					<p class="p2">{{list.createTime}}</p>
				</div>
				<div class="button"></div>
			</div>

			<ul>
				<li v-for="(item,key) in list1" :key="key" @click="jumpDetail(item.id)">
					<i></i>
					<span class="li-itme">{{item.infoTitle}}</span>
					<span class="li-span">{{item.createTime}}</span>
				</li>
			</ul>
		</div>
		<div class="pages">
			<el-pagination background layout="prev, pager, next" :total="totle" :current-page.sync="pageIndex" :page-size="pageSize"
			 @current-change="changePage"></el-pagination>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	import {
		IMG_Url
	} from "@/package/common";
	import defaultHead from "../../assets/img/new-bg2.png";
	export default {
		name: "News",
		data() {
			return {
				list: {},
				list1: [],
				pageSize: 10,
				pageIndex: 1,
				totle: 0,
				img: "",
				isEnglish: Cookies.get('language') == 'en' ? 1 : 0
			};
		},
		methods: {
			//设置默认图片111

			userAvaterError(e) {
				e.target.src = defaultHead;
			},
			// 园区公告
			// 获取新闻數據
			GetList(type, pageSize, pageIndex, isEnglish) {
				this.$fetch(
					`${this.$url2}/api-nkf-callback/mongodb-mucon/info/primary/search?type=${type}&pageSize=${pageSize}&pageNum=${pageIndex}&isEnglish=${isEnglish}`
				).then(res => {
					if (res.code === 200) {
						if (pageIndex == 1) {
							this.list = res.data.content[0];
							if (this.list.infoPic.length) {
								this.$fetch(
									this.$url2 +
									"/api-bkf-staticResource/staticResource-mucon/selectFileById?id=" +
									this.list.infoPic[0].picid
								).then(res => {
									if (res.code === 200) {
										this.img = IMG_Url + res.data.fileName;
									}
								});
							}
						}
						this.list1 = res.data.content;
						this.totle = res.data.totalElements;
					} else {
						this.$message.error("读取新闻列表失败");
					}
				});
			},
			//分页
			changePage(val) {
				this.GetList(1, this.pageSize, val, this.isEnglish);
			},
			jumpDetail(id) {
				this.$router.push({
					path: "/newDetail",
					query: {
						id: id
					}
				});
			}
		},
		created() {
			document.title = "新闻中心";
		},
		mounted() {
			this.GetList(1, this.pageSize, this.pageIndex, this.isEnglish);
		}
// 		watch: {
// 			isEnglish(v) {
// 				this.GetList(0, this.pageSize, this.pageIndex, this.isEnglish);
// 			}
// 		}
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
				margin-top: 40px;
				margin-right: 34px;
			}
		}

		.main-new {
			padding: 31px 34px 0 37px;
			width: 100%;

			.hea-img {
				width: 100%;
				height: 406px;
				position: relative;
				margin-bottom: 5px;

				img {
					width: 100%;
					height: 100%;
					display: block;
				}

				.bt {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 70px;
					background: rgba(43, 43, 43, 0.82);
					padding-left: 21px;
					cursor: pointer;

					.p1 {
						font-size: 16px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
						margin-top: 14px;
						height: 17px;
					}

					.p2 {
						height: 14px;
						font-size: 12px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						color: rgba(157, 157, 157, 1);
						margin-top: 12px;
					}
				}

				.button {
					width: 19px;
					height: 33px;
					position: absolute;
					right: 36px;
					bottom: 20px;
					background: url(../../assets/img/new-7.png) no-repeat;
				}
			}

			ul {
				li {
					position: relative;
					width: 100%;
					height: 54px;
					line-height: 14px;
					padding: 20px 0;
					border-top: 1px solid #d7d7d7;
					padding-left: 20px;
					cursor: pointer;

					i {
						position: absolute;
						width: 5px;
						height: 5px;
						left: 5px;
						top: 24px;
						background: rgba(191, 191, 191, 1);
						border-radius: 50%;
					}

					&:nth-of-type(1) {
						border-top: none;
					}

					span {
						width: 600px;
						height: 14px;
						display: block;
						float: left;
						font-size: 14px;
						font-family: MicrosoftYaHei;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;

						&.li-span {
							width: 200px;
							float: right;
							font-size: 12px;
							font-family: MicrosoftYaHei;
							font-weight: 400;
							color: rgba(157, 157, 157, 1);
							text-align: right;
						}
					}
				}
			}
		}

		.pages {
			position: absolute;
			height: 32px;
			margin-top: 60px;
			text-align: center;
			left: 50%;
			bottom: 30px;
			transform: translateX(-50%);
		}
	}
</style>
