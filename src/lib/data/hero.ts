const slides = [
    { src: '/hero/home', brightness: '0.35', moveMobile: { x: "88%", scale: "1" } },
    { src: '/hero/fotozony', brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/tekhnika', brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/kryla', brightness: '0.35', moveMobile: { x: "50%", scale: "1.2" } },
    { src: '/hero/sukni', brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/pro', brightness: '0.35', moveMobile: { x: "50%", scale: "1" } }
]
function getSrcSet(i: number, ext: string): string {
    const variants = [`-2x.${ext} 2128w`, `-1x.${ext} 1419w`]
    return variants.map(v => `${slides[i].src}${v}`).join(', ')
}
export { slides, getSrcSet }