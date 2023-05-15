<script lang="ts">
</script>

<footer>
	<div class="container">
		<div class="logo">
			<a href="/"><img src="/skystudio_logo.svg" alt="Logo SkyStudio" /></a>
		</div>
		<div class="nav">
			<slot />
		</div>
		<div class="info">
			<a href="mailto:contact@skystudio.uz.ua">contact@skystudio.uz.ua</a><br />
			"Sky Studio – Фотостудія з крилами в Ужгороді"<br />
			При копіюванні матеріалів із сайту посилання обов'язкове. Усі права захищені © {new Date().getFullYear()}
		</div>
	</div>
</footer>

<style lang="scss">
	$breakpoint: 768px;
	footer {
		color: white;
		width: 100%;
		// background-color: #000000;
		background-color: #294c80;
		// // background-color: var(--darkColor);
		// background: radial-gradient(circle at 5vw 20vw, #2d8fc5, #294c80, #294c80, #294c80);
		padding: 0;
		.container {
			display: grid;
			margin: 0 auto;
			max-width: 820px;
			width: calc(100% - 2rem);
			min-height: 5.5rem;
			transition: all 0.2s ease-in-out;
			grid-template-columns: 1fr 2fr;
			grid-auto-flow: column;
			@media screen and (min-width: 768px) {
				grid-template-columns: 2fr 5fr 3fr;
				width: calc(100% - 3rem);
				max-width: 1200px;
			}
		}
		.logo {
			a {
				display: flex;
				height: 100%;
				align-items: center;
			}
			img {
				display: block;
				object-fit: contain;
				height: 4.05rem;
				width: 12rem;
				margin: 0 auto 0;
			}
		}
		.nav {
			display: none;
			@media screen and (min-width: $breakpoint) {
				display: flex;
				height: 100%;
				align-items: center;
				justify-content: space-around;
			}
		}
		.info {
			--color: #e2dfd9;
			padding: 1rem 0 1rem 0.5rem;
			a {
				font-weight: 600;
				text-decoration: none;
				color: var(--color);
			}
			line-height: 1.2;
			color: var(--color);
			align-self: center;
			font-size: 0.6rem;
			@media screen and (min-width: $breakpoint) {
				font-size: 0.7rem;
			}
		}
	}
</style>
