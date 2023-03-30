<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="toLink" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    toLink: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #79acee;
  border: 1px solid #79acee;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:active,
a:hover,
button:hover,
button:active {
  background-color: #70a2e4;
  border-color: #70a2e4;
}

.flat {
  background-color: transparent;
  color: #b0c4de;
  border: none;
}
.outline {
  background-color: transparent;
  border-color: #f5b44d;
  color: #ebb662;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #ffefd5;
  border-color: #f5b44d;
}
</style>
