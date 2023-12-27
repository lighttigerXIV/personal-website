<script setup lang="ts">
import { getIconUrl, getImageUrl } from '@/main-viewmodel';
import { ViewModel, Project } from '@pages/app/viewmodel';
import { PropType, onMounted } from 'vue';

let props = defineProps({
    project: {
        required: true,
        type: Object as PropType<Project>
    },
    vm: {
        required: true,
        type: Object as PropType<ViewModel>
    }
});

onMounted(async () => {
    props.project.stars = await props.vm.getProjectStars(props.project);
});



</script>
<template>
    <div class=" mt-2 bg-crust p-4 rounded-3xl flex md:flex-row flex-col">
        <div class="flex justify-center md:mb-0 mb-4">
            <div class=" h-[160px] w-[160px] bg-mantle flex justify-center rounded-2xl p-1">
                <img :src="getImageUrl(project.image)" class=" object-contain ">
            </div>
        </div>
        <div class=" flex-grow flex flex-col items-center ml-4">
            <div class=" text-xl">{{ project.name }}</div>
            <div class=" text-sm mt-2">{{ project.description }}</div>
            <div class="mt-2 flex items-center">
                <div class="flex bg-mantle items-center p-2 pr-4 pl-4 rounded-full">
                    {{ project.stars }}
                    <img :src="getIconUrl('star.svg')" width="20" class="ml-2"
                        :style="{ filter: vm.getIconCSSFilter(vm.inDarkMode ? '#eed49f' : '#df8e1d') }">
                </div>

                <div class="divider ml-2 mr-2"></div>

                <button class="flex bg-mantle items-center p-2 pr-4 pl-4 rounded-full source-button"
                    @click="vm.openLink(project.url)">
                    Source
                    <img :src="getIconUrl('github.svg')" width="20" class="ml-2"
                        :style="{ filter: vm.getIconCSSFilter() }">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.divider{
    height: 20px;
    width: 3px;
    background-color: theme("colors.text");
    border-radius: 48px;
}

.source-button:hover{
    outline: 2px solid theme("colors.yellow");
    background-color: theme("colors.base");
}
</style>