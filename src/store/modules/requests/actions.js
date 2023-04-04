export default {
  async contactPetsitter(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://petsitter-finder-default-rtdb.firebaseio.com/requests/${payload.petsitterId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.petsitterId = payload.petsitterId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const petsitterId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://petsitter-finder-default-rtdb.firebaseio.com/requests/${petsitterId}.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests."
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        petsitterId: petsitterId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};
