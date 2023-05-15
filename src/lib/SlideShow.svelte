<script lang="ts">
	import { makePhotoName } from '$lib/utils';
	import Picture from './Wrappers/Picture.svelte';
	import Slide from '$lib/Slides/Slide.svelte';
	import Deck from '$lib/Slides/Deck.svelte';
	export let path: string = '/i';
	export let width = 200;
	export let height = 200;
	export let slides: string[] | number = [];
	export let x2 = false;

	$: slideNames = typeof slides === 'number' ? makePhotoName(slides, 'jpg') : slides;

	// Use https://github.com/buhrmi/thumb-ui in the future
</script>

<div class="slideshow">
	{#if slideNames.length > 1}
		<Deck>
			{#each slideNames as slide}
				<Slide>
					<Picture {x2} {width} {height} loading="eager" {path} image={slide} />
				</Slide>
			{/each}
		</Deck>
	{:else if slideNames.length === 1}
		<Picture {x2} {width} {height} {path} loading="eager" image={slideNames[0]} />
	{/if}
</div>

<style lang="scss">
	.slideshow {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
</style>
