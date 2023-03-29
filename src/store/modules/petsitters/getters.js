export default {
  petsitters(state) {
    return state.petsitters;
  },
  hasPetsitters(state) {
    return state.petsitters && state.petsitters.length > 0;
  },
};
