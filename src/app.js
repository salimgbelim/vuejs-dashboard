// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppLayout from './theme/Layout'
import router from './router'
import store from './vuex/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  ...AppLayout,
  store
})

export {app, router, store}
