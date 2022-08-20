import { createStore } from "vuex";
import AuthService from "@/services/auth/auth-service";

function getUser(params) {
  AuthService.findByUserId(params).then((response) => {
    return response.data.data.findByUserId
  })
}

export default createStore({
  state: {
    currentUser: localStorage.getItem("userId") != null ? getUser(localStorage.getItem("userId")) : null,
    registerShop: null,
    shopName: null,
    product: null,
    shops: null,
    user: null,
    role: null
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
    getRegisterShop(state) {
      return state.registerShop;
    },
    getShopName(state) {
      return state.shopName;
    },
    getProduct(state) {
      return state.product;
    },
    getShops(state) {
      return state.shops;
    },
    getUser(state) {
      return state.user;
    },
    getRole(state) {
      return state.role;
    },
  },
  mutations: {
    setRegisterShop(state, value) {
      state.registerShop = value;
    },
    setShopName(state, value) {
      state.shopName = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setShops(state, value) {
      state.shops = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setRole(state, value) {
      state.role = value;
    },
  },
  actions: {
    setRegisterShop(context, value) {
      context.commit("setRegisterShop", value);
    },
    setShopName(context, value) {
      context.commit("setShopName", value);
    },
    setProduct(context, value) {
      context.commit("setProduct", value);
    },
    setShops(context, value) {
      context.commit("setShops", value);
    },
    setUser(context, value) {
      context.commit("setUser", value);
    },
    setRole(context, value) {
      context.commit("setRole", value);
    },
  },
});
