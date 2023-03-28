import { createRouter, createWebHistory } from "vue-router";

import PetsittersList from "./components/petsitters/PetsittersList.vue";
import PetsitterDetail from "./components/petsitters/PetsitterDetail.vue";
import PetsitterRegistration from "./components/petsitters/PetsitterRegistration.vue";
import ContactPetsitter from "./components/requests/ContactPetsitter.vue";
import RequestsReceived from "./components/requests/RequestsReceived.vue";
import NotFound from "./components/NotFound.vue";

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
