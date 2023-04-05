export default {
  registerPetsitter(state, payload) {
    state.petsitters.push(payload);
  },
  setPetsitters(state, payload) {
    state.petsitters = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetch = new Date().getTime()
  }
};
