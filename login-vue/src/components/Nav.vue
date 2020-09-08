<template>
  <nav id="nav" :class="{'mobile': navType === 'mobile', 'is-active':  isActive}">
    <router-link to="/">
      <span>Home</span>
      <span v-if="navType !== 'mobile'">&nbsp;|&nbsp;</span>
    </router-link>
    <router-link to="/about">
      <span>About</span>
      <span v-if="navType !== 'mobile'">&nbsp;|&nbsp;</span>
    </router-link>
    <router-link to="/contact">
      <span>Contact</span>
      <span v-if="navType !== 'mobile'">&nbsp;|&nbsp;</span>
    </router-link>
    <router-link v-if="!isSignedIn" to="/signin">
      <span>Sign in</span>
      <span v-if="navType !== 'mobile'">&nbsp;|&nbsp;</span>
    </router-link>
    <div :class="{'row spaced full-width': isMobile, 'inline': !isMobile}">
      <router-link v-if="isSignedIn" to="/dashboard">
        <font-awesome-icon title="dashboard" class="is-clickable icon" icon="user" />
        <span v-if="navType !== 'mobile'">&nbsp;|&nbsp;</span>
      </router-link>&nbsp;
      <ButtonSignout v-if="isSignedIn" />
    </div>
  </nav>
</template>

<script>
import auth from "@/auth";
import ButtonSignout from "./ButtonSignout";

export default {
  name: "Nav",
  data() {
    return {
      auth,
      isActive: false
    };
  },
  computed: {
    isSignedIn() {
      return Boolean(this.$store.getters["user/current"]);
    },
    isMobile() {
      return this.$props.navType === "mobile";
    }
  },
  created() {
    if (this.isMobile) {
      this.$ebus.$on("toggle-nav-mobile", () => {
        this.isActive = !this.isActive;
      });
    }
  },
  components: {
    ButtonSignout
  },
  props: ["navType"]
};
</script>


<style scoped lang="scss">
#nav {
  padding: 0;

  > * {
    font-weight: bold;
    color: #44607c;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  &.mobile.is-active {
    transform: translateX(0);
  }

  &.mobile {
    height: calc(100vh - (var(--height-header) + var(--height-footer)));
    position: absolute;
    transform: translateX(-23vw);
    transition: transform 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 23vw;
    padding: 15vh 20px 20px 20px;
    top: var(--height-header);
    background: var(--color-dark-transparent);
    color: var(--color-white);
    z-index: 9;
    border-bottom: 2px solid var(--color-white);
    border-top: 1px solid var(--color-white);
  }
}
</style>