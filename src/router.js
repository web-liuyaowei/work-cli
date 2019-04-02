import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const VueRouter = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/carsousel",
      name: "about",
      component: () => import("./components/Carousel.vue")
    },
    // 404页面的设置
    // {
    //   path: "*",
    //   redirect: { path: "/404" }
    // },
    // {
    //   path: '/404',
    //   component: NotFound
    // }
  ]
});

// 全局守卫
VueRouter.beforeEach((to, from, next) => {
  // doing something
  next();
});

export default VueRouter;
