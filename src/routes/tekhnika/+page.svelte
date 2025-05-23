<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import Expandable from '$lib/Expandable.svelte';
	import SlideShow from '$lib/SlideShow.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	const title = 'Техніка Sky Studio – обладнання фотостудії в Ужгороді';
	const description =
		'В Sky Studio є вся необхідна техніка для фотозйомки – світло Godox, кольорові фільтри, проекційна насадка, маски Gobo, портретна тарілка, софтбокс і т.п. ';
	const index = 2;
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
	<ArticleSchemaMarkup {title} {description} image={slides[index]} route="/tekhnika" />
</svelte:head>

<Hero slideNo={index} />
<section id="mainContent">
	<div class="container">
		<div class="infoLineNew">
			<div class="text">
				Оренда&nbsp;фотостудії:
				<span class="price">850 грн/год</span>
				<br />(cвітло та обладнання входять у вартість оренди)
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Постійне світло</h3>
				<h4>2 джерела постійного світла Godox FV200</h4>
			</div>
			<div class="text">
				<p>
					Світло також може бути імпульсним і має вісім спецефектів, включаючи варіації шторму, ТВ і
					зламану лампочку.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh1" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Імпульсне світло</h3>
				<h4>3 джерела імпульсного світла Godox QT400II</h4>
			</div>
			<div class="text">
				<p>
					Спалахи підтримують швидкісну синхронізацію, що дає змогу заморозити будь-який швидкий
					рух.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh2" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Постійне кольорове світло</h3>
				<h4>Zoom RGB LED відеосвітло Godox</h4>
			</div>
			<div class="text">
				<p>Це справжня знахідка для фотографів, які люблять кольорові схеми світла.</p>
				<p>
					Відеосвітло має налаштування відтінку кольору, насиченості, інтенсивності, що дозволяє
					знімаючому отримати доступ до 36 000 кольорів на власний розсуд. Ще додатковою перевагою
					цього світла є 13 вбудованих спецефектів.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={1}
						path="/i/tekhnika/svitlo_kolir"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Лазер</h3>
			</div>
			<div class="text">
				<p>
					В Sky Studio тепер є в наявності лазер. Тільки погляньте які неймовірні фото можна з яким
					зробити🔥 <br />Лазер має купу різних кольорів. Промінь рухається в виді різних
					геометричних фігур, які ви обираєте пультом. Щоб промінь було видно, використовуйте ще й
					дим-машину (яка в нас також є). Тож чекаємо вас на зйомку.
					<br />І лазер, і дим-машина входить у вартість оренди😉
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={5} path="/i/tekhnika/lazer" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Кольорові фільтри</h3>
			</div>
			<div class="text">
				<p>
					За допомогою кольорових фільтрів можна створити необхідну атмосферу для зйомки. В нашій
					студії доступні 4 види кольорів на постійне світло і 11 видів кольорів на імпульсне.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={2} path="/i/tekhnika/tekh3" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Стійка Журавель</h3>
			</div>
			<div class="text">
				<p>
					Стійка Журавель, або Boom Stand, є важливим інструментом для студійної зйомки. Вона
					дозволяє розмістити студійне світло у високому положенні, що забезпечує краще освітлення
					об'єкта зйомки зверху чи збоку.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh4" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Стійки для світла</h3>
				<h4>4 шт</h4>
			</div>
			<div class="text">
				<p>Маємо 4 стійки висотою 2,6 м з максимальним навантаженням до 6 кг</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh5" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Софтбокс</h3>
				<h4>3 шт</h4>
			</div>
			<div class="text">
				<p>
					Маємо софтбокси розміром 60х90см і 80х120см
					<br />Софтбокс розсіює світло та зменшує тіні на фото, створюючи м'яке освітлення з ніжним
					переходом від світла до тіні.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh6" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Стріп софтбокс</h3>
				<h4>2 шт</h4>
			</div>
			<div class="text">
				<p>
					В наявності 2 стріпбокси розміром 160х35 см. Стріпи роблять вузький світловий потік, що
					може бути корисним інструментом для роботи з різними схемами світла.»
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={1}
						path="/i/tekhnika/strip-softbox"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Октобокс</h3>
				<h4>1 шт</h4>
			</div>
			<div class="text">
				<p>
					Це світлодифузор, який використовують для створення м'якого та рівномірного освітлення
					об'єкта.
					<br />Також в нас є соти для октобоксу - це сітка, яка встановлюються на октобокс, щоб
					зменшити розсіювання світла та зосередити світло на об'єкті. Соти допомагають зробити фото
					більш контрастними.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={3} path="/i/tekhnika/tekh7" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Рефлектори</h3>
				<h4>1 рефлектор зі шторками і 4 звичайні</h4>
			</div>
			<div class="text">
				<p>
					Рефлектори використовуються для збільшення напрямку і інтенсивності світла, що дозволяє
					підсвічувати певну область зйомки та забезпечувати більш контрастні та насичені
					фотографії.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh8" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Портретна тарілка</h3>
				<h4>1 шт</h4>
			</div>
			<div class="text">
				<p>
					Портретна тарілка має круглу форму з піднятими краями та глибокою серединою, що дозволяє
					підсвічувати обличчя моделі та створювати тіні на фото. Вона створює тверде світло з
					глибокими тінями, яке дозволяє виділяти контури обличчя та підкреслювати рельєфи.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh9" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Проекційна насадка і маски Gobo</h3>
				<h4>Godox SA-P з Лінзою 85мм та Адаптер SA-17 для Bowens</h4>
			</div>
			<div class="text">
				<p>
					Насадка використовується для проектування зображень, текстів або інших деталей на фон чи
					об'єкт зйомки. Це дозволяє створювати цікаві ефекти та змінювати атмосферу фотозйомки.
					<br />Можна використовувати проекційну насадку і без маски. В такому разі у вас буде
					гарний спрямований світловий потік в виді кола.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={10} path="/i/tekhnika/tekh10" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Флаги</h3>
				<h4>2 шт</h4>
			</div>
			<div class="text">
				<p>
					Флаги використовують для різних завдань. За допомогою них зменшують потік світла. Їх
					використовують як відбивач чи поглинач світла. Їх використовують як фон чи навіть як
					реквізит. Все залежить від вашої креативності.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh11" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Фотопарасоля</h3>
				<h4>160 cм</h4>
			</div>
			<div class="text">
				<p>
					Фотопарасоля - це гарний інструмент для роботи зі світлом. Він розсіює жорсткі тіні,
					формує м'який та рівномірний світловий потік, а також може використовуватися для відбиття
					світла та освітлення тіньових ділянок.
					<br />Завдяки фотопарасолі фотографії стають більш естетичними, з плавними переходами між
					світлом та тінню.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={1}
						path="/i/tekhnika/fotoparosolya-160"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Глибокий рефлектор з сотами</h3>
				<!-- <h4>160 cм</h4> -->
			</div>
			<div class="text">
				<p>
					Це інструмент, який використовується в студійній фотографії для створення жорсткого,
					спрямованого світла. Він має форму параболічного дзеркала, яке фокусує світло від джерела
					світла в вузький пучок
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={1}
						path="/i/tekhnika/hlyboky-reflektor-z-sotamy"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Гнучкі дзеркала</h3>
				<h4>Золоте і срібне</h4>
			</div>
			<div class="text">
				<p>
					Цей аксесуар зазвичай використовують фотографи, щоб змінити напрямок світла без додаткових
					джерел світла або рефлекторів. Він також може допомогти створити складні ефекти відбивання
					світла, які додають глибини та текстури до зображенню.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh12" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Вентилятор</h3>
			</div>
			<div class="text">
				<p>
					Вентилятор використовують для створення ефекту руху волосся, тканин або інших об'єктів на
					фотографії, що зробить її більш живою та динамічною.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh13" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Дим-машина</h3>
			</div>
			<div class="text">
				<p>
					Димогенератор для фотозйомки - ідеальний інструмент для фотографів, які хочуть додати
					креативності та унікальності своїм знімкам завдяки ефектам диму.
					<br />Якщо ви плануєте використовувати дим-машину, повідомте нас заздалегідь, щоб ми могли
					її підготувати.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh14" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Тубус з кольоровими фільтрами і сотами</h3>
			</div>
			<div class="text">
				<p>
					Це насадка на студійний спалах, що формує вузький, спрямований світловий потік. Тубус
					використовується для створення світлового акценту на деталі або певній ділянці фотографії.
					<br />В комплекті до нього також йдуть соти і кольорові фільтри, які допоможуть зробити
					світловий акцент ще більш виразним.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={2} path="/i/tekhnika/tekh15" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Ворота для фонів і тканин</h3>
			</div>
			<div class="text">
				<p>
					Це рухома конструкція, яка дозволяє швидко та легко змінювати фони під час фотозйомки.
					<br />У нашій студії є 2 різнокольорові тканинні фони. А також маємо однотонні фотофони
					(детальніше в розділі «Фотозони Sky Studio»)
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh16" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Журавель для предметної зйомки</h3>
			</div>
			<div class="text">
				<p>
					Це пристрій для фотозйомки, який дозволяє фіксувати предмет з різних кутів та планів, щоб
					отримати якісні фото. Він корисний при створенні каталогів продукції та рекламних
					фотографій.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh17" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Штатив для зйомок бекстейджу</h3>
			</div>
			<div class="text">
				<p>
					Це важливий інструмент для фільмування атмосфери зйомки. Завдяки штативу можна зручно
					встановити камеру для запису відео чи TimeLapse та спокійно продовжувати зйомку.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh18" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Відбивач 5 в 1</h3>
				<h4>Visico RD-024, 91 х 122 см</h4>
			</div>
			<div class="text">
				<p>
					Маємо такий універсальний відбивач світла в студії. Є 5 різних варіацій: білий, чорний,
					срібний, золотий і білий напівпрозорий. Відбивач світла використовують для контролю
					освітлення, зменшення тіней та створення бажаного ефекту при фотографуванні.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={6} path="/i/tekhnika/tekh19" />
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Снігова машина</h3>
				<!-- <h4>Visico RD-024, 91 х 122 см</h4> -->
			</div>
			<div class="text">
				<p>
					Генератор снігу для фотозйомки додасть чарівності і атмосфери до ваших зимових фотосесій.
					Завдяки імітації падіння снігу, ця машина дозволить створити чудові кадри в казковому
					сніжному образі незалежно від погодних умов, в приміщенні фотостудії. Входить до вартості
					оренди❄️
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/tekhnika/snih-mashyna"
					/>
				</Expandable>
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Кольорове/постійне біколор</h3>
				<!-- <h4>Visico RD-024, 91 х 122 см</h4> -->
			</div>
			<div class="text">
				<p></p>
			</div>
			<div class="image">
				<!-- <Expandable breakpoint={768}>
					<SlideShow
						width={1280}
						height={852}
						x2={true}
						slides={4}
						path="/i/tekhnika/snih-mashyna"
					/>
				</Expandable> -->
			</div>
		</div>
		<div class="blockWithImage">
			<div class="title">
				<h3>Проектор ViewSonic PX747-4k</h3>
				<!-- <h4>Visico RD-024, 91 х 122 см</h4> -->
			</div>
			<div class="text">
				<p>
					Для покращення вашого досвіду в нашій фотостудії, ми раді запропонувати використання
					проектора ViewSonic PX747-4K. Завдяки вражаючій яскравості 3500 ANSI люменів та реальному
					4K UHD роздільній здатності з технологією XPR, ви отримаєте надзвичайно чітке та яскраве
					зображення навіть при студійному освітленні. Підтримка HDR контенту забезпечить
					неперевершену деталізацію як у світлих, так і в темних ділянках, що ідеально підходить для
					перегляду відзнятого матеріалу, створення фонів або демонстрації портфоліо на великому
					екрані. Легке підключення через два порти HDMI робить його зручним інструментом для
					втілення ваших творчих ідей під час оренди студії.
				</p>
			</div>
			<div class="image">
				<Expandable breakpoint={768}>
					<SlideShow width={1280} height={852} x2={true} slides={1} path="/i/tekhnika/tekh20" />
				</Expandable>
			</div>
		</div>
		<ContactUs />
	</div>
</section>

<style lang="scss">
</style>
