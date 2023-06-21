<script lang="ts">
	import { news } from '$lib/data/news';
	import Picture from '$lib/Wrappers/Picture.svelte';
	import Expandable from '$lib/Expandable.svelte';
	export let fullPage = false;
	// const brHeight = 600;
	let height = 0;
	let expanded = fullPage ? true : false;
</script>

{#key expanded}
	<div class="wrapper" class:fullPage bind:clientHeight={height}>
		{#if fullPage}
			<div class="title"><h3>Новини фотостудії</h3></div>
		{:else}
			<div class="news-header">Новини</div>
		{/if}

		{#each fullPage ? news : news.slice(0, 3) as { title, text, picture, date }}
			{@const { width, height, image } = picture}
			<div class="news">
				<div class="news-title">{title}</div>
				<div class="news-date">{date}</div>
				<div class="news-text">{@html text}</div>
				<div class="news-image">
					<Expandable breakpoint={768}>
						<Picture x2={false} {width} {height} loading="eager" path="/i/news/{date}" {image} />
					</Expandable>
				</div>
			</div>
		{/each}
		{#if !fullPage}
			<div class="fader" />
			<a href="/novyny#mainContent" class="more">Всі новини</a>
		{/if}
	</div>
{/key}

<style lang="scss">
	.wrapper {
		--fontSize: 1rem;
		--imageWidth: 100px;
		overflow: hidden;
		transition: max-height 0.3s ease-in-out;
		position: relative;
		&.fullPage {
			--fontSize: 1.2rem;
			--imageWidth: 200px;
		}
		.fader {
			z-index: 2;
			height: 5rem;
			background: linear-gradient(to bottom, transparent, white, white);
			left: 0;
			right: 0;
			bottom: 0;
			position: absolute;
		}
		a.more {
			background: none;
			border: 0;
			color: var(--accentColor);
			font-size: var(--fontSize);
			font-weight: 600;
			padding: 1rem 0;
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			text-align: center;
			cursor: pointer;
			z-index: 10;
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					text-decoration: underline;
				}
			}
		}
		.news-header {
			position: relative;
			padding: 0.5rem 0;
			text-transform: uppercase;
			font-size: calc(var(--fontSize) * 1.2);
			letter-spacing: 4px;
			&::after {
				content: '';
				display: block;
				height: 2.5px;
				background-color: var(--accentColor);
				width: 37%;
				left: 0;
				bottom: 0;
				position: absolute;
			}
		}

		.news {
			margin: 1rem 0;
			display: grid;
			grid:
				'. date'
				'image title'
				'image text'
				/ var(--imageWidth) 1fr;
			grid-template-rows: min-content min-content 1fr;
			column-gap: 0.5rem;

			width: 100%;
			// border-bottom: 1px solid var(--darkColor);
		}
		.news-date {
			grid-area: date;
			color: var(--colorGray);
		}
		.news-title {
			grid-area: title;
			font-size: var(--fontSize);
			font-weight: 600;
			margin-bottom: 10px;
		}

		.news-text {
			grid-area: text;
			font-size: var(--fontSize);
			font-weight: 400;
			margin-bottom: 10px;
			:global(a) {
				color: var(--accentDarkerColor);
				font-weight: 600;
				@media (hover: hover) and (pointer: fine) {
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		.news-image {
			grid-area: image;
			:global(img) {
				object-position: top center;
				display: block;
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}
	}
	.title {
		position: relative;
		padding: 0 0 0.7rem 0.5rem;

		h3 {
			font-size: 1.7rem;
			padding: 0;
			margin: 0;
			font-weight: 600;
		}

		&:after {
			content: '';
			display: block;
			height: 2.5px;
			background-color: var(--accentColor);
			width: 37%;
			left: 0;
			bottom: 0;
			position: absolute;
		}
	}
</style>
