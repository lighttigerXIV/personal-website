<script setup lang="ts">
import { RootPageVM } from "@/RootPageVM";
import { getIconUrl, copy, openLink } from "@/utils";

defineProps<{ rootVM: RootPageVM }>();
</script>
<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 md:w-fit gap-4">
      <div
        class="flex gap-4 p-4 background-three border-on-background rounded-2xl items-center md:w-fit"
      >
        <div class="flex-grow truncate">afonsofonseca14401@gmail.com</div>
        <button
          class="p-2 background-two rounded-full hover:brightness-95"
          @click="copy('afonsofonseca14401@gmail.com')"
        >
          <img
            :src="getIconUrl('copy.svg')"
            width="24"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </button>
      </div>
      <div
        class="flex gap-4 p-4 background-three border-on-background rounded-2xl items-center md:w-fit"
      >
        <div class="flex-grow truncate">lighttigerxiv@gmail.com</div>
        <button
          class="p-2 background-two rounded-full hover:brightness-95"
          @click="copy('lighttigerxiv@gmail.com')"
        >
          <img
            :src="getIconUrl('copy.svg')"
            width="24"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 md:w-fit gap-4">
      <button
        class="flex gap-4 p-4 background-three border-on-background rounded-2xl items-center md:w-fit"
        @click="openLink('https://discord.com/users/598945126089228327')"
      >
        <div class="flex-grow truncate text-start">Discord</div>
        <div class="p-2 background-two rounded-full">
          <img
            :src="getIconUrl('discord-outline.svg')"
            width="24"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </div>
      </button>
      <button
        class="flex gap-4 p-4 background-three border-on-background rounded-2xl items-center md:w-fit"
        @click="openLink('https://github.com/lighttigerXIV')"
      >
        <div class="flex-grow truncate text-start">GitHub</div>
        <div class="p-2 background-two rounded-full">
          <img
            :src="getIconUrl('github.svg')"
            width="24"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </div>
      </button>
      <button
        class="flex gap-4 p-4 background-three border-on-background rounded-2xl items-center md:w-fit"
        @click="openLink('https://www.linkedin.com/in/afonso-fonseca-995014163')"
      >
        <div class="flex-grow truncate text-start">Linkedin</div>
        <div class="p-2 background-two rounded-full">
          <img
            :src="getIconUrl('linkedin.svg')"
            width="24"
            :style="{ filter: rootVM.getIconFilter() }"
          />
        </div>
      </button>
    </div>
  </div>
</template>
