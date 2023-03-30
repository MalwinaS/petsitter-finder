<template>
  <section>Filter</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Petsitter</base-button>
    </div>
    <ul v-if="hasPetsitters">
      <petsitter-item
        v-for="petsitter in filteredPetsitters"
        :key="petsitter.id"
        :id="petsitter.id"
        :first-name="petsitter.firstName"
        :last-name="petsitter.lastName"
        :rate="petsitter.dailyRate"
        :areas="petsitter.areas"
      >
      </petsitter-item>
    </ul>
    <h3 v-else>No petsitters found.</h3>
  </base-card>
  </section>
</template>

<script>
import PetsitterItem from "@/components/petsitters/PetsitterItem.vue";

export default {
  components: {
    PetsitterItem,
  },
  computed: {
    filteredPetsitters() {
      return this.$store.getters["petsitters/petsitters"];
    },
    hasPetsitters() {
      return this.$store.getters["petsitters/hasPetsitters"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
