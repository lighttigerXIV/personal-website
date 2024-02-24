<script setup lang="ts">
import { onMounted, ref } from "vue";
import { HomePageVM } from "./HomePageVM";

const vm = ref<HomePageVM>(new HomePageVM());
const songCoverRef = ref();
const songTitleRef = ref();
const songArtistRef = ref();

onMounted(async ()=>{
  await vm.value.loadLastHeardSong();
  songCoverRef.value.classList.remove("animate-pulse");
  songTitleRef.value.classList.remove("animate-pulse");
  songArtistRef.value.classList.remove("animate-pulse");
});

</script>
<template>
  <div class="space-y-4">
    <div class="font-bold text-4xl">lighttigerXIV</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-dense">
      <div
        class="w-full row-span-1 p-2  background-three rounded-2xl border-on-background h-fit"
      >
        <div class="flex justify-center font-bold">General</div>
        <div>{</div>
        <div class="flex">
          <div class="font-bold">&ensp;"name"</div>
          : "Afonso Fonseca"
        </div>
        <div class="flex">
          <div class="font-bold">&ensp;"username"</div>
          : "lighttigerXIV"
        </div>
        <div class="flex">
          <div class="font-bold">&ensp;"age"</div>
          : 22
        </div>
        <div class="flex">
          <div class="font-bold">&ensp;"country"</div>
          : "Portugal"
        </div>
        <div>}</div>
      </div>

      <div
        class="w-full p-2 row-span-2  background-three rounded-2xl border-on-background h-fit"
      >
        <div class="flex justify-center font-bold">Experience</div>
        <div>[</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"school"</div>
            : "AEOH"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"course"</div>
            : "TPSI"
          </div>
        </div>
        <div>&ensp;},</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"school"</div>
            : "ESTGOH"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"course"</div>
            : "CTeSP PSI"
          </div>
        </div>
        <div>&ensp;},</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"school"</div>
            : "ESTGOH"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"course"</div>
            : "LEI"
          </div>
        </div>
        <div>&ensp;}</div>
        <div>]</div>
      </div>

      <div
        class="w-full p-2 row-span-1  background-three rounded-2xl border-on-background h-fit"
      >
        <div class="flex justify-center font-bold">Fav. Foods</div>
        <div>[</div>
        <div>&ensp;"Oreo"</div>
        <div>&ensp;"Ice Cream"</div>
        <div>&ensp;"Bitoque"</div>
        <div>&ensp;"Pizza"</div>
        <div>]</div>
      </div>

      <div
        class="w-full row-span-2 p-2  background-three rounded-2xl border-on-background h-fit"
      >
        <div class="flex justify-center font-bold">Fav. Languages</div>
        <div>[</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"use_case"</div>
            : "Android"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"language"</div>
            : "Kotlin"
          </div>
        </div>
        <div>&ensp;},</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"use_case"</div>
            : "Web"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"language"</div>
            : "TypeScript"
          </div>
        </div>
        <div>&ensp;},</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"use_case"</div>
            : "API"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"language"</div>
            : "Python"
          </div>
        </div>
        <div>&ensp;},</div>
        <div>&ensp;{</div>
        <div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"use_case"</div>
            : "Multi Platform"
          </div>
          <div class="flex">
            <div class="font-bold">&ensp;&ensp;"language"</div>
            : "Rust"
          </div>
        </div>
        <div>&ensp;}</div>
        <div>]</div>
      </div>

      <div
        class="w-full p-2 row-span-1  background-three rounded-2xl border-on-background h-fit"
      >
        <div class="flex justify-center font-bold">Likes</div>
        <div>[</div>
        <div>&ensp;"Programming"</div>
        <div>&ensp;"Music"</div>
        <div>&ensp;"Android"</div>
        <div>&ensp;"Linux"</div>
        <div>&ensp;"Anime"</div>
        <div>]</div>
      </div>

      <div
        class="w-full p-2 space-y-2 row-span-1 background-three rounded-2xl border-on-background h-fit"
      >
        <div class="font-bold text-center">Last Heard Song</div>
        <div class="flex justify-center">
          <div class="background-two h-[180px] w-[180px] rounded-2xl overflow-clip animate-pulse" ref="songCoverRef">
            <img v-if="vm.uiState.songCoverURL !== null" class="w-full h-full" :src="vm.uiState.songCoverURL ?? ''">
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div ref="songTitleRef" class=" font-bold animate-pulse truncate w-full text-center">{{ vm.uiState.songTitle ?? "-" }}</div>
          <div ref="songArtistRef" class="animate-pulse truncate w-full text-center">{{ vm.uiState.songArtist ?? "-" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
