import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Profile from "../views/Profile.vue";
import { useUser } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: Auth,
    },
    {
      path: "/:id/preview",
      name: "preview",
      component: () => import("../views/Preview.vue"),
      beforeEnter: () => {
        const userStore = useUser();
        if (!userStore.user) {
          return { path: "/" };
        }
      },
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: () => {
        const userStore = useUser();
        if (!userStore.user) {
          return { path: "/" };
        }
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: () => {
        const userStore = useUser();
        if (!userStore.user) {
          return { path: "/" };
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
