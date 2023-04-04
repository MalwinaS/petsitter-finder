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
  async loadPetsitters(context) {
    const response = await fetch(
      `https://petsitter-finder-default-rtdb.firebaseio.com/petsitters.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      //error
    }
    const petsitters = [];
    for (const key in responseData) {
      const petsitter = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        dailyRate: responseData[key].dailyRate,
        areas: responseData[key].areas,
      };
      petsitters.push(petsitter);
    }
    context.commit('setPetsitters', petsitters)
  },
};
