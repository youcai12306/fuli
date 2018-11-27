<template>
	<div class="reset">
		<div class="login">
			<div class="tabs">
				<p @click="tabs = 1">登錄</p>
				<p @click="tabs = 2">註冊</p>
				<h1 :class="{hover:tabs == 2}"></h1>
			</div>
			<div class="main" v-show="tabs == 1">
				<div class="content">
					<div><label for="">账号：</label><input type="text"></div>
					<div><label for="">密码：</label><input type="password"></div>
					<div>
						<el-button type="primary">登錄</el-button>
					</div>
				</div>
				<div class="third">
					<a href="javascript:;" class="el-icon-info" @click="QQ" id="qqLoginBtn"></a>
					<a href="javascript:;" class="el-icon-success" @click="WX"></a>
				</div>
			</div>
			<div class="main" v-show="tabs == 2">
				<div class="content">
					<div><label for="">账号：</label><input type="text"></div>
					<div><label for="">驗證碼：</label><input type="text"><span @click="getpin" :class="{gray:isActive}">{{showPin}}</span></div>
					<div><label for="">設置密码：</label><input type="password"></div>
					<div><label for="">確認密码：</label><input type="password"></div>
					<div>
						<el-button type="primary">註冊</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: 1,
				showPin: '获取验证码',
				isActive: false
			};
		},
		methods: {
			getpin() {
				if (this.showPin == "获取验证码") {
					clearInterval(setsund);
					let num = 59;
					let setsund = setInterval(() => {
						this.showPin = num + "s后重新发送";
						this.isActive = true;
						num--;
						if (num < 0) {
							clearInterval(setsund);
							this.showPin = "获取验证码";
							this.isActive = false;
						}
					}, 1000);
				}
			},
			QQ() {
				var iWidth = 720; //弹出窗口的宽度; 
				var iHeight = 600; //弹出窗口的高度; 
				//获得窗口的垂直位置 
				var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
				//获得窗口的水平位置 
				var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
				let url =
					'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100490398&response_type=code&scope=get_user_info&redirect_uri=http%3A%2F%2Fpassport.mukewang.com%2Fuser%2Ftpcallback%3Freferer%3Dhttps%3A%2F%2Fwww.imooc.com%26browser_key%3De9c890107f449538752903fc26822cab%26tp%3Dqq%26bind%3D0';
				window.open(url, 'newwindow',
					'height=' + iHeight + ', width=' + iWidth + ',top=' + iTop + ',left=' + iLeft +
					', toolbar=no, menubar=no,scrollbars=no, resizable=no,location=n o, status=no'
				);
// 				this.$axios.get("/url/qqlogin").then(res => {
// 					// window.open(res.data);
// 					var openLink = $("#qq");
// 					openLink.attr('href', res.data);
// 					openLink[0].click();
// 				});
			},
			WX() {
				var iWidth = 720; //弹出窗口的宽度; 
				var iHeight = 600; //弹出窗口的高度; 
				//获得窗口的垂直位置 
				var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
				//获得窗口的水平位置 
				var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
				let url =
					'https://open.weixin.qq.com/connect/qrconnect?appid=wx6b26b7c75e8f3e5a&redirect_uri=http%3A%2F%2Fwww.imooc.com%2Fpassport%2Fuser%2Ftpcallback%3Freferer%3Dhttps%3A%2F%2Fwww.imooc.com%26browser_key%3De9c890107f449538752903fc26822cab%26tp%3Dweixin%26bind%3D0&response_type=code&scope=snsapi_login#wechat_redirect'
				window.open(url, 'newwindow',
					'height=' + iHeight + ', width=' + iWidth + ',top=' + iTop + ',left=' + iLeft +
					', toolbar=no, menubar=no,scrollbars=no, resizable=no,location=n o, status=no'
				);
			}
		},
		mounted() {

		}
	}
</script>

<style scoped="" lang="scss">
	.reset {
		width: 100%;
		height: 100%;
		background: #90B9E4;
		position: fixed;

		.login {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 400px;
			height: 400px;
			transform: translate(-50%, -50%);
			background: #fff;
			border-radius: 5px;
			border: 5px solid #D4E0EB;
			padding: 20px;

			.tabs {
				margin-top: 10px;
				width: 100%;
				height: 20px;
				text-align: center;
				padding-left: 80px;
				padding-bottom: 30px;
				border-bottom: 2px solid #eee;
				position: relative;

				p {
					width: 100px;
					text-align: center;
					font-size: 16px;
					color: #5484B0;
					float: left;
					cursor: pointer;
					height: 20px;
					line-height: 20px;
					display: inline;

					&:hover {
						color: aqua;
					}
				}

				h1 {
					width: 100px;
					height: 2px;
					background: #409eff;
					position: absolute;
					left: 80px;
					bottom: -2px;
					transition: left 0.5s;

					&.hover {
						left: 180px;
					}
				}
			}

			.main {
				width: 100%;

				.content {
					text-align: center;
					width: 100%;
					margin: 0 auto;

					div {
						margin-top: 30px;
						position: relative;

						input {
							width: 200px;
							height: 30px;
						}

						label {
							width: 90px;
							margin-right: 10px;
							text-align: right;
							display: inline-block;
						}

						span {
							position: absolute;
							border-radius: 25px;
							width: 100px;
							height: 26px;
							line-height: 26px;
							right: 26px;
							top: 2px;
							color: #fff;
							display: block;
							background: #16abdf;
							cursor: pointer;

							&.gray {
								background: #cbcbcb;
								border-color: #cbcbcb;
								color: #fff;
								cursor: not-allowed;
							}
						}
					}
				}

				.third {
					margin-top: 20px;
					text-align: center;

					a {
						width: 30px;
						height: 30px;
						display: inline-block;
						font-size: 30px;
						margin: 0 10px;
					}
				}
			}
		}
	}
</style>
