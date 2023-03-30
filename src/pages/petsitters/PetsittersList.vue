<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Petsitter</router-link>
    </div>
    <ul v-if="hasPetsitters">
      <petsitter-item
        v-for="petsitter in filteredPetsitters"
        :key="petsitter.id"
        :id="petsitter.id"
        :first-name="petsitter.firstName"
        :last-name="petsitter.lastName"
        :rate="petsitter.dailyRate"
      >
      </petsitter-item>
    </ul>
    <h3 v-else>No petsitters found.</h3>
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
