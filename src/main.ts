import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import "./index.css";
import "@splidejs/vue-splide/css";

createApp(App).use(VueSplide).mount("#app");
