import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "LoginView" } },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("../views/auth/LoginView.vue"),
    meta: {
      layout: "AuthLayout",
    },
  },
  {
    path: "/home",
    name: "HomeView",
    component: () => import("../views/home/IndexView.vue"),  
    meta: {
      layout: "HomeLayout",
    },
  },

  {
    path: "/product",
    name: "ProductView",
    component: () => import("../views/ProductView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
