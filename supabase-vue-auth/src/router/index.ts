import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/pages/Register.vue"),
  },
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("@/pages/EmailConfirmation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
