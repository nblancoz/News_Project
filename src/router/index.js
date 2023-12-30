import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import ListNewsView from "../views/ListNewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    },
    {
      path: "/list",
      name: "list",
      component: ListNewsView,
    },
  ],
});

export default router;
