import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAc0ykp3mBqCOxaDxy0ze7LkmNVwbnG5as",
  authDomain: "nsyl-22.firebaseapp.com",
  databaseURL: "https://nsyl-22.firebaseio.com",
  projectId: "nsyl-22",
  storageBucket: "nsyl-22.appspot.com",
  messagingSenderId: "396682077389",
  appId: "1:396682077389:web:12caa5c4b2c90b3edcf584"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
