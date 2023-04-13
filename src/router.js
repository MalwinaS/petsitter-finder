import { createRouter, createWebHistory } from "vue-router";

import PetsittersList from "./pages/petsitters/PetsittersList.vue";
import PetsitterDetails from "./pages/petsitters/PetsitterDetails.vue";
import PetsitterRegistration from "./pages/petsitters/PetsitterRegistration.vue";
import ContactPetsitter from "./pages/requests/ContactPetsitter.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/petsitter-finder/" },
    { path: "/petsitter-finder/", component: PetsittersList },
    {
      path: "/petsitter-finder/:id",
      component: PetsitterDetails,
      props: true,
      children: [{ path: "contact", component: ContactPetsitter }],
    },
    { path: "/register", component: PetsitterRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
