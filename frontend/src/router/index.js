import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import players from "../views/Players.vue";
import draft from "../views/Draft.vue";
import highscore from "../views/Highscore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/players",
    name: "Players",
    component: players
  },
  {
    path: "/draft",
    name: "Draft",
    component: draft
  },
  {
    path: "/highscore",
    name: "Highscore",
    component: highscore
  }
<<<<<<< HEAD
=======

>>>>>>> e658a3034ebcf0a045b02e60ab58f89b0ff38466
];

const router = new VueRouter({
  routes
});

export default router;
