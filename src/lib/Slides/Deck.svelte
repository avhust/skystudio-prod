<script lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { swipable } from '$lib/actions/gestures';
	import SVGNext from './SVGNext.svelte';
	import SVGPrev from './SVGPrev.svelte';

	let slidesStore = writable([]);
	let currentIndexStore = writable(0);

	setContext('slides', slidesStore);
	setContext('currentIndex', currentIndexStore);

	let currentIndex = getContext('currentIndex');
	let slides = getContext('slides');

	const previous = (index: number, numElem: number) => {
		return index <= 0 ? numElem - 1 : index - 1;
	};
	const next = (index: number, numElem: number) => {
		return index >= numElem - 1 ? 0 : index + 1;
	};

	function handleNext() {
		$currentIndex = next($currentIndex, $slides.length);
	}
	function handlePrev() {
		$currentIndex = previous($currentIndex, $slides.length);
	}
</script>

<div
	class="deckWrapper"
	use:swipable={{ length: 50 }}
	on:swiperight={handlePrev}
	on:swipeleft={handleNext}
>
	<div class="deck">
		<slot />
	</div>
	<div class="prev" on:keypress={handlePrev} on:click={handlePrev} style="width:25%">
		<SVGPrev />
	</div>
	<div class="next" on:keypress={handleNext} on:click={handleNext} style="width:25%">
		<SVGNext />
	</div>
</div>

<style lang="scss">
	.deckWrapper {
		width: 100%;
		height: 100%;
		max-height: 100vh;
		max-width: 100vw;
	}
	.deck {
		width: 100%;
		height: 100%;
		background-color: white;
		position: relative;
	}
	.prev,
	.next {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 50;
		top: 0;
		bottom: 0;
		filter: drop-shadow(0 0 0.5rem rgb(0, 0, 0));
		transition: all 0.3s ease-out;
		cursor: pointer;
	}
	.prev {
		left: 0;
		right: auto;
	}
	.next {
		right: 0;
		left: auto;
	}
</style>
