<script lang="ts">
	import LastFmLogo from '../lib/images/last-fm.webp';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let button: HTMLButtonElement;

	$: song = {
		coverUrl: '',
		title: '-',
		artist: '-',
		lastFmUrl: ''
	};

	function openUrl() {
		if (song.lastFmUrl !== '') {
			window.open(song.lastFmUrl, '_blank');
		}
	}

	onMount(() => {
		button.classList.add('animate-pulse');

		axios
			.get(
				'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lighttigerxiv&api_key=fe1b7799072f646b80fdb37a8ef26d42&format=json&limit=1'
			)
			.then((response) => {
				song.coverUrl = response.data.recenttracks.track[0].image[2]['#text'];
				song.title = response.data.recenttracks.track[0].name;
				song.artist = response.data.recenttracks.track[0].artist['#text'];
				song.lastFmUrl = response.data.recenttracks.track[0].url;
			})
			.finally(()=>{
				button.classList.remove('animate-pulse');
			});
	});
</script>

<button
	class=" mt-4 w-full flex bg-neutral-four p-2 rounded-xl border border-neutral-eight hover:bg-neutral-six focus:bg-neutral-six outline-none"
	on:click={openUrl}
	bind:this={button}
>
	<div class=" w-[100px] h-[100px] bg-neutral-eight rounded-lg">
		{#if song.coverUrl !== ''}
			<img src={song.coverUrl} alt="song cover" class="w-full rounded-lg" />
		{/if}
	</div>
	<div class="ml-4 contain-text flex flex-col justify-center flex-1 items-start">
		<p class=" text-banana font-semibold">{song.title}</p>
		<p>{song.artist}</p>
	</div>
	<div class="flex contain-text items-start ml-4">
		<img src={LastFmLogo} width="60" class=" aspect-square object-contain" alt="" />
	</div>
</button>

<style>
	.contain-text {
		min-width: 0;
		white-space: nowrap;
		overflow: clip;
		text-overflow: ellipsis;
	}
</style>
