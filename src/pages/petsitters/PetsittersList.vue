<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Petsitter</router-link>
    </div>
    <ul v-if="hasPetsitters">
      <li v-for="petsitter in filteredPetsitters" :key="petsitter.id">
        {{ petsitter.firstName }}
      </li>
    </ul>
    <h3 v-else>No petsitters found.</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredPetsitters() {
      return this.$store.getters["petsitters/petsitters"];
    },
    hasPetsitters() {
      return this.$store.getters['petsitters/hasPetsitters']
    }
  },
};
</script>

<style></style>
