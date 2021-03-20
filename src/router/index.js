import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
