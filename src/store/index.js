import { createStore } from "vuex";

import petsittersModule from "./modules/petsitters/index.js";

const store = createStore({
    modules: {
    petsitters: petsittersModule,
    }
});

export default store;
