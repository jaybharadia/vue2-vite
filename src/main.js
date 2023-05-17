import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./plugins";
import "./assets/main.css";
import VueDemiDemo from "vue-demi-demo";

Vue.use(VueDemiDemo);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import staticUrl from "./assets/logo.svg?raw";
console.log("fileUrl", staticUrl);
