import Vue from "vue";
import App from "./App.vue";
import _ from "lodash";

Vue.config.productionTip = false;

Vue.prototype.lodash = _;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
