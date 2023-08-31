import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

axios.default.baseUrl = "https://api-flava.yumaapp.uk/api";

app.use(router);

app.mount("#app");
