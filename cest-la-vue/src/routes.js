export const routes = [
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
  {
    path: "/user/:name",
    component: () => import("@/views/UserDetailsView.vue"),
  },
];
