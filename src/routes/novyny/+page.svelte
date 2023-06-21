<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import News from '$lib/News.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	const title = 'Фотостудія в Ужгороді – Скай студія з крилами ангела';
	const description =
		'Sky Studio – студія з крилами в Ужгороді. До ваших послуг 4 фотозони, вінілові фони, світло Godox та інші аксесуари. Також доступні крила янгола в оренду';
	const index = 0;
	const articleImage = {
		src: '/home-social2',
		height: 628,
		width: 1200
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link
		rel="preload"
		as="image"
		href="{slides[index].src}-2x.avif"
		imagesrcset={getSrcSet(index, 'avif')}
		imagesizes="100vw"
		type="image/avif"
	/>
	<ArticleSchemaMarkup {title} {description} image={articleImage} route="/" />
</svelte:head>

<Hero />
<section id="mainContent">
	<div class="container">
		<News fullPage />

		<ContactUs />
	</div>
</section>
