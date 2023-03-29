import { createStore } from "vuex";

import petsittersModule from "./modules/petsitters/index.js";

const store = createStore({
    petsitters: petsittersModule,
});

export default store;
