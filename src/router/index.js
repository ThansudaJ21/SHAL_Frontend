import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue"
/* import RegisterPage from "@/views/auth/register.vue" */
import BuyerHomePage from "@/views/buyer/buyer-home-page.vue"
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue"
import ShopRegistrationLayout from "@/views/buyer/buyer-shop-registration/shop-registration-layout.vue"
import ShopRegistrationPageOne from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-one.vue"
import ShopRegistrationPageTwo from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-two.vue"

const routes = [
  {
    path: "/showcase",
    name: 'Showcase',
    component: Showcase
  },
  /*   {
      path: "/",
      name: "RegisterPage",
      component: RegisterPage
    }, */
  {
    path: "/",
    name: "BuyerHomePage",
    component: BuyerHomePage
  },
  {
    path: "/profile",
    name: "BuyerProfilePage",
    component: BuyerProfilePage
  },
  {
    path: "/shop-registration",
    name: "ShopRegistrationLayout",
    component: ShopRegistrationLayout,
    redirect: '/shop-registration/1',
    children: [
      {
        path: "1",
        name: 'ShopRegistrationPageOne',
        component: ShopRegistrationPageOne
      },
      {
        path: "2",
        name: 'ShopRegistrationPageTwo',
        component: ShopRegistrationPageTwo
      }
    ]
  },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
