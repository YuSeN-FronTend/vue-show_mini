import Vue from "vue";
import VueRouter from "vue-router";
// import Main from "../views/Main.vue";
// import home from "../views/home";
// import user from "../views/user";
// import mall from "../views/mall";
// import page1 from "../views/other/pageOne.vue";
// import page2 from "../views/other/pageTwo.vue";
// import login from "../views/Login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import('../views/Login/login.vue')
  },
  {
    path: "/Main",
    name: "Main",
    component: () => import('../views/Main.vue'),
    redirect: '/home',
    children: [
      // {
      //   path: "/",
      //   name: "home",
      //   component: () => import('../views/home')
      // },
      // {
      //   path: "/user",
      //   name: "user",
      //   component: () => import('../views/user')
      // },
      // {
      //   path: "/mall",
      //   name: "mall",
      //   component: () => import('../views/mall')
      // },
      // {
      //   path: "/page1",
      //   name: "page1",
      //   component: () => import('../views/other/pageOne.vue')
      // },
      // {
      //   path: "/page2",
      //   name: "page2",
      //   component: () => import('../views/other/pageTwo.vue')
      // },
    ],
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
