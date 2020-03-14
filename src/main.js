import Vue from 'vue'
import App from './App.vue'
// 引入通用样式
import './styles/base.less'
// 引入字体图标文件
import './styles/iconfont.less'
// 引入lib-flexible模块，自动适配所有的屏幕
import 'lib-flexible'
// 引入路由文件
import router from './router'

import axios from 'axios'

// ---------------注册全局组件---------------
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
import HmInput from './components/HmInput.vue'
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-button', HmButton)
Vue.component('hm-input', HmInput)

// axios的优化
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
