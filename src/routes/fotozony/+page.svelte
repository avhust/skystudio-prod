<script lang="ts">
	import '$lib/styles/page.scss';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import Hero from '$lib/Hero.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
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
				<span class="price">750 грн/год</span>
				<br />(cвітло та обладнання входять у вартість оренди)
			</div>
		</div>

		<div class="blockWithImage">
			<div class="title">
				<h3>Сірий зал</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Ця зона вражає своєю елегантністю та стриманістю. М'яке денне освітлення та акценти
					створюють атмосферу спокою та класики, ідеальну для стильних та загадкових знімків.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/fotozony/siryi-zal" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Циклорама</h3>
				<h4>Перша кутова циклорама в Ужгороді</h4>
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
				<h3>Пасхальна фотозона</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Яскраві яйця, квіти сакури та інші тематичні елементи створюють атмосферу радості та
					весняного оновлення природи. Пасхальна фотозона ідеально підходить для сімейних фото, фото
					з друзями, рідними та близькими. Запрошуємо вас на зйомку, щоб якраз до Великодня ви вже
					могли порадувати своїх рідних гарними фото🙌
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={7}
						path="/i/fotozony/pashalna-zona"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Весняна фотозона</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Відчуйте весняне оновлення у нашій фотостудії на 100%. До ваших послуг - весняна фотозона
					з ніжними відтінками. Вже доступна до оренди.
					<br />І до речі, рожевий костюм доступний в оренду для вас і можна повністю відтворити
					образ як на фото🌸
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/fotozony/vesnyana-zona"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Хутряний фон</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Стильний хутряний рожевий фон тепер доступний для оренди в нашій студії🫳 Це чудовий фон
					для модних та креативних фотосесій. Він точно урізноманітнить ваші кадри, підійде як для
					портретів, так і для рекламних зйомок. Можна додавати додатковий реквізит, як от наприклад
					диско-кулі чи інші речі.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/fotozony/khutryanyi-fon"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Квітковий зал</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Композиція з ніжних квітів біля ліжка та мʼяке денне світло створюють для вас ідеальну
					атмосферу романтики і чарівності. А дзеркало доповнює цю зону, додаючи композиції глибини.
					Квітковий зал підійде для особистих зйомок, love story, сімейних, весільних фотосесій
					тощо🌸
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={10}
						path="/i/fotozony/kvitkovyi-zal"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Срібна фотозона</h3>
				<!-- <h4>Синій зал</h4> -->
			</div>
			<div class="text">
				<p>
					Наша блискуча фотозона надає неповторний атмосферний фон для ваших спогадів. Зафіксуйте
					миті щастя в цьому неперевершеному срібному сяйві. А сірий костюм, до речі, можна взяти в
					оренду в студії щоб повністю відтворити цей образ😉
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={3}
						path="/i/fotozony/sribna-fotozona"
					/>
				</Expandable>
			</div>
		</div>

		<div class="blockWithImage">
			<div class="title">
				<h3>Фотофони</h3>
				<!-- <h4>Фотофони</h4> -->
			</div>
			<div class="text">
				<p>
					Маємо в наявності 3 вінілових фотофони і 6 паперових. Є 9 різних кольорів: білий, чорний,
					сірий, синій, фіолетовий, жовтий, помаранчевий, червоний, рожевий. Також маємо 2 тканинні
					квіткові фотофони.
					<br />Фотофони - це особливо корисна штука для предметних зйомок, коли треба підібрати
					конкретний колір фону під конкретний товар.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={12} path="/i/fotozony/fotofony" />
				</Expandable>
			</div>
		</div>

		<div class="blockWithImage">
			<div class="title">
				<h3>Дитяча міні-зона</h3>
				<!-- <h4>Дитяча міні-зона</h4> -->
			</div>
			<div class="text">
				<p>
					Для наших найменших відвідувачів теж є своя фотозона - купання з фруктами. Діткам може
					бути цікаво поплескатися у воді чи погратися з цитрусовими. А фотограф тим часом зловить
					гарні моменти в кадр.
				</p>
				<p>Якщо хочете таку фотозону, приносьте фрукти з собою (або за доплату ми придбаємо 😉)</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/fotozony/fotozona8" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Зелений куток</h3>
				<!-- <h4>Зелений куток</h4> -->
			</div>
			<div class="text">
				<p>
					До вашої уваги – нова фотозона з шкіряним кріслом. Мінімалістична зона з штучним
					озелененням на стіні додасть різноманітності вашій зйомці. Можна замінювати шкіряне крісло
					на інші крісла чи стільці студії. А також можете додати свої бажані аксесуари для
					створення необхідної атмосфери😉
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/fotozony/fotozona9-zelenyi-kutok"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Коробки Барбі</h3>
				<!-- <h4>Коробки Барбі</h4> -->
			</div>
			<div class="text">
				<p>
					В Скай студії ви можете перевтілитися в справжню Барбі. Маємо необхідний одяг, взуття та
					навіть дві рожеві коробки – для дорослої і для дитини. Ми навіть маємо в наявності дві
					перуки – рожевого кольору і блонд.
				</p>
				<p>А диско-шар і рожеве світло створять приємну атмосфери для зйомки.</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={2}
						path="/i/fotozony/fotozona10-barbi"
					/>
				</Expandable>
			</div>
		</div>
		<div id="idei-fotozon">
			<div class="blockWithImage">
				<div class="title">
					<h3>Ідеї фотозон</h3>
					<h4>які можна реалізувати в нашій студії</h4>
				</div>
				<div class="text">
					<p style="padding-bottom: 0.5rem;">
						В Sky Studio є все необхідне для створення фотозони з нуля для вашої фотосесії. Є куби,
						тканини, штучні квіти, різноманітні стільці, фони і т.д. Можете сміливо експериментувати
						і поєднувати реквізити під час зйомки.
					</p>
					<p>
						Натуральні квіти, які ви бачите на фото, доступні до оренди дуже короткий час – допоки
						не зівʼянуть. Якщо ви хочете фотографуватись з натуральними квітами, принесіть їх з
						собою. Вази для квітів в нас є.
					</p>
				</div>
				<div class="image">
					<Expandable breakpoint={768}>
						<SlideShow width={1280} height={852} x2={true} slides={18} path="/i/fotozony/idei" />
					</Expandable>
				</div>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Стільці нашої студії</h3>
			</div>
			<div class="text">
				<p>
					Стільці часто використовують для портретних фото. В нас в студії є багато різних стільців.
					Обирайте той, що найкраще підходить для вашого стилю фотозйомки.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={13} path="/i/fotozony/stiltsi" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Додатковий реквізит</h3>
			</div>
			<div class="text">
				<p>
					Додаткові реквізити для ваших фото: чорний і білий куб, тканини різних кольорів, незвичний
					диван, біла підставка. Ці речі можуть допомогти урізноманітнити ваші кадри і з ними можна
					реалізувати різні творчі ідеї.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={8} path="/i/fotozony/rekvizyt" />
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
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/fotozony/grymerna" />
				</Expandable>
			</div>
		</div>
		<!-- add styled link to arkhiv page-->
		<div style="padding: 1rem;">
			<LinkButton
				kind="link"
				href="/fotozony/arkhiv#mainContent"
				title="Переглянути архів фотозон &rarr;"
			/>
		</div>

		<ContactUs />
	</div>
</section>
