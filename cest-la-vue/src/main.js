import { createApp } from "vue";
import App from "@/App.vue";
import { routes } from "./routes";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
