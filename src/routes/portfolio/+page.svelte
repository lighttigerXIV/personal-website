<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { onMount } from 'svelte';

	$: theme = '';

	onMount(() => {
		theme = localStorage.getItem('theme') ?? '';
	});
</script>

<svelte:head>
    <title>Portfolio - lighttigerXIV</title> 
</svelte:head>

<div class={`h-screen w-full bg-gradient max-h-screen text-text overflow-auto p-8 ${theme}`}>
	<div class=" min-h-screen overflow-auto flex items-center flex-col">
		<Navbar />

		<div class=" mt-8 max-w-[800px] w-full text-lg text-justify text-text-two">
			<div class=" text-3xl font-medium mt-12">Experience</div>
			<div class="text-text-two">
				During my 7 years i have coded android apps, websites, cli programs, APIs and even briefly
				for ios. I too have dabbled in design and have been learning it by myself when i have time.
			</div>

			<div class=" text-3xl font-medium mt-12">IRL Experience</div>
			<div class="text-text-two">
				From this 7 years, 3 of them were spent on a programming professional course that were
				essential to teach me the bases of programming. The next 2 years were spent on a higher
				degree professional course which gave me the opportunity to have a internship where i
				learned how to develop an Django API and learned a lot of Android development. The other 2
				years were mostly spent by learning at home while i am still doing my Software Engineer
				degree.
			</div>

			<div class=" text-3xl font-medium mt-12">Open Source Projects</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
				<ProjectCard
					name="Whiskers Color Scheme"
					id="whiskers"
					link="https://github.com/Whiskers-Color-Scheme"
					description="A color scheme organization based on my cats that has a lot of ports and tools to manage it."
				/>
				<ProjectCard
					name="Whiskers Apps"
					id="whiskers-apps"
					link="https://github.com/Whiskers-Apps"
					description="An organization where i share my apps that are deeply integrated with my color scheme."
				/>
				<ProjectCard
					name="Simple MP"
					id="simple-mp"
					link="https://github.com/lighttigerXIV/SimpleMP-Compose"
					description="An android local music player that is inspired by the material you design language and has a focus on being simple and easy to use since most music players are very bloated."
				/>
				<ProjectCard
					name="Whiskers Launcher"
					id="whiskers-launcher"
					link="https://github.com/Whiskers-Apps/whiskers-launcher"
					description="A keyboard app launcher that can work on both Linux and Windows. The launcher is very customizable and supports extensions for further extendability."
				/>
				<ProjectCard
					name="Catppuccinifier"
					id="catppuccinifier"
					link="https://github.com/lighttigerXIV/catppuccinifier"
					description="Apply catppuccin LUTs to any image"
				/>
			</div>
		</div>
	</div>
	<Footer
		{theme}
		on:click={(e) => {
			theme = e.detail;
		}}
	/>
</div>
