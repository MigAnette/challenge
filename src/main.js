import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// export const challengeBus = new Vue();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
