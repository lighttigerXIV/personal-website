<script lang="ts">
	import Logo from '$lib/svgs/lt14.svg?component';
	import { createEventDispatcher } from 'svelte';

	export let theme: string;
	const dispatch = createEventDispatcher();

	function toggleTheme() {
		switch (theme) {
			case '': {
				theme = 'light-theme';
				break;
			}
			case 'light-theme': {
				theme = '';
				break;
			}
		}

		localStorage.setItem('theme', theme);

		dispatch('click', theme);
	}
</script>

<div class=" flex items-center mt-12">
	<span>@lighttigerXIV</span>

	<div class="flex-grow"></div>

	<Logo class="h-10 w-10" />

	<div class="flex-grow"></div>

	<button on:click={toggleTheme} class="bg-neutral-two rounded-full overflow-auto">
		<span class={`p-4 ${theme === 'light-theme' ? 'bg-neutral-four font-medium' : ''}`}>Light</span>
		<span class={`p-4 ${theme === '' ? 'bg-neutral-four font-medium' : ''}`}>Dark</span>
	</button>
</div>
