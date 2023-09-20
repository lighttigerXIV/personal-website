<script setup lang="ts">
import HomeBar from "@components/home-bar.vue"
import { onMounted } from "vue";
import Card from "./card.vue";

onMounted(()=>{
    document.title = "LighttigerXIV - Tools";
});
</script>

<template>
    <div class="h-screen overflow-auto bg-base p-large text-text">
        <div class="grid grid-cols-12 w-full">
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
            <div class="2xl:col-span-6 xl:col-span-6 lg:col-span-8 md:col-span-10 col-span-12">
                <HomeBar />
                <p class="text-3xl mt-8">Tools</p>
                <p class="text-2xl mt-4">OS's</p>
                <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2">
                    <Card name="Arch Linux" icon="arch.svg"/>
                    <Card name="Windows" icon="windows.svg"/>
                </div>
                <p class="text-2xl mt-4">IDES / Editors</p>
                <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2">
                    <Card name="Android Studio" icon="android-studio.svg"/>
                    <Card name="Jetbrains Idea" icon="idea.svg"/>
                    <Card name="VS Code" icon="vs-code.svg"/>
                </div>
                <p class="text-2xl mt-4">Languages</p>
                <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2">
                    <Card name="Rust" icon="rust.svg"/>
                    <Card name="Kotlin" icon="kotlin.svg"/>
                    <Card name="Python" icon="python.svg"/>
                    <Card name="JavaScript" icon="javascript.svg"/>
                    <Card name="TypeScript" icon="typescript.svg"/>
                    <Card name="Swift" icon="swift.svg"/>
                    <Card name="Java" icon="java.svg"/>
                    <Card name="C#" icon="c-sharp.svg"/>
                </div>
            </div>
            <div class="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-1"></div>
        </div>
    </div>
</template>