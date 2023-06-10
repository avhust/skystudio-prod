<script lang="ts">
	import '$lib/styles/page.scss';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import Hero from '$lib/Hero.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Фотозони Sky Studio – зали фотостудії з крилами в Ужгороді';
	const description =
		'В Cкай студії є різні фотозони: циклорама, ніжний зал, діловий зал, кольорові фони та зал Pole Dance. Sky Studio – єдина студія з пілоном в Ужгороді!';
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/fotozony" />
</svelte:head>

<Hero slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLineNew">
			<div class="text">
				Оренда&nbsp;фотостудії:
				<span class="price">600 грн/год</span>
				<br />(cвітло та обладнання входять у вартість оренди)
			</div>
		</div>

		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №1</h3>
				<h4>Циклорама</h4>
			</div>
			<div class="text">
				<p>
					Цей зал підійде для мінімалістичних зйомок, де не треба нічого зайвого в кадрі. Де
					хочеться показати безмежний простір позаду і залишити акцент на моделі.
					<br />Можна також додавати аксесуари чи предмети інтерʼєру для створення атмосфери
					<br />Розмір циклорами - 6х3х3 метри
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/fotozony/zal1" />
				</Expandable>
			</div>
		</div>

		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №2</h3>
				<h4>Синій зал</h4>
			</div>
			<div class="text">
				<p>
					Цей зал підійде для бізнес зйомок, контент чи предметних зйомок, запису відеоматеріалів,
					портретних фотосесій і т.п. Темно-синій колір додає залу певної строгості, серйозності,
					стриманості. А зелені рослини візуально «освіжають» простір.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/fotozony/zal2" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №3</h3>
				<h4>Білий зал</h4>
			</div>
			<div class="text">
				<p>
					Цей зал універсальний. Він підійде для сімейної чи весільної фотосесії, портретних,
					предметних зйомок, чи навіть для запису відеоконтенту. Ця зала не рясніє якскравими
					кольорами, що дозволяє створити гармонійний, розслабляючий і приємний для ока фон.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/fotozony/zal3" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №4</h3>
				<h4>Гойдалка</h4>
			</div>
			<div class="text">
				<p>
					Ця зона легка і невагома. Вона точно підійде для фільмування щасливих подій, таких як
					весілля, фотосесії love story чи сімейні фотосесії. Також тут можна поекспериментувати з
					портретними образами.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={6} path="/i/fotozony/zal4" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №5</h3>
				<h4>Сакура</h4>
			</div>
			<div class="text">
				<p>
					Повз зону з квітучим деревом не можна пройти повз. Якщо плануєте зробити ніжні романтичні
					кадри, вам точно сюди.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/fotozony/zal5" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №6</h3>
				<h4>Фотофони</h4>
			</div>
			<div class="text">
				<p>
					Маємо в наявності 3 вінілових фотофони і 4 паперових. Є 7 різних кольорів: білий, чорний,
					сірий, синій, фіолетовий, жовтий, помаранчевий. Також маємо 2 тканинні квіткові фотофони.
					<br />Фотофони - це особливо корисна штука для предметних зйомок, коли треба підібрати
					конкретний колір фону під конкретний товар.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={7} path="/i/fotozony/zal6" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зона №7</h3>
				<h4>Pole Dance</h4>
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
				<h3>Стільці нашої студії</h3>
			</div>
			<div class="text">
				<p>
					Стільці часто використовують для портретних фото. В нас в студії є 8 різних стільців.
					Обирайте той, що найкраще підходить для вашого стилю фотозйомки.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={9} path="/i/fotozony/stiltsi" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Додатковий реквізит</h3>
			</div>
			<div class="text">
				<p>
					Додаткові реквізити для ваших фото: 2 куби - чорний і білий. Куби допоможуть
					урізноманітнити ваші кадри і з ними можна реалізувати різні творчі ідеї.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/fotozony/zal10" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Гримерна</h3>
			</div>
			<div class="text">
				<p>
					Хоч ця зона напряму і не відноситься до фотозон, вона має важливе значення для студії.
					Наша гримерна велика і простора, щоб вам було комфортно переодягнутися і підготуватися до
					зйомки. Також в нас є візажист, який може зробити вам макіяж. Якщо бажаєте записатись на
					зйомку і щоб вам зробили макіяж прямо в студії, звʼяжіться з нами :)
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={2} path="/i/fotozony/zal9" />
				</Expandable>
			</div>
		</div>

		<ContactUs />
	</div>
</section>
