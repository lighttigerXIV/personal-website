<script setup lang="ts">
import { getIconUrl, getImageUrl } from "@/utils";
import { RootPageVM, Tab } from "@/RootPageVM";
import { useRouter } from "vue-router";

const props = defineProps<{ rootVM: RootPageVM }>();
const router = useRouter();

function getTabClass(tab: Tab): string {
  return props.rootVM.uiState.currentTab === tab ? "highlight-tab" : "";
}
</script>
<template>
  <div class="background-two p-2 flex rounded-2xl">
    <button @click="rootVM.openHomePage(router)">
      <img
        :src="getImageUrl('lt-14.webp')"
        width="50"
        :style="{ filter: rootVM.getIconFilter() }"
      />
    </button>
    <div class="flex-grow flex justify-end items-center gap-4">
      <button :class="getTabClass(Tab.HOME)" @click="rootVM.openHomePage(router)">Home</button>
      <button :class="getTabClass(Tab.PROJECTS)" @click="rootVM.openProjectsPage(router)">
        Projects
      </button>
      <button :class="getTabClass(Tab.CONTACTS)" @click="rootVM.openContactsPage(router)">
        Contacts
      </button>
      <button
        class="flex gap-2 background-three p-2 pl-3 pr-3 rounded-lg hover:brightness-95"
        @click="rootVM.toggleTheme()"
      >
        Dark
        <img
          v-if="rootVM.uiState.inDarkMode"
          :src="getIconUrl('check.svg')"
          width="16"
          :style="{ filter: rootVM.getIconFilter() }"
        />
        <img v-else :src="getIconUrl('close.svg')" width="16" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.highlight-tab {
  text-decoration: underline;
  font-weight: 600;
}
</style>
