import { createRouter, createWebHistory } from "vue-router";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Registration",
      component: Registration,
    },

    {
      path: "/login",
      name: "Login",
      component: Login,  
    },

    {
      path: "/user-profile",
      name: "Profile",
      component: Profile
    }
  ],
});

export default router;
