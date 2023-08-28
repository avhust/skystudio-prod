<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import News from '$lib/News.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	const title = 'Новини фотостудії Sky Studio (фотостудія в Ужгороді)';
	const description =
		'Новини SKY STUDIO – фотостудії в Ужгороді📍вул. Залізнична 1А ➤ ☎️0950889787 ➤ Календар бронювань ➤ Нові фотозони ➤ Сімейна фотосесія ➤ Портретна фотосесія ➤ Світло GODOX ➤ Кольорові фони …';
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
