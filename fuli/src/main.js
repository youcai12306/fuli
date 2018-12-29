// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import tool from './package/tool'
import {post,fetch,patch,put} from './package/http'
import store from './vuex/store'

import {HTTP_DETAIL1,HTTP_DETAIL} from '@/package/common'

Vue.use(ElementUI);

//工具类
Vue.prototype.$tool = tool

//请求接口
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$url1 = HTTP_DETAIL1;
Vue.prototype.$url = HTTP_DETAIL;


//vue点击图片预览放大 https://github.com/fengyuanchen/viewerjs
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
