<template>
  <section>
    <base-card>
      <h2>Register as a petsitter now!</h2>
      <petsitter-form @save-data="saveData"></petsitter-form>
    </base-card>
  </section>
</template>

<script>
import PetsitterForm from "../../components/petsitters/PetsitterForm.vue";

export default {
  components: { PetsitterForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("petsitters/registerPetsitter", data);
      this.$routee.replace("/petsitters");
    },
  },
};
</script>

<style></style>
