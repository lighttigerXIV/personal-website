<script lang="ts">
	import SimpleMpCover from "$lib/images/simple-mp.webp";
	import CatppuccinifierCover from "$lib/images/catppuccinifier.webp";
	import WhiskersLauncherCover from "$lib/images/whiskers-launcher.webp";
	import WhiskersCover from "$lib/images/whiskers.webp";
	import WhiskersAppsCover from "$lib/images/whiskers-apps.webp";
	import { onMount } from "svelte";


	export let id = '';
	export let name = '';
	export let link = '';
	export let description = '';
	let imageSource = "";

	onMount(()=>{
		switch(id){
			case "simple-mp":
				imageSource = SimpleMpCover;
				break;
			case "catppuccinifier":
				imageSource = CatppuccinifierCover;
				break;
			case "whiskers-launcher":
				imageSource = WhiskersLauncherCover;
				break;
			case "whiskers":
				imageSource = WhiskersCover;
				break;
			case "whiskers-apps":
				imageSource = WhiskersAppsCover;
				break;
		}
	});

	function openLink() {
		window.open(link, '_blank');
	}
</script>

<button
	class=" w-full elevated p-4 rounded-2xl bg-neutral-four flex flex-col items-center hover:bg-neutral-six focus:bg-neutral-six outline-none"
	on:click={openLink}
> 
	<div class=" bg-neutral-two w-full lg:h-[200px] md:h-[180px] h-[150px] bg-neutral-six overflow-clip rounded-xl">
		<img class=" object-cover h-full w-full" src={imageSource} alt="">
	</div>

	<p class=" font-semibold mt-3 text-start w-full">{name}</p>
	<div class="text-text-two text-sm text-start w-full">{description}</div>
</button>

<style>
.elevated:hover{
	transform: translate(0, -4px);
}
</style>