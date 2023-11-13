<script lang="ts">
	import '$lib/styles/page.scss';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import Hero from '$lib/Hero.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Архів Фотозон Sky Studio – зали фотостудії, які більше не доступні';
	const description =
		'Архів фотозон Sky Studio – зали фотостудії, які більше не доступні. Якщо ви хочете зняти фотозону, яка була раніше, напишіть нам.';
	const index = 1;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/fotozony/arkhiv" />
</svelte:head>

<Hero customFirstText="архів фотозон" customBrightness="0.15" slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLineNew">
			<div class="text">
				Тут представлені фотозони Sky Studio, які більше не доступні. Якщо ви хочете зняти фотозону,
				яка була раніше, напишіть нам. Можливо ми зможемо її реалізувати знову.<br />
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дитячий куточок</h3>
			</div>
			<div class="text">
				<p>
					Маємо таку дитячу зону в студії для ваших діток. Ця зона може бути як фотозоною, так і
					просто місцем, де діти можуть побавитися поки ви зайняті на фотозйомці. Все для вашого
					комфорту :)
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/fotozony/dyt_kytok" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Осіння фотозона</h3>
				<!-- <h4>Білий зал</h4> -->
			</div>
			<div class="text">
				<p>
					А ви любите осінь? В нашій студії зʼявилась зона, де ви можете зробити чудові сімейні
					кадри. Фотозона насичена багряними відтінками теплої осені. А золотисті листя, осінні
					квіти та гарбузи доповнюють атмосферу цього чарівного сезону. А картаті сорочки, до речі,
					доступні до оренди в студії.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={5}
						path="/i/fotozony/osinnya-fotozona"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Pole Dance</h3>
				<!-- <h4>Pole Dance</h4> -->
			</div>
			<div class="text">
				<p>
					В нашій студії є можливість знімати кадри на пілоні. Це буде корисно хореографам Pole
					Dance чи любителям даного виду танців Використовуючи професійне фотообладнання і кольорові
					фільтри, можна чудово передати атмосферу танцю та акробатичні трюки
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/fotozony/zal7" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Пустеля</h3>
				<!-- <h4>Білий зал</h4> -->
			</div>
			<div class="text">
				<p>
					Маємо новинку для вас – фотозону з піском. Це пустеля в приміщенні☺️ Жовте постійне світло
					додасть «палючого сонця» для атмосфери<br />І до речі, сукня, в яку дівчина одягнена,
					також доступна до оренди😉
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={7} path="/i/fotozony/pustelya" />
				</Expandable>
			</div>
		</div>

		<ContactUs />
	</div>
</section>
