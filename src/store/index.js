import { createStore } from "vuex";

export default createStore({
  state: {
    registerShop: null,
    shopName: null,
    product: null,
    shops: null
  },
  getters: {
    getRegisterShop(state) {
      return state.registerShop
    },
    getShopName(state) {
      return state.shopName
    },
    getProduct(state) {
      return state.product
    },
    getShops(state) {
      return state.shops
    },
  },
  mutations: {
    setRegisterShop(state, value) {
      state.registerShop = value
    },
    setShopName(state, value) {
      state.shopName = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setShops(state, value) {
      state.shops = value
    },
  },
  actions: {
    setRegisterShop(context, value) {
      context.commit('setRegisterShop', value)
    },
    setShopName(context, value) {
      context.commit('setShopName', value)
    },
    setProduct(context, value) {
      context.commit('setProduct', value)
    },
    setShops(context, value) {
      context.commit('setShops', value)
    },
  },
});
