<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }} PLN/day</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="petsitterContactLink"
        >Contact</base-button
      >
      <base-button link :to="petsitterDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    petsitterContactLink() {
      return this.$route.path + this.id + "/contact";
    },
    petsitterDetailsLink() {
      return this.$route.path + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
