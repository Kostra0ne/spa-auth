<template>
  <header id="header-main">
    <Logo />
    <NavMain />
    <Burger />
  </header>
</template>

<script>
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Burger from "@/components/Burger";

export default {
  name: "HeaderMain",
  components: {
    Logo,
    Burger,
    NavMain: Nav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header-main {
  background: var(--color-dark);
  position: fixed;
  height: var(--height-header);
  width: 100vw;
  max-width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 6px 20px 10px;
}
</style>
