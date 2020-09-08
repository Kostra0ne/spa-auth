<template>
  <div id="app">
    <HeaderMain />
    <NavMobile navType="mobile" />
    <main id="content-main">
      <router-view />
    </main>
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
import Nav from "@/components/Nav";
import auth from "@/auth";

export default {
  components: {
    HeaderMain,
    FooterMain,
    NavMobile: Nav
  },
  beforeCreate() {
    const currentUser = this.$store.getters["user/current"];
    const token = auth.getLocalAuthToken();

    if (token && !currentUser) {
      this.$store.dispatch("user/getUserByToken");
    }
  }
};
</script>

<style lang="scss">
@import url("./styles/vars.css");
@import url("./styles/index.css");
@import url("./styles/reset.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
  box-shadow: 0.1px 3.9px 1.7px 1.3px #101;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

#content-main {
  min-height: calc(100vh - (var(--height-header) + var(--height-footer)));
  position: relative;
  top: var(--height-header);
  padding: 40px 20px 60px;
  overflow: hidden;
}
</style>
