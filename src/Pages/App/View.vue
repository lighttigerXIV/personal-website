<script setup lang="ts">
import { onMounted, ref } from "vue";
import { copy, getIcon, getImage } from "@/utils";
import { AppViewModel } from "./ViewModel.ts";

const vm = ref(new AppViewModel());

onMounted(async () => {
  vm.value.loadStars();
});
</script>

<template>
  <div
    class="bg-background h-screen max-h-screen flex flex-col items-center p-8 overflow-auto"
    :class="vm.uiState.useDarkMode ? 'dark-theme' : 'light-theme'"
  >
    <div class="flex flex-col items-center max-w-[700px] w-full">
      <img :src="getImage('pp.webp')" width="180" class="rounded-full" />
      <div class="flex text-4xl mt-4 gap-4">
        <div>lighttigerXIV</div>
        <button @click="vm.toggleDarkMode()">
          <img
            v-if="vm.uiState.useDarkMode"
            width="32"
            height="32"
            :src="getIcon('sun.svg')"
            :style="{ filter: vm.getIconFilter() }"
          />
          <img
            v-else
            width="32"
            height="32"
            :src="getIcon('moon.svg')"
            :style="{ filter: vm.getIconFilter() }"
          />
        </button>
      </div>
      <div class="mt-4 bg-accent w-full rounded-3xl text-xl p-4">
        <div class="one-line card-scroll">
          <div class="font-bold">[about]</div>
          <div>name = "Afonso Fonseca"</div>
          <div>age = 22</div>
          <div>country = "Portugal"</div>
          <div>hobbies = ["Programming", "Music", "Anime", "Drawing"]</div>
        </div>
      </div>
      <div class="mt-4 bg-accent w-full rounded-3xl text-xl p-4">
        <div class="one-line card-scroll">
          <div class="font-bold">[projects]</div>
          <div class="font-bold mt-4">[projects.android]</div>
          <div v-for="project in vm.uiState.androidProjects">
            <div>
              <a
                :href="`https://github.com/lighttigerXIV/${project.repo}`"
                target="_blank"
                class="link"
              >
                {{ project.key }} = { repo = "{{ project.repo }}", stars =
                {{ project.stars ?? "#" }} }
              </a>
            </div>
          </div>
          <div class="font-bold mt-4">[projects.desktop]</div>
          <div v-for="project in vm.uiState.desktopProjects">
            <div>
              <a
                :href="`https://github.com/lighttigerXIV/${project.repo}`"
                target="_blank"
                class="link"
              >
                {{ project.key }} = { repo = "{{ project.repo }}", stars =
                {{ project.stars ?? "#" }} }
              </a>
            </div>
          </div>
          <div class="font-bold mt-4">[projects.web]</div>
          <div v-for="project in vm.uiState.webProjects">
            <div>
              <a
                :href="`https://github.com/lighttigerXIV/${project.repo}`"
                target="_blank"
                class="link"
              >
                {{ project.key }} = { repo = "{{ project.repo }}", stars =
                {{ project.stars ?? "#" }} }
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 bg-accent w-full rounded-3xl text-xl p-4">
        <div class="one-line card-scroll">
          <div class="font-bold">[contacts]</div>
          <div>
            emails = ["<button class="link" @click="copy('lighttigerxiv@gmail.com')">
              lighttigerxiv@gmail.com</button
            >", "<button class="link" @click="copy('afonsofonseca14401@gmail.com')">
              afonsofonseca14401@gmail.com</button
            >"]
          </div>
          <div>
            socials = ["<a href="https://discord.com/users/598945126089228327" target="_blank" class="link"
              >Discord</a
            >", "<a href="https://github.com/lighttigerXIV" target="_blank" class="link">GitHub</a>"]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
