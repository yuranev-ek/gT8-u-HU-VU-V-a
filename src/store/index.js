import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItemIds: {},
  },
  getters: {
    basketItemIds: (state) => state.basketItemIds,
  },
  mutations: {
    setBasketItemIds(state, basketItemIds) {
      state.basketItemIds = basketItemIds;
    },
    setBasketItemId(state, id) {
      if (state.basketItemIds[id]) {
        state.basketItemIds[id] += 1;
      } else {
        state.basketItemIds[id] = 1;
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
  },
});
