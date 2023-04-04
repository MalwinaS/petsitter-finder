export default {
  async registerPetsitter(context, data) {
    const userId = context.rootGetters.userId;
    const petsitterData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://petsitter-finder-default-rtdb.firebaseio.com/petsitters/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(petsitterData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
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
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const petsitters = [];

    for (const key in responseData) {
      const petsitter = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      petsitters.push(petsitter);
    }

    context.commit("setPetsitters", petsitters);
  },
};
