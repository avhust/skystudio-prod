<script lang="ts">
	import { fly } from 'svelte/transition';
	let text: string =
		'25-26 травня / Львів 2023<br/> III Львівська нафтогазова антикризова конференція Ньюфолк&nbsp;НКЦ';
	let visible = true;
	let url = 'https://forms.gle/StMNpH15RjnQwXmV6';
	function hide() {
		visible = false;
	}
</script>

{#if visible}
	<div class="fixed">
		<section out:fly={{ duration: 500, y: 200 }}>
			<a rel="noreferrer" target="_blank" href={url} class="logo"
				><img
					width="1270"
					height="314"
					src="/i/events/conference-lviv-2023.png"
					alt="Лого конференції"
				/></a
			>
			<a rel="noreferrer" target="_blank" href={url} class="text">{@html text}</a>
			<div class="cross">
				<button on:click={hide}><img alt="burger icon" src="/icons/cross.svg" /></button>
			</div>
		</section>
	</div>
{/if}

<style lang="scss">
	$breakpoint: 768px;
	.fixed {
		left: 0;
		right: 0;
		bottom: 0;
		position: fixed;
		z-index: 100;
	}
	section {
		position: relative;
		padding: 1rem 1rem 1.5rem 1rem;
		background-color: #ff6600;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		flex-direction: column;
		:global(br) {
			display: unset;
		}
		@media screen and (min-width: $breakpoint) {
			padding: 1rem;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;
			gap: 2rem;
			:global(br) {
				display: none;
			}
		}
	}
	.logo {
		display: flex;
		img {
			width: 12rem;
			height: auto;
			display: block;
			object-fit: contain;
		}
	}
	.text {
		color: #fff;
		text-decoration: none;
		font-family: var(--font1);
		font-size: clamp(1rem, 3.5vw, 1.4rem);
		text-align: center;
		line-height: 1;
	}
	.cross {
		// display: none;
		position: absolute;
		top: 1rem;
		right: 1rem;
		@media screen and (min-width: $breakpoint) {
			position: static;
			top: unset;
			right: unset;
		}
		button {
			background: none;
			border: none;
			cursor: pointer;
			img {
				--size: clamp(1rem, 6vw, 2rem);
				height: var(--size);
				width: var(--size);
			}
		}
	}
</style>
