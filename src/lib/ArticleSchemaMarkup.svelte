<script lang="ts">
	import organization from '$lib/data/organization';
	import type { Slide } from '$lib/data/hero';
	export let title: string = '';
	export let description: string = '';
	export let image: Slide | undefined;
	export let route = '/';
	const date = new Date();
</script>

{#if image}
	{@html `

<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://skystudio.uz.ua${route}"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://skystudio.uz.ua${image.src}-1x.jpg",
        "width": "${image.width}",
        "height": "${image.height}"
      },
      "author": {
        "@type": "Person",
        "name": "Sky Studio Manager"
      },
      "publisher": {
        "@type": "${organization['@type']}",
        "name": "${organization.name}",
        "logo": {
          "@type": "ImageObject",
          "url": "${organization.logo}",
          "width": "870",
          "height": "870"
        }
      },
      "datePublished": "${new Date('2023-05-15').toUTCString()}",
      "dateModified": "${date.toUTCString()}"
    }
	</script>

`}
{/if}
