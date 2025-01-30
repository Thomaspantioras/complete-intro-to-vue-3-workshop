import { createApp } from "vue";
import App from "@/App.vue";
// import { routes } from "./routes";
import { createRouter, createWebHashHistory } from "vue-router";

// const routes = [
//   { path: "/", component: () => import("@/views/HomeView.vue") },
//   { path: "/login", component: () => import("@/views/HomeView.vue") },
//   { path: "/user", component: () => import("@/views/HomeView.vue") },
// ];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/user",
      component: () => import("@/views/UserView.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
