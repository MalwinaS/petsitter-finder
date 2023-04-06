<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }} PLN/day</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedPetsitter: null,
    };
  },
  created() {
    this.selectedPetsitter = this.$store.getters["petsitters/petsitters"].find(
      (petsitter) => petsitter.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedPetsitter.firstName + " " + this.selectedPetsitter.lastName;
    },
    areas() {
      return this.selectedPetsitter.areas;
    },
    rate() {
      return this.selectedPetsitter.dailyRate;
    },
    description() {
      return this.selectedPetsitter.description;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
};
</script>

<style></style>
