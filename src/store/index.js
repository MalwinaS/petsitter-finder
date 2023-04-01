import { createStore } from "vuex";

import petsittersModule from "./modules/petsitters/index.js";

const store = createStore({
  modules: {
    petsitters: petsittersModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
