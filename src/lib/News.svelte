<script lang="ts">
	import Picture from '$lib/Wrappers/Picture.svelte';
	import Expandable from '$lib/Expandable.svelte';
	const news = [
		{
			date: '30.05.2023',
			title: 'Новий реквізит',
			text: 'В Sky Studio зʼявився додатковий реквізит для вашої фотозйомки - 2 куби, чорний і білий. Куби допоможуть вам реалізувати різні творчі ідеї і урізноманітнити вашу зйомку.',
			picture: { image: 'photo1-1x.jpg', width: 1280, height: 1280 }
		},
		{
			date: '30.05.2023',
			title: 'Новий стілець',
			text: 'В нашій студії зʼявився новий стілець для ваших портретних зйомок. Стілець регулюється по висоті, що є важливою умовою для комфортної зйомки.',
			picture: { image: 'photo2-1x.jpg', width: 960, height: 1280 }
		}
	];
</script>

<div class="news-header">Новини</div>

{#each news as { title, text, picture, date }}
	{@const { width, height, image } = picture}
	<div class="news">
		<div class="news-title">{title}</div>
		<div class="news-date">{date}</div>
		<div class="news-text">{text}</div>
		<div class="news-image">
			<Expandable breakpoint={768}>
				<Picture x2={false} {width} {height} loading="eager" path="/i/news/{date}" {image} />
			</Expandable>
		</div>
	</div>
{/each}

<style lang="scss">
	.news-header {
		position: relative;
		padding: 0.5rem 0;
		text-transform: uppercase;
		font-size: 1.2rem;
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
			/ 100px 1fr;
		grid-template-rows: min-content min-content 1fr;
		column-gap: 0.5rem;

		width: 100%;
		// border-bottom: 1px solid var(--darkColor);
	}
	.news-date {
		grid-area: date;
		color: var(--colorGray);
		// font-size: 0.8rem;
	}
	.news-title {
		grid-area: title;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.news-text {
		grid-area: text;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 10px;
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
</style>
