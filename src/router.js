import Vue from "vue";
import Router from "vue-router";
import Create from "./components/Create.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "create",
      component: Create
    },
    {
      path: "/collection",
      name: "collection",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "collection" */ "./components/Collection.vue")
    }
  ]
});
