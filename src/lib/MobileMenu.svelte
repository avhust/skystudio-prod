<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import { Lang } from '$lib/classes';
	import menu from '$lib/data/menu';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { circIn, circOut } from 'svelte/easing';
	import { swipeToClose } from '$lib/actions/gestures';

	const opened: Writable<boolean> = getContext('isMenuOpened');

	let lang: Lang = Lang.ukr;
	$: if ($page.url.pathname.split('/')[1] === 'eng') {
		lang = Lang.eng;
	} else {
		lang = Lang.ukr;
	}

	$: if (browser) {
		if ($opened) {
			document.body.classList.add('noscroll');
		} else {
			document.body.classList.remove('noscroll');
		}
	}
	$: if ($navigating !== null) {
		closeMenu();
	}

	function closeMenu() {
		opened.set(false);
		document.body.classList.remove('noscroll');
	}
</script>

{#if $opened}
	<div
		class="mobileMenu"
		use:swipeToClose
		on:swiperight={closeMenu}
		out:fly={{ easing: circIn, y: -200, duration: 100 }}
		in:fly={{ easing: circOut, y: -200, opacity: 1, duration: 150 }}
	>
		<div class="cross">
			<button on:click={closeMenu}><img alt="burger icon" src="/icons/cross.svg" /></button>
		</div>
		<div class="main">
			<div class="logo">
				<a href="/"><img src="/skystudio_logo.svg" alt="Logo SkyStudio" /></a>
			</div>
			<ul>
				{#each menu[lang] as { title, href }}
					<li>
						<a
							{href}
							{title}
							aria-current={href === $page.url.pathname ? 'page' : 'false'}
							class:current={href === $page.url.pathname}>{title}</a
						>
					</li>
				{/each}
			</ul>
			<div class="social">
				<a rel="noreferrer" href="tel:+380950889787"><img alt="fb icon" src="/icons/phone.svg" /></a
				>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sky_studio_uzh/"
					><img style:--size="1.7rem" alt="instagram icon" src="/icons/insta.svg" /></a
				>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.facebook.com/profile.php?id=100066553794844"
					><img alt="fb icon" src="/icons/fb.svg" /></a
				>
				<a target="_blank" rel="noreferrer" href="https://t.me/macwings"
					><img style:--size="1.4rem" alt="telegram icon" src="/icons/telegram.svg" /></a
				>
			</div>
			<div class="phone">
				<!-- <a href="tel:+380950889787">+380 (96) 4085 973 +380950889787</a> -->
			</div>
		</div>
		<div class="footer" />
	</div>
{/if}

<style lang="scss">
	.mobileMenu {
		background-color: var(--darkColor);
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		color: white;
		height: 100vh;
		height: calc(100vh / var(--zoom));
		z-index: 101;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-auto-flow: row;
		.cross {
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
		.main {
			overflow: scroll;
			.logo {
				padding-bottom: 1rem;
				a {
					display: flex;
					width: 12rem;
					height: 3.5rem;
					margin: 0 auto;
					align-items: center;
				}
				img {
					display: block;
					object-fit: contain;
					width: 12rem;
					height: 3.5rem;
					margin: 0 auto 0;
				}
			}
			ul {
				list-style: none;
				display: flex;
				flex-direction: column;
				gap: clamp(1rem, 3vh, 2rem);
				padding: 0 clamp(2rem, 8vw, 4rem);
				li {
					width: 100%;
					display: block;
					a {
						display: block;
						width: 100%;
						color: white;
						font-size: 1.5rem;
						text-decoration: none;
						font-family: var(--font1);
						border-bottom: 1px dashed white;
						&.current {
							pointer-events: none;
							cursor: default;
							color: var(--accentDarkerColor);
						}
					}
				}
			}
			.social {
				display: flex;
				align-items: center;
				justify-content: space-around;
				padding: 2rem clamp(1.5rem, 3vw, 3rem) 0;
				a {
					display: flex;
					height: 3rem;
					width: 3rem;
					justify-content: center;
					background-color: #ffffff;
					border-radius: 50%;
					align-items: center;
					transform: scale(1);
					transform-origin: center;
					transition: all 0.2s ease-in-out;
					@media (hover: hover) and (pointer: fine) {
						&:hover {
							transform: scale(1.2);
						}
					}
					img {
						--size: 1.5rem;
						height: var(--size);
						width: var(--size);
					}
				}
			}
			.phone {
				padding: 2rem 0 0;
				a {
					display: block;
					width: 100%;
					text-align: center;
					color: white;
					font-size: clamp(1.5rem, 7vw, 3rem);
					text-decoration: none;
					font-family: var(--font1);
				}
			}
		}
		.footer {
			min-height: 5.5rem;
		}
	}
</style>
