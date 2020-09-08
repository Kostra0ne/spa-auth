<template>
  <div>
    <h1 class="title">Dashboard</h1>
    <p v-if="currentUser">Welcome {{ currentUser.first_name }} !</p>
    <Avatar
      v-if="currentUser"
      :avatar="currentUser.avatar"
      :isEditable="true"
    />
    <hr />
    <!-- <pre>
{{ currentUser }}
   </pre> -->
    <UserInfos :currentUser="currentUser" />
    <div v-if="currentUser && currentUser.role === 'admin'">
      ADMIN LIKS HERE
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import UserInfos from "@/components/UserInfos";

export default {
  data() {
    return {
      isEditMode: false
    };
  },
  components: {
    Avatar,
    UserInfos
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>
