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
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
