import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Storage from "vue-ls";

Vue.config.productionTip = false;
Vue.use(Storage, {
  namespace: "sp.shop__",
  name: "ls",
  storage: "local",
});

Vue.prototype.$screen = Vue.observable({
  width: window.innerWidth,
});

window.addEventListener("resize", () => {
  Vue.prototype.$screen.width = window.innerWidth;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
