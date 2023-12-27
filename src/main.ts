import "@/root.css"
import Root from "@/root.vue"
import App from "./pages/app/app.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/", name: "home", component: App },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(Root);
app.use(router);
app.mount("#app");