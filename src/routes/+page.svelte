<script lang="ts">
	import '$lib/styles/page.scss';
	import Hero from '$lib/Hero.svelte';
	import News from '$lib/News.svelte';
	import { slides, getSrcSet } from '$lib/data/hero';
	import ArticleSchemaMarkup from '$lib/ArticleSchemaMarkup.svelte';
	import GCalendar from '$lib/GCalendar.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	const title = 'Фотостудія в Ужгороді – Скай студія з крилами ангела';
	const description =
		'Sky Studio – фотостудія в Ужгороді Залізнична 1А, ☎️0950889787 📸@sky_studio_uzh ✓кутова циклорама✓4 фотозони✓лазер✓світло Godox✓оренда суконь,крил янгола…';
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
		<div id="calendar" style="margin-top: 1rem">
			<GCalendar />
		</div>
		<div class="block2Columns" style="margin-top: 0.5rem">
			<div class="title">
				<h3>Ціни</h3>
			</div>
			<div class="text">
				<!-- <h3>Ціни:</h3> -->
				<ul>
					<!-- <li>750 грн година</li>
					<li>500 грн – 30 хв</li>
					<li>1100 грн – 1,5 години</li>
					<li>1300 грн – 2 години</li> -->
					<li>30 хв – 600 грн</li>

					<li>Година – 850 грн</li>

					<li>Півтори години – 1200 грн</li>

					<li>Дві години – 1500 грн</li>

					<li>(кожна наступна за умови оренди підряд) – 750 грн</li>

					<li>Оренда 10 і більше людей – 1100 грн</li>

					<li>Гримерне місце – 150 грн</li>
				</ul>

				<!-- <p>Знижка не діє на групові зйомки:</p>
				<ul>
					<li>На групові зйомки від 10 людей ціна – 1000 грн за годину</li>
				</ul> -->
			</div>
			<!-- <div class="secondColumn">
				<News />
			</div> -->
		</div>
		<ContactUs />
		<div class="blockWithImageAndButton">
			<div class="title">
				<h3>Правила оренди студії</h3>
			</div>
			<div class="text">
				<ol>
					<li>
						Оренда студії відбувається без передоплати. Будь ласка, про зміни попереджуйте
						заздалегідь.
					</li>
					<li>
						У студії є змінне взуття на 6 людей. Якщо людей буде більше, вам треба подбати про своє
						змінне взуття. У нас на підлозі коврове покриття, тому спокійно можна бути в шкарпетках.
					</li>
					<li>Якщо ви будете фотографуватись у взутті, воно обовʼязково має бути чистим!</li>
					<li>
						Вся студія бронюється за вами лише за умови роботи одного фотографа. Якщо працює два
						фотографа паралельно на різних зонах, оплата подвоюється.
					</li>
					<li>Чай, кава - безкоштовні. Капучино - за наявності молока :)</li>
					<li>
						В разі пошкодження майна вам необхідно повністю компенсувати збитки. Витрати оплачуються
						вами відразу. Шукаємо ринкову ціну пошкодженої речі при вас.
					</li>
					<li>
						Якщо ви плануєте зйомку з тваринами чи просто приходите з ними, попереджуйте про їх
						наявність завчасно та узгоджуйте це питання з нами.
					</li>
					<li>
						Відверті зйомки — це добре, але категорично заборонені зйомки порнографічного характеру.
					</li>
					<li>
						Робота візажиста (чи візажиста і перукаря) +100 грн за кожну годину роботи в студії.
						Якщо наш візажист – то без доплати, оплата лише за послуги візажиста.
					</li>
				</ol>

				<h3>Дякуємо за розуміння! З радістю чекаємо вас в Sky Studio.</h3>
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
		<div class="infoLine toRight">
			<!-- <div class="info" /> -->
			<div class="buttonWrapper">
				<div class="text">Переглянути&nbsp;фотозони</div>
				<a href="/fotozony#mainContent"><span>Переглянути</span></a>
			</div>
		</div>
		<div class="block2Columns">
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
					<li>інше</li>
				</ul>
				<h3>Додатково є можливість орендувати:</h3>
				<ul>
					<li>крила янгола різних кольорів і розмірів</li>
					<li>вечірні сукні</li>
					<li>аксесуари</li>
				</ul>
			</div>
			<!-- <div class="secondColumn">
				<News />
			</div> -->
		</div>

		<ContactUs />
	</div>
</section>
