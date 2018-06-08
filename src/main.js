// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import axios from 'axios'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:9999/admin/api/'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
