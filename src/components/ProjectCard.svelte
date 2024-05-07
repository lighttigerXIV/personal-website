<script lang="ts">
	import SimpleMpCover from "../lib/images/simple-mp.webp";
	import CatppuccinifierCover from "../lib/images/catppuccinifier.webp";
	import WhiskersLauncherCover from "../lib/images/whiskers-launcher.webp";
	import WhiskersCover from "../lib/images/whiskers.webp";
	import { onMount } from "svelte";


	export let id = '';
	export let name = '';
	export let link = '';
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
		}
	});

	function openLink() {
		window.open(link, '_blank');
	}
</script>

<button
	class=" w-full p-3 rounded-2xl bg-neutral-four border border-neutral-8 flex flex-col items-center hover:bg-neutral-six focus:bg-neutral-six outline-none"
	on:click={openLink}
> 
	<div class=" w-full lg:h-[300px] md:h-[250px] h-[200px] p-3 bg-neutral-six overflow-clip rounded-xl">
		<img class=" object-cover h-full w-full" src={imageSource} alt="">
	</div>

	<p class=" font-semibold mt-3">{name}</p>
</button>