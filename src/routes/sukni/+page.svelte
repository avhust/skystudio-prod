<script lang="ts">
	// import type { PageData } from './$types';
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Сукні для оренди в Sky Studio - фотостудія Ужгород';
	const description =
		'В SKY Studio є сукні для оренди, корона, вінки, босоніжки - все необхідне для вашої фотозйомки. Чекаємо вас в Скай студії в Ужгороді. Аксесуари безкоштовні.';
	const index = 4;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/sukni" />
</svelte:head>

<Hero slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLineNew">
			<div class="text">Оренда суконь доступна лише для зйомки в нашій студії.</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дорослі сукні</h3>
				<h4>Оренда – 200 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={52} path="/i/sukni/1-dorosli" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Сукні для вагітних</h3>
				<h4>Оренда – 200 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={8}
						path="/i/sukni/4-dlya-vagitnyh"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Інший одяг для дорослих</h3>
				<h4>Оренда – 200 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/sukni/8-odyah" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дитячі сукні</h3>
				<h4>Оренда – 100 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={15} path="/i/sukni/2-dytyachi" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Весільні сукні</h3>
				<h4>Оренда – 500 грн</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/sukni/3-vesilni" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Аксесуари</h3>
				<h4>Оренда – безкоштовно</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={7} path="/i/sukni/5-aksesuary" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Аксесуари</h3>
				<h4>Оренда – 200 грн.</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/sukni/7-aksesuary-platno"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Взуття</h3>
				<h4>Оренда – безкоштовно</h4>
			</div>
			<div class="text">
				<p />
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/sukni/6-vzuttya" />
				</Expandable>
			</div>
		</div>
		<ContactUs />
	</div>
</section>
