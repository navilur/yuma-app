<template>
  <div class="topbar">
    <div class="container d-flex justify-content-between">
      <div class="my-auto">
        <a href="" class="me-3">
          <i class="fa-brands text-white fa-facebook-f"></i>
        </a>
        <a href="">
          <i class="fa-brands text-white fa-instagram"></i>
        </a>
      </div>
      <div class="d-flex my-auto">
        <p class="my-auto">Shop:</p>
        <select class="form-control" name="" id="">
          <option value="">Select Shop</option>
          <option value="">Biscot Road</option>
          <option value="">Sundon Park</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topbar {
  background: #ff9900;
  width: 100%;
  padding: 8px 0;
}

.topbar p {
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin-right: 8px;
}
</style>
