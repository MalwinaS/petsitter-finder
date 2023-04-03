import { createStore } from "vuex";

import petsittersModule from "./modules/petsitters/index.js";
import requestsModule from "./modules/requests/index.js";

const store = createStore({
  modules: {
    petsitters: petsittersModule,
    requests: requestsModule,
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
