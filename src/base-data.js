import Image1 from "../src/assets/hero/headphone.png"
import Image2 from "../src/assets/hero/watch.png"
import Image3 from "../src/assets/hero/cloth.png"

import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa"

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "About",
        link: "/#about",
    },
    {
        id: 3,
        name: "Our Product",
        link: "/#product"
    },
    {
        id: 4,
        name: "Login",
        link: "/#login"
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    }
]

const sliderTag = [
    {
        id: 1,
        img: Image1,
        subtitle: "Best Design",
        title1: "For Your",
        title2: "TShirt",
        description: "Perfect Example Design For Your T-Shirt"
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Newest Order",
        title1: "Latest Order",
        title2: "Design",
        description: "This is the latest order design, look cool isn'it ?"
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Create Yourself",
        title1: "Where is Yours?",
        title2: "Anything",
        description: "Where is Yours?, We Can Make Your Ideas Into Reality"
    }
]

const Banners = [
    {
        discount: "30%",
        title: "Your T-Shirt",
        date: "Only in June 2024",
        image: Image3,
        title2: "Your Ideas On T-Shirt",
        title3: "Akhir Semester Sale",
        title4: 
        "Khusus dibulan ini pembelian T-Shirt plus sablon apapun dapat diskon 30%",
        color: "bg-primary"
    }
]


// Ekspor default MenuLinks dan ekspor named DropdownLinks
export default MenuLinks;
export { 
    DropdownLinks,
    sliderTag,
    Banners
};
