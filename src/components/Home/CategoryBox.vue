<template>
  <div class="cat_box d-lg-block d-none">
    <div class="cat_box_header">All Categories</div>
    <div v-for="(catagory, index) in catogeris" :key="index">
      <a
        href=""
        class="cat_box_content btn"
        v-for="sub_category in catagory.sub_categories"
        :key="sub_category.id"
      >
        <i class="fa-solid fa-play my-auto"></i>
        <p class="my-auto">{{ sub_category.name }}</p>
      </a>
    </div>
  </div>

  <div
    class="mobile_cat_box d-lg-none"
    v-for="(catagory, index) in catogeris"
    :key="index"
  >
    <ul>
      <li
        v-for="sub_category in catagory.sub_categories"
        :key="sub_category.id"
      >
        <a href="" class="btn">{{ sub_category.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      catogeris: [],
    };
  },
  mounted() {
    axios.get("https://api-flava.yumaapp.uk/api/category").then((response) => {
      this.catogeris = response.data;
    });
  },
};
</script>

<style scoped>
.cat_box {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  max-height: 90vh;
  position: sticky;
  top: 0;
  padding: 6px;
}

.cat_box_header {
  width: 100%;
  padding: 12px 15px;
  background: #ff9900;
  border-radius: 10px 10px px 0px 0px;
  border-radius: 5px !important;
  border-bottom: 0;
  font-size: 20px;
  color: #fff;
}

.cat_box_content {
  padding: 10px;
  background: rgba(0, 0, 0, 0.15);
  margin: 5px 0;
  border-radius: 5px px;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #212529;
}

.cat_box_content:hover,
.cat_box a.active {
  background: #ff9900;
  color: #fff;
}

.cat_box_content i {
  width: 12px;
  height: 18px;
  margin-right: 5px;
}

.mobile_cat_box {
  width: 100%;
  height: 55px;
  background: #ff9900;
  padding: 12px 15px;
  border-radius: 5px;
  overflow-x: scroll;
  white-space: nowrap;
}

.mobile_cat_box::-webkit-scrollbar {
  display: none;
}

.mobile_cat_box a {
  font-size: 15px;
  color: #fff;
  border: none;
  padding-bottom: 0;
}

.mobile_cat_box ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}
</style>
