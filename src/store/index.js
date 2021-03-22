import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItemIds: {},
    visibleBasket: false, // on mobile and basket
  },
  getters: {
    basketItemIds: (state) => state.basketItemIds,
    visibleBasket: (state) => state.visibleBasket,
  },
  mutations: {
    setBasketItemIds(state, basketItemIds) {
      state.basketItemIds = basketItemIds;
    },
    setBasketItemId(state, id) {
      if (state.basketItemIds[id]) {
        state.basketItemIds[id] += 1;
      } else {
        Vue.set(state.basketItemIds, id, 1);
      }
    },
    removeBasketItemId(state, id) {
      if (id in state.basketItemIds) {
        state.basketItemIds[id] -= 1;

        if (state.basketItemIds[id] === 0) {
          delete state.basketItemIds[id];
        }
      }
    },
    fullRemoveBasketItemId(state, id) {
      if (id in state.basketItemIds) {
        state.basketItemIds[id] = 0;
      }
    },
    setVisibleBasket(state, bool) {
      state.visibleBasket = bool;
    },
  },
  actions: {
    setBasketItemIds(store, payload) {
      store.commit("setBasketItemIds", payload);
    },
    setBasketItemId(store, payload) {
      store.commit("setBasketItemId", payload);
    },
    removeBasketItemId(store, payload) {
      store.commit("removeBasketItemId", payload);
    },
    fullRemoveBasketItemId(store, payload) {
      store.commit("fullRemoveBasketItemId", payload);
    },
    setVisibleBasket(store, payload) {
      store.commit("setVisibleBasket", payload);
    },
  },
});
