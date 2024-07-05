<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GithubIcon from '$lib/svgs/github.svg?component';
	import DiscordIcon from '$lib/svgs/discord.svg?component';
	import MastodonIcon from '$lib/svgs/mastodon.svg?component';
	import LinkedinIcon from '$lib/svgs/linkedin.svg?component';
	import { onMount } from 'svelte';
	import LastSongCard from '$lib/components/LastSongCard.svelte';

	$: theme = '';

	onMount(() => {
		theme = localStorage.getItem('theme') ?? '';
	});

	function openLink(link: string) {
		window.open(link, '_blank');
	}
</script>

<svelte:head>
    <title>Connect - lighttigerXIV</title> 
</svelte:head>

<div class={`h-screen w-full bg-gradient max-h-screen text-text overflow-auto p-8 ${theme}`}>
	<div class=" min-h-screen overflow-auto flex items-center flex-col">
		<Navbar />

		<div class=" mt-8 max-w-[800px] w-full text-lg text-justify text-text-two">
			<div class=" text-3xl font-medium mt-12">Socials</div>
			<div class="text-text-two">You can stalk me on the following platforms.</div>
			<div class=" grid grid-cols-4 w-fit gap-2">
				<button
					class="p-4 bg-neutral-four rounded-2xl hover:bg-neutral"
					on:click={() => openLink('https://github.com/lighttigerXIV')}
				>
					<GithubIcon class=" h-[42px] w-[42px]" />
				</button>
				<button
					class="p-4 bg-neutral-four rounded-2xl hover:bg-neutral"
					on:click={() => openLink('https://discord.com/users/598945126089228327')}
				>
					<DiscordIcon class=" h-[42px] w-[42px]" />
				</button>
				<button
					class="p-4 bg-neutral-four rounded-2xl hover:bg-neutral"
					on:click={() => openLink('https://mastodon.social/@lighttigerxiv')}
				>
					<MastodonIcon class=" h-[42px] w-[42px]" />
				</button>
				<button
					class="p-4 bg-neutral-four rounded-2xl hover:bg-neutral"
					on:click={() => openLink('https://www.linkedin.com/in/afonso-fonseca-995014163')}
				>
					<LinkedinIcon class=" h-[42px] w-[42px]" />
				</button>
			</div>

            <div class=" text-3xl font-medium mt-12">Music</div>
			<div class="text-text-two">Since i like to share what i listen too, here’s the last song i heard on Spotify.</div>
            
            <LastSongCard/>
		</div>
	</div>
	<Footer
		{theme}
		on:click={(e) => {
			theme = e.detail;
		}}
	/>
</div>
