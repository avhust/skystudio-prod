export type Slide = {
    src: string,
    height: number,
    width: number,
    brightness?: string,
    moveMobile?: { x: string, scale: string }
}
const slides: Slide[] = [
    { src: '/hero/home', height: 706, width: 1200, brightness: '0.35', moveMobile: { x: "88%", scale: "1" } },
    { src: '/hero/fotozony', height: 773, width: 1200, brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/tekhnika', height: 871, width: 1200, brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/kryla', height: 824, width: 1200, brightness: '0.35', moveMobile: { x: "50%", scale: "1.2" } },
    { src: '/hero/sukni', height: 801, width: 1200, brightness: '0.35', moveMobile: { x: "50%", scale: "1" } },
    { src: '/hero/pro', height: 889, width: 1200, brightness: '0.35', moveMobile: { x: "50%", scale: "1" } }
]
function getSrcSet(i: number, ext: string): string {
    const variants = [`-2x.${ext} 2128w`, `-1x.${ext} 1419w`]
    return variants.map(v => `${slides[i].src}${v}`).join(', ')
}
export { slides, getSrcSet }