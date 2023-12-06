<script lang="ts">
	import { fade, blur, slide, scale, fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';
	import { Lang } from '$lib/classes';
	import { elasticInOut } from 'svelte/easing';
	import { slides } from '$lib/data/hero';
	const buttonTexts = {
		ukr: 'Детальніше',
		eng: 'Details'
	};
	const premenuTexts = {
		ukr: 'вул. Залізнична 1А',
		eng: 'вул. Залізнична 1А'
	};

	let lang: Lang = Lang.ukr;
	$: if ($page.url.pathname.split('/')[1] === 'eng') {
		lang = Lang['eng'];
	} else {
		lang = Lang['ukr'];
	}

	const texts = {
		ukr: [
			{
				first: 'фотостудія<br/>з крилами',
				second: 'в Ужгороді',
				button: true
			},
			{
				first: '<br/>фотозони',
				second: 'Sky Studio',
				button: true
			},
			{
				first: '<br/>техніка',
				second: 'Sky Studio',
				button: true
			},
			{
				first: '<br/>крила',
				second: 'Sky Studio',
				button: true
			},
			{
				first: 'одяг та<br/>аксесуари',
				second: 'Sky Studio',
				button: true
			},
			{
				first: 'про<br/>нашу',
				second: 'студію',
				button: true
			}
		],
		eng: []
	};
	export let slideNo: number = 0;
	export let customFirstText: false | string = false;
	export let customBrightness: string = '';
</script>

<section class:loading={$navigating !== null}>
	<picture
		in:blur={{ delay: 0, duration: 500 }}
		style:--brightness={customBrightness ? customBrightness : slides[slideNo]?.brightness}
	>
		<source
			type="image/avif"
			sizes="100vw"
			srcset="
			  {slides[slideNo].src}-2x.avif 2128w, 
			  {slides[slideNo].src}-1x.avif 1419w"
		/>
		<source
			type="image/webp"
			sizes="100vw"
			srcset="
			  {slides[slideNo].src}-2x.webp 2128w, 
			  {slides[slideNo].src}-1x.webp 1419w"
		/>
		<img
			style:--moveX={slides[slideNo].moveMobile.x}
			style:--scale={slides[slideNo].moveMobile.scale}
			alt="hero"
			src="{slides[slideNo].src}-1x.jpg"
			srcset="
			  {slides[slideNo].src}-2x.jpg 2128w, 
			  {slides[slideNo].src}-1x.jpg 1419w"
			sizes="100vw"
			height="1061"
			width="2126"
			style="content-visibility: auto;"
		/>
	</picture>
	<div class="texts">
		<div in:fade={{ delay: 250, duration: 1000 }} class="first">
			{#if customFirstText}
				{@html customFirstText}
			{:else}
				{@html texts[lang][slideNo].first}
			{/if}
		</div>
		<div
			in:fade={{ delay: 500, duration: 1000 }}
			class="second"
			style="--length: {texts[lang][slideNo].second.length}"
		>
			{texts[lang][slideNo].second}
		</div>
		<div in:scale={{ start: 0.2, delay: 400, duration: 1000, easing: elasticInOut }} class="button">
			{#if texts[lang][slideNo].button}
				<a href="#mainContent"><span>{buttonTexts[lang]}</span></a>
			{/if}
		</div>
		<div class="premenu">
			{#if slideNo === 0}{premenuTexts[lang]}{/if}
		</div>
		<div class="menu">
			<a class:active={slideNo === 1} href="/fotozony">фотозони<br />Sky Studio</a>
			<a class:active={slideNo === 2} href="/tekhnika">наша техніка<br />та обладнання</a>
			<a class:active={slideNo === 3} href="/kryla">крила<br />в оренду</a>
			<a class:active={slideNo === 4} href="/sukni">аксесуари і<br /> одяг в оренду</a>
			<a class:active={slideNo === 5} href="/pro">про<br />нашу студію</a>
		</div>
	</div>
</section>

<style lang="scss">
	$breakpoint: 768px;

	@keyframes loading {
		0% {
			filter: brightness(1);
			-webkit-filter: brightness(1);
		}
		50% {
			filter: brightness(0.2);
			-webkit-filter: brightness(0.2);
		}
		100% {
			filter: brightness(1);
			-webkit-filter: brightness(1);
		}
	}

	section {
		&.loading {
			animation-delay: 1000;
			opacity: 0.3;
			animation-name: loading;
			animation-duration: 3s;
			animation-iteration-count: infinite;
		}
		background: var(--darkColor);
		height: calc(100vh / var(--zoom));
		width: 100%;
		overflow: hidden;
		position: relative;
		z-index: 0;
		box-sizing: border-box;
		@media screen and (min-width: $breakpoint) {
			min-height: 650px;
		}
		picture {
			--brightness: 0.35;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			display: block;
			z-index: -1;
			filter: brightness(var(--brightness));
			img {
				--scale: 1;
				// box-shadow: 0 0 4px 4px red;
				display: block;
				width: 100%;
				min-height: 95vh;
				height: 100%;
				object-fit: cover;
				transform: scale(var(--scale));
				object-position: var(--moveX) 0;
				@media screen and (min-width: $breakpoint) {
					transform: scale(1);
					object-position: 50% 15%;
					object-fit: cover;
				}
			}
		}
		.texts {
			z-index: 5;
			display: grid;
			grid-template-rows: 1.14fr 0.7fr 0.4fr 0.38fr 0.52fr;
			grid-template-columns: 1fr;
			gap: 0;
			height: 95%;
			color: white;
			max-width: 1200px;
			margin: 0 auto 0;
			padding: 0 1rem;
			box-sizing: border-box;
			font-family: var(--font2);
			width: 100%;
			@media screen and (min-width: $breakpoint) {
				width: calc(100% - 2rem);
				padding: 0;
				// padding: 0 3rem;
			}
			.first {
				font-family: var(--font1);
				align-self: end;
				font-size: clamp(2.5rem, 11vw, 4.5rem);
				line-height: 0.8;
				letter-spacing: -0.1rem;
				color: hsl(201deg 7.03% 73.77%);
				@media screen and (min-width: $breakpoint) {
					font-size: 4.5rem;
				}
			}
			.second {
				--length: 5;
				overflow: hidden;
				// font-size: clamp(2.7rem, calc(195vw / var(--length)), 9rem);
				font-size: clamp(2.7rem, calc(180vw / var(--length)), 8rem);
				letter-spacing: calc(-2.8rem / var(--length));
				line-height: 1;
				transform: translateX(-0.2rem);
				@media screen and (min-width: $breakpoint) {
					transform: translateX(-0.5rem);
					letter-spacing: -0.55rem;
					font-size: 8rem;
				}
			}
			.button {
				display: flex;
				align-items: center;
				// flex-direction: column;
				a {
					font-family: var(--font1);
					padding: 1rem 3rem;
					color: var(--accentColor);
					background-color: transparent;
					border-radius: 30px;
					transition: all 0.2s ease-in-out;
					border: 2px solid var(--accentColor);
					span {
						transform: scale(1);
						transition: all 0.2s ease-in-out;
						transform-origin: center;
						display: inline-block;
					}
					@media (hover: hover) and (pointer: fine) {
						&:hover {
							background-color: var(--darkColor);
							span {
								transform: scale(1.1);
							}
						}
					}
				}
			}
			.premenu {
				color: var(--accentDarkerColor);
				font-family: var(--font1);
				line-height: 1;
				padding-bottom: 0;
				letter-spacing: -0.2rem;
				font-size: clamp(2.2rem, 10vw, 4.5rem);
				@media screen and (min-width: $breakpoint) {
					padding-bottom: 1rem;
					letter-spacing: -0.2rem;
					font-size: 4.5rem;
				}
			}
			.menu {
				font-family: var(--font1);
				position: relative;
				border-top: 2px solid white;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 4%;
				@media screen and (min-width: $breakpoint) {
					display: grid;
					grid-auto-flow: column;
					grid-template-columns: 1fr 1fr 0.8fr 1.2fr 1fr;
					// grid-template-columns: 1.45fr 1.45fr 1.2fr 1.1fr 0.8fr;
					grid-template-rows: 1fr;
					gap: 0;
				}

				a {
					width: 48%;
					color: rgba(255, 255, 255, 0.74);
					padding: 1rem 0 0;
					font-size: 1.2rem;
					line-height: 0.95;
					font-weight: 300;
					// letter-spacing: 0.02rem;
					transform-origin: top center;
					transition: all 0.2s ease-in-out;
					@media screen and (min-width: $breakpoint) {
						position: relative;
						color: rgba(255, 255, 255, 0.5);
						width: 100%;
						font-size: clamp(1.4rem, 3vw, 1.65rem);
						line-height: 0.85;
						padding-right: 1rem;
					}
					@media (hover: hover) and (pointer: fine) {
						&:hover {
							color: white;
						}
					}

					&.active,
					&.active:hover {
						color: var(--accentColor);
						@media screen and (min-width: $breakpoint) {
							color: white;
						}
						&:before {
							content: '';
							position: absolute;
							top: -3px;
							left: 0;
							display: block;
							background-color: var(--accentColor);
							height: 4px;
							right: 0;
							@media screen and (min-width: $breakpoint) {
								right: 7%;
							}
						}
					}
				}
			}
		}
	}
</style>
