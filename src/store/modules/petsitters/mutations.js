export default {
  registerPetsitter(state, payload) {
    state.petsitters.push(payload);
  },
  setPetsitters(state, payload) {
    state.petsitters = payload;
  },
};
