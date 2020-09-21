<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <p>My app is so cool... You wouldn't believe how fresh it is !</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quis
      saepe. Omnis nisi ab dolore iste laudantium aliquam mollitia libero.
    </p>
    <hr />
    <ul>
      <li v-for="(user, i) in allUsers" :key="i">
        <Avatar :avatar="user.avatar" />
      </li>
    </ul>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
export default {
  created() {
    this.$store.dispatch("user/getAll");
  },
  components: {
    Avatar
  },
  computed: {
    allUsers() {
      console.log(this.$store.getters["user/all"]);
      return this.$store.getters["user/all"];
    }
  }
};
</script>
