import menu from "$lib/data/menu"

type MenuItem = typeof menu.ukr[0]
function outputItem(el: MenuItem): string {
    const date = new Date()
    return `<url>
    <loc>https://skystudio.uz.ua${el.href}</loc>
    <lastmod>${date.getUTCFullYear().toString()}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}</lastmod>
  </url>`
}

export const GET = async () => {
    const date = new Date()
    const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${menu.ukr.flat().map(el => {
        let output = outputItem(el)
        if (el.sub) {
            el.sub.forEach(sub => {
                output += outputItem(sub)
            })
        }
        return output

    })}
  
</urlset>`
    return new Response(content, {
        headers: {
            'Content-Type': 'application/xml'
        }
    })
}