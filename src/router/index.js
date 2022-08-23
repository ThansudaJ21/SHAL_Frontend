import { createRouter, createWebHistory } from "vue-router";

import Showcase from "@/views/showcase/showcase.vue";

import RegisterPage from "@/views/auth/register-page.vue";

import HomePage from "@/views/buyer/homepage/home-page.vue";
import SearchResultPage from "@/views/buyer/homepage/search-result-page.vue";
import BuyerProfilePage from "@/views/buyer/buyer-profile-page.vue";
import ShopRegistrationLayout from "@/views/buyer/shop-registration/shop-registration-layout.vue";
import ShopRegistrationPageOne from "@/views/buyer/shop-registration/children/shop-registration-page-one.vue";
import ShopRegistrationPageTwo from "@/views/buyer/shop-registration/children/shop-registration-page-two.vue";
import ProductDetailsPageForBuyer from "@/views/buyer/product-details-page.vue";

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
import liff from "@line/liff";

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
    meta: { requiresAuth: true }
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { requiresAuth: true, requiresBuyer: true }
  },
  {
    path: "/result/:keyWord",
    name: "SearchResultPage",
    component: SearchResultPage,
    meta: { requiresAuth: true, requiresBuyer: true }
  },
  {
    path: "/product/:id",
    name: "ProductDetailsPageForBuyer",
    component: ProductDetailsPageForBuyer,
    meta: { requiresAuth: true, requiresBuyer: true }
  },
  {
    path: "/profile",
    name: "BuyerProfilePage",
    component: BuyerProfilePage,
    meta: { requiresAuth: true, requiresBuyer: true }
  },
  {
    path: "/shop-registration",
    name: "ShopRegistrationLayout",
    component: ShopRegistrationLayout,
    meta: { requiresAuth: true, requiresBuyer: true },
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
    meta: { requiresAuth: true, requiresSeller: true },
    component: SellerShopPage,
  },
  {
    path: "/myshop/result",
    name: "SellerFilterCategoryPage",
    meta: { requiresAuth: true, requiresSeller: true },
    component: SellerFilterCategoryPage,
  },
  {
    path: "/myshop/profile",
    name: "SellerProfilePage",
    meta: { requiresAuth: true, requiresSeller: true },
    component: SellerProfilePage,
  },
  {
    path: "/myshop/add-product",
    name: "AddProductLayout",
    component: AddProductLayout,
    meta: { requiresAuth: true, requiresSeller: true },
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
    meta: { requiresAuth: true, requiresSeller: true },
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
    meta: { requiresAuth: true, requiresSeller: true },
  },
  {
    path: "/admin/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/shop-management",
    name: "ShopManagementPage",
    component: ShopManagementPage,
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  to.matched.some((record) => {
    record.meta.requiresAuth;
    record.meta.requiresBuyer;
    record.meta.requiresSeller;
    record.meta.requiresAdmin;
  });
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    liff
      .init({
        liffId: process.env.VUE_APP_LINELIFF_BUYER_HOMEPAGE,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff
            .getProfile()
            .then(async () => {
              localStorage.setItem("userId", liff.getDecodedIDToken().sub)
              if (localStorage.getItem("userId") == null) {
                next({ name: "Showcase" });
              } else {
                let keepRole = []
                await AuthService.findByUserId(liff.getDecodedIDToken().sub).then((response) => {
                  let roles = response.data.data.findByUserId.authorities
                  for (let index = 0; index < roles.length; index++) {
                    keepRole.push(roles[index].name)
                  }
                  store.dispatch("setRole", keepRole);
                  store.dispatch("setUser", response.data.data.findByUserId);
                  try {
                    ShopService.getShopByUserId(response.data.data.findByUserId.id).then((res) => {
                      store.dispatch("setMyShop", res.data.data.getShopByUserId)
                    })
                  } catch (error) {
                    store.dispatch("setMyShop", null)
                  }

                  let role = JSON.parse(JSON.stringify(store.getters.getRole))
                  if (to.matched.some((record) => record.meta.requiresAdmin)) {
                    if (to.matched.some((record) => record.meta.requiresBuyer)) {
                      if (role.includes("BUYER")) {
                        next();
                      } else {
                        next({ name: "Showcase" });
                      }
                    } else if (to.matched.some((record) => record.meta.requiresSeller)) {
                      if (role.includes("SELLER") && role.includes("BUYER")) {
                        next();
                      } else {
                        next({ name: "Showcase" });
                      }
                    } else if (role.includes("ADMIN") && role.includes("BUYER")) {
                      next();
                    } else {
                      next({ name: "Showcase" });
                    }
                  } else {
                    next();
                  }
                })
              }


            })
            .catch((err) => console.error(err));
        }
      })
  } else {
    next();
  }
});

export default router;
