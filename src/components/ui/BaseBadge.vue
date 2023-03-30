<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}
.dog {
  background-color: rgb(31, 161, 74);
  color: white;
}

.cat {
  background-color: rgb(221, 85, 44);
  color: white;
}
.hamster {
  background-color: rgb(111, 44, 173);
  color: white;
}
</style>
