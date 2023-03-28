import { createRouter, createWebHistory } from "vue-router";

import PetsittersList from "./pages/petsitters/PetsittersList.vue";
import PetsitterDetail from "./pages/petsitters/PetsitterDetail.vue";
import PetsitterRegistration from "./pages/petsitters/PetsitterRegistration.vue";
import ContactPetsitter from "./pages/requests/ContactPetsitter.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/petsitters" },
    { path: "/petsitters", component: PetsittersList },
    {
      path: "/petsitters/:id",
      component: PetsitterDetail,
      children: [{ path: "contact", component: ContactPetsitter }],
    },
    { path: "/register", component: PetsitterRegistration },
    { path: "/request", component: RequestsReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
