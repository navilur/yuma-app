<script setup>
import NavBarVue from "./components/NavBar.vue";
import TopBar from "./components/TopBar.vue";
import HomeViewVue from "./views/HomeView.vue";
</script>

<template>
  <header>
    <TopBar />
    <NavBarVue />
  </header>
  <RouterView />
</template>

<style scoped></style>
