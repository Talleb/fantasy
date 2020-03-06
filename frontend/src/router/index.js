import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Players from "../views/Players.vue";
import draft from "../views/Draft.vue";
import Highscore from "../views/Highscore.vue";

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
    component: Players
  },
  {
    path: "/draft",
    name: "Draft",
    component: draft
  },
  {
    path: "/highscore",
    name: "Highscore",
    component: Highscore
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
