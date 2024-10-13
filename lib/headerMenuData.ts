interface menuItem {title: string, url: string, subMenu : menuItem[], icon: string}

export const menu: menuItem[] = [
    {title: "Home", url: "/", icon:"", subMenu:[]},
    {title: "Shop", url:"", icon:"", subMenu :
            [
                {title: "electronics", url: "/shop/electronics", icon: "/svgs/computer.svg", subMenu:[]},
                {title: "jewelery", url: "/shop/jewelery", icon: "/svgs/jewelry.svg", subMenu:[]},
                {title: "clothing", url: "/shop/clothing", icon: "/svgs/clothes-hanger.svg", subMenu:[]}
            ]
    },
    {title: "Contact Us", url: "/contact", icon:"", subMenu:[]},
    {title: "Blog", url: "/blog", icon:"", subMenu:[]}
]