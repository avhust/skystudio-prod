<script lang="ts">
	import { page } from '$app/stores';
	import { Lang } from '$lib/classes';
	import menu from '$lib/data/menu';
	let lang: Lang = Lang.ukr;
	$: if ($page.url.pathname.split('/')[1] === 'eng') {
		lang = Lang.eng;
	} else {
		lang = Lang.ukr;
	}
	export let kind = 'header'; // header|footer
</script>

{#each menu[lang] as { title, href, showInNavigation }}
	{#if showInNavigation}
		<a class:lighter={kind === 'footer'} {href} {title} class:current={href === $page.url.pathname}
			>{title}</a
		>
	{/if}
{/each}

<style lang="scss">
	a {
		color: white;
		font-size: 1.05rem;
		transition: color 0.3s ease-in-out;
		&.lighter {
			color: #eaeaea;
			&.current {
				font-weight: normal;
			}
		}
		&.current {
			color: var(--accentColor);
			font-weight: 600;
		}
		@media (hover: hover) and (pointer: fine) {
			&:hover {
				color: var(--accentColor);
			}
		}
	}
</style>
