import Vue from 'vue'
// import './plugins/axios'
import http from './http'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import vueConfig from '../vue.config'

Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
  router,
  store,
  http,
  render: h => h(App)
}).$mount('#app')
