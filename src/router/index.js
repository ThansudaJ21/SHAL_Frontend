import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue";

import RegisterPage from "@/views/auth/register-page.vue";

import HomePage from "@/views/buyer/home-page.vue";
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue";
import ShopRegistrationLayout from "@/views/buyer/shop-registration/shop-registration-layout.vue";
import ShopRegistrationPageOne from "@/views/buyer/shop-registration/children/shop-registration-page-one.vue";
import ShopRegistrationPageTwo from "@/views/buyer/shop-registration/children/shop-registration-page-two.vue";

import SellerShopPage from "@/views/seller/shop-page/seller-shop-page.vue";
import SellerFilterCategoryPage from "@/views/seller/shop-page/seller-filter-category-page.vue";
import SellerProfilePage from "@/views/seller/seller-profile-page.vue";
import AddProductLayout from "@/views/seller/add-product-page/add-product-layout.vue";
import AddProductPageOne from "@/views/seller/add-product-page/children/add-product-page-one.vue";
import AddProductPageTwo from "@/views/seller/add-product-page/children/add-product-page-two.vue";
import AddProductPageThree from "@/views/seller/add-product-page/children/add-product-page-three.vue";
import AddProductPageFour from "@/views/seller/add-product-page/children/add-product-page-four.vue";
import EditProductLayout from "@/views/seller/edit-product-page/edit-product-layout.vue";
import EditProductPageOne from "@/views/seller/edit-product-page/children/edit-product-page-one.vue";
import EditProductPageTwo from "@/views/seller/edit-product-page/children/edit-product-page-two.vue";
import EditProductPageThree from "@/views/seller/edit-product-page/children/edit-product-page-three.vue";
import EditProductPageFour from "@/views/seller/edit-product-page/children/edit-product-page-four.vue";
import ProductDetailsPageForSeller from "@/views/seller/product-details-page/product-details-page.vue";

import DashboardPage from "@/views/admin/dashboard-page.vue";
import ShopManagementPage from "@/views/admin/shop-management-page.vue";
import ShopApprovalPage from "@/views/admin/shop-approval-page.vue";

import AuthService from "@/services/auth/auth-service";
import ShopService from "@/services/shop/shop-service";
import store from "@/store";

const routes = [
  {
    path: "/showcase",
    name: "Showcase",
    component: Showcase,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
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
    redirect: "/shop-registration/page=1",
    children: [
      {
        path: "page=1",
        name: "ShopRegistrationPageOne",
        component: ShopRegistrationPageOne,
      },
      {
        path: "page=2",
        name: "ShopRegistrationPageTwo",
        component: ShopRegistrationPageTwo,
      },
    ],
  },
  {
    path: "/myshop",
    name: "SellerShopPage",
    component: SellerShopPage,
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
    path: "/myshop/add-product",
    name: "AddProductLayout",
    component: AddProductLayout,
    redirect: "/myshop/add-product/page=1",
    children: [
      {
        path: "page=1",
        name: "AddProductPageOne",
        component: AddProductPageOne,
      },
      {
        path: "page=2",
        name: "AddProductPageTwo",
        component: AddProductPageTwo,
      },
      {
        path: "page=3",
        name: "AddProductPageThree",
        component: AddProductPageThree,
      },
      {
        path: "page=4",
        name: "AddProductPageFour",
        component: AddProductPageFour,
      },
    ],
  },
  {
    path: "/myshop/edit-product/id=:id",
    name: "EditProductLayout",
    component: EditProductLayout,
    redirect: "/myshop/edit-product/id=:id/page=1",
    children: [
      {
        path: "page=1",
        name: "EditProductPageOne",
        component: EditProductPageOne,
      },
      {
        path: "page=2",
        name: "EditProductPageTwo",
        component: EditProductPageTwo,
      },
      {
        path: "page=3",
        name: "EditProductPageThree",
        component: EditProductPageThree,
      },
      {
        path: "page=4",
        name: "EditProductPageFour",
        component: EditProductPageFour,
      },
    ],
  },
  {
    path: "/myshop/product/:id",
    name: "ProductDetailsPageForSeller",
    component: ProductDetailsPageForSeller,
  },
  {
    path: "/admin/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/admin/shop-management",
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
    path: "/admin/shop-approval/:id",
    name: "ShopApprovalPage",
    component: ShopApprovalPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
