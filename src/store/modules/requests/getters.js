export default {
  requests(state, _, _2, rootGetters) {
    const petsitterId = rootGetters.userId;
    return state.requests.filter((req) => req.petsitterId === petsitterId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
