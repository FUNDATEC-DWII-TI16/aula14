import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bootstrap from "../views/Bootstrap.vue";
import AddressBootstrap from "../views/AddressBootstrap.vue";
import Transitions from "../views/Transitions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bootstrap",
    name: "Bootstrap",
    component: Bootstrap,
  },
  {
    path: "/addressBootstrap",
    name: "addressBootstrap",
    component: AddressBootstrap,
  },
  {
    path: "/transitions",
    name: "transitions",
    component: Transitions,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
