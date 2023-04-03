<template>
    <base-card>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">Your e-mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea rows="6" id="message" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid email and non-empty message
    </p>
    <div class="actions">
      <base-button>Send message</base-button>
    </div>
  </form>
</base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("requests/contactPetsitter", {
        email: this.email,
        message: this.message,
        petsitterId: this.$route.params.id,
      });
      this.$router.replace('/petsitters')
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #f5b44d;
  border-radius: 10px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  margin-top: 10px;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #f5b44d;
  padding: 0.15rem;
  margin-top: 10px;
}

input:focus,
textarea.focus {
  border-color: #f5b44d;
  background-color: #f0e6fd;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
  margin-top: 15px;
}
</style>
