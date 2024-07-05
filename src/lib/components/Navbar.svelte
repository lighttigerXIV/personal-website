<script lang="ts">
	import { page } from '$app/stores';

	function isActive(path: string): boolean {
		return path === $page.url.pathname;
	}
</script>

<div
	class=" p-2 pl-4 pr-4 bg-neutral-two bg-opacity-40 fixed top-4 rounded-full border border-neutral-four space-x-4 text-text-two z-10"
>
	
	<a href="/" class={`${isActive('/') ? 'font-medium text-text' : ''}`}> About Me </a>

	<a href="/portfolio" class={`${isActive('/portfolio') ? 'font-medium text-text' : ''}`}>
		Portfolio
	</a>

	<a href="/connect" class={`${isActive('/connect') ? 'font-medium text-text' : ''}`}> Connect</a>
</div>

<style scoped>
</style>
