import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue"
import RegisterPage from "@/views/auth/register.vue"

const routes = [
  {
    path: "/showcase",
    name: 'Showcase',
    component: Showcase
  },
  {
    path: "/",
    name: "RegisterPage",
    component: RegisterPage
  },
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
