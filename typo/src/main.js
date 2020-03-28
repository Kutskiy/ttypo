import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue"
import BootstrapVueIcons from "bootstrap-vue/dist/bootstrap-vue-icons.esm"
import $ from "jquery"
import "jquery/dist/jquery.slim.min"
import "popper.js/dist/popper.min.js"
import "bootstrap-vue/dist/bootstrap-vue.js"
import "bootstrap"


global.jQuery = global.$ = $

Vue.config.productionTip = false

/*// connect jquery via ProvidePlugin
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
};*/

new Vue({
  router,
  store,
  BootstrapVue,
  BootstrapVueIcons,
  render: h => h(App)
}).$mount('#app')
