<script setup>
import CategoryBoxVue from "../components/Home/CategoryBox.vue";
import HomeRightVue from "../components/Home/HomeRight.vue";
import ProductBoxVue from "../components/Home/ProductBox.vue";
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3 mb-3">
          <CategoryBoxVue />
        </div>
        <div class="col-12 col-lg-6 mb-3">
          <ProductBoxVue />
        </div>
        <div class="col-12 col-lg-3">
          <HomeRightVue />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: url("https://flava.yumaapp.uk/assets/images/bg-white.png")
    no-repeat fixed;
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 30px 0;
}
</style>
