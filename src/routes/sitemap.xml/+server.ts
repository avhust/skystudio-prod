import menu from "$lib/data/menu"

export const GET = async () => {
    const date = new Date()
    const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${menu.ukr.map(el => {
        return `<url>
    <loc>https://skystudio.uz.ua${el.href}</loc>
    <lastmod>${date.getUTCFullYear().toString()}-${date.getUTCMonth().toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}</lastmod>
  </url>`
    })}
  
</urlset>`
    return new Response(content, {
        headers: {
            'Content-Type': 'application/xml'
        }
    })
}