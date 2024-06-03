import Image1 from "../src/assets/hero/headphone.png"
import Image2 from "../src/assets/hero/watch.png"
import Image3 from "../src/assets/hero/cloth.png"

import {UrbanSoc} from "../src/assets/category/import-category"
import { Tshirt, Hoodie, Mugs, Sweater, Totebag, Jacket,  LongSleeve, pdl } from "./assets/product/import-product"
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa"


const Banners = {
    discount: '30% Discount !',
    title: "Your Design",
    date: 'Only in June 2024',
    image: UrbanSoc,
    title2: 'Your Ideas On T-Shirt',
    title3: 'Akhir Semester Sale',
    title4: 'Khusus dibulan ini pembelian T-Shirt plus sablon apapun dapat diskon 30%',
    BgColor: 'hsl(199, 66%, 46%)'
  };

const Banners2 = {
    discount: '30% Discount !',
    title: "Your Design",
    date: 'Only in June 2024',
    image: Image1,
    title2: 'Your Ideas On Totebag',
    title3: 'New Products Offer',
    title4: 'Khusus dibulan ini pembelian T-Shirt plus sablon apapun dapat diskon 30%',
    BgColor: '#2dcc6f'
  };

const ProductData = [
    {
        id: 1,
        img: Tshirt,
        title: "T-Shirt",
        price: "Lets Discuss",
        category: "T-Shirt",
        aos: "0",
    },
    {
        id: 2,
        img: Hoodie,
        title: "Hoodie",
        price: "Lets Discuss",
        category: "Hoodie",
        aos: "200",
    },
    {
        id: 3,
        img: Mugs,
        title: "Mugs",
        price: "Lets Discuss",
        category: "Mugs",
        aos: "400",
    },
    {
        id: 4,
        img: LongSleeve,
        title: "Sweater",
        price: "Lets Discuss",
        category: "Sweater",
        aos: "600",
    }
]

const Blogs = [
    {
        title: "Done Deal Tshirt",
        subtitle : "Here We Go, done deal orderan T-Shirt 36 Buah kepada Kelas XI PPLG 1",
        published : "24 May 2024",
        image : Tshirt
    },
    {
        title: "Done Deal Hoodie",
        subtitle : "Here We Go, done deal orderan Hoodie 36 Buah kepada Kelas XI PPLG 1",
        published : "24 May 2024",
        image : Hoodie
    },
    {
        title: "Done Deal Mugs",
        subtitle : "Here We Go, done deal orderan Mugs 36 Buah kepada Kelas XI PPLG 1",
        published : "24 May 2024",
        image : Mugs
    },
    {
        title: "Done Deal Sweater",
        subtitle : "Here We Go, done deal orderan Sweater 36 Buah kepada Kelas XI PPLG 1",
        published : "24 May 2024",
        image : Sweater
    }
]

const ProductsData2 = [
    {
        id: 1,
        img: Totebag,
        title: "Totebag",
        price: "Lets Discuss",
        category: "Totebag",
        aos: "0",
    },
    {
        id: 2,
        img: Jacket,
        title: "Jacket",
        price: "Lets Discuss",
        category: "Jacket",
        aos: "200",
    },
    {
        id: 3,
        img: LongSleeve,
        title: "Long Sleeves",
        price: "Lets Discuss",
        category: "LongSleeves",
        aos: "400",
    },
    {
        id: 4,
        img: pdl,
        title: "PDL Customs",
        price: "Lets Discuss",
        category: "PDL",
        aos: "600",
    }
]

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


// Ekspor default MenuLinks dan ekspor named DropdownLinks
export default MenuLinks;
export { 
    DropdownLinks,
    sliderTag,
    Banners,
    Banners2,
    ProductData,
    ProductsData2,
    Blogs
};
