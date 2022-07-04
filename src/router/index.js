import { createRouter, createWebHistory } from "vue-router";
import Registration from "../views/Registration.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Registration",
      component: Registration,
    },
  ],
});

export default router;
