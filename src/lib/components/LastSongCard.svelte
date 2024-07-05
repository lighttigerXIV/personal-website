<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	let songDiv: HTMLDivElement;

	$: song = {
		coverUrl: '',
		title: '-',
		artist: '-'
	};

	onMount(() => {
		songDiv.classList.add('animate-pulse');

		axios
			.get(
				'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lighttigerxiv&api_key=fe1b7799072f646b80fdb37a8ef26d42&format=json&limit=1'
			)
			.then((response) => {
				song.coverUrl = response.data.recenttracks.track[0].image[2]['#text'];
				song.title = response.data.recenttracks.track[0].name;
				song.artist = response.data.recenttracks.track[0].artist['#text'];
			})
			.finally(() => {
				songDiv.classList.remove('animate-pulse');
			});
	});
</script>

<div class=" mt-4 w-full flex flex-col md:flex-row  focus:bg-neutral-six outline-none" bind:this={songDiv}>
	{#if song.coverUrl !== ''}
		<div class=" w-[140px] h-[140px] bg-neutral-four rounded-lg">
			<img src={song.coverUrl} alt="song cover" class="w-full rounded-lg" />
		</div>
		<div class="md:ml-4 contain-text flex flex-col justify-center flex-1 items-start">
			<p class="font-medium text-xl ">{song.title}</p>
			<p class=" text-text-two">{song.artist}</p>
		</div>
	{/if}
</div>

<style>
	.contain-text {
		min-width: 0;
		white-space: nowrap;
		overflow: clip;
		text-overflow: ellipsis;
	}
</style>
