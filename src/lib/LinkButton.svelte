<script lang="ts">
	export let title = 'Перейти';
	export let href = '/';
	export let kind = 'link'; // link | button
</script>

<div class="button">
	<a {href}><span>{title}</span></a>
</div>

<style lang="scss">
	.button {
		display: flex;
		align-items: center;
		// flex-direction: column;
		a {
			font-family: var(--font1);
			padding: 1rem 0;
			color: var(--darkColor);
			transition: all 0.2s ease-in-out;
			span {
				font-size: 1.3rem;
				transform: scale(1);
				transition: all 0.2s ease-in-out;
				transform-origin: center;
				display: inline-block;
			}
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					// background-color: var(--darkColor);
					span {
						transform: scale(1.1);
					}
				}
			}
		}
		// a {
		// 	font-family: var(--font1);
		// 	padding: 1rem 3rem;
		// 	color: var(--accentColor);
		// 	background-color: transparent;
		// 	border-radius: 30px;
		// 	transition: all 0.2s ease-in-out;
		// 	border: 2px solid var(--accentColor);
		// 	span {
		// 		transform: scale(1);
		// 		transition: all 0.2s ease-in-out;
		// 		transform-origin: center;
		// 		display: inline-block;
		// 	}
		// 	@media (hover: hover) and (pointer: fine) {
		// 		&:hover {
		// 			background-color: var(--darkColor);
		// 			span {
		// 				transform: scale(1.1);
		// 			}
		// 		}
		// 	}
		// }
	}
</style>
