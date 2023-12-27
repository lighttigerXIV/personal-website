<script setup lang="ts">
import { ViewModel } from "@pages/app/viewmodel";
import Navbar from "@components/navbar.vue"
import { ref } from 'vue';
import { getIconUrl } from '@/main-viewmodel';
import ProjectCard from "@/components/project-card.vue";

const vm = ref<ViewModel>(new ViewModel());

</script>

<template>
    <div class=" bg-base h-screen max-h-screen overflow-clip flex"
        :class="vm.inDarkMode ? 'dark-theme' : 'light-theme'">
        <div class="max-w-[300px] mr-8 md:block hidden">
            <Navbar :vm="vm" />
        </div>
        <div class=" z-50 absolute bg-mantle h-screen rounded-tr-2xl" :hidden="vm.hideMobileNav">
            <Navbar :vm="vm" />
        </div>
        <div class="flex-grow p-4 overflow-auto" id="content" @scroll="vm.onContentScroll()">
            <button class=" md:hidden mb-4" @click="vm.openMobileNav()">
                <img :src="getIconUrl('menu.svg')" width="40" :style="{ filter: vm.getIconCSSFilter() }">
            </button>
            <div id="aboutMeSection"
                class="w-full h-[200px] rounded-[20px] outline outline-crust about-me-thumb flex justify-center items-center">
                About Me
            </div>
            <div class="mt-8 section-title">General</div>
            <div class="mt-1">Hi. My name is Afonso Fonseca but you might know me as lighttigerXIV.</div>
            <div class="mt-1">I love Android programming but my skills extends to any platform. I am always eager to learn
                new things in programming.</div>
            <div class="mt-1">I am 22 years old and have been programming for over 6 years. Currently i am taking a computer
                science degree in ESTGOH.</div>
            <div class="mt-1">I enjoy programming, listening to music and watching anime. My favorite foods are bitoque,
                oreo and ice cream.</div>

            <div class="mt-8 section-title">Background</div>

            <div class=" p-4 bg-crust rounded-[20px] flex items-center background-section">
                <img :src="getIconUrl('book.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4">AEOH</div>
                <div class="flex-grow ml-4"></div>
                <div class="overflow-auto line-clamp-1">TPSI</div>
            </div>

            <div class="mt-2 p-4 bg-crust rounded-[20px] flex items-center background-section">
                <img :src="getIconUrl('hat.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4">ESTGOH</div>
                <div class="flex-grow ml-4"></div>
                <div class="overflow-auto line-clamp-1">CTESP PSI</div>
            </div>

            <div class="mt-2 p-4 bg-crust rounded-[20px] flex items-center background-section">
                <img :src="getIconUrl('hat.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4">ESTGOH</div>
                <div class="flex-grow ml-4"></div>
                <div class="overflow-auto line-clamp-1">LEI*</div>
            </div>

            <div class="w-full text-end mt-2">* Currently Taking It</div>

            <div id="contactsSection"
                class="mt-8 w-full h-[200px] rounded-[20px] outline outline-crust contacts-thumb flex justify-center items-center">
                Contacts
            </div>

            <div class="mt-8 bg-crust rounded-[20px] p-4 flex items-center hoverable-card"
                @click="vm.copyToClipboard('afonsofonseca14401@gmail.com')">
                <img :src="getIconUrl('email.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4 overflow-auto text-ellipsis">afonsofonseca14401@gmail.com</div>
                <div class="flex-grow ml-4"></div>
                <img :src="getIconUrl('copy.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
            </div>
            <div class="mt-2 bg-crust rounded-[20px] p-4 flex items-center hoverable-card"
                @click="vm.copyToClipboard('lighttigerxiv@gmail.com')">
                <img :src="getIconUrl('email.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4 overflow-auto text-ellipsis">lighttigerxiv@gmail.com</div>
                <div class="flex-grow ml-4"></div>
                <img :src="getIconUrl('copy.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
            </div>
            <div class="mt-2 bg-crust rounded-[20px] p-4 flex items-center hoverable-card"
                @click="vm.openLink('https://github.com/lighttigerXIV')">
                <img :src="getIconUrl('github-outline.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4 overflow-auto text-ellipsis">GitHub</div>
                <div class="flex-grow ml-4"></div>
                <img :src="getIconUrl('open-link.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
            </div>
            <div class="mt-2 bg-crust rounded-[20px] p-4 flex items-center hoverable-card"
                @click="vm.openLink('https://discord.com/users/598945126089228327')">
                <img :src="getIconUrl('discord-outline.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4 overflow-auto text-ellipsis">Discord</div>
                <div class="flex-grow ml-4"></div>
                <img :src="getIconUrl('open-link.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
            </div>
            <div class="mt-2 bg-crust rounded-[20px] p-4 flex items-center hoverable-card"
                @click="vm.openLink('https://www.linkedin.com/in/afonso-fonseca-995014163')">
                <img :src="getIconUrl('linkedin.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
                <div class="ml-4 overflow-auto text-ellipsis">Linkedin</div>
                <div class="flex-grow ml-4"></div>
                <img :src="getIconUrl('open-link.svg')" width="35" :style="{ filter: vm.getIconCSSFilter() }">
            </div>

            <div id="projectsSection"
                class="mt-8 w-full h-[200px] rounded-[20px] outline outline-crust projects-thumb flex justify-center items-center">
                Projects
            </div>

            <div class="mt-8 section-title">Android</div>
            <div v-for="project in vm.androidProjects">
                <ProjectCard :project="project" :vm="vm" />
            </div>

            <div class="mt-8 section-title">Linux & Windows</div>
            <div v-for="project in vm.pcProjects">
                <ProjectCard :project="project" :vm="vm" />
            </div>

            <div class="mt-8 section-title">Web</div>
            <div v-for="project in vm.webProjects">
                <ProjectCard :project="project" :vm="vm" />
            </div>
        </div>
    </div>
</template>./ViewModel

<style>
.about-me-thumb {
    background-image: url("../../assets/images/about-me-thumb.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #eff1f5;
    font-size: 40px;
}

.contacts-thumb {
    background-image: url("../../assets/images/contacts-thumb.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #eff1f5;
    font-size: 40px;
}

.projects-thumb {
    background-image: url("../../assets/images/projects-thumb.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #eff1f5;
    font-size: 40px;
}



.section-title {
    font-size: 30px;
    color: theme("colors.text");
    font-weight: 700;
}

.background-section {
    font-size: 24px;
}

.hoverable-card:hover {
    background-color: theme("colors.mantle");
    outline: 2px solid theme("colors.yellow");
    cursor: pointer;
}
</style>@/pages/app/viewmodel.js