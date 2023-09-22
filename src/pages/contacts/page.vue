<script setup lang="ts">
import Icon from "@/components/icon.vue";
import HomeBar from "@components/home-bar.vue"
import { onMounted } from "vue";
import { openLink } from "@/main-viewmodel";

onMounted(()=>{
    document.title = "LighttigerXIV - Contacts";
});

function copy(text: string) {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
}
</script>

<template>
    <div class="h-screen overflow-auto bg-base p-large text-text">
        <div class="grid grid-cols-12 w-full">
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
            <div class="2xl:col-span-6 xl:col-span-6 lg:col-span-8 md:col-span-10 col-span-12 min-h-0">
                <HomeBar />
                <p class="text-3xl mt-8">Contacts</p>
                <p class="mt-4 text-2xl">Emails</p>
                <div class="contactsCard flex items-center">
                    <p class="flex-grow ellipsisText">afonsofonseca14401@gmail.com</p>
                    <button class="ml-4 bg-mantle hover:opacity-95 p-2 rounded-[5px]"
                        @click="copy('afonsofonseca14401@gmail.com')">
                        <Icon name="copy" class="h-6 w-6 " />
                    </button>
                </div>
                <div class="contactsCard flex items-center mt-1">
                    <p class="flex-grow ellipsisText min-w-0">lighttigerxiv@gmail.com</p>
                    <button class="ml-4 bg-mantle hover:opacity-95 p-2 rounded-[5px]"
                        @click="copy('lighttigerxiv@gmail.com')">
                        <Icon name="copy" class="h-6 w-6" />
                    </button>
                </div>
                <p class="mt-4 text-2xl">Socials</p>
                <button class="contactsCard hover:bg-mantle w-full" @click="openLink('https://github.com/lighttigerXIV')">
                    <div class="flex items-center">
                        <Icon name="github" class="h-8 w-8" />
                        <p class="ml-4 flex-grow text-start">GitHub</p>
                        <Icon name="link" class="h-8 w-8 stroke-text stroke-2" />
                    </div>
                </button>
                <button class="contactsCard hover:bg-mantle w-full mt-1" @click="openLink('https://www.linkedin.com/in/afonso-fonseca-995014163')">
                    <div class="flex items-center">
                        <Icon name="linkedin" class="h-8 w-8" />
                        <p class="ml-4 flex-grow text-start">Linkedin</p>
                        <Icon name="link" class="h-8 w-8 stroke-text stroke-2" />
                    </div>
                </button>
                <button class="contactsCard hover:bg-mantle w-full mt-1" @click="openLink('https://discord.com/users/598945126089228327')">
                    <div class="flex items-center">
                        <Icon name="discord" class="h-8 w-8" />
                        <p class="ml-4 flex-grow text-start">Discord</p>
                        <Icon name="link" class="h-8 w-8 stroke-text stroke-2" />
                    </div>
                </button>
                <button class="contactsCard hover:bg-mantle w-full mt-1" @click="openLink('https://anilist.co/user/lighttigerxiv/')">
                    <div class="flex items-center">
                        <Icon name="anilist" class="h-8 w-8" />
                        <p class="ml-4 flex-grow text-start">AniList</p>
                        <Icon name="link" class="h-8 w-8 stroke-text stroke-2" />
                    </div>
                </button>
            </div>
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
        </div>
    </div>
</template>