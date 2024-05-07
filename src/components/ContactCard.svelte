<script lang="ts">
	import GitHubIcon from '../lib/svgs/github.svg?component';
	import DiscordIcon from '../lib/svgs/discord.svg?component';
	import LinkedinIcon from '../lib/svgs/linkedin.svg?component';
	import MastodonIcon from '../lib/svgs/mastodon.svg?component';

	export let name = '';
	export let icon = '';
	export let link = '';

	function openLink() {
		window.open(link, '_blank');
	}
</script>

<button
	class="w-full lg:w-fit flex justify-center items-center p-2 border border-text rounded-2xl hover:bg-text hover:text-neutral-two focus:bg-text focus:text-neutral-two outline-none"
	on:click={openLink}
>
	{#if icon === 'github'}
		<GitHubIcon class=" h-10 w-10" />
	{/if}
	{#if icon === 'linkedin'}
		<LinkedinIcon class=" h-10 w-10" />
	{/if}
	{#if icon === 'discord'}
		<DiscordIcon class=" h-10 w-10" />
	{/if}
	{#if icon === 'mastodon'}
		<MastodonIcon class=" h-10 w-10" />
	{/if}
	<div>
		{name}
	</div>
</button>
