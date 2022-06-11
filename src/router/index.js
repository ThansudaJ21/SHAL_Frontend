import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: '/showcase',
    name: 'ShowCase',
    component: () => import('@/views/showcase/showcase.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
