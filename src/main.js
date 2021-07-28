import Vue from 'vue'
// import './plugins/axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vueConfig from '../vue.config'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
