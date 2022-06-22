import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue"
/* import RegisterPage from "@/views/auth/register.vue" */
import BuyerHomePage from "@/views/buyer/buyer-home-page.vue"
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue"
import ShopRegistrationLayout from "@/views/buyer/buyer-shop-registration/shop-registration-layout.vue"
import ShopRegistrationPageOne from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-one.vue"
import ShopRegistrationPageTwo from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-two.vue"

import DashboardPage from "@/views/admin/admin-dashboard-page.vue"
import ShopManagementPage from "@/views/admin/admin-shop-management/shop-management-page.vue"
import ShopApprovalPage from "@/views/admin/admin-shop-management/shop-approval-page.vue"

import ShopService from "@/services/shop/shop-service";
import store from "@/store";

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
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage
  },
  {
    path: "/shop-management",
    name: "ShopManagementPage",
    component: ShopManagementPage,
    beforeEnter: async () => {
      let queryText = {
        shopName: "",
        shopStatus: "",
      };
      await ShopService.shopQueryFilter(queryText, 0, 10).then(async (res) => {
        await store.dispatch("setShops", res.data.data.shopQueryFilter.content);
      });
    }
  },
  {
    path: "/shop-approval/:id",
    name: "ShopApprovalPage",
    component: ShopApprovalPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
