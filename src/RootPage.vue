<script setup lang="ts">
import NavigationBar from "@components/NavigationBar.vue";
import { RootPageVM, Tab } from "@/RootPageVM";
import { ref } from "vue";
import MobileNavigationBar from "./Components/MobileNavigationBar.vue";
import HomePage from "./Pages/HomePage/HomePage.vue";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.vue";
import ContactsPage from "./Pages/ContactsPage/ContactsPage.vue";

const vm = ref<RootPageVM>(new RootPageVM());
</script>
<template>
  <div class="background h-screen max-h-screen p-4 gap-4 flex flex-col" :class="vm.getThemeClass()">
    <NavigationBar class="hidden md:flex" :root-v-m="vm" />
    <MobileNavigationBar class="flex md:hidden" :root-v-m="vm" />
    <div class="flex-grow p-4 background-two rounded-2xl overflow-auto">
      <HomePage v-if="vm.uiState.currentTab === Tab.HOME" />
      <ProjectsPage v-if="vm.uiState.currentTab === Tab.PROJECTS" :root-v-m="vm" />
      <ContactsPage v-if="vm.uiState.currentTab === Tab.CONTACTS" :root-v-m="vm"/>
    </div>
  </div>
</template>

<style>
.background {
  background-color: theme("colors.background");
}

.background-two {
  background-color: theme("colors.backgroundTwo");
}

.background-three {
  background-color: theme("colors.backgroundThree");
}

.on-background {
  color: theme("colors.onBackground");
}

.border-on-background {
  border: 2px solid theme("colors.onBackground");
}
</style>
