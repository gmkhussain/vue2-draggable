import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'

import './assets/styles/common.css';

import VueColumnsResizable from 'vue-columns-resizable';

Vue.use(VueColumnsResizable);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
