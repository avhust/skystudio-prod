<script>
	import '$lib/styles/app.scss';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// import Banner from '$lib/Banner.svelte';
	import MobileMenu from '$lib/MobileMenu.svelte';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	const isMenuOpened = writable(false);
	setContext('isMenuOpened', isMenuOpened);

	// let overflowVisible = true;
</script>

<svelte:head>
	<script type="application/ld+json">
		{
		  "@context": "http://schema.org",
		  "@type": "LocalBusiness",
		  "additionalType": "PhotographicStudio",
		  "name": "Sky Studio",
		  "logo": "https://skystudio.uz.ua/i/skystudio-logo.jpg",
		  "address": {
			"@type": "PostalAddress",
			"addressLocality": "Uzhhorod",
			"addressRegion": "Ukraine",
			"postalCode": "88000",
			"streetAddress": "1A Zaliznichna Street"
		  },
		  "geo": {
		  "@type": "GeoCoordinates",
		  "latitude": 48.60864895046489,
		  "longitude": 22.298928610566517
		  },
		  "telephone": "+38 095 088 97 87",
		  "openingHours": "Mo-Su 8:00-22:00",
		  "url": "https://skystudio.uz.ua",
		  "email": "contact@skystudio.uz.ua",
		  "sameAs": [
			"https://www.facebook.com/profile.php?id=100066553794844",
			"https://www.instagram.com/sky_studio_uzh/"
		  ],
		  "priceRange": "$15-$100",
		  "image": ["https://skystudio.uz.ua/hero/fotozony-1x.jpg", "https://skystudio.uz.ua/hero/sukni-1x.jpg", "https://skystudio.uz.ua/hero/kryla-1x.jpg", "https://skystudio.uz.ua/hero/tekhnika-1x.jpg"],
		  "photos": [
			{
			  "url": "https://skystudio.uz.ua/hero/fotozony-1x.jpg",
			  "caption": "Фотозони фотостудія SkyStudio (фотостудія з крилами в Ужгороді)",
			  "altText": "Фотозони фотостудія SkyStudio"
			},
			{
			  "url": "https://skystudio.uz.ua/hero/sukni-1x.jpg",
			  "caption": "Сукні для оренди в Sky Studio",
			  "altText": "Сукні для оренди в Sky Studio"
			},
			{
			  "url": "https://skystudio.uz.ua/hero/kryla-1x.jpg",
			  "caption": "Крила для оренди в Sky Studio",
			  "altText": "Крила для оренди в Sky Studio"
			},
			{
			  "url": "https://skystudio.uz.ua/hero/tekhnika-1x.jpg",
			  "caption": "Техніка Sky Studio – обладнання фотостудії в Ужгороді",
			  "altText": "Техніка фотостудії Sky Studio"
			}
		  ]
		}
	</script>
</svelte:head>

<!-- <Banner /> -->
<MobileMenu />
<div class="site">
	<!-- <div
		class="overflowToggle"
		class:visible={overflowVisible}
		on:click={() => {
			overflowVisible = !overflowVisible;
		}}
	>
		{overflowVisible}
	</div> -->
	<!-- {#if overflowVisible}
		<div
			class="overflow"
			on:click={() => {
				overflowVisible = !overflowVisible;
			}}
		/>
	{/if} -->
	<Header>
		<Nav />
	</Header>
	<!-- {#key $page.url.pathname} -->
	<div class="content" in:fade={{ duration: 250, delay: 0 }}>
		<slot />
	</div>
	<!-- {/key} -->

	<Footer>
		<Nav kind="footer" />
	</Footer>
</div>
