import "@/root.css";
import Root from "@/RootPage.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import RootPage from "@/RootPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RootPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(Root);
app.use(router);
app.mount("#app");
