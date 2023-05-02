import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./plugins";
import "./assets/main.css";

import  OtpInput  from  "@jaybharadia/otp-input-vue";
import "@jaybharadia/otp-input-vue/dist/vue-otp-input.css";
Vue.use(OtpInput);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import staticUrl from "./assets/logo.svg?raw";



console.log("fileUrl", staticUrl);
