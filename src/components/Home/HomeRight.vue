<template>
  <div class="delivary_detail_box">
    <div class="d-flex mb-2">
      <i class="fa-solid fa-bicycle my-auto"></i>
      <p class="my-auto">Delivery From: 15:00</p>
    </div>
    <div class="d-flex mb-2">
      <i class="fa-solid fa-bag-shopping"></i>
      <p class="my-auto">Collection From: 15:00</p>
    </div>
    <div class="d-flex mb-2">
      <i class="fa-solid fa-clock"></i>
      <p class="my-auto">Delivery: 40 Minutes</p>
    </div>
    <div class="d-flex">
      <i class="fa-solid fa-user-clock"></i>
      <p class="my-auto">Collection: 20 Minutes</p>
    </div>
  </div>
  <div class="offer_box">
    <div class="d-flex">
      <i class="fa-solid fa-gift mb-auto"></i>
      <div class="mb-auto">
        <h5>Offers</h5>
        <p>10% off on all order</p>
        <p>20% on LAZY TUESDAY</p>
      </div>
    </div>
  </div>
  <div class="cart_box">
    <div class="cart_box_header">
      <div class="d-flex">
        <i class="fa-solid fa-basket-shopping my-auto"></i>
        <h5 class="my-auto">Your Basket</h5>
      </div>
      <div class="cart_item">0</div>
    </div>
    <p>Your Cart is empty...!</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.delivary_detail_box,
.offer_box,
.cart_box {
  width: 100%;
  height: auto;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.delivary_detail_box p {
  font-size: 15px;
  color: #181818;
  font-weight: 500;
}

.delivary_detail_box i,
.offer_box i {
  color: #ff9900;
  width: 38px;
}

.offer_box h5 {
  font-size: 17px;
  color: #ff9900;
  margin-bottom: 7px;
}

.offer_box p,
.cart_box p {
  color: #212529;
  margin-bottom: 5px;
  font-style: 16px;
}

.cart_box {
  padding-bottom: 10px;
  padding: 0;
}

.cart_box p {
  font-style: 14px;
  text-align: center;
  margin-top: 5px;
}

.cart_box_header {
  background: #ff9900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  color: #fff;
  border-radius: 5px;
}

.cart_item {
  background: #fff;
  padding: 4px 10px;
  color: #181818;
  border-radius: 5px;
}
</style>
