interface menuItem {title: string, url: string, subMenu : menuItem[], icon: string}

export const menu: menuItem[] = [
    {title: "Home", url: "/", icon:"", subMenu:[]},
    {title: "Shop", url:"", icon:"", subMenu :
            [
                {title: "electronics", url: "/shop/electronics", icon: "/svgs/devices_24dp.svg", subMenu:[]},
                {title: "jewelery", url: "/shop/jewelery", icon: "/svgs/diamond_24dp.svg", subMenu:[]},
                {title: "clothing", url: "/shop/clothing", icon: "/svgs/checkroom_24dp.svg", subMenu:[]}
            ]
    },
    {title: "Contact Us", url: "/contact", icon:"", subMenu:[]},
    {title: "Blog", url: "/blog", icon:"", subMenu:[]}
];

export interface footerLinks {
    title: string;
    url: string;
}

export const footerLinks1: footerLinks[] = [
    {
        title: "My Account",
        url: "/"
    },
    {
        title: "Login",
        url: "/auth/login"
    },
    {
        title: "My Cart",
        url: "/cart"
    },
    {
        title: "My Wishlist",
        url: "/"
    },
    {
        title: "Checkout",
        url: "/cart"
    }
];


export const footerLinks2: footerLinks[] = [
    {
        title: "About Us",
        url: "/contact"
    },
    {
        title: "Careers",
        url: "/"
    },
    {
        title: "Delivery Information",
        url: "/cart"
    },
    {
        title: "Privacy Policy",
        url: "/"
    },
    {
        title: "Terms and Conditions",
        url: "/"
    }
];

export const socialLogos : footerLinks[] = [
    {
        title: "Insatagram",
        url: "/svgs/Instagram.svg"
    },
    {
        title: "Twitter",
        url : "/svgs/Twitter.svg"
    },
    {
        title: "LinkedIn",
        url: "/svgs/LinkedIn.svg"
    }
];