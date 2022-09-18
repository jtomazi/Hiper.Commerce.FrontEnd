import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import router from "./Routes/routes";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import http from "./http/index";
import "@fortawesome/fontawesome-free/js/all";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;

Vue.prototype.$http = http;

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueTheMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
