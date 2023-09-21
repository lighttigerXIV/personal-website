<script setup lang="ts">
import { useRouter } from "vue-router";
import icon from "../../components/icon.vue"
import { onMounted, ref } from "vue";
import { getAudioUrl } from "@/main-viewmodel"
import { SONGS } from "./vm";

const router = useRouter();
const logoRef = ref();
const audio = ref<HTMLAudioElement>();

onMounted(() => {
    document.title = "LighttigerXIV - Home";
});


async function playRandomSong() {

    if (audio.value !== undefined) {
        if (audio.value.currentTime > 0 && !audio.value.paused && !audio.value.ended) {
            audio.value.pause();
            audio.value = undefined;
            if(logoRef.value !== null){
                (logoRef.value as HTMLImageElement).classList.remove("spinner");
            }
            return
        }
    } else {
        let random = Math.floor(Math.random() * 4);
        let song = SONGS[random];

        audio.value = new Audio(getAudioUrl(song));
        audio.value.volume = 0.3;

        let audioPromise = audio.value.play();

        if (audioPromise !== undefined) {

            audioPromise.then(async () => {
                if (logoRef.value !== null) {
                    (logoRef.value as HTMLImageElement).classList.add("spinner");
                }
            }).catch((error: any) => console.error(error))
        }

        audio.value.addEventListener("ended", () => {
            if (logoRef.value !== null) {
                (logoRef.value as HTMLImageElement).classList.remove("spinner");
            }
            audio.value = undefined;
        });
    }
}


</script>

<template>
    <div class=" p-large bg-base text-text h-screen w-screen overflow-auto">
        <div class="grid grid-cols-12 w-full">
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
            <div class="2xl:col-span-6 xl:col-span-6 lg:col-span-8 md:col-span-10 col-span-12">
                <div class="flex flex-col items-center">
                    <button @click="playRandomSong()">
                        <img src="@images/logo.png" class="h-[220px] rounded-full" ref="logoRef" />
                    </button>
                    <div class="title">LighttigerXIV</div>
                </div>
                <div class="card mt-6">
                    <div class="codeCard flex flex-col overflow-x-scroll">
                        <div class="flex oneLineText">
                            <div class="let">let&nbsp;</div> bio = <div class="struct">&nbsp;Bio</div>
                            <div class="bracket">&nbsp;{</div>
                        </div>
                        <div class="flex oneLineText">&emsp;name: <div class="string">&nbsp;"Afonso Fonseca"</div>,</div>
                        <div class="flex oneLineText">&emsp;nickname: <div class="string">&nbsp;"lighttigerXIV"</div>,</div>
                        <div class="flex oneLineText">&emsp;nationality: <div class="string">&nbsp;"Portuguese"</div>,</div>
                        <div class="flex oneLineText">&emsp;page: <div class="usize">&nbsp;22</div>,</div>
                        <div class="flex oneLineText">&emsp;favorite_foods: <div class="vec">&nbsp;vec!</div>
                            <div class="bracket">[</div>
                            <div class="string">"Bitoque"</div>,&nbsp; <div class="string">"Oreo"</div>,&nbsp; <div
                                class="string">"Ice Cream"</div>
                            <div class="bracket">]</div>,
                        </div>
                        <div class="flex oneLineText">&emsp;favorite_languages: <div class="vec">&nbsp;vec!</div>
                            <div class="bracket">[</div>
                            <div class="string">"Rust"</div>,&nbsp; <div class="string">"Kotlin"</div>,&nbsp; <div
                                class="string">"TypeScript"</div>
                            <div class="bracket">]</div>,
                        </div>
                        <div class="flex oneLineText">&emsp;likes: <div class="vec">&nbsp;vec!</div>
                            <div class="bracket">[</div>
                            <div class="string">"Music"</div>,&nbsp; <div class="string">"Coding"</div>,&nbsp; <div
                                class="string">"Anime"</div>
                            <div class="bracket">]</div>
                        </div>
                        <div class="flex bracket oneLineText">}</div>
                    </div>
                </div>
                <div
                    class="mt-6 bg-crust rounded-[20px] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col overflow-hidden">
                    <button class="flex-grow p-4 flex flex-col items-center justify-center hover:bg-mantle"
                        @click="router.push('/projects')">
                        <icon name="laptop" class="h-16 w-16" />
                        <div class="text-lg">Projects</div>
                    </button>
                    <div class="verticalDivider"></div>
                    <button class="flex-grow p-4 flex flex-col items-center justify-center hover:bg-mantle"
                        @click="router.push('/tools')">
                        <icon name="tools" class="h-16 w-16 " />
                        <div class="text-lg">Tools</div>
                    </button>
                    <div class="verticalDivider"></div>
                    <button class="flex-grow p-4 flex flex-col items-center justify-center hover:bg-mantle"
                        @click="router.push('/contacts')">
                        <icon name="messages" class="h-16 w-16" />
                        <div class="text-lg">Contacts</div>
                    </button>
                </div>
            </div>
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
        </div>
    </div>
</template>

<style scoped>
.let {
    color: theme("colors.mauve");
}

.struct {
    color: theme("colors.yellow");
}

.string {
    color: theme("colors.green");
}

.vec {
    color: theme("colors.teal");
}

.usize,
.bracket {
    color: theme("colors.peach");
}

.verticalDivider {
    position: relative;
    top: 0%;
    bottom: 0%;
    border: 2px solid theme("colors.mantle");
    border-radius: 48px;
}

.spinner {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: 5;
    animation-timing-function: linear;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>