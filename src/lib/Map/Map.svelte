<script>
	import { onMount, setContext } from 'svelte';
	import key from '$lib/Map/mapbox-context-key.js';

	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let locale;
	export let zoom = 9;

	let map;
	let map2;
	let container;

	onMount(async () => {
		const mapboxModule = await import('mapbox-gl');
		const MapboxLanguageModule = await import('@mapbox/mapbox-gl-language');

		const mapbox = mapboxModule.default;
		const MapboxLanguage = MapboxLanguageModule.default;
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

		mapbox.accessToken =
			'pk.eyJ1IjoiYXZodXN0IiwiYSI6ImNrOXRubGZieTA2aXAzZnAycXlwY3M5dG4ifQ.7hbcewV1xFe8O3ELpNKtzw';

		link.onload = () => {
			map = new mapbox.Map({
				container,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: [lon, lat],
				// pitch: 60,
				// bearing: -60,
				zoom
			});
			//   console.log(MapboxLanguage);
			map.addControl(
				new MapboxLanguage({
					defaultLanguage: locale
				})
			);
			map.addControl(new mapbox.NavigationControl());
			map.scrollZoom.disable();
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});
</script>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		min-height: 500px;
	}
</style>
