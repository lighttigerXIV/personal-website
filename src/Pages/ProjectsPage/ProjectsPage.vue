<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ProjectsPageVM } from "./ProjectsPageVM";
import { getIconUrl, getImageUrl, openLink } from "@/utils";
import { RootPageVM } from "@/RootPageVM";

defineProps<{ rootVM: RootPageVM }>();
const vm = ref<ProjectsPageVM>(new ProjectsPageVM());

onMounted(async ()=>{
  vm.value.loadStars()
});

</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
    <div
      v-for="project in vm.uiState.projects"
      class="background-three h-fit p-4 gap-4 border-on-background rounded-2xl flex flex-col items-center"
    >
      <div class="flex items-center justify-center h-[100px]">
        <img :src="getImageUrl(project.image)" class="h-full" />
      </div>
      <div class="text-lg font-bold truncate w-full text-center">{{ project.name }}</div>
      <div class="text-sm line-clamp-3 text-ellipsis w-full text-center">
        {{ project.description }}
      </div>
      <div class="flex gap-2 justify-center items-center">
        <button
          class="hover:brightness-95 background-two p-2 pl-3 pr-3 rounded-full flex gap-1"
          @click="openLink(project.url)"
        >
          Source
          <img
            :src="getIconUrl('diagonal-arrow.svg')"
            width="18"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </button>
        <div class="background-two p-2 pl-3 pr-3 rounded-full flex gap-1">
          {{ project.stars }}
          <img :src="getIconUrl('star.svg')" width="18" :style="{filter: rootVM.getIconFilter()}" />
        </div>
      </div>
    </div>
  </div>
</template>
