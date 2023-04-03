export default {
  contactPetsitter(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      petsitterId: payload.petsitterId,
      userEmail: payload.email,
      userMessage: payload.message,
    };
    context.commit("addRequest", newRequest);
  },
};
