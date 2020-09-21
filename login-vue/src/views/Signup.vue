<template>
  <form @submit.prevent="signup" class="form">
    <h1 class="title">Signup</h1>
    <label for="first_name" class="label">first name</label>
    <input
      id="first_name"
      type="text"
      class="input"
      v-model="user.first_name"
      autocomplete="given-name"
    />
    <label for="last_name" class="label">last name</label>
    <input
      id="last_name"
      type="text"
      class="input"
      v-model="user.last_name"
      autocomplete="family-name"
    />
    <label for="email" class="label">email</label>
    <input
      id="email"
      type="email"
      class="input"
      v-model="user.email"
      autocomplete="email"
    />
    <label for="password" class="label">password</label>
    <input
      id="password"
      type="password"
      class="input"
      v-model="user.password"
      autocomplete="current-password"
    />
    <Avatar :avatar="user.avatar" :isEditable="true" v-on:avatar-change="updateAvatar" />
    <button class="btn">ok</button>
    <hr />
    <p>
      Already got an account ? Please
      <router-link to="/signin">signin</router-link>
    </p>
  </form>
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  data() {
    return {
      user: {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        first_name: "Jane",
        last_name: "Doe",
        email: "j.doe@foo.bar",
        password: "12345",
        avatar: ""
      }
    };
  },
  components: {
    Avatar
  },
  methods: {
    updateAvatar(fileObject) {
      this.user.avatar = fileObject;
    },
    signup() {
      const fd = new FormData(); // form data nécessaire pour envoyer des fichiers images (files);
      // check the doc = https://developer.mozilla.org/fr/docs/Web/API/FormData
      fd.append("first_name", this.user.first_name); // on associe des clé / valeur à l'objet fd (formData)
      fd.append("last_name", this.user.last_name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);
      if (this.user.avatar) fd.append("avatar", this.user.avatar);
      this.$store.dispatch("user/signup", fd); // on utilise le store ...
      // quand on utilise la fonction dispatch du store => on fait référence à une action du store
      // ... afficher un message de confirmation à la suite ...
      // ou utiliser le router pour faire une redirection
      // exemple: this.$router.push('/signin');
    }
  }
};
</script>

<style scoped>
@import url("./../styles/mod.form.css");
</style>
