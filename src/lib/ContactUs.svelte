<div class="contactUsLine">
	<div class="text">Для бронювання фотостудії звʼяжіться з нами:</div>
	<div class="contactUs">
		<a rel="noreferrer" href="tel:+380950889787"><img alt="phone" src="/icons/phone-white.svg" /></a
		>
		<a target="_blank" rel="noreferrer" href="https://www.instagram.com/sky_studio_uzh/"
			><img style:--size="1.5rem" alt="instagram icon" src="/icons/insta-white.svg" /></a
		>
		<a target="_blank" rel="noreferrer" href="https://t.me/macwings"
			><img style:--size="1.4rem" alt="telegram icon" src="/icons/telegram-white.svg" /></a
		>
	</div>
</div>

<style lang="scss">
	.contactUs {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 0.5rem;
		margin: 1rem;
		padding: 0 clamp(1.5rem, 3vw, 3rem);
		min-width: 10rem;
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
