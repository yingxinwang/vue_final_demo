<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #left></template>
      <template #center>购物街</template>
      <template #right></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "Home",
  components: { NavBar },
};
</script>

<style scoped>
.home-nav {
  /* background-color: var(--color-tint); */
  background-color: #45a9df;
  color: #fff;
}
</style>