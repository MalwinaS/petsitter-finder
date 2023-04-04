<template>
  <section>
    <petsitter-filter @change-filter="setFilters"></petsitter-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadPetsitters">Refresh</base-button>
        <base-button link to="/register" v-if="!isPetsitter"
          >Register as Petsitter</base-button
        >
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
import PetsitterFilter from "@/components/petsitters/PetsitterFilter.vue";

export default {
  components: {
    PetsitterItem,
    PetsitterFilter,
  },
  data() {
    return {
      activeFilters: {
        dog: true,
        cat: true,
        hamster: true,
      },
    };
  },
  computed: {
    filteredPetsitters() {
      const petsitters = this.$store.getters["petsitters/petsitters"];
      return petsitters.filter((petsitter) => {
        if (this.activeFilters.dog && petsitter.areas.includes("dog")) {
          return true;
        }
        if (this.activeFilters.cat && petsitter.areas.includes("cat")) {
          return true;
        }
        if (this.activeFilters.hamster && petsitter.areas.includes("hamster")) {
          return true;
        }
        return false;
      });
    },
    hasPetsitters() {
      return this.$store.getters["petsitters/hasPetsitters"];
    },
    isPetsitter() {
      return this.$store.getters["petsitters/isPetsitter"];
    },
  },
  created() {
    this.loadPetsitters();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    loadPetsitters() {
      this.$store.dispatch("petsitters/loadPetsitters");
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
