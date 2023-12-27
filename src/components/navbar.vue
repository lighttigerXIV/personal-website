<script setup lang="ts">
import { PropType } from 'vue';
import {ViewModel} from "@pages/app/viewmodel";
import { getIconUrl } from '@/main-viewmodel';

defineProps({
    vm: {
        type: Object as PropType<ViewModel>,
        required: true
    }
})
</script>

<template>
    <div class=" w-full p-4">
        <div class=" flex justify-end mb-4">
            <button @click="vm.closeMobileNav()" :hidden="vm.hideMobileNav">
                <img :src="getIconUrl('close.svg')" width="20" :style="{filter: vm.getIconCSSFilter()}">
            </button>
        </div>
        <div class="nav-tab flex items-center" @click="vm.goToAboutMe()">
            <div :class="vm.currentTab === 0 ? 'tab-line' : 'tab-spacer'"></div>
            <div class=" overflow-clip line-clamp-1">
                About Me
            </div>
        </div>
        <div class="nav-tab flex items-center" @click="vm.goToContacts()">
            <div :class="vm.currentTab === 1 ? 'tab-line' : 'tab-spacer'"></div>
            Contacts
        </div>
        <div class="nav-tab flex items-center" @click="vm.goToProjects()">
            <div :class="vm.currentTab === 2 ? 'tab-line' : 'tab-spacer'"></div>
            Projects
        </div>

        <button class="mt-4 bg-crust flex justify-center w-full rounded-[20px] p-4 hoverable-card" @click="vm.toggleDarkMode()">
            <img :src="vm.inDarkMode ? getIconUrl('sun.svg') : getIconUrl('moon.svg')" height="20" width="20" :style="{ filter: vm.getIconCSSFilter() }">
            <div class="ml-2">{{ vm.inDarkMode ? "Light" : "Dark" }}</div>
        </button>
    </div>
</template>

<style>
.nav-tab {
    font-size: 26px;
    color: theme("colors.text");
    cursor: pointer;
    height: 50px;
}

.tab-spacer {
    margin-right: 14px;
}

.tab-line {
    width: 6px;
    height: 50px;
    background-color: theme("colors.text");
    border-radius: 48px;
    margin-right: 8px;
}
</style>@/pages/app/viewmodel