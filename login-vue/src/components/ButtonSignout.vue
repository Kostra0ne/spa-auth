<template>
  <font-awesome-icon title="signout" @click="signout" class="is-clickable icon" icon="user-slash" />
</template>

<script>
import auth from "@/auth/";

export default {
  name: "Signout",
  methods: {
    signout() {
      auth.signout(this); //  on passe l'instance de vue à la fonction de déconnection
    }
  }
};
</script>

<style scoped>
.icon:hover {
  color: firebrick !important;
}
</style>

