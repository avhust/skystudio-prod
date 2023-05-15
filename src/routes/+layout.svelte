<script>
	import '$lib/styles/app.scss';

	import organization from '$lib/data/organization';

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
	{@html `
	<script type="application/ld+json">
			${JSON.stringify(organization)}
	</script>
	
	
	`}
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
