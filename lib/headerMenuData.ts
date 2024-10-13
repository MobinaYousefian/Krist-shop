interface menuItem {title: string, url: string, subMenu : menuItem[]}

export const menu: menuItem[] = [
    {title: "Home", url: "/", subMenu:[]},
    {title: "Shop", url:"", subMenu :
            [
                {title: "electronics", url: "/shop/electronics", subMenu:[]},
                {title: "jewelery", url: "/shop/jewelery", subMenu:[]},
                {title: "clothing", url: "/shop/clothing", subMenu:[]}
            ]
    },
    {title: "Contact Us", url: "/contact", subMenu:[]},
    {title: "Blog", url: "/blog", subMenu:[]}
]