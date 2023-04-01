export default {
  petsitters(state) {
    return state.petsitters;
  },
  hasPetsitters(state) {
    return state.petsitters && state.petsitters.length > 0;
  },
  isPetsitter(_, getters, _2, rootGetters) {
    const petsitters = getters.petsitters;
    const userId = rootGetters.userId;
    return petsitters.some((petsitter) => petsitter.id === userId);
  },
};
