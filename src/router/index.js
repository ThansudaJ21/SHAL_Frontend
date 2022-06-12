import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue"
import RegisterPage from "@/views/auth/register.vue"
import BuyerHomePage from "@/views/buyer/buyer-home-page.vue"
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue"

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
  {
    path: "/buyer",
    name: "BuyerHomePage",
    component: BuyerHomePage
  },
  {
    path: "/buyer/profile",
    name: "BuyerProfilePage",
    component: BuyerProfilePage
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
