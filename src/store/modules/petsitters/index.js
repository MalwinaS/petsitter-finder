import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      petsitters: [
        {
          id: "c1",
          firstName: "Pablo",
          lastName: "S",
          areas: ["dog", "cat", "hamster"],
          description: "I'm Pablo and I am woking as a petsitter from 4 years.",
          dailyRate: 100,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "K",
          areas: ["dog", "hamster"],
          description: "I am Julie.",
          dailyRate: 130,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
