export default {
  async registerPetsitter(context, data) {
    const userId = context.rootGetters.userId;
    const petsitterData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      dailyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://petsitter-finder-default-rtdb.firebaseio.com/petsitters/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(petsitterData),
      }
    );

    if (!response.ok) {
      //error..
    }

    context.commit("registerPetsitter", {
      ...petsitterData,
      id: userId,
    });
  },
};
