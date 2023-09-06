import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";

const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Manage = () => import("@/views/Manage.vue");
const Song = () => import("@/views/Song.vue");

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home, // This is the HomeView.vue file
  },
  { name: "About", path: "/AboutView", component: About },
  {
    name: "Manage",
    // alias: "/manage",
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("Manage Route Guard");
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/manage", redirect: { name: "Manage" } },
  { name: "song", path: "/song/:id", component: Song },
  { path: "/:catchAll(.*)*", redirect: { name: "Home" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  // console.log(to.meta);

  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "Home" });
  }
});

export default router;
