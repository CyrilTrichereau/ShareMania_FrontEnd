import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/new-post",
    name: "newPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewPost.vue"),
  },
  {
    path: "/giphy",
    name: "giphy",
    component: () => import("../views/Giphy.vue"),
  },
  {
    path: "/my-profile",
    name: "myProfile",
    component: () => import("../views/MyProfile.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/ConnectionPage.vue"),
  },
  {
    path: "/ResetPassword/:token",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
