<script setup lang="ts">
import { RootPageVM, Tab } from "@/RootPageVM";
import { getIconUrl, getImageUrl } from "@/utils";
import { useRouter } from "vue-router";

const props = defineProps<{ rootVM: RootPageVM }>();
const router = useRouter();

function getTabClass(tab: Tab): string {
  return props.rootVM.uiState.currentTab === tab ? "highlight-tab" : "";
}
</script>
<template>
  <div>
    <div
      v-if="rootVM.uiState.showMobileNav"
      class="h-screen z-50 w-full overflow-auto space-y-2 flex flex-col absolute background-two left-0 top-0 p-4"
    >
      <div class="flex justify-end">
        <button class="p-2 background-three rounded-full" @click="rootVM.closeMobileNavBar()">
          <img :src="getIconUrl('close.svg')" width="18" :style="{filter: rootVM.getIconFilter()}" />
        </button>
      </div>
      <button
        class="w-fit text-xl"
        :class="getTabClass(Tab.HOME)"
        @click="rootVM.openHomePage(router)"
      >
        Home
      </button>
      <button
        class="w-fit text-xl"
        :class="getTabClass(Tab.PROJECTS)"
        @click="rootVM.openProjectsPage(router)"
      >
        Projects
      </button>
      <button
        class="w-fit text-xl"
        :class="getTabClass(Tab.CONTACTS)"
        @click="rootVM.openContactsPage(router)"
      >
        Contacts
      </button>
      <div class="flex-grow"></div>
      <button
        class="flex gap-2 background-three p-2 pl-3 pr-3 rounded-lg hover:brightness-95 w-fit"
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
    <div class="background-two p-2 flex gap-4 rounded-full w-full">
      <button @click="rootVM.openMobileNavBar()">
        <img :src="getIconUrl('menu.svg')" :style="{ filter: rootVM.getIconFilter() }" width="24" />
      </button>
      <div class="flex-grow"></div>
      <button>
        <img
          :src="getImageUrl('lt-14.webp')"
          :style="{ filter: rootVM.getIconFilter() }"
          width="32"
          @click="rootVM.openHomePage(router)"
        />
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
