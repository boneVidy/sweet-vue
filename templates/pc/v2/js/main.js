import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/assets/extend_css/iconfont.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n

import '@/styles/index.scss'; // global css

import App from './App';
// import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

// 监控
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import VueClipboard from 'vue-clipboard2';
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock';
import 'sweet-pc-style/lib/index.css';
// if (process.env.NODE_ENV === 'production') {
//   mockXHR();
// }
import 'echarts/theme/macarons.js';
// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 业务组件 lvs
import SweetAdminModules from '@sweetjs/admin-modules';
Vue.use(SweetAdminModules);

Vue.config.productionTip = false;
if (process.env.VUE_APP_SENTRYSWITCH === 'true') {
  Raven.config('https://496ceb077bc74857aa74746b5efb2084@sentry.retailo2o.com/36')
    .addPlugin(RavenVue, Vue)
    .install();
  // 将$Raven绑定在window上，不然无法上报
  window.$Raven = Raven;
}

// 粘贴板
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
});

