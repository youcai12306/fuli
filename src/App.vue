<template>
  <div id="app">
    <Header2 v-show="$route.meta.nav === 3"></Header2>
    <router-view v-if="isRouterAlive"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"; //引入头部
import Header2 from "@/components/Header2"; //引入个人中心头部
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header2,
    Footer
  },
	provide(){
		return{
			reload:this.reload
		}
	},
	data(){
		return{
			isRouterAlive:true
		}
	},
	methods:{
		reload(){
			this.isRouterAlive = false;
			this.$nextTick(function(){
				this.isRouterAlive = true;
			})
		}
	}
};
</script>

<style>
#app {
  font-family: "MicrosoftYaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 淘宝初始化样式 */
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
  outline: none;
  border: 0;
}
.floatLeft {
  float: left;
}
.floatRight {
  float: right;
}
.clearDiv:after {
  content: "";
  display: block;
  clear: both;
}
</style>
