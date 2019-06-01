import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
require('firebase/auth')

Vue.config.productionTip = false


let app = null;

//wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {

  //init app if not already created
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  
  }

})