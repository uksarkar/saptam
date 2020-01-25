import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Language from './language/language'

const ln = new Language();

Vue.prototype.$ln = new Language();
// Vue.prototype.$jq = jquery;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
