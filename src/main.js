import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import store from "./store"

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')