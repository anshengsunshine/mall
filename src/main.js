import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import store from "./store"

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from "components/common/toast"

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)
// 使用图片懒加载插件
Vue.use(VueLazyLoad,{
  loading: require("./assets/img/common/placeholder.png")
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')