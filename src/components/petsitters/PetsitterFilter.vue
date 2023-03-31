<template>
  <base-card>
    <h2>Find a perfect petsitter for your animal!</h2>
    <span class="filter-options">
      <input type="checkbox" id="dog" checked @change="setFilter" />
      <label for="dog">Dog</label>
    </span>
    <span class="filter-options">
      <input type="checkbox" id="cat" checked @change="setFilter" />
      <label for="cat">Cat</label>
    </span>
    <span class="filter-options">
      <input type="checkbox" id="hamster" checked @change="setFilter" />
      <label for="hamster">Hamster</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        dog: true,
        cat: true,
        hamster: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
