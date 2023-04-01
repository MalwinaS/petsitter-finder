export default {
  registerPetsitter(context, data) {
    const petsitterData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      dailyRate: data.rate,
      areas: data.areas,
    };
    context.commit("registerPetsitter", petsitterData);
  },
};
