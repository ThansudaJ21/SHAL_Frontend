import { createStore } from "vuex";

export default createStore({
  state: {
    registerShop: null,
    shopName: null,
    product: null,
    shops: null,
    totalPrice: null,
    user: null,
    role: null,
    myshop: null,
    trading: null,
    auction: null
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
    getTotalPrice(state) {
      return state.totalPrice;
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
    getTrading(state) {
      return state.trading;
    },
    getAuction(state) {
      return state.auction;
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
    setTotalPrice(state, value) {
      state.totalPrice = value;
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
    setTrading(state, value) {
      state.trading = value;
    },
    setAuction(state, value) {
      state.auction = value;
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
    setTotalPrice(context, value) {
      context.commit("setTotalPrice", value);
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
    setTrading(context, value) {
      context.commit("setTrading", value);
    },
    setAuction(context, value) {
      context.commit("setAuction", value);
    },
  },
});
