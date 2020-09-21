<template>
  <form v-on:submit.prevent="signin" class="form">
    <h1 class="title">Signin</h1>

    <label for="email" class="label">email</label>
    <input
      id="email"
      type="email"
      class="input"
      v-model="email"
      autocomplete="email"
    />

    <label for="password" class="label">password</label>
    <input
      id="password"
      type="password"
      class="input"
      v-model="password"
      autocomplete="current-password"
    />
    <button class="btn">ok</button>
    <hr />
    <p>
      No account yet ? Please
      <router-link to="/signup">signup</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
      email: "j.doe@foo.bar",
      password: "12345"
    };
  },
  methods: {
    signin() {
      this.$store
        .dispatch("user/signin", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }
};
</script>

<style scoped>
@import url("./../styles/mod.form.css");
</style>
