<script lang="ts">
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Про нашу студію – Скай студія Ужгород, фотостудія з крилами';
	const description =
		'Фотостудія Скай в Ужгороді - це єдина фотостудія з орендою крил ангела. Це студія, де можна орендувати крила для зйомки. Cкай студія Ужгород чекає на вас!';
	const index = 5;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/pro" />
</svelte:head>

<Hero slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLine">
			<div class="info spacy">
				<span>Наші контакти</span>
			</div>
			<div class="buttonWrapper spacy">
				<div class="text">
					<a class="" target="_blank" rel="noreferrer" href="https://goo.gl/maps/5xobiMsTy8Bir6PK7"
						>м. Ужгород, вул. Залізнична 1А</a
					>
					<br />
					<a href="mailto:contact@skystudio.uz.ua">contact@skystudio.uz.ua</a>
				</div>

				<div class="phonesWrapper">
					<a class="phone" href="tel:+380950889787"><span>+38 095 088 97 87</span></a>
				</div>
			</div>
			<div class="social">
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sky_studio_uzh/"
					><img style:--size="1.5rem" alt="instagram icon" src="/icons/insta-white.svg" /></a
				>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.facebook.com/profile.php?id=100066553794844"
					><img alt="fb icon" src="/icons/fb-white.svg" /></a
				>
				<a target="_blank" rel="noreferrer" href="https://t.me/macwings"
					><img style:--size="1.4rem" alt="telegram icon" src="/icons/telegram-white.svg" /></a
				>
			</div>
		</div>
		<div class="pps">
			<p>
				Sky Studio – це фотостудія в Ужгороді, де ви можете орендувати крила янгола для зйомки. Ми
				працюємо з 1 грудня 2022 року. Засновниця студії Євгенія своїми руками створює крила янгола
				і робить все можливе для того, щоб ваша зйомка була на висоті. В нас є все необхідне для
				ідеальних фото. Переконайтеся самі 🙂
			</p>
			<p>З радістю чекаємо вас в нашій студії! Ми знаходимось тут:</p>
		</div>
		<div class="blockMapWithImage">
			<div class="map">
				<a href="https://goo.gl/maps/5xobiMsTy8Bir6PK7">
					<picture>
						<source
							type="image/avif"
							srcset="/i/pro/avif/map-1x.avif 1x, /i/pro/avif/map.avif 2x"
						/>
						<img
							alt="SkyStudio фотостудія в Ужгороді"
							src="/i/pro/webp/map.webp"
							srcset="/i/pro/webp/map-1x.webp 1x, /i/pro/webp/map.webp 2x"
							width="1280"
							height="1704"
							loading="lazy"
							decoding="async"
						/>
					</picture>
				</a>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/pro/pro-nas" />
				</Expandable>
			</div>
		</div>
		<!-- <ContactUs /> -->
	</div>
</section>

<style lang="scss">
	.social {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 0.5rem;
		margin: 1rem;
		padding: 0 clamp(1.5rem, 3vw, 3rem);
		a {
			display: flex;
			height: 2.7rem;
			width: 2.7rem;
			justify-content: center;
			background-color: var(--darkColor);
			border-radius: 50%;
			align-items: center;
			transform: scale(1);
			transform-origin: center;
			transition: all 0.2s ease-in-out;
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					transform: scale(1.2);
					// border-radius: 50%;
				}
			}
			img {
				--size: 1.3rem;
				height: var(--size);
				width: var(--size);
			}
		}
	}
</style>
