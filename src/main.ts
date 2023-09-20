import "@/root.css"


import Home from "@pages/home/page.vue"
import Projects from "@pages/projects/page.vue"
import Tools from "@pages/tools/page.vue"
import Contacts from "@pages/contacts/page.vue"
import Root from "@/root.vue"
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/tools", name: "tools", component: Tools },
    { path: "/contacts", name: "contacts", component: Contacts },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(Root);
app.use(router);
app.mount("#app");