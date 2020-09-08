<template>
  <font-awesome-icon
    icon="bars"
    class="icon is-clickable"
    size="lg"
    @click="$ebus.$emit('toggle-nav-mobile')"
  />
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  color: #42b983;
}
</style>