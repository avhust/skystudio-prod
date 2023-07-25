<script lang="ts">
	import { getContext } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	let scrollY = 0;
	const opened: Writable<boolean> = getContext('isMenuOpened');
	function openMenu() {
		opened.set(true);
	}
	const scrollTrigger = 200;
</script>

<svelte:window bind:scrollY />

<header class:scrolled={scrollY > scrollTrigger}>
	<div class="container">
		<div class="logo">
			<a href="/">
				{#if scrollY > scrollTrigger}
					<img
						in:fade={{ duration: 300 }}
						src="/skystudio_logo_scrolled.svg"
						alt="Logo SkyStudio"
					/>
				{:else}
					<img src="/skystudio_logo.svg" alt="Logo SkyStudio" />
				{/if}
			</a>
		</div>
		<div class="nav">
			<slot />
		</div>
		<div class="social">
			<a rel="noreferrer" href="tel:+380950889787"><img alt="fb icon" src="/icons/phone.svg" /></a>
			<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sky_studio_uzh/"
				><img style:--size="1.5rem" alt="instagram icon" src="/icons/insta.svg" /></a
			>
			<a target="_blank" rel="noreferrer" href="https://www.facebook.com/skystudio.uz"
				><img alt="fb icon" src="/icons/fb.svg" /></a
			>
			<a target="_blank" rel="noreferrer" href="https://youtube.com/@sky_studio_uzh"
				><img alt="youtube icon" src="/icons/youtube.svg" /></a
			>
		</div>
		<div class="langs">
			<a href="/" class:current={$page.url.pathname.split('/')[1] !== 'eng'}>UA</a>
			<a href="/" class:current={$page.url.pathname.split('/')[1] === 'eng'}>EN</a>
		</div>
		<div class="burger">
			<button on:click={openMenu}><img alt="burger icon" src="/icons/hamburger.svg" /></button>
		</div>
	</div>
</header>

<style lang="scss">
	$breakpoint: 768px;
	header {
		background-color: #294c80;
		// background-color: var(--darkColor);
		// background: radial-gradient(circle at 5vw 20vw, #2d8fc5, #294c80, #294c80, #294c80);
		@media screen and (min-width: $breakpoint) {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 90;
			background-color: transparent;
			// background-color: var(--darkColor);
			background: unset;
			&.scrolled {
				background-color: #294c80;
				// background-color: var(--darkColor);
				background: radial-gradient(circle at 5vw 20vw, #2d8fc5, #294c80, #294c80, #294c80);
				.container {
					height: 5rem;
				}
				.logo {
					a {
						align-items: end;
						align-items: flex-end;
					}
					img {
						object-position: 50% 100%;
						transform: translate(0, 1px);
						// width: 15rem;
						// height: 3.5rem;
						// @media screen and (min-width: $breakpoint) {
						// 	height: 4.05rem;
						// 	width: 15rem;
						// }
						// margin: 0 auto 0 0;
					}
				}
			}
		}
		color: white;
		background-color: transparent;
		transition: all 0.2s ease-in-out;
		width: 100%;
		.container {
			display: grid;
			grid-template-columns: 2fr 5fr 2.7fr;
			margin: 0;
			width: 100%;
			height: 6.5rem;
			transition: all 0.2s ease-in-out;
			@media screen and (min-width: $breakpoint) {
				height: 8.5rem;
				margin: 0 auto;
				grid-template-columns: 2.2fr 5.5fr 2fr 0.05fr;
				width: calc(100% - 2rem);
				max-width: 1200px;
			}
		}

		.logo {
			a {
				display: flex;
				height: 100%;
				align-items: center;
			}
			img {
				display: block;
				object-fit: contain;
				width: 15rem;
				height: 3.5rem;
				@media screen and (min-width: $breakpoint) {
					height: 4.05rem;
					width: 15rem;
				}
				margin: 0 auto 0 0;
			}
		}
		.burger {
			@media screen and (min-width: $breakpoint) {
				display: none;
			}
			display: flex;
			justify-content: flex-end;
			align-items: center;
			button {
				background: none;
				border: none;
				img {
					--size: clamp(3rem, 12vw, 4rem);
					height: var(--size);
					width: var(--size);
				}
			}
		}
		.nav {
			display: none;
			@media screen and (min-width: $breakpoint) {
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: space-around;
			}
		}
		.social {
			display: none;
			@media screen and (min-width: $breakpoint) {
				display: flex;
				align-items: center;
				justify-content: space-around;
				gap: 0.25rem;
				padding: 0 clamp(1.5rem, 3vw, 3rem);
				a {
					display: flex;
					height: 2.7rem;
					width: 2.7rem;
					justify-content: center;
					background-color: #ffffff;
					border-radius: 50%;
					align-items: center;
					transform: scale(1);
					transform-origin: center;
					transition: all 0.2s ease-in-out;
					@media (hover: hover) and (pointer: fine) {
						&:hover {
							transform: scale(1.1);
							// border-radius: 50%;
						}
					}
					img {
						--size: 1.3rem;
						height: var(--size);
						width: var(--size);
					}
				}
			}
		}
		.langs {
			display: flex;
			visibility: hidden;
			align-items: center;
			padding: 0 clamp(0.5rem, 0.5vw, 1.5rem);
			justify-content: space-around;
			a {
				color: white;
				font-weight: normal;
				text-decoration: none;
				font-size: clamp(1rem, 5vw, 1.3rem);
				&.current {
					font-weight: bold;
					color: var(--accentColor);
				}
				@media (hover: hover) and (pointer: fine) {
					&:hover {
						color: var(--accentColor);
					}
				}
			}
		}
	}
</style>
