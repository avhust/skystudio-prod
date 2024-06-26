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
				<h3>Білий зал</h3>
				<!-- <h4>Білий зал</h4> -->
			</div>
			<div class="text">
				<p>
					Цей світлий зал підійде для сімейної зйомки, весільної фотосесії, love story чи портретних
					фото. Біля ліжка з квітучим деревом виходять ніжні романтичні кадри. Ця зала не рясніє
					якскравими кольорами, зате вона несе гармонію, спокій і комфорт.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={7} path="/i/fotozony/bilyi-zal" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Телефон</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Для вас маємо нову тематичну фотозону - ми зробили у нашій студії телефонну будку, щоб
					кожна дівчина могла зателефонувати своєму коханому та повідомити про романтичний вечір на
					День Валентина ☎️
					<br />P.S. Весь одяг, що на моделі, доступний в оренду👌
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/fotozony/telefon" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Кохання</h3>
				<!-- <h4>Перша кутова циклорама в Ужгороді</h4> -->
			</div>
			<div class="text">
				<p>
					Наша фотозона до Дня Святого Валентина вражає своєю кількістю сердець! Це щоб ваше серце
					було наповненим любовʼю на довгі роки. Серця створюють теплу та романтичну ауру. Це
					ідеальне місце для чуттєвих та незабутніх знімків ❤️
					<br />P.S. А червона сукня, до речі, також доступна в оренду🙂
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/fotozony/kokhannya" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Новорічна фотозона</h3>
			</div>
			<div class="text">
				<p>
					Подивіться на цей справжній казковий ліс, де можна створити неймовірні новорічні
					фотографії! Ялинки з місяцем гармонійно поєднуються і створюють святковий настрій.
					Фотозона підійде для індивідуальних, портретних та сімейних зйомок. Чекаємо вас на
					зйомку✨
					<br />
					І до речі, образи на фото доступні в оренду в студії :)
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={6} path="/i/fotozony/novorichna" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Синій зал</h3>
				<!-- <h4>Синій зал</h4> -->
			</div>
			<div class="text">
				<p>
					В очікуванні свята… Новий рік вже близько✨ Зловіть цю атмосферу в нашому синьому залі, де
					накритий святковий стіл, горять яскраві вогники на ялинці та грає улюблена музика.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={6} path="/i/fotozony/syniy-zal" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Снігопад</h3>
				<!-- <h4>Синій зал</h4> -->
			</div>
			<div class="text">
				<p>
					В нашій студії є реальний сніг❄️ Так-так, це справжній сніг, який створює генератор снігу…
					Вам більше не треба чекати, коли піде сніг надворі, щоб зробити такі ефектні кадри.
					Достатньо буде записатись до нас на зйомку. До речі, ця сукня зі стразами, також доступна
					в оренду. Тож ви можете повністю відтворити цей образ. Чекаємо на вас 😉
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={4} path="/i/fotozony/snihopad" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Фотозона зі снігом</h3>
			</div>
			<div class="text">
				<p>
					Це справді цікавий куточок для дітей. Тут можна зробити чудові сімейні фото в зимовій
					атмосфері. Діти зможуть погратися з штучним снігом, а фотограф тим часом зробить веселі
					зимові кадри❄️
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={6} path="/i/fotozony/zi-snihom" />
				</Expandable>
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
