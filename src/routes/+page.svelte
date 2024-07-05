<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	$: theme = '';

	onMount(() => {
		theme = localStorage.getItem('theme') ?? '';
	});
</script>

<svelte:head>
    <title>About Me - lighttigerXIV</title> 
</svelte:head>

<div class={`h-screen w-full bg-gradient max-h-screen text-text overflow-auto p-8 ${theme}`}>
	<div class=" min-h-screen overflow-auto flex items-center justify-center flex-col">
		<Navbar />

		<div class=" text-banana font-medium text-5xl">lighttigerXIV</div>
		<div class=" mt-8 max-w-[800px] text-lg text-justify text-text-two">
			<div>
				Hi. My name is Afonso Fonseca, I’m a 23y old <span class="text-kiwi">Por</span><span
					class="text-banana">tu</span
				><span class="text-cherry">guese</span> dev and have been coding for over 7 years.
			</div>
			<div class="mt-4">
				I like to code, listen to music, watch anime and tinker with my pc. I can work for any area
				of development but my favorite area is definitely mobile (Android).
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
