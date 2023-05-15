<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Фотостудія в Ужгороді – Скай студія з крилами ангела';
	const description =
		'Sky Studio – студія з крилами в Ужгороді. До ваших послуг 4 фотозони, вінілові фони, світло Godox та інші аксесуари. Також доступні крила янгола в оренду';
	const index = 0;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/" />
</svelte:head>

<Hero />
<section id="mainContent">
	<div class="container">
		<div class="infoLine toRight">
			<!-- <div class="info" /> -->
			<div class="buttonWrapper">
				<div class="text">Переглянути&nbsp;фотозони</div>
				<a href="/fotozony#mainContent"><span>Переглянути</span></a>
			</div>
		</div>
		<div class="blockWithImageAndButton">
			<div class="title">
				<h3>Sky Studio</h3>
			</div>
			<div class="text">
				<p>
					це фотостудія в Ужгороді, де ви можете орендувати крила янгола для зйомки. Ми працюємо з 1
					грудня 2022 року. Засновниця студії Євгенія своїми руками створює крила янгола і робить
					все можливе для того, щоб ваша зйомка була на висоті. В нас є все необхідне для ідеальних
					фото. Переконайтеся самі 🙂
				</p>
				<h3>Студія пропонує до ваших послуг:</h3>
				<ul>
					<li>4 фотозони</li>
					<li>циклорама 3х6м</li>
					<li>вінілові фотофони</li>
					<li>світло Godox</li>
					<li>гнучкі дзеркала</li>
					<li>вентилятор</li>
					<li>кольорові фільтри</li>
					<li>пілон</li>
					<li>інше</li>
				</ul>
				<h3>Додатково є можливість орендувати:</h3>
				<ul>
					<li>крила янгола різних кольорів і розмірів</li>
					<li>вечірні сукні</li>
					<li>аксесуари</li>
				</ul>
			</div>
			<div class="image">
				<picture>
					<source
						type="image/avif"
						srcset="/i/home/avif/home1-1x.avif 1x, /i/home/avif/home1.avif 2x"
					/>
					<source
						type="image/webp"
						srcset="/i/home/webp/home1-1x.webp 1x, /i/home/webp/home1.webp 2x"
					/>
					<img
						alt="SkyStudio фотостудія в Ужгороді"
						src="/i/home/jpg/home1.jpg"
						srcset="/i/home/jpg/home1-1x.jpg 1x, /i/home/jpg/home1.jpg 2x"
						width="800"
						height="1199"
						loading="lazy"
						decoding="async"
					/>
				</picture>
			</div>
		</div>
	</div>
</section>
