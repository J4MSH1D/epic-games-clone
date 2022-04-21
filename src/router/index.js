import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import { useUser } from "../stores/user" 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: Auth,
      beforeEnter: () => {
        const userStore = useUser()
        if(userStore.user){
          return { path: "/home" }
        }
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      beforeEnter: () => {
        const userStore = useUser()
        if(!userStore.user){
          return { path: "/" }
        }
      }
    },
  ],
});

export default router;
