<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Крила для оренди в Sky Studio – фотостудія в Ужгороді';
	const description =
		'Скай студія в Ужгороді надає крила ангела в оренду. Фотостудія SKY надає крила для дітей і для дорослих, патріотичні крила і крила з натурального пірʼя.';
	const index = 3;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/_kryla" />
</svelte:head>

<Hero slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLineNew">
			<div class="text">
				Оренда крил доступна лише для зйомки в нашій студії
				<br />Необхідно уточнювати наявність крил попередньо.
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дорослі крила зі штучного матеріалу</h3>
				<h4>Оренда – 200 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={15} path="/i/kryla/1-shtuchni" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Патріотичні дорослі крила</h3>
				<h4>Оренда – 500 грн</h4>
			</div>
			<div class="text">
				<p>50% з оренди патріотичних крил перераховуємо на ЗСУ</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/kryla/2-patriotychni"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дорослі крила з натурального пірʼя</h3>
				<h4>Оренда – 500 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/kryla/3-naturalni" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дитячі крила</h3>
				<h4>Оренда – 100 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/kryla/4-dytyachi" />
				</Expandable>
			</div>
		</div>
		<ContactUs />
	</div>
</section>
