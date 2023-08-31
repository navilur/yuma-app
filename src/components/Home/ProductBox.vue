<template>
  <div
    class="accordion"
    id="accordionExample"
    v-for="(food, index) in foods"
    :key="index"
  >
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          aria-expanded="true"
          :aria-controls="'collapse' + index"
        >
          {{ food?.property?.category }}
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="product_box" v-for="food in foods" :key="food.id">
            <button
              type="button"
              class="btn w-100 text-start"
              data-bs-toggle="modal"
              :data-bs-target="`#${food.uuid}`"
            >
              <div>
                <h5>{{ food.short_name }}</h5>
                <p>{{ food?.price?.currency }}{{ food?.price?.price }}</p>
              </div>
              <div>
                <img
                  :src="`${food?.files.file_name}`"
                  :alt="`${food.short_name}`"
                  class="img-fluid"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-for="food in foods" :key="food.id">
    <div
      class="modal fade"
      :id="`${food.uuid}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header position-relative">
            <h1 class="modal-title">
              {{ food.short_name }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img :src="`${food?.files?.file_name}`" class="img-fluid" alt="" />
            <p class="modal_food_price">
              Price: {{ food?.price?.currency }}{{ food?.price?.price }}
            </p>
            <div class="mb-3">
              <h4>Extra</h4>
              <div class="d-flex justify-content-between">
                <div>
                  <input type="checkbox" class="form-check-input" id="inp" />
                  <label for="inp">Mayonnaise Dips</label>
                  <div class="input-group mb-3">
                    <button class="btn qty_btn me-2">-</button>
                    <input
                      type="text"
                      class="form-control qty_inp"
                      value="1"
                      readonly
                    />
                    <button class="btn qty_btn ms-2">+</button>
                  </div>
                </div>
                <p class="modal_side_price">+0.20</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <div>
                  <input type="checkbox" class="form-check-input" id="inp" />
                  <label for="inp">Mayonnaise Dips</label>
                  <div class="input-group">
                    <button class="btn qty_btn me-2">-</button>
                    <input
                      type="text"
                      class="form-control qty_inp"
                      value="1"
                      readonly
                    />
                    <button class="btn qty_btn ms-2">+</button>
                  </div>
                </div>
                <p class="modal_side_price">+0.20</p>
              </div>
            </div>
            <div class="mb-3">
              <h4>Choose One</h4>
              <div class="row">
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="c1" />
                    <div class="side_name">
                      <p>Normal</p>
                    </div>
                  </label>
                </div>
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="c1" />
                    <div class="side_name">
                      <p>Meal Deal (Chips) +$2.50</p>
                    </div>
                  </label>
                </div>
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="c1" />
                    <div class="side_name">
                      <p>Meal Deal (rice) +$3.00</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h4>Flavours</h4>
              <div class="row">
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="f1" />
                    <div class="side_name">
                      <p>None</p>
                    </div>
                  </label>
                </div>
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="f1" />
                    <div class="side_name">
                      <p>Peri Peri</p>
                    </div>
                  </label>
                </div>
                <div class="col-12 col-lg-4">
                  <label class="modal_label">
                    <input type="radio" name="f1" />
                    <div class="side_name">
                      <p>BBQ</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <textarea
              class="modal_textarea form-control mt-3"
              placeholder="Special instructio (if any)"
            ></textarea>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn add_cart_btn">
              {{ food?.price?.currency }}{{ food?.price?.price }} Add To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      foods: [],
    };
  },
  mounted() {
    axios.get("https://api-flava.yumaapp.uk/api/products").then((response) => {
      this.foods = response.data;
    });
  },
  computed: {
    filteredFood: function () {
      let category = this.selectedCategory;
      if (category === "*") {
        return this.foods;
      } else {
        return this.foods.filter(function (food) {
          document
            .getElementById("label_" + category.sub_category.name)
            .classList.toggle("activecategory");
          return food.category === carogry.sub_category.name;
        });
      }
    },
  },
};
</script>

<style scoped>
.accordion-item {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0;
}

.accordion-button {
  background: #ff9900;
  padding: 16px 20px;
  font-size: 17px;
  color: #fff;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.accordion-button::after {
  filter: invert(1);
}

.product_box {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 8px;
}

.product_box button {
  display: flex;
  justify-content: space-between;
  border: none !important;
}

.product_box img {
  border-radius: 5px;
  width: 70px;
  height: 70px;
}

.product_box h5 {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #212529;
}

.product_box p {
  color: #181818;
  font-weight: 500;
  font-size: 15px;
  margin-top: 3px;
  margin-bottom: 0;
}

.add_cart_btn {
  background-color: #ff9900;
  color: #fff;
}

.modal_textarea {
  min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
  border: 1px solid #c5c5c5;
}

.qty_btn {
  background-color: #ff9900;
  color: #fff;
  text-align: center;
  font-size: 14px;
  height: 26px;
  border-radius: 0.375rem !important;
  padding-top: 2px;
}

.qty_inp {
  padding: 1px 4px;
  text-align: center;
  border-radius: 0.375rem !important;
  height: 26px;
}

.modal .input-group {
  margin-top: 10px;
}

.modal label {
  font-size: 16px;
  margin-left: 5px;
  color: #212529;
}

.modal_side_price {
  font-size: 16px;
  color: #212529;
}

.modal h4 {
  font-size: 20px;
  font-weight: 600;
  color: #181818;
  background-color: #dbdbdb;
  padding: 6px 20px;
}

.modal_food_price {
  font-size: 18px;
  font-weight: 600;
  color: #181818;
  text-align: center;
}

.modal_label {
  position: relative;
  width: 100%;
}

.side_name {
  background: #ffffff;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 2px;
  text-align: center;
  border: 2px solid #c5c5c5;
  border-radius: 3px;
  margin-bottom: 15px;
}

.side_name p {
  display: inline-block;
  position: relative;
  font-size: 15px;
  margin-bottom: 0;
}

.modal_label input {
  position: absolute;
  display: none;
}

.modal_label input:checked ~ .side_name {
  border: 2px solid #ff9900 !important;
}

.form-check-input:checked {
  background-color: #ff9900;
  border-color: #ff9900;
}

.modal-title {
  margin: auto;
  font-size: 22px;
  font-weight: 600;
  color: #181818;
}

.btn-close {
  position: absolute;
  right: 16px;
  padding: 8px;
}

.modal-header {
}
</style>
