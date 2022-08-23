import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    registerShop: null,
    shopName: null,
    product: null,
    shops: null,
    user: null,
    role: null,
    myshop: null,
  },
  getters: {
    getUser(state) {
      return state.user;
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
    getMyShop(state) {
      return state.myshop;
    },
  },
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
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
    setMyShop(state, value) {
      state.myshop = value;
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", value);
    },
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
    setMyShop(context, value) {
      context.commit("setMyShop", value);
    },
  },
});
