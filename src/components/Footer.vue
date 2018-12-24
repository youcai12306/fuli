<template>
	<div class="main">
		<div class="footer">
			<div class="clearDiv">
				<router-link to="/">
					<img src="../assets/img/footer-logo.png" alt="" class="logo floatLeft">
				</router-link>
				<router-link to="/">
					<img src="../assets/img/footer-logo.png" alt="" class="logo floatLeft">
				</router-link>
				<ul>
					<li><a href="javascript:;">关于富力</a></li>
					<li><a href="javascript:;">公园守则</a></li>
					<li><a href="javascript:;">网站地图</a></li>
					<li><a href="javascript:;">人才招聘</a></li>
					<li><a href="javascript:;">富力集团</a></li>
					<li><a href="javascript:;">联系我们</a></li>
				</ul>
				<div class="info floatLeft">
					<div class="info-one clearDiv">
						<div class="open-time">
							<p class="title">园区开放时间</p>
							<p class="time">9：00—22：00</p>
						</div>
						<div class="server-phone">
							<p>客服电话</p>
							<p class="phone">400-XXXXXXXXXX</p>
						</div>
					</div>
					<div>地址：海南XXXXXXXXXXX富力海洋欢乐世界</div>
				</div>
				<div class="down clearDiv">
					<div class="iphone">iphone下载</div>
					<div>Android下载</div>
				</div>
				<div class="code floatLeft">
					<img src="../assets/img/footer-code.png" alt="">
					<p>扫码关注更多信息</p>
				</div>
			</div>
			<div class="copy">Copyright ©浙ICP备16007586号-1 浙公网安备 33010902001056号 版权声明</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {};
		}
	};
</script>
<style lang='scss' scoped>
	.main {
		width: 100%;
		height: 284px;
		background-color: #0764e9;

		.footer {
			width: 1200px;
			margin: 0 auto;
			font-size: 14px;
			color: #ffffff;

			.logo {
				width: 90px;
				height: 73px;
				padding-top: 85px;
				margin-right: 18px;
			}

			ul {
				float: left;
				padding-top: 97px;
				width: 270px;

				li {
					border-right: 1px solid #ffffff;
					padding: 0 10px;
					float: left;
					margin-bottom: 13px;

					a {
						color: #ffffff;
					}
				}
			}

			.info {
				padding-top: 77px;

				.info-one {
					margin-bottom: 10px;

					div {
						float: left;
					}

					.open-time {
						.title {
							margin-right: 57px;
						}

						.time {
							margin-top: 10px;
							width: 124px;
							height: 32px;
							line-height: 32px;
							text-align: center;
							border: solid 1px rgba(255, 255, 255, 0.3);
						}
					}

					.server-phone {
						.phone {
							margin-top: 10px;
						}
					}
				}
			}

			.down {
				margin-left: 44px;
				margin-right: 57px;
				float: left;
				padding-top: 93px;

				div {
					width: 122px;
					height: 34px;
					line-height: 34px;
					padding-left: 40px;
					background-image: url(../assets/img/andorid.png);
					background-repeat: no-repeat;
					background-position: 10px center;
					background-color: rgba(45, 122, 228, 0.27);
				}

				.iphone {
					margin-bottom: 10px;
					background-image: url(../assets/img/iphone.png);
				}
			}

			.code {
				padding-top: 50px;

				img {
					width: 120px;
					height: 120px;
					margin-bottom: 14px;
				}
			}

			.copy {
				margin-top: 23px;
				text-align: center;
			}
		}
	}
</style>
