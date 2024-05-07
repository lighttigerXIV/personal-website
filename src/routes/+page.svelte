<script lang="ts">
	import Logo from '../lib/svgs/lt14.svg?component';
	import ProfilePicture from '../lib/images/pfp.webp';
	import Divider from '../components/Divider.svelte';
	import ContactCard from '../components/ContactCard.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import LastSongCard from '../components/LastSongCard.svelte';
</script>

<div class=" h-screen w-full bg-neutral-two max-h-screen text-text overflow-auto">
	<div class=" lg:pl-[200px] lg:pr-[200px] p-4">
		<div class="flex justify-center lg:justify-start">
			<Logo width="80" height="80" />
		</div>
		<div class="mt-8 grid lg:grid-cols-3 grid-cols-1">
			<div class="flex flex-col col-span-1">
				<img class=" rounded-2xl" src={ProfilePicture} alt="" width="140" />
				<div class=" text-3xl mt-4 font-semibold">lighttigerXIV</div>
				<div class=" mt-4">
					Name: Afonso Fonseca
					<br />
					Age: 23
					<br />
					<div class="flex">
						Country: &nbsp; <div class="text-kiwi">Por</div>
						<div class="text-cherry">tugal</div>
					</div>
				</div>
			</div>
			<div class=" col-span-2 lg:mt-0 mt-4">
				<div class=" font-semibold text-3xl">About</div>
				<div>
					Hi 👋 <br /><br />

					My name is Afonso Fonseca but you might know me as lighttigerXIV.<br />
					I am a full stack developer that truly loves coding and i have been doing it for over 7 years.
					I have coded for mostly everything and i am constantly growing my portfolio with apps that
					i developed for myself and share them on GitHub. <br /><br />

					On my free time, besides coding, i like to watch some anime, play Rocket League and listen
					to music. Btw, this is my last heard song :P
				</div>
				<LastSongCard/>
				<Divider />
				<div class=" font-semibold text-3xl mt-4">Contacts</div>
                <div class="mt-4 grid grid-cols-1  gap-2 lg:grid-cols-2 lg:w-fit">
                    <ContactCard icon="github" name="GitHub" link="https://github.com/lighttigerXIV"/>
                    <ContactCard icon="linkedin" name="Linkedin" link="https://www.linkedin.com/in/afonso-fonseca-995014163"/>
                </div>
                <div class="mt-2 grid gap-2 grid-cols-1 lg:grid-cols-2 lg:w-fit">
                    <ContactCard icon="mastodon" name="Mastodon" link="https://mastodon.social/@lighttigerxiv"/>
                    <ContactCard icon="discord" name="Discord" link="https://discord.com/users/598945126089228327"/>
                </div>
				<Divider />
				<div class=" font-semibold text-3xl mt-4">Projects</div>
				<p>This are my best open source projects:</p>
				<ProjectCard name="Simple MP" id="simple-mp" link="https://github.com/lighttigerXIV/SimpleMP-Compose"/>
				<div class="mt-2"></div>
				<ProjectCard name="Catppuccinifier" id="catppuccinifier" link="https://github.com/lighttigerXIV/catppuccinifier"/>
				<div class="mt-2"></div>
				<ProjectCard name="Whiskers Launcher" id="whiskers-launcher" link="https://github.com/lighttigerXIV/whiskers-launcher"/>
				<div class="mt-2"></div>
				<ProjectCard name="Whiskers Color Scheme" id="whiskers" link="https://github.com/Whiskers-Color-Scheme"/>
			</div>
		</div>
	</div>
</div>
