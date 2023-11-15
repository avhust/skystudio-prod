const menu = {
    ukr: [
        { title: 'Головна', href: '/', sub: false, showInNavigation: true },
        {
            title: 'Фотозони', href: '/fotozony', showInNavigation: true,
            sub: [
                { title: 'Архів фотозон', href: '/fotozony/arkhiv', sub: false, showInNavigation: false },
            ]
        },
        { title: 'Техніка', href: '/tekhnika', sub: false, showInNavigation: true },
        { title: 'Крила', href: '/kryla', sub: false, showInNavigation: true },
        { title: 'Одяг', href: '/sukni', sub: false, showInNavigation: true },
        { title: 'Про нас', href: '/pro', sub: false, showInNavigation: true },
        { title: 'Новини', href: '/novyny', sub: false, showInNavigation: false },
    ],
    eng: [
        { title: 'Home', href: '/eng/', sub: false, showInNavigation: false }
    ]
}
export default menu