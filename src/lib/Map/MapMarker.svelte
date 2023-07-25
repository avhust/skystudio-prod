<script>
	import { getContext, onMount } from 'svelte';
	import key from '$lib/Map/mapbox-context-key.js';

	const { getMap } = getContext(key);
	const map = getMap();

	export let lat;
	export let lon;
	export let label;
	let myMarker;

	onMount(async () => {
		const mapboxModule = await import('mapbox-gl');
		const mapbox = mapboxModule.default;

		const popup = new mapbox.Popup({ offset: 25 }).setText(label);

		const marker = new mapbox.Marker(myMarker).setLngLat([lon, lat]).setPopup(popup).addTo(map);
	});
</script>

<div bind:this={myMarker} class="myMarker" />

<style>
	.myMarker {
		width: 35px;
		height: 35px;
		background: white url(/icons/skystudio.svg) 0 0 no-repeat;
		border-radius: 35px;
		border: 7px solid white;
		transform: rotate(41deg);
		background-size: cover;
		box-shadow: 0 0 17px;
	}
</style>
