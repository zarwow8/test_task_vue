import Vue from "vue";
import Router from "vue-router";
import Poster from "./views/Posters.vue";
import Main from "./components/Main.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path: "/films",
      component: Poster
    }
  ]
});
