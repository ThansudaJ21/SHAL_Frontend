import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue";

import LoginPage from "@/views/auth/login-page.vue";
import RegisterPage from "@/views/auth/register-page.vue";

import BuyerHomePage from "@/views/buyer/buyer-home-page.vue";
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue";
import ShopRegistrationLayout from "@/views/buyer/buyer-shop-registration/shop-registration-layout.vue";
import ShopRegistrationPageOne from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-one.vue";
import ShopRegistrationPageTwo from "@/views/buyer/buyer-shop-registration/children/shop-registration-page-two.vue";

import SellerHomePage from "@/views/seller/homepage/seller-home-page.vue";
import SellerFilterCategoryPage from "@/views/seller/homepage/seller-filter-category-page.vue";
import SellerProfilePage from "@/views/seller/seller-profile-page.vue";
import AddProductLayout from "@/views/seller/add-product-page/add-product-layout.vue";
import AddProductPageOne from "@/views/seller/add-product-page/children/add-product-page-one.vue";
import AddProductPageTwo from "@/views/seller/add-product-page/children/add-product-page-two.vue";
import AddProductPageThree from "@/views/seller/add-product-page/children/add-product-page-three.vue";
import AddProductPageFour from "@/views/seller/add-product-page/children/add-product-page-four.vue";
import AddProductPageFive from "@/views/seller/add-product-page/children/add-product-page-five.vue";
import EditProductLayout from "@/views/seller/edit-product-page/edit-product-layout.vue";
import EditProductPageOne from "@/views/seller/edit-product-page/children/edit-product-page-one.vue";
import EditProductPageTwo from "@/views/seller/edit-product-page/children/edit-product-page-two.vue";
import EditProductPageThree from "@/views/seller/edit-product-page/children/edit-product-page-three.vue";
import EditProductPageFour from "@/views/seller/edit-product-page/children/edit-product-page-four.vue";
import EditProductPageFive from "@/views/seller/edit-product-page/children/edit-product-page-five.vue";
import ProductDetailsPage from "@/views/seller/product-details-page/product-details-page.vue";

import DashboardPage from "@/views/admin/admin-dashboard-page.vue";
import ShopManagementPage from "@/views/admin/admin-shop-management/shop-management-page.vue";
import ShopApprovalPage from "@/views/admin/admin-shop-management/shop-approval-page.vue";

import ShopService from "@/services/shop/shop-service";
import store from "@/store";

const routes = [
  {
    path: "/showcase",
    name: "Showcase",
    component: Showcase,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/",
    name: "BuyerHomePage",
    component: BuyerHomePage,
  },
  {
    path: "/profile",
    name: "BuyerProfilePage",
    component: BuyerProfilePage,
  },
  {
    path: "/shop-registration",
    name: "ShopRegistrationLayout",
    component: ShopRegistrationLayout,
    redirect: "/shop-registration/1",
    children: [
      {
        path: "1",
        name: "ShopRegistrationPageOne",
        component: ShopRegistrationPageOne,
      },
      {
        path: "2",
        name: "ShopRegistrationPageTwo",
        component: ShopRegistrationPageTwo,
      },
    ],
  },
  {
    path: "/myshop",
    name: "SellerHomePage",
    component: SellerHomePage,
  },
  {
    path: "/myshop/result",
    name: "SellerFilterCategoryPage",
    component: SellerFilterCategoryPage,
  },
  {
    path: "/myshop/profile",
    name: "SellerProfilePage",
    component: SellerProfilePage,
  },
  {
    path: "/add-product",
    name: "AddProductLayout",
    component: AddProductLayout,
    redirect: "/add-product/1",
    children: [
      {
        path: "1",
        name: "AddProductPageOne",
        component: AddProductPageOne,
      },
      {
        path: "2",
        name: "AddProductPageTwo",
        component: AddProductPageTwo,
      },
      {
        path: "3",
        name: "AddProductPageThree",
        component: AddProductPageThree,
      },
      {
        path: "4",
        name: "AddProductPageFour",
        component: AddProductPageFour,
      },
      {
        path: "5",
        name: "AddProductPageFive",
        component: AddProductPageFive,
      },
    ],
  },
  {
    path: "/edit-product/:id",
    name: "EditProductLayout",
    component: EditProductLayout,
    redirect: "/edit-product/1/:id",
    children: [
      {
        path: "1",
        name: "EditProductPageOne",
        component: EditProductPageOne,
      },
      {
        path: "2",
        name: "EditProductPageTwo",
        component: EditProductPageTwo,
      },
      {
        path: "3",
        name: "EditProductPageThree",
        component: EditProductPageThree,
      },
      {
        path: "4",
        name: "EditProductPageFour",
        component: EditProductPageFour,
      },
      {
        path: "5",
        name: "EditProductPageFive",
        component: EditProductPageFive,
      },
    ],
  },
  {
    path: "/myshop/product/:id",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
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
    },
  },
  {
    path: "/shop-approval/:id",
    name: "ShopApprovalPage",
    component: ShopApprovalPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
